import React from "react";
import Link from "next/link";
import { ShieldCheck, Truck, Award, CheckCircle2, Phone, ArrowRight, Globe, Layers } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductCard from "@/components/products/ProductCard";
import ContactForm from "@/components/contact/ContactForm";
import FaqSection from "@/components/home/FaqSection";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Health Care Product Distributors in India",
  description:
    "SmartWay Healthcare is a premier health care product distributor and medical equipment dealer in India. Supplying nephrology systems, IVD diagnostic instrumentation, hospital consumables, and turnkey medical infrastructure across all Indian states.",
  path: "/health-care-product-distributors-india",
});

export default function HealthCareProductDistributorsIndiaPage() {
  const panIndiaProducts = products.slice(0, 8);

  const pillars = [
    {
      title: "Nephro Care Infrastructure",
      desc: "Authorized dealer of hemodialysis units, Elisio polynephron dialyzers, blood tubings, and dialysate concentrates.",
      badge: "Renal Specialty",
    },
    {
      title: "In-Vitro Diagnostics (IVD)",
      desc: "Strategic partner of J. Mitra & Co., delivering CLIA analyzers, ELISA readers/washers, and certified test kits with cold-chain logistics.",
      badge: "Clinical Labs",
    },
    {
      title: "General Hospital Supplies",
      desc: "Bulk surgical disposables, IV cannulas, insulin safety syringes, elastomeric pumps, and hospital grade disinfectants.",
      badge: "Clinical Consumables",
    },
    {
      title: "Turnkey Medical Infrastructure",
      desc: "Concept-to-commissioning execution of specialized dialysis wings, clinical RO water plants, and hospital effluent treatment plants.",
      badge: "Turnkey Projects",
    },
  ];

  return (
    <div className="bg-[#f7f8f5] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs
          items={[
            {
              name: "Health Care Product Distributors in India",
              url: "/health-care-product-distributors-india",
            },
          ]}
        />

        {/* Hero Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#eaf0dd] shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0ffd1] border border-[#a9ed42]/40 text-xs font-semibold text-[#009065] uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" /> Pan-India Healthcare Supply Chain
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-title text-[#1d1f13] tracking-tight leading-tight">
              Health Care Product Distributors & Medical Equipment Dealers in India
            </h1>

            <p className="text-base sm:text-lg text-[#1d1f13]/80 leading-relaxed">
              SmartWay Healthcare bridges international medical technology with hospitals, diagnostic chains, and medical institutions across India. From certified hemodialysis machinery and IVD laboratory diagnostics to comprehensive hospital supplies, we provide prompt, reliable supply chains backed by engineering excellence.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#pan-india-quote"
                className="inline-flex items-center gap-2 bg-[#009065] hover:bg-[#1d1f13] text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all shadow-md"
              >
                <span>Request National Procurement Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+918921172300"
                className="inline-flex items-center gap-2 bg-[#f7f8f5] hover:bg-[#eaf0dd] text-[#1d1f13] px-6 py-3.5 rounded-full text-sm font-semibold border border-[#eaf0dd]"
              >
                <Phone className="w-4 h-4 text-[#009065]" />
                <span>+91 8921172300</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-[#eaf0dd] space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#f0ffd1] text-[#009065] border border-[#a9ed42]/40 inline-block">
                  {pillar.badge}
                </span>
                <h3 className="text-lg font-bold font-title text-[#1d1f13]">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#1d1f13]/70 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-[#eaf0dd]">
                <Link
                  href="/products"
                  className="text-xs font-semibold text-[#009065] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore Items</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* National Supply Strengths */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#eaf0dd] shadow-sm space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-[#009065] uppercase tracking-wider">
              National Infrastructure Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-title text-[#1d1f13]">
              Why Leading Indian Institutions Choose SmartWay
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-[#1d1f13]">
                <Truck className="w-4 h-4 text-[#009065]" /> Cold-Chain Logistics
              </div>
              <p className="text-xs text-[#1d1f13]/70 leading-relaxed">
                Temperature-controlled transport across all Indian states ensuring total integrity for diagnostic test kits, CLIA reagents, and dialysis concentrates.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-[#1d1f13]">
                <Layers className="w-4 h-4 text-[#009065]" /> Turnkey Project Experience
              </div>
              <p className="text-xs text-[#1d1f13]/70 leading-relaxed">
                Proven track record in setting up over 80 healthcare facilities with specialized hemodialysis wings, RO water plants, and biomedical validation.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-[#1d1f13]">
                <Award className="w-4 h-4 text-[#009065]" /> Regulatory Compliance
              </div>
              <p className="text-xs text-[#1d1f13]/70 leading-relaxed">
                All distributed equipment and supplies adhere to strict CDSCO, ISO 13485, and CE quality standards for clinical use in India.
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#009065] uppercase tracking-wider">
                Pan-India Catalog
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-title text-[#1d1f13]">
                Core Medical Equipment & Consumables
              </h2>
            </div>
            <Link
              href="/products"
              className="text-xs font-semibold text-[#009065] hover:underline"
            >
              View Full 43-Product Catalog →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {panIndiaProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div id="pan-india-quote" className="scroll-mt-24">
          <ContactForm initialProduct="Pan-India Institutional Procurement" />
        </div>

        {/* FAQ */}
        <FaqSection limit={4} showAllLink={false} />
      </div>
    </div>
  );
}
