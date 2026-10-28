import { products } from "@/data/products";
import { services } from "@/data/services";
import { faqs } from "@/data/faq";

// The "R" in RAG: before asking the model, find the few pieces of site
// content that match the question, and send only those as context.

export interface Chunk {
  title: string;
  url: string;
  /** Short words like the product name and category; matches here score higher */
  keywords: string;
  /** The text the model reads */
  text: string;
}

// One chunk per product, service and FAQ, built once when the server starts.
export const chunks: Chunk[] = [
  ...products.map((p) => ({
    title: p.name,
    url: `/products/${p.slug}`,
    keywords: [p.name, p.category, p.subCategory, p.brand ?? ""].join(" "),
    text: `${p.name} (${p.category}, ${p.subCategory}${p.brand ? `, brand ${p.brand}` : ""}). ${p.description} Specs: ${p.specs.join(", ")}.`,
  })),
  ...services.map((s) => ({
    title: s.title,
    url: "/services",
    keywords: `${s.title} ${s.tag}`,
    text: `${s.title}. ${s.description} ${s.details.join(". ")}.`,
  })),
  ...faqs.map((f) => ({
    title: f.question,
    url: "/faq",
    keywords: f.question,
    text: `Q: ${f.question} A: ${f.answer}`,
  })),
];

// Common words that would match almost everything
const STOP_WORDS = new Set(
  "a an and are as at be by can do does for from have how i in is it me my of on or our the to we what which who with you your".split(" "),
);

export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 1 && !STOP_WORDS.has(w));
}

// Loose match so "dialyzers" finds "dialyzer" and "machines" finds "machine"
function stem(word: string): string {
  return word.replace(/(es|s)$/, "");
}

/**
 * Score every chunk by how many question words it contains
 * (keyword matches count 3, body matches count 1) and return the best ones.
 */
export function retrieve(question: string, limit = 5): Chunk[] {
  const terms = Array.from(new Set(tokenize(question).map(stem)));
  if (terms.length === 0) return [];

  return chunks
    .map((chunk) => {
      const keywordWords = new Set(tokenize(chunk.keywords).map(stem));
      const textWords = new Set(tokenize(chunk.text).map(stem));
      let score = 0;
      for (const term of terms) {
        if (keywordWords.has(term)) score += 3;
        else if (textWords.has(term)) score += 1;
      }
      return { chunk, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.chunk);
}
