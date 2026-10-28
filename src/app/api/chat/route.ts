import { NextResponse } from "next/server";
import { retrieve } from "@/lib/chat/retrieve";
import { SYSTEM_PROMPT, buildMessages, type ChatMessage } from "@/lib/chat/prompt";
import { generateAnswer } from "@/lib/chat/providers";
import { checkRateLimit } from "@/lib/chat/rateLimit";

// POST /api/chat  { message: string, history?: ChatMessage[] }
//   -> { answer: string, sources: { title, url }[], fallback?: true }
// Runs on the server (a Netlify function), so the API key never reaches the browser.

const MAX_MESSAGE_CHARS = 500;
const MAX_HISTORY = 6;

function parseBody(body: unknown): { message: string; history: ChatMessage[] } | null {
  if (typeof body !== "object" || body === null) return null;
  const { message, history = [] } = body as Record<string, unknown>;
  if (typeof message !== "string" || !message.trim() || message.length > MAX_MESSAGE_CHARS) return null;
  if (!Array.isArray(history)) return null;

  const cleanHistory = history
    .filter(
      (m): m is ChatMessage =>
        (m?.role === "user" || m?.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.length <= 2000,
    )
    .slice(-MAX_HISTORY);
  return { message: message.trim(), history: cleanHistory };
}

export async function POST(request: Request) {
  const body = parseBody(await request.json().catch(() => null));
  if (!body) {
    return NextResponse.json(
      { error: `Send a message of 1 to ${MAX_MESSAGE_CHARS} characters.` },
      { status: 400 },
    );
  }

  const ip = request.headers.get("x-nf-client-connection-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  const limit = checkRateLimit(ip);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many questions for now. Please try again later or use the Contact page." },
      { status: 429 },
    );
  }

  const chunks = retrieve(body.message);
  const sources = chunks.map(({ title, url }) => ({ title, url }));
  const answer = await generateAnswer(SYSTEM_PROMPT, buildMessages(body.history, body.message, chunks));

  if (answer === null) {
    // Both AI providers failed (quota used up or down): still give useful links
    return NextResponse.json({
      answer:
        "The assistant is busy right now. These pages may help, or contact our team at contact@smartwayhealthcare.com / +91 8921172300.",
      sources: sources.length ? sources : [{ title: "Contact us", url: "/contact" }],
      fallback: true,
    });
  }

  return NextResponse.json({ answer, sources });
}
