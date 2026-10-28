import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { buildContext, buildMessages } from "./prompt";
import { callGemini, callGroq, generateAnswer, ProviderError } from "./providers";
import { checkRateLimit, resetRateLimit, PER_IP_PER_MINUTE } from "./rateLimit";
import { retrieve } from "./retrieve";

describe("buildContext", () => {
  it("lists each chunk with its link", () => {
    const context = buildContext(retrieve("dialysis chair", 1));

    expect(context).toContain("(/products/dialysis-chair)");
  });

  it("says so when nothing matched", () => {
    expect(buildContext([])).toContain("nothing on the website matches");
  });
});

describe("buildMessages", () => {
  it("keeps history and puts context only on the latest question", () => {
    const history = [
      { role: "user" as const, content: "hi" },
      { role: "assistant" as const, content: "Hello!" },
    ];
    const messages = buildMessages(history, "chairs?", []);

    expect(messages).toHaveLength(3);
    expect(messages[0].content).toBe("hi");
    expect(messages[2].content).toContain("QUESTION: chairs?");
  });
});

describe("callGemini", () => {
  // Mock fetch so tests never hit the real API or need a key
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
  });

  it("sends the key in a header and reads the answer text", async () => {
    vi.stubEnv("GEMINI_API_KEY", "test-key");
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: " Yes we do. " }] } }] })),
    );
    vi.stubGlobal("fetch", fetchMock);

    const answer = await callGemini("rules", [{ role: "user", content: "q" }]);

    expect(answer).toBe("Yes we do.");
    const [, init] = fetchMock.mock.calls[0];
    expect(init.headers["x-goog-api-key"]).toBe("test-key");
    expect(JSON.parse(init.body).generationConfig.maxOutputTokens).toBe(300);
  });

  it("throws with the status when the quota is used up", async () => {
    vi.stubEnv("GEMINI_API_KEY", "test-key");
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("", { status: 429 })));

    await expect(callGemini("rules", [])).rejects.toMatchObject({ status: 429 });
  });
});

describe("callGroq", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
  });

  it("sends the system prompt first and keeps reasoning out of the reply", async () => {
    vi.stubEnv("GROQ_API_KEY", "test-key");
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ choices: [{ message: { content: "Yes we do." } }] })),
    );
    vi.stubGlobal("fetch", fetchMock);

    const answer = await callGroq("rules", [{ role: "user", content: "q" }]);

    expect(answer).toBe("Yes we do.");
    const [, init] = fetchMock.mock.calls[0];
    const body = JSON.parse(init.body);
    expect(init.headers.Authorization).toBe("Bearer test-key");
    expect(body.messages[0]).toEqual({ role: "system", content: "rules" });
    expect(body.include_reasoning).toBe(false);
    expect(body.max_tokens).toBe(300);
  });
});

describe("generateAnswer", () => {
  it("falls back to the next provider when the first fails", async () => {
    const failing = vi.fn().mockRejectedValue(new ProviderError("quota", 429));
    const working = vi.fn().mockResolvedValue("backup answer");

    expect(await generateAnswer("rules", [], [failing, working])).toBe("backup answer");
  });

  it("returns null when every provider fails", async () => {
    const failing = vi.fn().mockRejectedValue(new Error("down"));

    expect(await generateAnswer("rules", [], [failing, failing])).toBeNull();
  });
});

describe("checkRateLimit", () => {
  beforeEach(() => resetRateLimit());

  it(`blocks request number ${PER_IP_PER_MINUTE + 1} in the same minute`, () => {
    const now = Date.now();
    for (let i = 0; i < PER_IP_PER_MINUTE; i++) {
      expect(checkRateLimit("1.2.3.4", now).ok).toBe(true);
    }

    expect(checkRateLimit("1.2.3.4", now)).toEqual({ ok: false, reason: "minute" });
    // A different visitor is not affected
    expect(checkRateLimit("5.6.7.8", now).ok).toBe(true);
  });

  it("allows the visitor again after a minute", () => {
    const now = Date.now();
    for (let i = 0; i < PER_IP_PER_MINUTE; i++) checkRateLimit("1.2.3.4", now);

    expect(checkRateLimit("1.2.3.4", now + 61_000).ok).toBe(true);
  });
});
