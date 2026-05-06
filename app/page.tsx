import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "The Bay Area Backyard Pros — Refurbished Trampolines",
  description:
    "Premium refurbished trampolines for Bay Area families. We restore and install trampolines so they feel like new and are safe for families.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/trampoline-clean.jpeg"
            alt="Refurbished Springfree trampoline in a backyard"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F3D2B]/55 via-[#1F3D2B]/40 to-[#1F3D2B]/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 pt-40">
          <div className="mb-8">
            <Image
              src="/images/logo-primary.png"
              alt="Bay Area Backyard Pros"
              width={1464}
              height={851}
              className="mx-auto w-[320px] sm:w-[420px] h-auto drop-shadow-2xl"
              priority
            />
          </div>

          <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-6" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
            <span className="text-[#C8A96A]">Premium Refurbished Trampolines</span>{" "}
            for Bay Area Families
          </h1>

          <p className="text-white/80 text-xl sm:text-2xl font-fraunces italic leading-relaxed max-w-2xl mx-auto mb-10" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
            We restore and install trampolines so they feel like new and are safe for families.
          </p>

          <Button
            asChild
            variant="amber"
            size="xl"
          >
            <Link href="/contact">
              Get a Quote
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Refurbished Trampolines */}
      <section className="py-28 lg:py-36 bg-cream relative overflow-hidden">
        {/* Dot grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #1F3D2B 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.045,
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-16">
            <span className="h-px w-10 bg-amber" />
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-amber-dark font-semibold">
              Refurbished Springfree Trampolines
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-14 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <h2
                className="font-fraunces font-bold text-forest tracking-tight leading-[1.0] mb-6"
                style={{ fontSize: "clamp(2.4rem, 5vw, 3.75rem)" }}
              >
                Springfree trampolines,{" "}
                <em className="italic text-amber-dark not-italic" style={{ fontStyle: "italic" }}>
                  restored
                </em>{" "}
                to feel new.
              </h2>

              <p className="font-sans text-charcoal-muted text-[1.075rem] leading-relaxed mb-10 max-w-lg">
                We source, fully restore, and professionally install Springfree trampolines across the Bay Area — at roughly half the retail price, without cutting corners on safety.
              </p>

              {/* Size + price chips */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                {[
                  { label: "10ft Round", price: "$800" },
                  { label: "8×13ft Oval", price: "$950" },
                  { label: "11×11ft Square", price: "$975" },
                ].map(({ label, price }) => (
                  <span
                    key={label}
                    className="font-sans text-sm font-medium text-forest border border-forest/20 rounded-full px-4 py-2 bg-white/60 hover:border-forest/40 hover:bg-white transition-[border-color,background-color] duration-200"
                  >
                    {label}
                    <span className="text-charcoal-muted ml-1.5">· {price}</span>
                  </span>
                ))}
              </div>

              {/* Feature bullets */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-12">
                {[
                  "No springs — no spring injuries",
                  "Soft, flexible edge design",
                  "Delivery across the Bay Area",
                  "Professional installation included",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" />
                    <span className="font-sans text-[14.5px] text-charcoal-light leading-snug">{f}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="bg-forest hover:bg-forest-light text-white font-sans font-semibold shadow-forest"
              >
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Image + floating badges */}
            <div className="relative">
              <div
                className="relative rounded-2xl overflow-hidden aspect-[3/4]"
                style={{
                  boxShadow:
                    "0 8px 40px rgba(31,61,43,0.16), 0 2px 8px rgba(31,61,43,0.10)",
                }}
              >
                <Image
                  src="/images/family.jpeg"
                  alt="Family enjoying a refurbished Springfree trampoline"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/45 via-transparent to-transparent" />
              </div>

              {/* Price badge — bottom left, partially overlapping */}
              <div
                className="absolute -left-5 bottom-14 bg-amber rounded-xl px-5 py-4"
                style={{
                  boxShadow:
                    "0 4px 20px rgba(200,169,106,0.45), 0 1px 4px rgba(200,169,106,0.3)",
                }}
              >
                <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-forest/70 font-semibold mb-0.5">
                  Starting at
                </p>
                <p className="font-fraunces text-3xl font-bold text-forest leading-none">
                  $800
                </p>
              </div>

              {/* Savings badge — top right */}
              <div
                className="absolute -right-4 top-10 bg-forest rounded-xl px-4 py-3"
                style={{
                  boxShadow:
                    "0 4px 20px rgba(31,61,43,0.3), 0 1px 4px rgba(31,61,43,0.2)",
                }}
              >
                <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/50 font-semibold mb-0.5">
                  Save up to
                </p>
                <p className="font-fraunces text-2xl font-bold text-white leading-none">
                  50%
                </p>
                <p className="font-sans text-[10px] text-white/45 mt-0.5">vs. retail</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 lg:py-36 bg-[#1A3525] relative overflow-hidden">
        {/* Grain texture */}
        <div className="absolute inset-0 bg-grain opacity-[0.35]" />
        {/* Radial amber glow top-right */}
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(200,169,106,0.09) 0%, transparent 65%)",
            transform: "translate(25%, -30%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row lg:gap-28 gap-16">

            {/* Left: sticky heading block */}
            <div className="lg:w-[340px] lg:flex-shrink-0 lg:pt-[34px]">
              <h2
                className="font-fraunces font-bold text-white leading-[1.05] mb-6"
                style={{
                  fontSize: "clamp(2.6rem, 4.5vw, 3.5rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                Why choose{" "}
                <span
                  className="text-amber italic"
                  style={{ fontStyle: "italic" }}
                >
                  Backyard Pros
                </span>
              </h2>

              <p className="font-sans text-white/45 text-[18px] leading-relaxed mb-10">
                A local Bay Area family — we treat your backyard like it&apos;s our own.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-amber/80 hover:text-amber transition-colors duration-200"
              >
                Meet the team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: numbered reasons */}
            <div className="divide-y divide-white/[0.08]">
              {[
                {
                  num: "01",
                  title: "Safe by design",
                  desc: "Springfree trampolines eliminate the #1 cause of trampoline injuries: exposed springs. Flexible composite rods, a net that keeps jumpers centered, and no hard edges underneath.",
                },
                {
                  num: "02",
                  title: "~50% off retail",
                  desc: "Our refurbished Springfrees start at $800 — roughly half what you'd pay new — restored to like-new condition, with no shortcuts taken on safety or materials.",
                },
                {
                  num: "03",
                  title: "Expert installation",
                  desc: "Nate and his sons have assembled and installed dozens of trampolines across the Bay Area. We handle every step, from delivery to final setup and leveling.",
                },
                {
                  num: "04",
                  title: "Full lifecycle support",
                  desc: "Moving to a new home? Need a repair? We offer trampoline relocation and repairs — for trampolines we sell and others too.",
                },
              ].map(({ num, title, desc }) => (
                <div
                  key={num}
                  className="py-10 flex gap-5 sm:gap-8 group cursor-default"
                >
                  <span
                    className="font-fraunces font-bold text-amber/[0.12] group-hover:text-amber/[0.28] leading-none select-none flex-shrink-0 transition-colors duration-300"
                    style={{ fontSize: "clamp(3.5rem, 6vw, 5rem)", marginTop: "-6px", lineHeight: 1 }}
                  >
                    {num}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-fraunces text-[1.2rem] font-semibold text-white mb-2.5 group-hover:text-amber transition-colors duration-200">
                      {title}
                    </h3>
                    <p className="font-sans text-white/50 text-[15px] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-[#F7F4EC]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces text-4xl lg:text-5xl font-bold text-[#1F3D2B] tracking-tighter mb-8">
            Let&apos;s build something your family will love.
          </h2>
          <Button
            asChild
            size="xl"
            className="bg-[#C8A96A] hover:bg-[#D4B87A] text-[#1F3D2B] font-sans font-semibold shadow-lg"
          >
            <Link href="/contact">
              Contact Us
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
