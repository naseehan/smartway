import React from "react";
import Link from "next/link";
import { HelpCircle, ArrowRight, PhoneCall } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FaqSection from "@/components/home/FaqSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Medical Equipment FAQs",
  description:
    "Frequently asked questions about medical equipment procurement, hemodialysis machine maintenance, IVD test kits, and turnkey clinic infrastructure in Kerala, Ernakulam, and across India.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <div className="bg-[#f7f8f5] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ name: "FAQ", url: "/faq" }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#eaf0dd] text-xs font-semibold text-[#009065] uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Healthcare Knowledge Center
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-title text-[#1d1f13] tracking-tight">
            Frequently Asked Clinical & Supply Questions
          </h1>
          <p className="text-base text-[#1d1f13]/70 leading-relaxed">
            Find answers regarding medical equipment distribution, cold-chain IVD shipping, turnkey hemodialysis center installations, and biomedical maintenance across Kerala and India.
          </p>
        </div>

        {/* Main FAQ list */}
        <FaqSection limit={10} showAllLink={false} withSchema />

        {/* Still have questions CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#eaf0dd] shadow-sm text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold font-title text-[#1d1f13]">
            Have a Specific Facility Requirement?
          </h2>
          <p className="text-sm text-[#1d1f13]/70 max-w-md mx-auto">
            Our clinical engineers and infrastructure specialists can discuss equipment specifications, layout blueprints, or bulk pricing for your hospital.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#009065] hover:bg-[#1d1f13] text-white px-7 py-3 rounded-full text-sm font-semibold transition-all shadow-sm"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+918921172300"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f7f8f5] hover:bg-[#eaf0dd] text-[#1d1f13] px-6 py-3 rounded-full text-sm font-semibold border border-[#eaf0dd]"
            >
              <PhoneCall className="w-4 h-4 text-[#009065]" />
              <span>Call +91 8921172300</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
