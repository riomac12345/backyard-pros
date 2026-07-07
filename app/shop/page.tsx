import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Info, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/lib/supabase/server";
import { ProductGrid } from "@/components/shop/ProductGrid";
import type { Product } from "@/lib/types";

export const metadata: Metadata = {
  title: "Shop — Refurbished Springfree Trampolines",
  description:
    "Browse our inventory of refurbished Springfree trampolines. All inspected, restored, and priced at around 50% off retail.",
};

const addOns = [
  {
    name: "Basketball Hoop",
    priceLabel: "+$75",
    withInstall: "+$120 with installation",
    note: null,
  },
  {
    name: "Yard Leveling",
    priceLabel: "$50–$150",
    withInstall: null,
    note: "If needed for uneven ground",
  },
  {
    name: "Trampoline Scooter",
    priceLabel: "+$50",
    withInstall: null,
    note: null,
  },
  {
    name: "Trampoline Sprinkler",
    priceLabel: "+$40",
    withInstall: "+$80 with installation",
    note: null,
  },
  {
    name: "Trampoline Lights",
    priceLabel: "+$40",
    withInstall: "+$80 with installation",
    note: "Solar operated",
  },
];

const deliveryZones = [
  {
    price: "$150",
    areas: "Marin & San Francisco",
  },
  {
    price: "$190",
    areas: "Oakland, Daly City → Redwood City",
  },
  {
    price: "$250",
    areas: "San Jose, Walnut Creek, Santa Rosa",
  },
  {
    price: "$300",
    areas: "Sacramento, Santa Cruz",
  },
];

export default async function ShopPage() {
  const supabase = await createClient();
  const { data: productsData } = await supabase
    .from("products")
    .select("*")
    .order("sort_order", { ascending: true });

  const products = (productsData ?? []) as Product[];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-cream overflow-hidden">
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-forest/5 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="default" className="mb-6">
              Current Inventory
            </Badge>
            <h1 className="font-fraunces text-5xl lg:text-6xl font-bold text-charcoal tracking-tighter mb-6 leading-[0.95]">
              Refurbished{" "}
              <span className="text-forest italic">Springfree</span>{" "}
              Trampolines
            </h1>
            <p className="text-charcoal-muted text-xl font-sans leading-relaxed max-w-2xl mb-8">
              Every unit fully inspected, refurbished, and tested. All priced at
              around 50% off retail — with delivery and professional installation
              available.
            </p>

            <div className="inline-flex items-start gap-3 border border-forest/15 rounded-xl px-5 py-4 max-w-2xl">
              <Info className="w-5 h-5 text-forest mt-0.5 shrink-0" />
              <p className="text-charcoal text-sm font-sans leading-relaxed">
                <span className="font-semibold text-forest">Quality Promise:</span>{" "}
                All trampolines are fully inspected, refurbished, and tested before sale.
                We replace any broken parts with genuine Springfree components.
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-charcoal-muted text-sm font-sans">
              <span className="text-forest font-semibold">{products.filter(p => p.in_stock).length}</span>{" "}
              units currently available
            </span>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid products={products} />
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <Badge variant="default" className="mb-4">Optional Add-Ons</Badge>
            <h2 className="font-fraunces text-4xl font-bold text-charcoal tracking-tighter mb-3">
              Make It Even Better
            </h2>
            <p className="text-charcoal-muted font-sans text-lg leading-relaxed">
              Customize your setup with any of the add-ons below. Just let us know when you reach out.
            </p>
          </div>

          <div className="divide-y divide-cream-deeper border border-cream-deeper rounded-2xl overflow-hidden">
            {addOns.map((addon) => (
              <div key={addon.name} className="flex items-center justify-between px-6 py-5 bg-white hover:bg-cream transition-colors">
                <div>
                  <span className="font-fraunces font-semibold text-charcoal text-lg">{addon.name}</span>
                  {addon.note && (
                    <span className="ml-2 text-charcoal-muted text-sm font-sans">— {addon.note}</span>
                  )}
                  {addon.withInstall && (
                    <p className="text-charcoal-muted text-sm font-sans mt-0.5">{addon.withInstall}</p>
                  )}
                </div>
                <span className="font-fraunces font-bold text-xl text-forest shrink-0 ml-4">{addon.priceLabel}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <Badge variant="default" className="mb-4">
              <Truck className="w-3.5 h-3.5 mr-1.5" />
              Delivery & Setup
            </Badge>
            <h2 className="font-fraunces text-4xl font-bold text-charcoal tracking-tighter mb-3">
              We Come to You
            </h2>
            <p className="text-charcoal-muted font-sans text-lg leading-relaxed">
              Delivery includes professional installation. Pricing is based on your location.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliveryZones.map((zone) => (
              <div key={zone.price} className="bg-white rounded-2xl p-6 border border-cream-deeper shadow-card flex items-center gap-5">
                <div className="font-fraunces font-bold text-3xl text-forest shrink-0">{zone.price}</div>
                <div className="text-charcoal font-sans text-sm leading-relaxed">{zone.areas}</div>
              </div>
            ))}
          </div>

          <p className="text-charcoal-muted text-sm font-sans mt-6 text-center">
            Not sure if we cover your area? <Link href="/contact" className="text-forest font-semibold hover:underline">Just ask.</Link>
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream rounded-2xl p-8 shadow-card border border-cream-deeper">
            <div className="flex items-start gap-3 mb-5">
              <CheckCircle2 className="w-5 h-5 text-forest mt-0.5 shrink-0" />
              <div>
                <h3 className="font-fraunces font-semibold text-2xl text-charcoal mb-1">
                  Don&apos;t see what you&apos;re looking for?
                </h3>
                <p className="text-charcoal-muted font-sans leading-relaxed">
                  Inventory changes regularly. If you want a specific size, reach out and we&apos;ll
                  contact you as soon as one becomes available.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="forest" size="lg" asChild>
                <Link href="/contact">Tell Us What You Need</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
