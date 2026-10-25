import React from "react";
import { Building, Award, Wrench, ShieldCheck } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      value: "80+",
      label: "Health Facilities Served",
      desc: "Hospitals, medical colleges & renal centers across India",
      icon: <Building className="w-6 h-6 text-[#009065]" />,
    },
    {
      value: "43+",
      label: "Precision Medical Products",
      desc: "Certified dialysis systems, IVD diagnostic kits & supplies",
      icon: <Award className="w-6 h-6 text-[#009065]" />,
    },
    {
      value: "24/7",
      label: "Biomedical Engineering",
      desc: "Rapid emergency breakdown & preventive maintenance support",
      icon: <Wrench className="w-6 h-6 text-[#009065]" />,
    },
    {
      value: "100%",
      label: "Clinical Compliance",
      desc: "AAMI water standards, CE & ISO certified healthcare distribution",
      icon: <ShieldCheck className="w-6 h-6 text-[#009065]" />,
    },
  ];

  return (
    <section className="py-16 bg-[#1d1f13] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#a9ed42]/40 transition-colors space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl sm:text-5xl font-bold font-title text-[#a9ed42] tracking-tight">
                {stat.value}
              </div>
              <div className="text-base font-bold text-white leading-snug">
                {stat.label}
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
