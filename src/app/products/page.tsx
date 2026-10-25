import React from "react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductsClient from "@/components/products/ProductsClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Medical Equipment & Supplies Catalog",
  description:
    "Explore 43+ medical equipment and healthcare products from SmartWay Healthcare Kerala: Hemodialysis machines, Elisio dialyzers, CLIA diagnostic systems, hospital consumables & precision spares.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="bg-[#f7f8f5] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs items={[{ name: "Products Catalog", url: "/products" }]} />

        {/* Page Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#eaf0dd] text-xs font-semibold text-[#009065] uppercase tracking-wider">
            Clinical Assets & Healthcare Catalog
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-title text-[#1d1f13] tracking-tight">
            Medical Equipment & Health Care Supplies
          </h1>
          <p className="text-base text-[#1d1f13]/70 leading-relaxed">
            Authorized distribution of nephrology dialysis units, in-vitro diagnostic analyzers, high-sensitivity test kits, and surgical hospital essentials across Ernakulam, Kerala, and pan-India.
          </p>
        </div>

        {/* Client Products List with live search and filters */}
        <ProductsClient />
      </div>
    </div>
  );
}
