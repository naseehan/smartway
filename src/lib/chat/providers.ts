import type { ChatMessage } from "./prompt";

// Calls the LLM APIs with plain fetch (no SDK), so every request is visible here.
// Runs on the server only: the API keys come from environment variables.

export const MAX_OUTPUT_TOKENS = 300;
// Groq answers in under a second; Gemini's free tier often takes 10-25 s
const GROQ_TIMEOUT_MS = 8_000;
const GEMINI_TIMEOUT_MS = 25_000;

export class ProviderError extends Error {
  constructor(
    message: string,
    /** HTTP status from the provider, e.g. 429 when the free quota is used up */
    public status?: number,
  ) {
    super(message);
  }
}

/** Google Gemini, free tier via AI Studio. */
export async function callGemini(system: string, messages: ChatMessage[]): Promise<string> {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new ProviderError("GEMINI_API_KEY is not set");
  const model = process.env.GEMINI_MODEL ?? "gemini-3.5-flash-lite";

  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": key },
    signal: AbortSignal.timeout(GEMINI_TIMEOUT_MS),
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      // Gemini calls the assistant role "model"
      contents: messages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })),
      generationConfig: { maxOutputTokens: MAX_OUTPUT_TOKENS, temperature: 0.2 },
    }),
  });
  if (!res.ok) throw new ProviderError(`Gemini returned ${res.status}`, res.status);

  const data = await res.json();
  const text: string | undefined = data?.candidates?.[0]?.content?.parts
    ?.map((p: { text?: string }) => p.text ?? "")
    .join("");
  if (!text) throw new ProviderError("Gemini returned an empty answer");
  return text.trim();
}

/** Groq, free tier. The main provider because it is fast. */
export async function callGroq(system: string, messages: ChatMessage[]): Promise<string> {
  const key = process.env.GROQ_API_KEY;
  if (!key) throw new ProviderError("GROQ_API_KEY is not set");
  const model = process.env.GROQ_MODEL ?? "openai/gpt-oss-120b";

  // Groq uses the OpenAI-style chat completions format
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    signal: AbortSignal.timeout(GROQ_TIMEOUT_MS),
    body: JSON.stringify({
      model,
      messages: [{ role: "system", content: system }, ...messages],
      max_tokens: MAX_OUTPUT_TOKENS,
      temperature: 0.2,
      // gpt-oss "thinks" before answering; keep that short and out of the reply
      ...(model.startsWith("openai/gpt-oss") && { reasoning_effort: "low", include_reasoning: false }),
    }),
  });
  if (!res.ok) throw new ProviderError(`Groq returned ${res.status}`, res.status);

  const data = await res.json();
  const text: string | undefined = data?.choices?.[0]?.message?.content;
  if (!text) throw new ProviderError("Groq returned an empty answer");
  return text.trim();
}

/**
 * Tries each provider in order and returns the first answer.
 * Returns null when all of them fail, so the caller can show a non-AI fallback.
 */
export async function generateAnswer(
  system: string,
  messages: ChatMessage[],
  providers = [callGroq, callGemini],
): Promise<string | null> {
  for (const provider of providers) {
    try {
      return await provider(system, messages);
    } catch (err) {
      console.warn(`[chat] ${provider.name} failed:`, err instanceof Error ? err.message : err);
    }
  }
  return null;
}
