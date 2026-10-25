import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#f7f8f5] px-4 py-20">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#eaf0dd] shadow-sm text-center space-y-5">
        <div className="w-16 h-16 rounded-full bg-[#f0ffd1] text-[#009065] flex items-center justify-center mx-auto text-2xl font-bold font-title">
          404
        </div>

        <h1 className="text-2xl font-bold font-title text-[#1d1f13]">
          Clinical Page Not Found
        </h1>

        <p className="text-sm text-[#1d1f13]/70 leading-relaxed">
          The requested medical resource or equipment page does not exist or has been relocated within our clinical catalog.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#009065] hover:bg-[#1d1f13] text-white px-5 py-3 rounded-full text-xs font-semibold transition-all"
          >
            <Home className="w-4 h-4" /> Return to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 bg-[#f7f8f5] hover:bg-[#eaf0dd] text-[#1d1f13] px-5 py-3 rounded-full text-xs font-semibold border border-[#eaf0dd]"
          >
            <Search className="w-4 h-4 text-[#009065]" /> Browse Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
