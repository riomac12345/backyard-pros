"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Package } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductCarousel({ images, alt }: { images: string[]; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function scrollToIndex(i: number) {
    const container = containerRef.current;
    if (!container) return;
    container.scrollTo({ left: i * container.clientWidth, behavior: "smooth" });
  }

  function handleScroll() {
    const container = containerRef.current;
    if (!container || container.clientWidth === 0) return;
    setIndex(Math.round(container.scrollLeft / container.clientWidth));
  }

  if (images.length === 0) {
    return (
      <div className="relative aspect-square md:aspect-auto md:h-full bg-cream-dark flex flex-col items-center justify-center gap-2">
        <div className="w-14 h-14 rounded-full bg-charcoal/10 flex items-center justify-center">
          <Package className="w-7 h-7 text-charcoal/30" />
        </div>
        <span className="text-charcoal/30 text-xs font-sans">Photo coming soon</span>
      </div>
    );
  }

  return (
    <div className="relative aspect-square md:aspect-auto md:h-full bg-cream-dark overflow-hidden">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex h-full w-full overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((url, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={url}
            alt={`${alt} photo ${i + 1}`}
            className="h-full w-full shrink-0 snap-center object-cover"
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => scrollToIndex((index - 1 + images.length) % images.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-charcoal rounded-full p-2 shadow-card transition-[transform,box-shadow] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex((index + 1) % images.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-charcoal rounded-full p-2 shadow-card transition-[transform,box-shadow] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            aria-label="Next photo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-[width,background-color] duration-200",
                  i === index ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/75"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
