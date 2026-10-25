import React from "react";
import Link from "next/link";
import { ShieldCheck, MapPin, Phone, Mail, ArrowRight, Building, Clock, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductCard from "@/components/products/ProductCard";
import ContactForm from "@/components/contact/ContactForm";
import FaqSection from "@/components/home/FaqSection";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Medical Equipment Dealers in Ernakulam",
  description:
    "SmartWay Healthcare is Ernakulam's top medical equipment dealer and healthcare product distributor. Based in Thrikkakkara North, Kochi, providing hemodialysis machines, IVD diagnostics, hospital supplies, and turnkey clinic setups.",
  path: "/medical-equipment-dealers-in-ernakulam",
});

export default function MedicalEquipmentDealersErnakulamPage() {
  const ernakulamFeatured = products.slice(0, 8);

  const localClients = [
    "Aster DM Healthcare (Aster Medcity Kochi)",
    "Rajagiri Hospital (Aluva, Ernakulam)",
    "Sunrise Hospital (Kakkanad, Kochi)",
    "Apollo Adlux Hospital (Angamaly, Ernakulam)",
    "Medical Trust Hospital (Ernakulam)",
    "Lisie Hospital (Kochi)",
    "Amrita Hospital (Edappally, Kochi)",
    "VPS Lakeshore Hospital (Nettoor, Kochi)"
  ];

  return (
    <div className="bg-[#f7f8f5] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs
          items={[
            { name: "Medical Equipment Dealers in Ernakulam", url: "/medical-equipment-dealers-in-ernakulam" },
          ]}
        />

        {/* Hero Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#eaf0dd] shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0ffd1] border border-[#a9ed42]/40 text-xs font-semibold text-[#009065] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" /> Ernakulam Headquarters & Warehouse
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-title text-[#1d1f13] tracking-tight leading-tight">
              Medical Equipment Dealers & Health Care Product Distributors in Ernakulam
            </h1>

            <p className="text-base sm:text-lg text-[#1d1f13]/80 leading-relaxed">
              Located at Kaipadamugal, Thrikkakkara North, SmartWay Healthcare is Ernakulam&apos;s leading distributor of medical machinery, specialized nephrology equipment, diagnostic analyzers, and surgical consumables. We provide same-day localized fulfillment to hospitals and clinical labs across Kochi and Ernakulam district.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#local-quote"
                className="inline-flex items-center gap-2 bg-[#009065] hover:bg-[#1d1f13] text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all shadow-md"
              >
                <span>Request Ernakulam Quote</span>
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

        {/* Local Office Details & Trust Highlights */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Address & Logistics Info (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-[#eaf0dd] shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#009065] uppercase tracking-wider">
              <Building className="w-4 h-4" /> Local Corporate Office
            </div>

            <div className="space-y-4 text-sm text-[#1d1f13]/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#009065] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1d1f13] font-bold">SmartWay Healthcare</strong>
                  Shop No: 21/497, Ground Floor,
                  <br />
                  Kaipadamugal, Thrikkakkara North,
                  <br />
                  Ernakulam, Kerala 682021
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#009065] shrink-0" />
                <a href="tel:+918921172300" className="hover:text-[#009065] font-semibold text-[#1d1f13]">
                  +91 8921172300
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#009065] shrink-0" />
                <a href="mailto:contact@smartwayhealthcare.com" className="hover:text-[#009065]">
                  contact@smartwayhealthcare.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#009065] shrink-0" />
                <span>Monday – Saturday: 9:00 AM – 6:00 PM</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#eaf0dd] space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1d1f13]">
                Ernakulam Rapid Delivery Advantage:
              </div>
              <ul className="space-y-1.5 text-xs text-[#1d1f13]/70">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009065]" /> Same-day local dispatch in Kochi city & Kakkanad
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009065]" /> Direct warehouse pickup available at Thrikkakkara
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009065]" /> 2-hour biomedical engineer breakdown response
                </li>
              </ul>
            </div>
          </div>

          {/* Hospitals & Networks in Ernakulam (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#eaf0dd] shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#009065] uppercase tracking-wider">
                Clinical Network In Kochi / Ernakulam
              </span>
              <h2 className="text-2xl font-bold font-title text-[#1d1f13]">
                Trusted by Ernakulam&apos;s Leading Medical Centers
              </h2>
              <p className="text-xs sm:text-sm text-[#1d1f13]/70 leading-relaxed">
                SmartWay Healthcare serves premier tertiary care and specialty centers across Ernakulam district, providing hemodialysis supplies, high-flux dialyzers, diagnostic analyzers, and surgical equipment.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {localClients.map((client, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-[#f7f8f5] border border-[#eaf0dd] text-xs font-semibold text-[#1d1f13] flex items-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-[#009065] shrink-0" />
                  <span>{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#009065] uppercase tracking-wider">
                In-Stock at Ernakulam Warehouse
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-title text-[#1d1f13]">
                Medical Equipment & Consumables Available in Ernakulam
              </h2>
            </div>
            <Link
              href="/products"
              className="text-xs font-semibold text-[#009065] hover:underline"
            >
              View Full Catalog →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ernakulamFeatured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div id="local-quote" className="scroll-mt-24">
          <ContactForm initialProduct="Inquiry from Ernakulam Hospital / Clinic" />
        </div>

        {/* FAQ */}
        <FaqSection limit={4} showAllLink={false} />
      </div>
    </div>
  );
}
