import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Activity, Award, PhoneCall } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-[#f7f8f5]">
      {/* Background radial gradients - subtle and lightweight */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#a9ed42]/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#009065]/10 rounded-full blur-3xl pointer-events-none -ml-40 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: SEO-rich Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#eaf0dd] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#009065]" />
              <span className="text-xs font-semibold text-[#1d1f13] tracking-wide uppercase">
                Premier Medical Equipment Dealers • Kerala & India
              </span>
            </div>

            {/* Main H1 Headline with exact keywords */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-title text-[#1d1f13] tracking-tight leading-[1.15]">
              Leading Medical Equipment Dealers &{" "}
              <span className="text-[#009065]">
                Health Care Product Distributors
              </span>{" "}
              in Kerala, Ernakulam & India
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#1d1f13]/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              SmartWay Healthcare empowers hospitals, clinical laboratories, and renal centers with certified hemodialysis machinery, IVD diagnostic analyzers, hospital consumables, and complete turnkey infrastructure across Ernakulam, Kerala, and pan-India.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#009065] hover:bg-[#1d1f13] text-white px-7 py-3.5 rounded-full text-base font-medium transition-all shadow-md hover:shadow-lg group"
              >
                <span>Browse Products Catalog</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f0ffd1] text-[#1d1f13] border border-[#eaf0dd] px-7 py-3.5 rounded-full text-base font-medium transition-all shadow-sm hover:shadow"
              >
                <PhoneCall className="w-4 h-4 text-[#009065]" />
                <span>Get Technical Quote</span>
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#eaf0dd] text-left">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#009065] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#1d1f13]">80+ Facilities</div>
                  <div className="text-xs text-[#1d1f13]/60">Served nationwide</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Activity className="w-5 h-5 text-[#009065] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#1d1f13]">Turnkey Dialysis</div>
                  <div className="text-xs text-[#1d1f13]/60">Concept to commissioning</div>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-start gap-2.5">
                <Award className="w-5 h-5 text-[#009065] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#1d1f13]">J. Mitra Partner</div>
                  <div className="text-xs text-[#1d1f13]/60">Clinical diagnostics leader</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Card */}
              <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-xl border border-[#eaf0dd] relative z-10 overflow-hidden">
                <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden bg-gradient-to-tr from-[#f0ffd1] to-white">
                  <Image
                    src="/assets/images/smartway-hq-v2.png"
                    alt="SmartWay Healthcare Clinical Infrastructure Headquarters Ernakulam Kerala"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="px-2.5 py-1 rounded-full bg-[#009065] text-[11px] font-semibold uppercase tracking-wider">
                      Turnkey Setup & Engineering
                    </span>
                    <h3 className="text-lg font-bold font-title mt-1.5 leading-snug">
                      SmartWay Clinical Infrastructure
                    </h3>
                    <p className="text-xs text-white/80">Thrikkakkara North, Ernakulam, Kerala</p>
                  </div>
                </div>

                {/* Floating Micro Cards */}
                <div className="mt-3.5 grid grid-cols-2 gap-2.5 text-left">
                  <div className="p-3 rounded-xl bg-[#f7f8f5] border border-[#eaf0dd]">
                    <div className="text-xs text-[#1d1f13]/60 font-medium">Headquarters</div>
                    <div className="text-sm font-bold text-[#1d1f13]">Kochi, Kerala</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f0ffd1]/60 border border-[#a9ed42]/40">
                    <div className="text-xs text-[#009065] font-medium">Catalog</div>
                    <div className="text-sm font-bold text-[#1d1f13]">43+ Products</div>
                  </div>
                </div>
              </div>

              {/* Decorative clover backdrop */}
              <div className="absolute -top-5 -right-5 w-24 h-24 opacity-80 pointer-events-none hidden sm:block" aria-hidden="true">
                <Image
                  src="/assets/images/hero-clover-3d-light.png"
                  alt=""
                  width={96}
                  height={96}
                  loading="lazy"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
