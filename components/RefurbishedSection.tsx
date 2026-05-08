"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function RefurbishedSection() {
  const [inView, setInView] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          setAnimKey((k) => k + 1);
        } else {
          setInView(false);
        }
      },
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-cream relative overflow-hidden">
      <style>{`
        @keyframes bar-grow {
          0%   { transform: scaleX(0); opacity: 0; }
          60%  { opacity: 1; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        @keyframes image-enter {
          0%   { opacity: 0; transform: translateY(32px) scale(0.93) rotate(1.8deg); }
          60%  { opacity: 1; }
          80%  { transform: translateY(-4px) scale(1.01) rotate(-0.3deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); }
        }
      `}</style>

      {/* Background glow */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-forest/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Amber accent bar — remounts each entry */}
            {inView && (
              <div
                key={animKey}
                className="h-[3px] bg-amber rounded-full mb-6 mx-auto lg:mx-0 origin-left"
                style={{
                  width: "48px",
                  animation: "bar-grow 600ms cubic-bezier(0.34, 1.56, 0.64, 1) 0ms both",
                }}
              />
            )}
            {/* Spacer so layout doesn't shift when bar unmounts */}
            {!inView && <div className="h-[3px] mb-6" />}

            <h2
              className="font-fraunces text-4xl lg:text-5xl font-bold text-forest tracking-tight leading-[1.05] mb-5"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView
                  ? "translateX(0) translateY(0) scale(1)"
                  : "translateX(-28px) translateY(6px) scale(0.96)",
                transition: inView
                  ? "opacity 600ms ease-out 80ms, transform 750ms cubic-bezier(0.34, 1.56, 0.64, 1) 80ms"
                  : "none",
                willChange: "opacity, transform",
              }}
            >
              Refurbished Trampolines
            </h2>

            <p
              className="font-sans text-charcoal-muted text-lg leading-relaxed mb-8"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(18px)",
                transition: inView
                  ? "opacity 600ms ease-out 200ms, transform 650ms ease-out 200ms"
                  : "none",
                willChange: "opacity, transform",
              }}
            >
              We find, fix, and install trampolines so they are safe and last a long time.
            </p>

            <div
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(14px)",
                transition: inView
                  ? "opacity 600ms ease-out 300ms, transform 650ms ease-out 300ms"
                  : "none",
                willChange: "opacity, transform",
              }}
            >
              <Button asChild size="lg" variant="forest">
                <Link href="/shop">
                  Browse Trampolines
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            {/* Offset decorative border — desktop only */}
            <div
              className="hidden lg:block absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-amber/35 pointer-events-none"
              style={{
                opacity: inView ? 1 : 0,
                transition: inView ? "opacity 700ms ease-out 450ms" : "none",
              }}
            />

            {/* Image wrapper — remounts each entry to restart animation */}
            <div
              key={animKey}
              className={cn(
                "relative rounded-2xl overflow-hidden aspect-[4/3] bg-cream-deeper shadow-card group"
              )}
              style={{
                animation: inView
                  ? "image-enter 900ms cubic-bezier(0.34, 1.56, 0.64, 1) 140ms both"
                  : "none",
                willChange: "opacity, transform",
              }}
            >
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
