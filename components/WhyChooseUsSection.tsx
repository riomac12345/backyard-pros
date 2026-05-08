"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Safe and reliable", delay: 0, dx: -44, dy: 0 },
  { label: "High quality work", delay: 160, dx: 0, dy: 36 },
  { label: "Local Bay Area service", delay: 320, dx: 44, dy: 0 },
];

export function WhyChooseUsSection() {
  const [inView, setInView] = useState(false);
  // Increments each time we enter view — forces keyed elements to remount & replay animations
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
    <section className="py-16 lg:py-24 bg-forest overflow-hidden relative">
      <style>{`
        @keyframes ring-ripple {
          0%   { transform: scale(0.8); opacity: 0.55; }
          100% { transform: scale(3.2); opacity: 0; }
        }
        @keyframes icon-pop {
          0%   { transform: scale(0.3) rotate(-12deg); opacity: 0; }
          55%  { transform: scale(1.22) rotate(4deg); opacity: 1; }
          75%  { transform: scale(0.92) rotate(-1deg); }
          90%  { transform: scale(1.06) rotate(0deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes card-shine {
          0%   { opacity: 0; transform: translateX(-100%) skewX(-12deg); }
          50%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="font-fraunces text-4xl lg:text-5xl font-bold text-white tracking-tight mb-10 lg:mb-14"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0) scale(1)" : "translateY(24px) scale(0.96)",
            transition: inView
              ? "opacity 600ms ease-out, transform 700ms cubic-bezier(0.34, 1.56, 0.64, 1)"
              : "none",
            willChange: "opacity, transform",
          }}
        >
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
          {items.map((item) => (
            <div
              key={item.label}
              className={cn(
                "group relative flex flex-col items-center gap-4 rounded-2xl p-6 sm:p-8 cursor-default overflow-hidden",
                "bg-white/[0.08] border border-white/10",
                "hover:bg-white/[0.13] hover:border-amber/25",
                "hover:shadow-[0_8px_40px_rgba(200,169,106,0.12)]",
                "transition-[background-color,border-color,box-shadow] duration-300 ease-out",
              )}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView
                  ? "translateX(0) translateY(0) scale(1)"
                  : `translateX(${item.dx}px) translateY(${item.dy}px) scale(0.84)`,
                transition: inView
                  ? `opacity 550ms ease-out ${item.delay}ms, transform 750ms cubic-bezier(0.34, 1.56, 0.64, 1) ${item.delay}ms`
                  : "none",
                willChange: "opacity, transform",
              }}
            >
              {/* Shine sweep — remounts each entry via animKey */}
              {inView && (
                <span
                  key={animKey}
                  className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none"
                  style={{
                    animation: `card-shine 0.7s ease-out ${item.delay + 200}ms both`,
                  }}
                />
              )}

              {/* Icon */}
              <div className="relative flex items-center justify-center">
                {/* Ripple — remounts each entry */}
                {inView && (
                  <span
                    key={animKey}
                    className="absolute w-12 h-12 rounded-full bg-amber/25"
                    style={{
                      animation: `ring-ripple 0.9s cubic-bezier(0.2, 0, 0.8, 1) ${item.delay + 300}ms both`,
                    }}
                  />
                )}
                {/* Icon container — remounts each entry to restart pop */}
                <div
                  key={animKey}
                  className="relative w-12 h-12 rounded-full bg-amber/20 flex items-center justify-center transition-[background-color] duration-300 ease-out group-hover:bg-amber/35"
                  style={{
                    animation: inView
                      ? `icon-pop 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) ${item.delay + 120}ms both`
                      : "none",
                  }}
                >
                  <CheckCircle2 className="w-6 h-6 text-amber" />
                </div>
              </div>

              <p className="font-fraunces font-semibold text-white text-lg leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
