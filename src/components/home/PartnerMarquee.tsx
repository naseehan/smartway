import React from "react";
import Image from "next/image";
import { partners } from "@/data/partners";

export default function PartnerMarquee() {
  return (
    <section className="py-10 bg-white border-y border-[#eaf0dd] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest font-bold text-[#009065]">
          Trusted by Top Hospitals & Clinical Institutions Across Kerala & India
        </p>
      </div>

      {/* Lightweight Edge Fades (replaces expensive mask-image) */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Infinite Marquee Scroll with GPU acceleration */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max gap-6 sm:gap-8 animate-infinite-scroll will-change-transform">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center justify-center p-3 bg-[#f7f8f5] rounded-xl border border-[#eaf0dd] h-16 w-36 sm:w-44 shrink-0 shadow-sm"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} - Hospital Partner SmartWay Healthcare Kerala`}
                width={120}
                height={36}
                loading="lazy"
                className="max-h-9 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
