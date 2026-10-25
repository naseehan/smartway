import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-3xl p-5 border border-[#eaf0dd] hover:border-[#009065]/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group">
      <div>
        {/* Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#f0ffd1] text-[#009065] border border-[#a9ed42]/40">
            {product.category}
          </span>
          <span className="text-[11px] font-medium text-[#1d1f13]/60 truncate">
            {product.subCategory}
          </span>
        </div>

        {/* Image */}
        <Link href={`/products/${product.slug}`} className="block relative h-44 sm:h-48 w-full rounded-2xl overflow-hidden bg-[#f7f8f5] mb-4">
          <Image
            src={product.image}
            alt={`${product.name} - Medical Equipment Kerala India`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
            loading="lazy"
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold font-title text-[#1d1f13] group-hover:text-[#009065] transition-colors leading-snug mb-2">
          <Link href={`/products/${product.slug}`}>
            {product.name}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-xs text-[#1d1f13]/70 leading-relaxed line-clamp-2 mb-4">
          {product.description}
        </p>

        {/* Specs Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.specs.slice(0, 3).map((spec, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-[#f7f8f5] text-[#1d1f13]/80 border border-[#eaf0dd]"
            >
              <CheckCircle2 className="w-2.5 h-2.5 text-[#009065]" />
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-3 border-t border-[#eaf0dd] flex items-center justify-between gap-2">
        <Link
          href={`/products/${product.slug}`}
          className="text-xs font-semibold text-[#1d1f13] hover:text-[#009065] transition-colors inline-flex items-center gap-1"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link
          href={`/contact?product=${encodeURIComponent(product.name)}`}
          className="px-3 py-1.5 rounded-full bg-[#009065] hover:bg-[#1d1f13] text-white text-xs font-medium transition-colors"
        >
          Request Quote
        </Link>
      </div>
    </div>
  );
}
