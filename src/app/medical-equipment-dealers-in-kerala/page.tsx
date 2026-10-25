import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, ArrowRight, MapPin, Phone, Award, Truck } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductCard from "@/components/products/ProductCard";
import ContactForm from "@/components/contact/ContactForm";
import FaqSection from "@/components/home/FaqSection";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Medical Equipment Dealers in Kerala",
  description:
    "SmartWay Healthcare is Kerala's premier medical equipment dealer and healthcare product distributor. Supplying hemodialysis machines, Elisio dialyzers, IVD diagnostic analyzers, and hospital supplies to 80+ institutions across Kerala.",
  path: "/medical-equipment-dealers-in-kerala",
});

export default function MedicalEquipmentDealersKeralaPage() {
  const keralaFeatured = products.slice(0, 8);

  const districts = [
    "Ernakulam (Kochi)",
    "Thiruvananthapuram",
    "Kozhikode (Calicut)",
    "Thrissur",
    "Kollam",
    "Kannur",
    "Alappuzha",
    "Kottayam",
    "Palakkad",
    "Malappuram",
    "Pathanamthitta",
    "Kasaragod",
    "Wayanad",
    "Idukki"
  ];

  return (
    <div className="bg-[#f7f8f5] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs
          items={[
            { name: "Medical Equipment Dealers in Kerala", url: "/medical-equipment-dealers-in-kerala" },
          ]}
        />

        {/* Hero Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#eaf0dd] shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0ffd1] border border-[#a9ed42]/40 text-xs font-semibold text-[#009065] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> Kerala&apos;s #1 Clinical Distribution Network
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-title text-[#1d1f13] tracking-tight leading-tight">
              Medical Equipment Dealers & Health Care Product Distributors in Kerala
            </h1>

            <p className="text-base sm:text-lg text-[#1d1f13]/80 leading-relaxed">
              Based centrally in Ernakulam (Kochi), SmartWay Healthcare is the authorized dealer and distributor of critical clinical infrastructure across all 14 districts of Kerala. Trusted by renowned healthcare leaders including Aster DM Healthcare, Rajagiri Hospital, Apollo Adlux, and Baby Memorial Hospital.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 bg-[#009065] hover:bg-[#1d1f13] text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all shadow-md"
              >
                <span>Request Kerala Hospital Quote</span>
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

        {/* Why Choose SmartWay in Kerala */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-[#eaf0dd] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#f0ffd1] flex items-center justify-center">
              <Truck className="w-6 h-6 text-[#009065]" />
            </div>
            <h3 className="text-lg font-bold font-title text-[#1d1f13]">
              Rapid Intra-Kerala Dispatch
            </h3>
            <p className="text-xs text-[#1d1f13]/70 leading-relaxed">
              Same-day dispatch across Ernakulam/Kochi and 24-hour priority delivery to Trivandrum, Kozhikode, Thrissur, and all Kerala hospital facilities.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#eaf0dd] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#f0ffd1] flex items-center justify-center">
              <Award className="w-6 h-6 text-[#009065]" />
            </div>
            <h3 className="text-lg font-bold font-title text-[#1d1f13]">
              Authentic OEM Partnerships
            </h3>
            <p className="text-xs text-[#1d1f13]/70 leading-relaxed">
              Direct authorized channels for Nipro dialyzers, J. Mitra IVD diagnostics, certified hemodialysis machines, and biomedical spares.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#eaf0dd] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#f0ffd1] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#009065]" />
            </div>
            <h3 className="text-lg font-bold font-title text-[#1d1f13]">
              24/7 Biomedical Support
            </h3>
            <p className="text-xs text-[#1d1f13]/70 leading-relaxed">
              On-ground clinical engineers based in Kerala providing equipment commissioning, preventative maintenance (AMC/CMC), and emergency repairs.
            </p>
          </div>
        </div>

        {/* District Coverage Cloud */}
        <div className="bg-white rounded-3xl p-8 border border-[#eaf0dd] space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#009065]">
            <MapPin className="w-4 h-4" /> Full State-Wide Coverage
          </div>
          <h2 className="text-2xl font-bold font-title text-[#1d1f13]">
            Supplying Healthcare Institutions Across All Kerala Districts
          </h2>
          <p className="text-sm text-[#1d1f13]/70 max-w-3xl">
            We actively deliver medical equipment, nephrology consumables, diagnostic test kits, and turnkey dialysis infrastructure to hospitals and clinical labs across:
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {districts.map((d) => (
              <span
                key={d}
                className="px-3.5 py-1.5 rounded-full bg-[#f7f8f5] text-xs font-medium text-[#1d1f13] border border-[#eaf0dd]"
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Products Showcase */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#009065] uppercase tracking-wider">
                Kerala Clinical Catalog
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-title text-[#1d1f13]">
                Popular Medical Equipment & Consumables in Kerala
              </h2>
            </div>
            <Link
              href="/products"
              className="text-xs font-semibold text-[#009065] hover:underline"
            >
              Browse All 43 Products →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keralaFeatured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* Quote Form */}
        <div id="quote" className="scroll-mt-24">
          <ContactForm initialProduct="Inquiry for Kerala Healthcare Facility" />
        </div>

        {/* FAQ Section */}
        <FaqSection limit={4} showAllLink={false} />
      </div>
    </div>
  );
}
