"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

export default function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products.slice(0, 8)
      : products.filter((p) => p.category === selectedCategory).slice(0, 8);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0ffd1] border border-[#a9ed42]/40 text-xs font-semibold text-[#009065] uppercase tracking-wider">
            Clinical Catalog
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-title text-[#1d1f13] tracking-tight">
            Featured Medical Equipment & Health Care Products
          </h2>
          <p className="text-sm sm:text-base text-[#1d1f13]/70">
            From precision hemodialysis machinery and polynephron dialyzers to rapid IVD diagnostics and surgical essentials in Kerala & India.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-[#1d1f13] text-white shadow-md"
                  : "bg-[#f7f8f5] text-[#1d1f13]/70 hover:bg-[#eaf0dd] hover:text-[#1d1f13]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA to view full catalog */}
        <div className="mt-14 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#009065] hover:bg-[#1d1f13] text-white px-8 py-4 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg group"
          >
            <span>View All 43 Medical Equipment & Healthcare Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
