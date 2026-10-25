import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, HeartHandshake, Award, Building, CheckCircle2 } from "lucide-react";
import { timeline } from "@/data/timeline";
import { partners } from "@/data/partners";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us – Medical Equipment, Kochi",
  description:
    "Learn about SmartWay Healthcare: Founded in 2022 in Kochi, Kerala. We provide precision medical equipment, IVD diagnostics, hospital supplies, and turnkey infrastructure to 80+ health institutions.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="bg-[#f7f8f5] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Breadcrumbs items={[{ name: "About Us", url: "/about" }]} />

        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#eaf0dd] text-xs font-semibold text-[#009065] uppercase tracking-wider">
            Distributing Wellness • Empowering Lives
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-title text-[#1d1f13] tracking-tight">
            Advancing the Standard of Clinical Infrastructure Since 2022
          </h1>
          <p className="text-base sm:text-lg text-[#1d1f13]/70 leading-relaxed">
            SmartWay Healthcare was established in Kochi, Kerala with a unified mission: to bridge clinical excellence with precision medical engineering, delivering certified healthcare solutions to hospitals across India.
          </p>
        </div>

        {/* Leadership & Mission Feature Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#eaf0dd] shadow-sm">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Leadership Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-[#eaf0dd]">
                <Image
                  src="/assets/images/leadership.jpg"
                  alt="SmartWay Healthcare Clinical Leadership and Vision Kerala"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Leadership Quote & Values */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#009065] uppercase tracking-wider">
                Our Guiding Philosophy
              </span>

              <blockquote className="text-xl sm:text-2xl font-serif italic text-[#1d1f13] leading-relaxed border-l-4 border-[#009065] pl-6 py-2">
                &ldquo;We believe every individual deserves access to the best healthcare. Our mission is to empower lives through innovative infrastructure solutions that set new standards in clinical excellence.&rdquo;
              </blockquote>

              <p className="text-sm text-[#1d1f13]/80 leading-relaxed">
                Operating out of our central facility in Ernakulam, Kerala, SmartWay Healthcare delivers end-to-end medical supply distribution and engineering continuity. By partnering with leading manufacturers such as Nipro and J. Mitra & Co., we guarantee authentic certified clinical equipment backed by prompt technical support.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#f7f8f5] border border-[#eaf0dd] space-y-1">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#1d1f13]">
                    <ShieldCheck className="w-4 h-4 text-[#009065]" /> Clinical Integrity
                  </div>
                  <p className="text-xs text-[#1d1f13]/60">100% genuine medical supplies & verified CE/ISO standards.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f7f8f5] border border-[#eaf0dd] space-y-1">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#1d1f13]">
                    <HeartHandshake className="w-4 h-4 text-[#009065]" /> Long-Term Care
                  </div>
                  <p className="text-xs text-[#1d1f13]/60">Proactive biomedical AMC and 24/7 technical breakdown support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#009065] uppercase tracking-wider">
              Chronological Journey
            </span>
            <h2 className="text-3xl font-bold font-title text-[#1d1f13]">
              From Kochi Foundation to Pan-India Impact
            </h2>
            <p className="text-sm text-[#1d1f13]/70">
              Key milestones shaping our identity as Kerala&apos;s trusted medical equipment dealer.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {timeline.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-[#eaf0dd] shadow-sm relative space-y-3 flex flex-col justify-between hover:border-[#009065]/40 transition-colors"
              >
                <div>
                  <div className="text-2xl font-bold font-title text-[#009065]">{step.year}</div>
                  <div className="text-xs font-semibold text-[#1d1f13]/60 mb-2">{step.location}</div>
                  <h3 className="text-sm font-bold text-[#1d1f13] mb-1.5">{step.title}</h3>
                  <p className="text-xs text-[#1d1f13]/70 leading-relaxed">{step.description}</p>
                </div>
                <div className="pt-2 border-t border-[#eaf0dd] text-[11px] font-semibold text-[#009065]">
                  Milestone 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Ecosystem */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#eaf0dd] shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#009065] uppercase tracking-wider">
                Clinical Network
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-title text-[#1d1f13]">
                Trusted by 80+ Healthcare Institutions
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#009065] hover:underline"
            >
              Partner with SmartWay <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="p-3 bg-[#f7f8f5] rounded-xl border border-[#eaf0dd] flex flex-col items-center justify-center text-center space-y-2 hover:border-[#009065]/30 transition-colors"
              >
                <div className="relative h-12 w-full">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} - Hospital Partner SmartWay Healthcare Kerala`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[11px] font-semibold text-[#1d1f13] line-clamp-1">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
