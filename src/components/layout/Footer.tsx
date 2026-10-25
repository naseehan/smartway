import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#14160d] text-white/80 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Column 1: Company Profile & Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <div className="bg-white/10 px-3 py-2 rounded-xl backdrop-blur-sm inline-block">
                <Image
                  src="/assets/footer smartway logo-cd0sjurn.png"
                  alt="SmartWay Healthcare - Medical Equipment Dealers"
                  width={180}
                  height={42}
                  loading="lazy"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              SmartWay Healthcare is a trusted medical equipment dealer in Kerala and leading health care product distributor across India. Providing advanced nephrology systems, IVD laboratory instrumentation, surgical consumables, and turnkey clinical setups since 2022.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-lg bg-[#a9ed42]/10 border border-[#a9ed42]/20 text-[#a9ed42] text-xs font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> 80+ Health Facilities Served
              </div>
            </div>
          </div>

          {/* Column 2: Products & Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide">
              Product Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/products?category=Nephro+Care"
                  className="hover:text-[#a9ed42] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#a9ed42]" /> Nephro Care & Dialysis
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=IVD+Products"
                  className="hover:text-[#a9ed42] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#a9ed42]" /> IVD Laboratory Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=General+Hospital+Supplies"
                  className="hover:text-[#a9ed42] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#a9ed42]" /> General Hospital Supplies
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Technical+Engineering"
                  className="hover:text-[#a9ed42] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#a9ed42]" /> Technical Engineering Spares
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#a9ed42] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#a9ed42]" /> Turnkey Dialysis Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links & SEO Hubs (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide">
              Regional Coverage
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/medical-equipment-dealers-in-kerala"
                  className="hover:text-[#a9ed42] transition-colors"
                >
                  Dealers in Kerala
                </Link>
              </li>
              <li>
                <Link
                  href="/medical-equipment-dealers-in-ernakulam"
                  className="hover:text-[#a9ed42] transition-colors"
                >
                  Dealers in Ernakulam
                </Link>
              </li>
              <li>
                <Link
                  href="/health-care-product-distributors-india"
                  className="hover:text-[#a9ed42] transition-colors"
                >
                  Distributors India
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#a9ed42] transition-colors">
                  Company Heritage
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#a9ed42] transition-colors">
                  Clinical FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#a9ed42] transition-colors">
                  Request Technical Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Headquarters (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide">
              Headquarters
            </h3>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#a9ed42] shrink-0 mt-1" />
                <span>
                  Shop No: 21/497, Ground Floor,
                  <br />
                  Kaipadamugal, Thrikkakkara North,
                  <br />
                  Ernakulam, Kerala 682021
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#a9ed42] shrink-0" />
                <a
                  href="tel:+918921172300"
                  className="hover:text-[#a9ed42] transition-colors font-medium text-white"
                >
                  +91 8921172300
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#a9ed42] shrink-0" />
                <a
                  href="mailto:contact@smartwayhealthcare.com"
                  className="hover:text-[#a9ed42] transition-colors text-white"
                >
                  contact@smartwayhealthcare.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#a9ed42] shrink-0" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Keywords Pill Cloud */}
        <div className="py-6 border-b border-white/10">
          <p className="text-xs uppercase tracking-wider text-white/50 mb-3 font-semibold">
            Target Search Keywords & Clinical Focus
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Medical Equipment Dealers in Kerala",
              "Medical Equipment Dealers in Ernakulam",
              "Medical Equipment Dealers in India",
              "Health Care Product Distributors in Kerala",
              "Health Care Product Distributors in Ernakulam",
              "Health Care Product Distributors in India",
              "Dialysis Equipment Suppliers Kochi",
              "IVD Products Distributor Kerala",
              "Hemodialysis Machines Kerala",
              "Hospital Consumables Wholesale India",
              "Biomedical Engineering AMC Kerala",
              "Turnkey Dialysis Units India",
            ].map((kw) => (
              <span
                key={kw}
                className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-[#a9ed42]/40 transition-colors"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} SmartWay Healthcare. All Rights Reserved.</p>
          <p className="flex items-center gap-3">
            <span>Clinical Engineering Excellence</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#a9ed42]">
              Emergency Technical Support
            </Link>
            <span>•</span>
            <Link href="/sitemap.xml" className="hover:text-[#a9ed42]">
              XML Sitemap
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
