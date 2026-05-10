"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function RefurbishedSection() {
  const [animKey, setAnimKey] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setAnimKey((k) => k + 1);
        }
      },
      { threshold: 0, rootMargin: "0px 0px 60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-cream relative overflow-hidden">
      <style>{`
        @keyframes btn-wiggle {
          0%   { transform: rotate(0deg) translateX(0); }
          15%  { transform: rotate(-1.5deg) translateX(-3px); }
          35%  { transform: rotate(1.5deg) translateX(3px); }
          55%  { transform: rotate(-1deg) translateX(-2px); }
          70%  { transform: rotate(0.8deg) translateX(2px); }
          85%  { transform: rotate(-0.3deg) translateX(-1px); }
          100% { transform: rotate(0deg) translateX(0); }
        }
      `}</style>

      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-forest/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="h-[3px] bg-amber rounded-full mb-6 mx-auto lg:mx-0" style={{ width: "48px" }} />

            <h2 className="font-fraunces text-4xl lg:text-5xl font-bold text-forest tracking-tight leading-[1.05] mb-5">
              Refurbished Trampolines
            </h2>

            <p className="font-sans text-charcoal-muted text-lg leading-relaxed mb-8">
              We find, fix, and install trampolines so they are safe and last a long time.
            </p>

            <span
              key={animKey}
              style={{
                display: "inline-block",
                animation: animKey > 0 ? "btn-wiggle 0.55s ease-in-out 1s both" : "none",
              }}
            >
              <Button asChild size="lg" variant="forest">
                <Link href="/shop">
                  Browse Trampolines
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </span>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="hidden lg:block absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-amber/35 pointer-events-none" />
            <div className={cn("relative rounded-2xl overflow-hidden aspect-[4/3] bg-cream-deeper shadow-card group")}>
              <Image
                src="/images/family.jpeg"
                alt="Family enjoying a trampoline in their backyard"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-forest/[0.06] mix-blend-multiply" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
