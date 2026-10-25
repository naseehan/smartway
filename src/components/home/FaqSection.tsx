"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { faqs } from "@/data/faq";
import JsonLd from "@/components/seo/JsonLd";
import { generateFaqSchema } from "@/lib/seo";

interface FaqSectionProps {
  limit?: number;
  showAllLink?: boolean;
  /** Emit FAQPage JSON-LD. Only the /faq page should, to avoid duplicates. */
  withSchema?: boolean;
}

export default function FaqSection({ limit = 4, showAllLink = true, withSchema = false }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayedFaqs = limit ? faqs.slice(0, limit) : faqs;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      {withSchema && <JsonLd data={generateFaqSchema(displayedFaqs)} />}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0ffd1] border border-[#a9ed42]/40 text-xs font-semibold text-[#009065] uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-title text-[#1d1f13] tracking-tight">
            Medical Equipment & Health Care Distribution Queries
          </h2>
          <p className="text-sm text-[#1d1f13]/70">
            Answers for hospitals, biomedical engineers, clinics, and healthcare procurement managers in Kerala, Ernakulam, and across India.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {displayedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#eaf0dd] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className={`w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-title text-base sm:text-lg font-semibold transition-colors ${
                    isOpen ? "bg-[#f7f8f5] text-[#009065]" : "bg-white text-[#1d1f13] hover:bg-[#f7f8f5]/60"
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#009065]" : "text-[#1d1f13]/40"
                    }`}
                  />
                </button>
                {/* Always in the HTML so crawlers see every answer; hidden when collapsed */}
                <div
                  hidden={!isOpen}
                  className="px-6 pb-6 pt-2 bg-[#f7f8f5] text-sm text-[#1d1f13]/75 leading-relaxed border-t border-[#eaf0dd]/60"
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {showAllLink && (
          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#009065] hover:text-[#1d1f13] transition-colors"
            >
              <span>View all questions and answers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
