# SmartWay Healthcare website

The website for **SmartWay Healthcare**, a medical equipment dealer and healthcare product distributor in Ernakulam, Kerala. Live at [smartwayhealthcare.com](https://smartwayhealthcare.com).

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS, and hosted on Netlify. Every page is pre-rendered as static HTML at build time.

---

## Getting started

Requires **Node.js 20.9 or newer**.

```bash
npm install       # install dependencies
npm run dev       # local dev server at http://localhost:3000
npm run build     # production build
npm run start     # serve the production build locally
npm test          # run the tests once
npm run test:watch  # re-run tests on every change
```

---

## Pages

| URL | What it is | File |
|---|---|---|
| `/` | Homepage | `src/app/page.tsx` |
| `/products` | Product catalog with search and category filters | `src/app/products/page.tsx` |
| `/products/[slug]` | One page per product (43 in total) | `src/app/products/[slug]/page.tsx` |
| `/services` | Services overview | `src/app/services/page.tsx` |
| `/about` | Company background and timeline | `src/app/about/page.tsx` |
| `/contact` | Contact details and enquiry form | `src/app/contact/page.tsx` |
| `/faq` | Frequently asked questions | `src/app/faq/page.tsx` |
| `/medical-equipment-dealers-in-kerala` | Kerala landing page | `src/app/medical-equipment-dealers-in-kerala/page.tsx` |
| `/medical-equipment-dealers-in-ernakulam` | Ernakulam / Kochi landing page | `src/app/medical-equipment-dealers-in-ernakulam/page.tsx` |
| `/health-care-product-distributors-india` | India-wide landing page | `src/app/health-care-product-distributors-india/page.tsx` |
| `/sitemap.xml`, `/robots.txt` | Generated automatically | `src/app/sitemap.ts`, `src/app/robots.ts` |

The product catalog filters by category from the URL, for example `/products?category=IVD%20Products`.

---

## Editing content

Most text lives in data files, not in the page components:

| To change | Edit |
|---|---|
| Products (names, descriptions, images, specs) | `src/data/products.ts` |
| FAQ questions and answers | `src/data/faq.ts` |
| Partner / client logos | `src/data/partners.ts` |
| Services | `src/data/services.ts` |
| About page timeline | `src/data/timeline.ts` |
| Company name, address, phone, opening hours (structured data) | `generateOrganizationSchema` in `src/lib/seo.ts` |

**Adding a product:** add an entry to `products` in `src/data/products.ts` with a unique `id` and `slug`, and put its image in `public/assets/images/products/`. Its page, sitemap entry and catalog card are created automatically. Set the optional `brand` field to the real manufacturer (for example `"Nipro"`); leave it out if unknown.

**Images:** anything the site uses must be inside `public/`. The `assets/` folder in the project root is left over from the old site and is not served.

---

## Contact form (Netlify Forms)

The enquiry form (`src/components/contact/ContactForm.tsx`) submits to **Netlify Forms**, which emails each enquiry to the owner. There is no server code or email password to configure.

- Netlify cannot detect forms inside Next.js pages, so the form is also declared in `public/__forms.html`, and the component posts to that file.
- The form is named `contact`. Its field names (`firstName`, `lastName`, `email`, `phone`, `category`, `message`) must match in both files. If you add or rename a field, update both.
- `bot-field` is a hidden honeypot that filters spam.
- Form submissions only work on the deployed Netlify site, not on `localhost`. After deploying, check **Netlify → Forms** that `contact` is listed and send a test enquiry.

---

## SEO

- **Page titles and descriptions** are set per page with `buildMetadata()` from `src/lib/seo.ts`, which also adds the canonical URL and Open Graph / Twitter tags. Pass the title without the brand; ` | SmartWay Healthcare` is appended automatically. Keep the full title under about 60 characters.
- **Structured data (JSON-LD):**
  - `MedicalBusiness` / `LocalBusiness` on every page (`src/app/layout.tsx`)
  - `Product` on each product page. No prices are published, because products are sold on quotation. Only add `offers` if real prices are available.
  - `BreadcrumbList` wherever breadcrumbs appear
  - `FAQPage` on `/faq` only (the FAQ section on other pages passes no `withSchema`, to avoid duplicates)
- **No meta keywords.** Search engines ignore them; target phrases belong in titles, headings and page text.
- **Google Search Console** is verified with `public/google21bb29e04bce1e42.html`. Do not remove it, or the site loses verification.

After a deploy, submit `https://smartwayhealthcare.com/sitemap.xml` in Search Console and watch **Performance → Search results** for the queries the site appears for.

---

## Deploying to Netlify

`netlify.toml` sets the build command and pins Node 22. Netlify detects Next.js and adds its own runtime automatically.

Deploy with a Netlify build, **not** drag and drop (uploading files skips the Next.js runtime):

```bash
npx netlify-cli deploy --build --prod
```

or connect a Git repository in **Site configuration → Build & deploy** so every push deploys.

After each deploy:

1. Open a few pages and a product page.
2. Send a test enquiry from `/contact` and confirm it arrives.
3. Check `/google21bb29e04bce1e42.html` still loads.

---

## Tests

Tests use Vitest and Testing Library (`vitest.config.mts`):

- `src/lib/seo.test.ts`: titles, canonical URLs, product and breadcrumb schema (including that no prices are published)
- `src/data/products.test.ts`: product lookups, plus checks that ids and slugs are unique and URL-safe and categories are valid
- `src/components/products/ProductsClient.test.tsx`: catalog search and filters

Run `npm test` before deploying.

---

## Project structure

```
public/            Static files served as-is (images, form definition, verification file)
src/app/           Pages, layout, sitemap and robots
src/components/    UI components (home, layout, products, contact, seo)
src/data/          Site content: products, FAQs, partners, services, timeline
src/lib/seo.ts     Metadata and JSON-LD helpers
netlify.toml       Netlify build settings
```

---

## Product assistant (AI chat)

A chat button on every page answers visitor questions using only the site's own product, service and FAQ data.

| Piece | File |
|---|---|
| Finds the relevant site content (keyword search, the "R" in RAG) | `src/lib/chat/retrieve.ts` |
| System prompt and the CONTEXT block sent with each question | `src/lib/chat/prompt.ts` |
| Calls Groq first (fast), then Gemini as backup, with plain `fetch` | `src/lib/chat/providers.ts` |
| Per-visitor and daily request limits | `src/lib/chat/rateLimit.ts` |
| Server endpoint `POST /api/chat` | `src/app/api/chat/route.ts` |
| Chat window | `src/components/chat/ChatWidget.tsx` |

How a question is answered:

1. The widget posts the question and recent history to `/api/chat`.
2. The route checks the input (500 characters max) and the rate limit.
3. It picks the 5 best-matching products, services and FAQs.
4. It sends them as CONTEXT to the model, which answers only from that context in 300 tokens or fewer.
5. If every AI provider fails, for example because the free quota is used up, the route returns the matching page links instead.

The API key stays on the server. Copy `.env.example` to `.env.local` and add a Groq key from [console.groq.com](https://console.groq.com/keys) and/or a Gemini key from [Google AI Studio](https://aistudio.google.com/apikey). On Netlify, set the same variables in the site's environment settings.
