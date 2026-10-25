# SmartWay Healthcare – Next.js Platform

Modern Next.js 14 (App Router) clinical infrastructure and medical equipment distribution platform for **SmartWay Healthcare**.

---

## 🎯 Target SEO Keywords
This platform is engineered to dominate search rankings for high-intent clinical queries:
- **Primary Keywords**:
  - `Medical Equipment Dealers in Kerala`
  - `Medical Equipment Dealers in Ernakulam`
  - `Medical Equipment Dealers in India`
  - `Health Care Product Distributors in Kerala`
  - `Health Care Product Distributors in Ernakulam`
  - `Health Care Product Distributors in India`
- **Secondary & Niche Keywords**:
  - `Dialysis Machine Dealers Kochi`, `Nephrology Consumables Distributors Kerala`, `IVD Products India`, `Hospital Supplies Wholesale Ernakulam`, `Turnkey Dialysis Unit Setups Kerala`, `Biomedical Engineering Maintenance Kochi`.

---

## 🌐 Separate Pages Structure
The platform features dedicated, SEO-optimized pages:

1. **Home (`/`)**:
   - High-impact hero section with primary keyword headlines.
   - Dynamic partner marquee (Aster DM Healthcare, Rajagiri Hospital, Apollo Adlux, Nipro, J. Mitra & Co.).
   - 4 Core clinical verticals showcase.
   - Featured products tabbed showcase.
   - Turnkey clinical setup highlight (Dialysis wings, RO plants, STPs).
   - Operational statistics (80+ healthcare facilities served).
   - FAQ accordion with Schema.org JSON-LD.
   - Lead capture and technical quote CTA.

2. **Products Catalog (`/products`)**:
   - Complete 43-product clinical inventory.
   - Live interactive search bar.
   - Category filtering (Nephro Care, IVD Products, General Hospital Supplies, Technical Engineering).
   - Subcategory chips and spec badges.

3. **Individual Product Pages (`/products/[slug]`)**:
   - **43 Pre-rendered static pages** (SSG) for each medical asset (e.g. `/products/bicarbonate-mixture-dia-mix`, `/products/elisio-hx`, `/products/dialysis-machine`).
   - Schema.org `Product` JSON-LD structured data on every product.
   - Breadcrumb navigation with `BreadcrumbList` schema.
   - Product specifications, high-res images, related items, and direct inquiry form.

4. **Clinical Services (`/services`)**:
   - Detailed breakdown of Nephro Care, IVD Diagnostics, Hospital Supplies, Spare Parts, and Turnkey Engineering.
   - Deliverables list, quality standards, and facility consultation booking.

5. **About Us (`/about`)**:
   - Founded in 2022 in Kochi, Kerala.
   - Chronological growth timeline (2022–2026).
   - Leadership philosophy, clinical ethics, and 80+ hospital partners network.

6. **Dedicated SEO Regional Hubs**:
   - **`/medical-equipment-dealers-in-kerala`**: Tailored for all 14 Kerala districts with local hospital case studies and intra-Kerala rapid logistics.
   - **`/medical-equipment-dealers-in-ernakulam`**: Hyper-local hub targeting Ernakulam, Kakkanad, and Kochi with warehouse pickup and 2-hour biomedical engineer response.
   - **`/health-care-product-distributors-india`**: National hub highlighting pan-India cold-chain transport, regulatory CDSCO/ISO compliance, and institutional procurement.

7. **Contact & Technical Quote (`/contact`)**:
   - Corporate headquarters address (Shop No: 21/497, Ground Floor, Kaipadamugal, Thrikkakkara North, Ernakulam, Kerala 682021).
   - Phone (+91 8921172300) and email (`contact@smartwayhealthcare.com`).
   - Interactive quotation form with clinical vertical selection.
   - Department directory (Nephrology, IVD, Supplies, AMC).

8. **Clinical FAQ (`/faq`)**:
   - Schema.org `FAQPage` rich snippet data.

9. **Automated SEO Endpoints**:
   - **`/sitemap.xml`**: Next.js dynamic sitemap (`src/app/sitemap.ts`) mapping all 52+ URLs with daily/weekly change frequency.
   - **`/robots.txt`**: Next.js dynamic robots file (`src/app/robots.ts`).
   - **`/google21bb29e04bce1e42.html`**: Google Search Console verification file in `public/`. Do not remove it, or the site loses verification.

---

## 🛠️ Technical Stack
- **Framework**: Next.js 14.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom clinical brand palette (`#009065` emerald, `#a9ed42` clover, `#1d1f13` dark, `#f7f8f5` background)
- **Typography**: Inter, Schibsted Grotesk, DM Serif Display
- **Icons**: Lucide React
- **SEO**: Schema.org JSON-LD (MedicalBusiness, LocalBusiness, Product, BreadcrumbList, FAQPage)

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```
