"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ProductCarousel } from "@/components/shop/ProductCarousel";
import type { Product } from "@/lib/types";

export function ProductGrid({ products }: { products: Product[] }) {
  const [selected, setSelected] = useState<Product | null>(null);

  const extraAttributes = selected
    ? Object.entries(selected.attributes ?? {}).filter(([key]) => key.toLowerCase() !== "size")
    : [];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="group overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-[transform,box-shadow] duration-300 flex flex-col"
          >
            <button
              type="button"
              onClick={() => setSelected(product)}
              className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              aria-label={`View details for ${product.name}`}
            >
              <div className="relative aspect-[6/5] border-b border-cream-deeper">
                {product.images?.length > 0 ? (
                  <div className="flex h-full w-full overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {product.images.map((url, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={i}
                        src={url}
                        alt={`${product.name} photo ${i + 1}`}
                        className="h-full w-full shrink-0 snap-center object-cover"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="h-full w-full flex flex-col items-center justify-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-charcoal/10 flex items-center justify-center">
                      <Package className="w-6 h-6 text-charcoal/30" />
                    </div>
                    <span className="text-charcoal/30 text-xs font-sans">Photo coming soon</span>
                  </div>
                )}
                <div className="absolute top-3 left-3 pointer-events-none">
                  <Badge variant="condition">~50% off retail</Badge>
                </div>
              </div>
            </button>

            <CardContent className="p-5 flex-1 flex flex-col">
              <button
                type="button"
                onClick={() => setSelected(product)}
                className="text-left focus-visible:outline-none"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-fraunces font-semibold text-lg text-charcoal leading-tight">
                      {product.name}
                    </h3>
                    {product.attributes?.size && (
                      <Badge variant="secondary" className="text-xs mt-1">
                        {product.attributes.size}
                      </Badge>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-fraunces font-bold text-2xl text-charcoal">
                      ${Number(product.price).toLocaleString()}
                    </div>
                    {product.original_price && (
                      <div className="text-charcoal-muted text-xs font-sans line-through mt-0.5">
                        ~${Number(product.original_price).toLocaleString()} new
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-charcoal-muted text-sm font-sans leading-relaxed mt-3">
                  {product.description}
                </p>
              </button>
            </CardContent>

            <CardFooter className="px-5 pb-5 pt-0 mt-auto flex flex-col gap-2">
              <Button variant="amber" size="default" className="w-full" asChild>
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="default" className="w-full" asChild>
                <Link href="/contact">Ask a Question</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-3xl max-h-[85vh] bg-white rounded-2xl shadow-card-hover grid grid-cols-1 md:grid-cols-2 overflow-y-auto md:overflow-hidden">
          {selected && (
            <>
              <ProductCarousel images={selected.images ?? []} alt={selected.name} />

              <div className="p-6 md:p-8 flex flex-col md:overflow-y-auto">
                <h2 className="font-fraunces font-bold text-2xl text-charcoal leading-tight pr-8">
                  {selected.name}
                </h2>
                {selected.attributes?.size && (
                  <Badge variant="secondary" className="text-xs mt-2 w-fit">
                    {selected.attributes.size}
                  </Badge>
                )}

                <div className="flex items-baseline gap-2 mt-4">
                  <span className="font-fraunces font-bold text-3xl text-charcoal">
                    ${Number(selected.price).toLocaleString()}
                  </span>
                  {selected.original_price && (
                    <span className="text-charcoal-muted text-sm font-sans line-through">
                      ~${Number(selected.original_price).toLocaleString()} new
                    </span>
                  )}
                </div>

                {selected.description && (
                  <p className="text-charcoal-muted text-sm font-sans leading-relaxed mt-4">
                    {selected.description}
                  </p>
                )}

                {extraAttributes.length > 0 && (
                  <div className="mt-4 flex flex-col gap-1.5">
                    {extraAttributes.map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between text-sm font-sans border-b border-cream-deeper/60 py-1.5"
                      >
                        <span className="text-charcoal-muted">{key}</span>
                        <span className="text-charcoal font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-col gap-2 mt-6">
                  <Button variant="amber" asChild>
                    <Link href="/contact">
                      Get a Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Ask a Question</Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
