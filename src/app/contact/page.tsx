import React from "react";
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight, Building } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContactForm from "@/components/contact/ContactForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us & Request a Quote",
  description:
    "Get in touch with SmartWay Healthcare in Ernakulam, Kerala. Contact our clinical engineering consultants for medical equipment pricing, technical support, and turnkey facility planning.",
  path: "/contact",
});

export default function ContactPage() {
  const departments = [
    {
      name: "Nephro Care Infrastructure",
      desc: "Hemodialysis machines, Elisio dialyzers, blood tubings, dialysate concentrates.",
      email: "contact@smartwayhealthcare.com",
    },
    {
      name: "IVD & Diagnostic Systems",
      desc: "CLIA-2000 analyzers, ELISA readers, test kits, cold-chain distribution.",
      email: "contact@smartwayhealthcare.com",
    },
    {
      name: "Hospital Supplies & Consumables",
      desc: "Bulk hospital consumables, safety syringes, IV cannulas, disinfectants.",
      email: "contact@smartwayhealthcare.com",
    },
    {
      name: "Biomedical Engineering & AMC",
      desc: "Preventive maintenance contracts, breakdown service, spare parts.",
      email: "contact@smartwayhealthcare.com",
    },
  ];

  return (
    <div className="bg-[#f7f8f5] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ name: "Contact Us", url: "/contact" }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#eaf0dd] text-xs font-semibold text-[#009065] uppercase tracking-wider">
            Clinical Support Desk
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-title text-[#1d1f13] tracking-tight">
            Connect With Our Clinical Engineering Team
          </h1>
          <p className="text-base text-[#1d1f13]/70 leading-relaxed">
            Whether you need a commercial quote for hospital machinery, emergency dialyzer deliveries in Kerala, or turnkey consultation, we are here to support your facility.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Office & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="bg-white rounded-3xl p-8 border border-[#eaf0dd] shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold text-[#009065] uppercase tracking-wider">
                <Building className="w-4 h-4" /> Corporate Headquarters
              </div>

              <div className="space-y-4 text-sm text-[#1d1f13]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#009065] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-base font-bold font-title mb-1">
                      SmartWay Healthcare
                    </strong>
                    <p className="text-xs sm:text-sm text-[#1d1f13]/70 leading-relaxed">
                      Shop No: 21/497, Ground Floor,
                      <br />
                      Kaipadamugal, Thrikkakkara North,
                      <br />
                      Ernakulam, Kerala 682021, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#009065] shrink-0" />
                  <div>
                    <div className="text-xs text-[#1d1f13]/60">Helpline & WhatsApp Support:</div>
                    <a
                      href="tel:+918921172300"
                      className="font-bold text-base text-[#009065] hover:underline"
                    >
                      +91 8921172300
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#009065] shrink-0" />
                  <div>
                    <div className="text-xs text-[#1d1f13]/60">Direct Inquiries:</div>
                    <a
                      href="mailto:contact@smartwayhealthcare.com"
                      className="font-semibold text-sm hover:text-[#009065]"
                    >
                      contact@smartwayhealthcare.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#009065] shrink-0" />
                  <div>
                    <div className="text-xs text-[#1d1f13]/60">Operational Hours:</div>
                    <div className="text-sm font-medium">Mon – Sat: 9:00 AM – 6:00 PM IST</div>
                    <div className="text-[11px] text-[#009065] font-semibold">
                      * 24/7 Breakdown Assistance for Contract Hospitals
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Directory */}
            <div className="bg-white rounded-3xl p-6 border border-[#eaf0dd] shadow-sm space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1d1f13]">
                Department Inquiries
              </h3>
              <div className="space-y-3">
                {departments.map((dept, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#f7f8f5] border border-[#eaf0dd] space-y-1">
                    <div className="text-xs font-bold text-[#1d1f13]">{dept.name}</div>
                    <p className="text-[11px] text-[#1d1f13]/60">{dept.desc}</p>
                    <a
                      href={`mailto:${dept.email}?subject=${encodeURIComponent(dept.name)}`}
                      className="text-[11px] font-semibold text-[#009065] hover:underline inline-flex items-center gap-1"
                    >
                      Email division <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Quote Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
