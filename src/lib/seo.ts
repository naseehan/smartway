import type { Metadata } from "next";

export const SITE_URL = "https://smartwayhealthcare.com";
export const SITE_NAME = "SmartWay Healthcare";

// No meta keywords: search engines ignore the tag. Target phrases belong in
// titles, headings and body copy instead.
export function buildMetadata({
  title,
  description,
  path = "",
  image = "/assets/images/hero-new-bg.png",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const cleanTitle = title.replace(/\s*\|\s*SmartWay Healthcare/g, "").trim();
  const fullTitle = `${cleanTitle} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    // Absolute, because the layout's title template skips the root page
    title: { absolute: fullTitle },
    description,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: "SmartWay Healthcare",
    alternateName: "SmartWay Clinical Infrastructure & Medical Equipment",
    url: SITE_URL,
    logo: `${SITE_URL}/assets/images/logo-smartway.png`,
    image: `${SITE_URL}/assets/images/smartway-hq-v2.png`,
    description:
      "Premier Medical Equipment Dealers in Kerala, Ernakulam, and leading Health Care Product Distributors in India. Specialized in Nephro Care, IVD Products, General Hospital Supplies, and Turnkey Clinical Infrastructure.",
    telephone: "+91 8921172300",
    email: "contact@smartwayhealthcare.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No: 21/497, Ground Floor, Kaipadamugal, Thrikkakkara North",
      addressLocality: "Ernakulam",
      addressRegion: "Kerala",
      postalCode: "682021",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "10.0384",
      longitude: "76.3276",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Ernakulam" },
      { "@type": "City", name: "Kochi" },
      { "@type": "AdministrativeArea", name: "Kerala" },
      { "@type": "Country", name: "India" },
    ],
    knowsAbout: [
      "Medical Equipment",
      "Dialysis Machines",
      "IVD Diagnostics",
      "Hospital Supplies",
      "Turnkey Dialysis Units",
      "Biomedical Engineering",
    ],
  };
}

// Prices are quote-based, so no `offers` are published: Google treats invented
// prices as misleading structured data. Add `brand` per product only when the
// actual manufacturer is known (SmartWay is the distributor, not the brand).
export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  category: string;
  slug: string;
  brand?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `${SITE_URL}${product.image}`,
    description: product.description,
    category: product.category,
    ...(product.brand && {
      brand: {
        "@type": "Brand",
        name: product.brand,
      },
    }),
    url: `${SITE_URL}/products/${product.slug}`,
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
