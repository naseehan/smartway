"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Search, Filter, RefreshCw } from "lucide-react";
import { products, categories, subCategoriesByCategory } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

export default function ProductsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("All");

  // Read ?category= after hydration instead of via useSearchParams, so the
  // static HTML contains the full product grid for search engines.
  useEffect(() => {
    const category = new URLSearchParams(window.location.search).get("category");
    if (category && (categories as readonly string[]).includes(category)) {
      setSelectedCategory(category);
    }
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specs.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const matchesSubCategory =
        selectedSubCategory === "All" || product.subCategory === selectedSubCategory;

      return matchesSearch && matchesCategory && matchesSubCategory;
    });
  }, [searchQuery, selectedCategory, selectedSubCategory]);

  const activeSubCategories =
    selectedCategory !== "All" && subCategoriesByCategory[selectedCategory]
      ? subCategoriesByCategory[selectedCategory]
      : [];

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setSelectedSubCategory("All");
  };

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedSubCategory("All");
  };

  return (
    <div className="space-y-8">
      {/* Search and Category Control Bar */}
      <div className="bg-white rounded-3xl p-6 border border-[#eaf0dd] shadow-sm space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-[#1d1f13]/40 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search medical equipment by name, category, or spec (e.g. dialyzer, CLIA, RO plant, catheter)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#f7f8f5] border border-[#eaf0dd] focus:bg-white focus:outline-none focus:border-[#009065] text-sm text-[#1d1f13] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#1d1f13]/50 hover:text-[#1d1f13]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#1d1f13] uppercase tracking-wider flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[#009065]" /> Categories
            </span>
            {(selectedCategory !== "All" || selectedSubCategory !== "All" || searchQuery) && (
              <button
                onClick={handleReset}
                className="text-xs font-semibold text-[#009065] hover:underline flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" /> Reset Filters
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#1d1f13] text-white shadow-sm"
                    : "bg-[#f7f8f5] text-[#1d1f13]/70 hover:bg-[#eaf0dd] hover:text-[#1d1f13]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Subcategories (if a category is active) */}
        {activeSubCategories.length > 0 && (
          <div className="pt-3 border-t border-[#eaf0dd] flex flex-wrap gap-1.5 items-center">
            <span className="text-xs text-[#1d1f13]/60 mr-2">Filter Subcategory:</span>
            {activeSubCategories.map((sub) => (
              <button
                key={sub}
                type="button"
                onClick={() => setSelectedSubCategory(sub)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedSubCategory === sub
                    ? "bg-[#009065] text-white"
                    : "bg-[#f7f8f5] text-[#1d1f13]/70 hover:bg-[#eaf0dd]"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-[#1d1f13]/70 px-2">
        <span>
          Showing <strong className="text-[#1d1f13]">{filteredProducts.length}</strong> of {products.length} products
        </span>
        <span>Authorized Clinical Distribution in Kerala & Across India</span>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-[#eaf0dd] p-8 space-y-4">
          <p className="text-lg font-bold font-title text-[#1d1f13]">
            No medical equipment found matching your criteria.
          </p>
          <p className="text-sm text-[#1d1f13]/60 max-w-md mx-auto">
            Try adjusting your search terms or filter to find specific nephro care devices, IVD test kits, or general supplies.
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-2.5 rounded-full bg-[#009065] text-white text-sm font-semibold hover:bg-[#1d1f13] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
