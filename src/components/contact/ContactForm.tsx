"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";

interface ContactFormProps {
  initialProduct?: string;
}

export default function ContactForm({ initialProduct = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    category: initialProduct ? `Product: ${initialProduct}` : "Nephro Care Infrastructure",
    message: initialProduct
      ? `Hello, I would like to request technical specifications and quote for ${initialProduct}.`
      : "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const botField = (e.currentTarget as HTMLFormElement).elements.namedItem("bot-field") as HTMLInputElement | null;

    // Netlify Forms: posts to the static form definition in public/__forms.html
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          "bot-field": botField?.value ?? "",
          ...formData,
        }).toString(),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#eaf0dd] shadow-lg">
      <h3 className="text-2xl font-bold font-title text-[#1d1f13] mb-2">
        Get A Technical Quote
      </h3>
      <p className="text-sm text-[#1d1f13]/70 mb-6">
        Connect with our clinical engineering team for hospital quotes, equipment brochures, or turnkey audits.
      </p>

      {status === "success" ? (
        <div className="p-6 rounded-2xl bg-[#f0ffd1] border border-[#a9ed42] text-left space-y-3">
          <div className="flex items-center gap-2 text-[#009065] font-bold text-lg">
            <CheckCircle2 className="w-6 h-6" /> Message Sent Successfully!
          </div>
          <p className="text-sm text-[#1d1f13]/80">
            Thank you for reaching out to SmartWay Healthcare. Our technical consultants in Kochi will review your requirements and respond within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-xs font-semibold text-[#009065] underline"
          >
            Send another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot for spam bots, hidden from visitors */}
          <input
            type="text"
            name="bot-field"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-xs font-semibold text-[#1d1f13] mb-1.5">
                First Name *
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Dr. John"
                className="w-full px-4 py-3 rounded-xl border border-[#eaf0dd] bg-[#f7f8f5] focus:bg-white focus:outline-none focus:border-[#009065] text-sm text-[#1d1f13] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-xs font-semibold text-[#1d1f13] mb-1.5">
                Last Name *
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full px-4 py-3 rounded-xl border border-[#eaf0dd] bg-[#f7f8f5] focus:bg-white focus:outline-none focus:border-[#009065] text-sm text-[#1d1f13] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[#1d1f13] mb-1.5">
                Hospital / Official Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="purchasing@hospital.com"
                className="w-full px-4 py-3 rounded-xl border border-[#eaf0dd] bg-[#f7f8f5] focus:bg-white focus:outline-none focus:border-[#009065] text-sm text-[#1d1f13] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-[#1d1f13] mb-1.5">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full px-4 py-3 rounded-xl border border-[#eaf0dd] bg-[#f7f8f5] focus:bg-white focus:outline-none focus:border-[#009065] text-sm text-[#1d1f13] transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="category" className="block text-xs font-semibold text-[#1d1f13] mb-1.5">
              Clinical Area / Product Interest
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#eaf0dd] bg-[#f7f8f5] focus:bg-white focus:outline-none focus:border-[#009065] text-sm text-[#1d1f13] transition-colors"
            >
              <option value="Nephro Care Infrastructure">Nephro Care Infrastructure (Dialysis Units)</option>
              <option value="IVD Products & Diagnostics">IVD Diagnostic Products & Analyzers</option>
              <option value="General Hospital Supplies">General Hospital Supplies & Consumables</option>
              <option value="Turnkey Dialysis Setup">Turnkey Dialysis Setup & RO Plants</option>
              <option value="Biomedical Spare Parts & AMC">Biomedical Spare Parts & Maintenance</option>
              <option value="Custom Quotation">Other Clinical Requirements</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-[#1d1f13] mb-1.5">
              Your Requirements / Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Please provide details regarding machine models, estimated quantity, hospital location in Kerala or India..."
              className="w-full px-4 py-3 rounded-xl border border-[#eaf0dd] bg-[#f7f8f5] focus:bg-white focus:outline-none focus:border-[#009065] text-sm text-[#1d1f13] transition-colors"
            />
          </div>

          {status === "error" && (
            <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Failed to send. Please reach us directly at contact@smartwayhealthcare.com or +91 8921172300.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#009065] hover:bg-[#1d1f13] text-white py-4 rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-50"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmitting Details...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Technical Quote Request</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
