import { describe, it, expect } from "vitest";
import { chunks, retrieve, tokenize } from "./retrieve";

describe("chunks", () => {
  it("has one chunk for every product, service and FAQ", () => {
    // 43 products + 4 services + FAQs, so well over 47
    expect(chunks.length).toBeGreaterThan(47);
  });
});

describe("tokenize", () => {
  it("lowercases and drops common words", () => {
    expect(tokenize("Do you have a Dialysis Chair?")).toEqual(["dialysis", "chair"]);
  });
});

describe("retrieve", () => {
  it("finds the dialysis chair for a chair question", () => {
    const results = retrieve("Do you sell dialysis chairs?");

    expect(results[0].url).toBe("/products/dialysis-chair");
  });

  it("finds Nipro products when asked about the brand", () => {
    const results = retrieve("nipro");

    expect(results.length).toBeGreaterThan(0);
    expect(results.every((r) => r.text.toLowerCase().includes("nipro"))).toBe(true);
  });

  it("returns at most the requested number of chunks", () => {
    expect(retrieve("dialysis", 3)).toHaveLength(3);
  });

  it("returns nothing for an off-topic question", () => {
    expect(retrieve("best pizza recipe")).toEqual([]);
  });
});
