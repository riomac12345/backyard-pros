"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/admin", label: "Products" },
  { href: "/admin/about", label: "About Page" },
];

export function AdminNav() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 mb-8 border-b border-cream-deeper">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={cn(
            "px-4 py-2.5 text-sm font-sans font-medium border-b-2 -mb-px transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest",
            pathname === tab.href
              ? "border-forest text-forest font-semibold"
              : "border-transparent text-charcoal-muted hover:text-charcoal"
          )}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
