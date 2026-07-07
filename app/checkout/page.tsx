"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle2, Truck, ShoppingCart, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getDeliveryFee } from "@/lib/delivery";

const products: Record<string, { name: string; price: number }> = {
  "10ft-round":  { name: "Springfree 10ft Round",    price: 800 },
  "8x13-oval":   { name: "Springfree 8×13ft Oval",   price: 950 },
  "11x11-square":{ name: "Springfree 11×11ft Square", price: 975 },
};

const addOns = [
  { id: "hoop",      name: "Basketball Hoop",      price: 75,  withInstall: 120, hasInstall: true },
  { id: "leveling",  name: "Yard Leveling",         price: 100, withInstall: null, hasInstall: false, priceLabel: "$50–$150", priceNote: "If needed — final cost confirmed on-site" },
  { id: "scooter",   name: "Trampoline Scooter",    price: 50,  withInstall: null, hasInstall: false },
  { id: "sprinkler", name: "Trampoline Sprinkler",  price: 40,  withInstall: 80,  hasInstall: true },
  { id: "lights",    name: "Trampoline Lights (Solar)", price: 40, withInstall: 80, hasInstall: true },
];

interface SelectedAddOn {
  id: string;
  withInstall: boolean;
}

function CheckoutInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const productId = searchParams.get("product") ?? "";
  const product = products[productId];

  const [selectedAddOns, setSelectedAddOns] = useState<SelectedAddOn[]>([]);
  const [zip, setZip] = useState("");
  const [zipResult, setZipResult] = useState<{ fee: number; label: string } | null | "not-found">(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!product) router.replace("/shop");
  }, [product, router]);

  if (!product) return null;

  function toggleAddOn(id: string) {
    setSelectedAddOns(prev =>
      prev.find(a => a.id === id)
        ? prev.filter(a => a.id !== id)
        : [...prev, { id, withInstall: false }]
    );
  }

  function toggleInstall(id: string) {
    setSelectedAddOns(prev =>
      prev.map(a => a.id === id ? { ...a, withInstall: !a.withInstall } : a)
    );
  }

  function checkZip() {
    const result = getDeliveryFee(zip);
    setZipResult(result ?? "not-found");
  }

  function calcAddOnsTotal() {
    return selectedAddOns.reduce((sum, sel) => {
      const addon = addOns.find(a => a.id === sel.id)!;
      // Leveling is quoted and paid on-site — never part of the upfront total
      if (addon.id === "leveling") return sum;
      return sum + (sel.withInstall && addon.withInstall ? addon.withInstall! : addon.price);
    }, 0);
  }

  const deliveryFee = zipResult && zipResult !== "not-found" ? zipResult.fee : 0;
  const addOnsTotal = calcAddOnsTotal();
  const total = product.price + addOnsTotal + deliveryFee;

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          selectedAddOns,
          zip,
        }),
      });
      const { url, error } = await res.json();
      if (error) throw new Error(error);
      if (!url) throw new Error("No checkout URL returned");
      window.location.href = url;
    } catch (e) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-cream pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Badge variant="default" className="mb-4">
            <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
            Checkout
          </Badge>
          <h1 className="font-fraunces text-4xl font-bold text-charcoal tracking-tighter">
            Complete Your Order
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left — configuration */}
          <div className="lg:col-span-3 space-y-6">

            {/* Product */}
            <div className="bg-white rounded-2xl p-6 border border-cream-deeper shadow-card">
              <h2 className="font-fraunces font-semibold text-xl text-charcoal mb-4">Your Trampoline</h2>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-fraunces font-bold text-lg text-charcoal">{product.name}</div>
                  <div className="text-charcoal-muted text-sm font-sans mt-1">Fully inspected & refurbished</div>
                </div>
                <div className="font-fraunces font-bold text-2xl text-charcoal">${product.price}</div>
              </div>
            </div>

            {/* Add-ons */}
            <div className="bg-white rounded-2xl p-6 border border-cream-deeper shadow-card">
              <h2 className="font-fraunces font-semibold text-xl text-charcoal mb-1">Add-Ons</h2>
              <p className="text-charcoal-muted text-sm font-sans mb-5">Optional extras to go with your trampoline.</p>
              <div className="space-y-3">
                {addOns.map(addon => {
                  const selected = selectedAddOns.find(a => a.id === addon.id);
                  return (
                    <div key={addon.id} className={`rounded-xl border p-4 transition-colors ${selected ? "border-forest bg-forest/5" : "border-cream-deeper"}`}>
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => toggleAddOn(addon.id)}
                          className="flex items-center gap-3 text-left flex-1"
                        >
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${selected ? "bg-forest border-forest" : "border-charcoal/30"}`}>
                            {selected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                          </div>
                          <div>
                            <div className="font-sans font-medium text-charcoal text-sm">{addon.name}</div>
                            {addon.id === "leveling" && (
                              <div className="text-charcoal-muted text-xs font-sans mt-0.5">{addon.priceNote}</div>
                            )}
                          </div>
                        </button>
                        <div className="text-right ml-4">
                          <div className="font-fraunces font-semibold text-charcoal">
                            {addon.id === "leveling" ? addon.priceLabel : `$${selected && addon.hasInstall && selectedAddOns.find(a => a.id === addon.id)?.withInstall ? addon.withInstall : addon.price}`}
                          </div>
                        </div>
                      </div>

                      {selected && addon.hasInstall && (
                        <button
                          onClick={() => toggleInstall(addon.id)}
                          className="mt-3 ml-8 flex items-center gap-2 text-sm font-sans"
                        >
                          <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${selected && selectedAddOns.find(a => a.id === addon.id)?.withInstall ? "bg-amber border-amber" : "border-charcoal/30"}`}>
                            {selected && selectedAddOns.find(a => a.id === addon.id)?.withInstall && (
                              <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                            )}
                          </div>
                          <span className="text-charcoal-muted">Add installation <span className="text-charcoal font-medium">(${addon.withInstall})</span></span>
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Delivery zip */}
            <div className="bg-white rounded-2xl p-6 border border-cream-deeper shadow-card">
              <h2 className="font-fraunces font-semibold text-xl text-charcoal mb-1 flex items-center gap-2">
                <Truck className="w-5 h-5 text-forest" />
                Delivery & Installation
              </h2>
              <p className="text-charcoal-muted text-sm font-sans mb-5">Enter your zip code to see your delivery fee.</p>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="e.g. 94941"
                  maxLength={5}
                  value={zip}
                  onChange={e => { setZip(e.target.value.replace(/\D/g, "")); setZipResult(null); }}
                  className="flex-1 border border-cream-deeper rounded-xl px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/30 bg-cream"
                />
                <Button variant="forest" onClick={checkZip} disabled={zip.length < 5}>
                  Check
                </Button>
              </div>

              {zipResult === "not-found" && (
                <div className="mt-3 flex items-center gap-2 text-sm font-sans text-red-600">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  We don&apos;t currently deliver to that zip code. <a href="/contact" className="underline ml-1">Contact us</a> to check.
                </div>
              )}
              {zipResult && zipResult !== "not-found" && (
                <div className="mt-3 flex items-center gap-2 text-sm font-sans text-forest font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  Delivery to {zipResult.label}: <span className="font-bold ml-1">${zipResult.fee}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right — order summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 border border-cream-deeper shadow-card sticky top-28">
              <h2 className="font-fraunces font-semibold text-xl text-charcoal mb-5">Order Summary</h2>

              <div className="space-y-3 text-sm font-sans">
                <div className="flex justify-between">
                  <span className="text-charcoal-muted">{product.name}</span>
                  <span className="text-charcoal font-medium">${product.price}</span>
                </div>

                {selectedAddOns.map(sel => {
                  const addon = addOns.find(a => a.id === sel.id)!;
                  const price = addon.id === "leveling" ? addon.price : (sel.withInstall && addon.withInstall ? addon.withInstall : addon.price);
                  return (
                    <div key={sel.id} className="flex justify-between">
                      <span className="text-charcoal-muted">
                        {addon.name}{sel.withInstall ? " + install" : ""}
                      </span>
                      <span className="text-charcoal font-medium">
                        {addon.id === "leveling" ? "$50–$150" : `$${price}`}
                      </span>
                    </div>
                  );
                })}

                {zipResult && zipResult !== "not-found" && (
                  <div className="flex justify-between">
                    <span className="text-charcoal-muted">Delivery</span>
                    <span className="text-charcoal font-medium">${zipResult.fee}</span>
                  </div>
                )}

                {(!zipResult || zipResult === "not-found") && (
                  <div className="flex justify-between text-charcoal-muted italic">
                    <span>Delivery</span>
                    <span>Enter zip above</span>
                  </div>
                )}
              </div>

              <div className="border-t border-cream-deeper mt-5 pt-4 flex justify-between items-center">
                <span className="font-fraunces font-semibold text-charcoal text-lg">Total</span>
                <span className="font-fraunces font-bold text-2xl text-charcoal">
                  {zipResult && zipResult !== "not-found" ? `$${total.toLocaleString()}` : "—"}
                </span>
              </div>

              {selectedAddOns.some(a => a.id === "leveling") && (
                <p className="text-charcoal-muted text-xs font-sans mt-2">* Yard leveling is quoted and paid on-site — not included in this total.</p>
              )}

              <Button
                variant="amber"
                size="xl"
                className="w-full mt-6"
                disabled={!zipResult || zipResult === "not-found" || loading}
                onClick={handleCheckout}
              >
                {loading ? "Redirecting to payment…" : "Pay Now →"}
              </Button>

              <p className="text-charcoal-muted text-xs font-sans text-center mt-3">
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense>
      <CheckoutInner />
    </Suspense>
  );
}
