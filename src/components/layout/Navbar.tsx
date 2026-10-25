"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products Catalog", href: "/products" },
    { name: "Clinical Services", href: "/services" },
    { name: "About SmartWay", href: "/about" },
    { name: "Kerala & India Hub", href: "/medical-equipment-dealers-in-kerala" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-[#eaf0dd]"
          : "bg-white/80 md:bg-[#f7f8f5]/80 backdrop-blur-sm py-4 border-b border-[#eaf0dd]/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with explicit width & height to avoid layout shift */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/assets/images/logo-smartway.png"
              alt="SmartWay Healthcare - Medical Equipment Dealers Kerala"
              width={192}
              height={40}
              priority
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#1d1f13] text-white"
                      : "text-[#1d1f13]/80 hover:text-[#1d1f13] hover:bg-black/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#009065] hover:bg-[#1d1f13] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md group"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="lg:hidden p-2 rounded-lg text-[#1d1f13] hover:bg-black/5 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-[#eaf0dd] px-4 pt-3 pb-6 space-y-2 animate-fade-up">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#1d1f13] text-white"
                      : "text-[#1d1f13]/80 hover:bg-black/5 hover:text-[#1d1f13]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#eaf0dd] space-y-3">
            <a
              href="tel:+918921172300"
              className="flex items-center gap-2 text-sm text-[#1d1f13]/80 px-2"
            >
              <Phone className="w-4 h-4 text-[#009065]" /> +91 8921172300
            </a>
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#009065] text-white py-3 rounded-full text-sm font-medium"
            >
              <span>Request Technical Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
