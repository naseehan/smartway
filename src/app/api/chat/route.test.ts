import { describe, it, expect, vi, beforeEach } from "vitest";

// Replace the real AI call so the route can be tested without a key
vi.mock("@/lib/chat/providers", () => ({ generateAnswer: vi.fn() }));

import { POST } from "./route";
import { generateAnswer } from "@/lib/chat/providers";
import { resetRateLimit } from "@/lib/chat/rateLimit";

function post(body: unknown) {
  return POST(
    new Request("http://localhost/api/chat", {
      method: "POST",
      headers: { "x-forwarded-for": "9.9.9.9" },
      body: JSON.stringify(body),
    }),
  );
}

describe("POST /api/chat", () => {
  beforeEach(() => {
    resetRateLimit();
    vi.mocked(generateAnswer).mockReset();
  });

  it("returns the answer and the matching product links", async () => {
    vi.mocked(generateAnswer).mockResolvedValue("Yes, see the dialysis chair page.");

    const res = await post({ message: "Do you have dialysis chairs?" });
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.answer).toBe("Yes, see the dialysis chair page.");
    expect(data.sources[0].url).toBe("/products/dialysis-chair");
  });

  it("rejects an empty or too long message", async () => {
    expect((await post({ message: "" })).status).toBe(400);
    expect((await post({ message: "x".repeat(501) })).status).toBe(400);
    expect((await post("not an object")).status).toBe(400);
  });

  it("sends links instead of an answer when the AI is unavailable", async () => {
    vi.mocked(generateAnswer).mockResolvedValue(null);

    const data = await (await post({ message: "dialysis chair" })).json();

    expect(data.fallback).toBe(true);
    expect(data.sources.length).toBeGreaterThan(0);
  });

  it("returns 429 when one visitor asks too often", async () => {
    vi.mocked(generateAnswer).mockResolvedValue("ok");
    for (let i = 0; i < 10; i++) await post({ message: "hi" });

    expect((await post({ message: "hi" })).status).toBe(429);
  });
});
