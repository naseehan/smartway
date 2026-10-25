import { describe, it, expect } from "vitest";
import { buildMetadata, generateBreadcrumbSchema, generateProductSchema, SITE_URL } from "./seo";

describe("buildMetadata", () => {
  it("appends the site name to the title", () => {
    const meta = buildMetadata({ title: "About Us", description: "d" });

    expect(meta.title).toEqual({ absolute: "About Us | SmartWay Healthcare" });
  });

  it("does not add the site name twice", () => {
    const meta = buildMetadata({ title: "About Us | SmartWay Healthcare", description: "d" });

    expect(meta.title).toEqual({ absolute: "About Us | SmartWay Healthcare" });
  });

  it("builds the canonical URL from the path", () => {
    const meta = buildMetadata({ title: "FAQ", description: "d", path: "/faq" });

    expect(meta.alternates?.canonical).toBe(`${SITE_URL}/faq`);
  });

  it("turns a relative image into an absolute URL but keeps full URLs", () => {
    const relative = buildMetadata({ title: "t", description: "d", image: "/a.png" });
    const absolute = buildMetadata({ title: "t", description: "d", image: "https://cdn.x/a.png" });

    expect(relative.twitter?.images).toEqual([`${SITE_URL}/a.png`]);
    expect(absolute.twitter?.images).toEqual(["https://cdn.x/a.png"]);
  });

  it("blocks search engines when noIndex is set", () => {
    const meta = buildMetadata({ title: "t", description: "d", noIndex: true });

    expect(meta.robots).toEqual({ index: false, follow: false });
  });
});

describe("generateProductSchema", () => {
  const base = {
    name: "Elisio-HX",
    description: "Dialyzer",
    image: "/img.png",
    category: "Nephro Care",
    slug: "elisio-hx",
  };

  it("includes the brand only when one is given", () => {
    expect(generateProductSchema(base)).not.toHaveProperty("brand");
    expect(generateProductSchema({ ...base, brand: "Nipro" }).brand).toEqual({
      "@type": "Brand",
      name: "Nipro",
    });
  });

  it("never publishes prices", () => {
    expect(generateProductSchema(base)).not.toHaveProperty("offers");
  });
});

describe("generateBreadcrumbSchema", () => {
  it("numbers items from 1 and makes URLs absolute", () => {
    const schema = generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Products", url: "/products" },
    ]);

    expect(schema.itemListElement).toEqual([
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
    ]);
  });
});
