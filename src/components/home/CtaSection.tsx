import React from "react";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, Mail } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-20 bg-[#009065] text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#a9ed42]/10 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/20">
            <ShieldCheck className="w-4 h-4 text-[#a9ed42]" /> Ready to Empower Your Clinical Infrastructure?
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-title tracking-tight leading-tight">
            Partner With Kerala&apos;s Leading Medical Equipment Dealers
          </h2>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed">
            Whether you need certified hemodialysis machines in Kochi, high-sensitivity IVD analyzers, bulk surgical consumables, or a complete turnkey dialysis wing in Ernakulam, our biomedical specialists are ready to consult.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1d1f13] hover:bg-white hover:text-[#1d1f13] text-white px-8 py-4 rounded-full text-sm font-semibold transition-all shadow-xl group"
            >
              <span>Request Technical Proposal</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+918921172300"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full text-sm font-semibold transition-all backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 text-[#a9ed42]" />
              <span>Call +91 8921172300</span>
            </a>
          </div>

          <p className="text-xs text-white/70 pt-2 flex items-center justify-center gap-2">
            <Mail className="w-3.5 h-3.5" /> Direct procurement inquiries:{" "}
            <a
              href="mailto:contact@smartwayhealthcare.com"
              className="underline hover:text-[#a9ed42]"
            >
              contact@smartwayhealthcare.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
