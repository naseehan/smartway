import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, PhoneCall, Truck, Award } from "lucide-react";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductCard from "@/components/products/ProductCard";
import ContactForm from "@/components/contact/ContactForm";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata, generateProductSchema } from "@/lib/seo";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all 43 products
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate dynamic SEO metadata for each product
export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return buildMetadata({
    title: `${product.name} Supplier in Kerala`,
    description: product.seoDescription,
    path: `/products/${product.slug}`,
    image: product.image,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.id, product.category, 4);

  return (
    <div className="bg-[#f7f8f5] min-h-screen py-10">
      {/* Schema.org Product Structured Data */}
      <JsonLd data={generateProductSchema(product)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumbs
          items={[
            { name: "Products", url: "/products" },
            { name: product.category, url: `/products?category=${encodeURIComponent(product.category)}` },
            { name: product.name, url: `/products/${product.slug}` },
          ]}
        />

        {/* Back Link */}
        <div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1d1f13]/60 hover:text-[#009065] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Products Catalog
          </Link>
        </div>

        {/* Main Product Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: Product Image & Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-3xl p-8 border border-[#eaf0dd] shadow-sm relative overflow-hidden flex items-center justify-center min-h-[380px]">
              <div className="relative h-72 sm:h-80 w-full">
                <Image
                  src={product.image}
                  alt={`${product.name} - Medical Equipment Kerala India`}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-2xl bg-white border border-[#eaf0dd] space-y-1">
                <ShieldCheck className="w-4 h-4 text-[#009065] mx-auto" />
                <div className="text-[11px] font-bold text-[#1d1f13]">100% Genuine</div>
                <div className="text-[10px] text-[#1d1f13]/60">OEM Standards</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-[#eaf0dd] space-y-1">
                <Truck className="w-4 h-4 text-[#009065] mx-auto" />
                <div className="text-[11px] font-bold text-[#1d1f13]">Rapid Delivery</div>
                <div className="text-[10px] text-[#1d1f13]/60">Kerala & India</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-[#eaf0dd] space-y-1">
                <Award className="w-4 h-4 text-[#009065] mx-auto" />
                <div className="text-[11px] font-bold text-[#1d1f13]">Certified</div>
                <div className="text-[10px] text-[#1d1f13]/60">CE / ISO Compliant</div>
              </div>
            </div>
          </div>

          {/* Right: Product Details & Specs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#f0ffd1] text-[#009065] text-xs font-semibold border border-[#a9ed42]/40">
                  {product.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-white text-[#1d1f13]/70 text-xs font-medium border border-[#eaf0dd]">
                  {product.subCategory}
                </span>
                <span className="text-xs text-[#1d1f13]/50">ID: {product.id.toUpperCase()}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold font-title text-[#1d1f13] tracking-tight">
                {product.name}
              </h1>

              <p className="text-base text-[#1d1f13]/80 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Technical Specifications */}
            <div className="bg-white rounded-3xl p-6 border border-[#eaf0dd] space-y-4">
              <h2 className="text-base font-bold font-title text-[#1d1f13] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#009065]" />
                Technical Specifications & Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {product.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[#f7f8f5] border border-[#eaf0dd] text-xs font-medium text-[#1d1f13] flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#009065]" />
                    {spec}
                  </div>
                ))}
              </div>
            </div>

            {/* Distribution Area & Availability Note */}
            <div className="p-4 rounded-2xl bg-[#009065]/5 border border-[#009065]/20 text-xs text-[#1d1f13]/80 space-y-1">
              <div className="font-bold text-[#009065] flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5" /> Regional Distribution Details:
              </div>
              <p>
                Supplied directly by SmartWay Healthcare to hospitals, clinical setups, and dialysis centers across Ernakulam, Kochi, Thiruvananthapuram, Calicut, and all districts of Kerala, with express pan-India bulk shipping.
              </p>
            </div>

            {/* Inquiry Form Card */}
            <div className="pt-2">
              <ContactForm initialProduct={product.name} />
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="pt-16 border-t border-[#eaf0dd] space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#009065] uppercase tracking-wider">
                  Similar Clinical Assets
                </span>
                <h3 className="text-2xl font-bold font-title text-[#1d1f13]">
                  Related {product.category} Products
                </h3>
              </div>
              <Link
                href={`/products?category=${encodeURIComponent(product.category)}`}
                className="text-xs font-semibold text-[#009065] hover:underline"
              >
                View Category
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
