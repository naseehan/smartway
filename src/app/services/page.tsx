import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";
import { services } from "@/data/services";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dialysis Setup & Biomedical Services",
  description:
    "Comprehensive clinical services from SmartWay Healthcare Kerala: Hemodialysis unit setups, IVD laboratory instrumentation, surgical consumables distribution & turnkey hospital infrastructure across India.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="bg-[#f7f8f5] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ name: "Clinical Services", url: "/services" }]} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#eaf0dd] text-xs font-semibold text-[#009065] uppercase tracking-wider">
            Infrastructure & Clinical Engineering
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-title text-[#1d1f13] tracking-tight">
            Clinical Services & Turnkey Infrastructure
          </h1>
          <p className="text-base text-[#1d1f13]/70 leading-relaxed">
            From specialized hemodialysis wings and double-pass reverse osmosis plants to precision IVD testing setups and biomedical spare parts management throughout Kerala and India.
          </p>
        </div>

        {/* Service Deep Dives */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <section
                key={service.id}
                id={service.slug}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-[#eaf0dd] shadow-sm overflow-hidden scroll-mt-28"
              >
                <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? "order-1" : "order-1 lg:order-2"}`}>
                    <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-[#f7f8f5] shadow-inner">
                      <Image
                        src={service.image}
                        alt={`${service.title} - SmartWay Healthcare Ernakulam Kerala`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-[#1d1f13] text-white text-xs font-semibold">
                          {service.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? "order-2" : "order-2 lg:order-1"}`}>
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-[#009065] tracking-wider uppercase">
                        Vertical {service.id}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold font-title text-[#1d1f13]">
                        {service.title}
                      </h2>
                      <p className="text-sm sm:text-base text-[#1d1f13]/80 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Deliverables / Details List */}
                    <div className="space-y-2.5">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#1d1f13]">
                        Key Capabilities & Deliverables:
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-2 text-xs text-[#1d1f13]/80">
                        {service.details.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 bg-[#f7f8f5] p-2.5 rounded-xl border border-[#eaf0dd]">
                            <CheckCircle2 className="w-4 h-4 text-[#009065] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.features.map((feat, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full bg-[#f0ffd1] text-[#009065] text-xs font-medium border border-[#a9ed42]/40"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/contact?category=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 bg-[#009065] hover:bg-[#1d1f13] text-white px-6 py-3 rounded-full text-xs font-semibold transition-all shadow-sm"
                      >
                        <span>Consult on {service.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="/products"
                        className="text-xs font-semibold text-[#1d1f13] hover:text-[#009065] transition-colors"
                      >
                        Browse Related Equipment →
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Turnkey Callout Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1d1f13] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#a9ed42] text-xs font-semibold border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5" /> Turnkey Assurance
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-title">
              Planning a New Hospital Wing or Hemodialysis Unit?
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Our clinical architects and certified biomedical engineers oversee the complete journey—from architectural layouts and plumbing to machine commissioning and maintenance.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#a9ed42] hover:bg-white text-[#1d1f13] px-6 py-3.5 rounded-full text-sm font-semibold transition-all"
            >
              <span>Schedule Facility Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+918921172300"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-full text-sm font-semibold border border-white/20"
            >
              <PhoneCall className="w-4 h-4 text-[#a9ed42]" />
              <span>+91 8921172300</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
