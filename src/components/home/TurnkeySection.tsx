import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Building2, Droplets, Cpu, ShieldAlert } from "lucide-react";

export default function TurnkeySection() {
  const turnkeyFeatures = [
    {
      icon: <Building2 className="w-5 h-5 text-[#009065]" />,
      title: "Dialysis Unit Architectural Layout",
      desc: "Custom architectural space planning, zoning, clean-utility routing, and patient flow design meeting national NABH clinical standards."
    },
    {
      icon: <Droplets className="w-5 h-5 text-[#009065]" />,
      title: "Double-Pass Hospital RO Plants",
      desc: "Ultra-pure water treatment systems designed specifically for hemodialysis, compliant with international AAMI & European standards."
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-[#009065]" />,
      title: "Specialized Clinical STPs",
      desc: "Dedicated sewage and medical effluent treatment plants designed for dialysis centers and multi-specialty hospitals."
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#009065]" />,
      title: "Biomedical Commissioning & Training",
      desc: "Comprehensive equipment calibration, electrical safety testing, certification, and clinical staff technical training."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f7f8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#eaf0dd]">
              <div className="relative h-80 sm:h-[400px] w-full bg-[#1d1f13]">
                <Image
                  src="/assets/images/medical-setup.jpg"
                  alt="Turnkey Clinical Dialysis Setup Ernakulam Kerala"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  loading="lazy"
                  className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d1f13] via-[#1d1f13]/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="px-3 py-1 rounded-full bg-[#a9ed42] text-[#1d1f13] text-xs font-bold uppercase tracking-wider">
                    Turnkey Excellence
                  </span>
                  <h3 className="text-xl font-bold font-title">
                    Complete Hemodialysis Center Setups
                  </h3>
                  <p className="text-xs text-white/80">
                    From empty space to fully operational clinical facility in record turnaround time.
                  </p>
                </div>
              </div>
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-3.5 shadow-xl border border-[#eaf0dd] hidden sm:flex items-center gap-3 max-w-xs">
              <div className="w-9 h-9 rounded-full bg-[#f0ffd1] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#009065]" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-[#1d1f13]">100% Turnkey Delivery</div>
                <div className="text-[#1d1f13]/60">Design, Equipment & Commissioning</div>
              </div>
            </div>
          </div>

          {/* Copy Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#eaf0dd] text-xs font-semibold text-[#009065] uppercase tracking-wider">
              Clinical Engineering & Projects
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-title text-[#1d1f13] tracking-tight leading-tight">
              Turnkey Clinical Setup & Medical Infrastructure Across Kerala & India
            </h2>

            <p className="text-base text-[#1d1f13]/70 leading-relaxed">
              Setting up a state-of-the-art renal care unit or hospital department requires more than buying machines—it demands specialized clinical architecture, high-purity water systems, biomedical validation, and ongoing engineering continuity. SmartWay Healthcare provides end-to-end execution.
            </p>

            {/* 4 Feature Points */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
              {turnkeyFeatures.map((feat, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-2xl bg-white border border-[#eaf0dd] space-y-1.5 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    {feat.icon}
                    <h4 className="font-bold text-sm text-[#1d1f13]">{feat.title}</h4>
                  </div>
                  <p className="text-xs text-[#1d1f13]/70 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/services#turnkey"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1d1f13] hover:bg-[#009065] text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all shadow-md group"
              >
                <span>Consult On Turnkey Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#009065] hover:text-[#1d1f13]"
              >
                <span>Schedule a Facility Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
