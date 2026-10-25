import { describe, it, expect } from "vitest";
import {
  products,
  categories,
  subCategoriesByCategory,
  getProductBySlug,
  getProductsByCategory,
  getRelatedProducts,
} from "./products";

// Unit tests: call a function with known input, check the output.
// Pattern in every test: Arrange (set up) -> Act (call) -> Assert (expect).

describe("getProductBySlug", () => {
  it("finds a product by its slug", () => {
    const product = getProductBySlug("elisio-hx");

    expect(product?.name).toBe("Elisio-HX");
  });

  it("also finds a product by its id", () => {
    expect(getProductBySlug("p1")?.slug).toBe("bicarbonate-mixture-dia-mix");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getProductBySlug("does-not-exist")).toBeUndefined();
  });

  it("product has a slug", ()=> {
    const product = getProductBySlug("elisio-hx")
    expect(product?.brand).toBe("Nipro")
  })
});

describe("getProductsByCategory", () => {
  it("returns every product for 'All'", () => {
    expect(getProductsByCategory("All")).toHaveLength(products.length);
  });

  it("returns only products in the requested category", () => {
    const result = getProductsByCategory("Nephro Care");

    expect(result.length).toBeGreaterThan(0);
    expect(result.every((p) => p.category === "Nephro Care")).toBe(true);
  });
});

describe("getRelatedProducts", () => {
  it("never includes the current product", () => {
    const related = getRelatedProducts("p2", "Nephro Care");

    expect(related.map((p) => p.id)).not.toContain("p2");
  });

  it("respects the limit", () => {
    expect(getRelatedProducts("p2", "Nephro Care", 2)).toHaveLength(2);
  });
});

// Data integrity tests: catch mistakes when someone edits the product list by hand
describe("product data", () => {
  it("has unique ids and slugs", () => {
    const ids = products.map((p) => p.id);
    const slugs = products.map((p) => p.slug);

    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("uses only known categories and subcategories", () => {
    for (const product of products) {
      expect(categories).toContain(product.category);
      expect(subCategoriesByCategory[product.category]).toContain(product.subCategory);
    }
  });

  it("has URL-safe slugs", () => {
    for (const product of products) {
      expect(product.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });
});
