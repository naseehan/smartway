import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/seo";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ name: "Home", url: "/" }, ...items];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(allItems)} />
      <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-0">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-[#1d1f13]/60">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#1d1f13]/40" />}
                {isLast ? (
                  <span className="font-semibold text-[#1d1f13] truncate max-w-[200px] sm:max-w-none">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-[#009065] transition-colors flex items-center gap-1"
                  >
                    {index === 0 && <Home className="w-3 h-3" />}
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
