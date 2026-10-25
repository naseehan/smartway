import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HeartPulse, Layers, FlaskConical, Wrench } from "lucide-react";
import { services } from "@/data/services";

export default function CorePillars() {
  const getIcon = (id: string) => {
    switch (id) {
      case "01":
        return <HeartPulse className="w-6 h-6 text-[#009065]" />;
      case "02":
        return <Layers className="w-6 h-6 text-[#009065]" />;
      case "03":
        return <FlaskConical className="w-6 h-6 text-[#009065]" />;
      case "04":
      default:
        return <Wrench className="w-6 h-6 text-[#009065]" />;
    }
  };

  return (
    <section className="py-16 md:py-20 bg-[#f7f8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#eaf0dd] text-xs font-semibold text-[#009065] uppercase tracking-wider">
              Clinical Specializations
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-title text-[#1d1f13] tracking-tight">
              Comprehensive Health Care Product Distribution & Clinical Services
            </h2>
          </div>
          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#009065] hover:text-[#1d1f13] transition-colors"
            >
              <span>Explore All Services & Turnkey Setups</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-3xl p-6 border border-[#eaf0dd] hover:border-[#009065]/50 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#f0ffd1] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(pillar.id)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#f7f8f5] text-[#1d1f13]/70 border border-[#eaf0dd]">
                    {pillar.tag}
                  </span>
                </div>

                <div className="relative h-40 w-full rounded-2xl overflow-hidden bg-[#f7f8f5]">
                  <Image
                    src={pillar.image}
                    alt={`${pillar.title} - SmartWay Healthcare Kerala & India`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-xl font-bold font-title text-[#1d1f13] group-hover:text-[#009065] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#1d1f13]/70 leading-relaxed line-clamp-3">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#eaf0dd]">
                <Link
                  href={`/services#${pillar.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d1f13] group-hover:text-[#009065] transition-colors"
                >
                  <span>Learn Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
