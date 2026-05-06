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

      {/* Service */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-fraunces text-4xl lg:text-5xl font-bold text-forest tracking-tight leading-[1.05] mb-6">
                Refurbished Trampolines
              </h2>
              <p className="font-sans text-charcoal-muted text-lg leading-relaxed mb-8">
                We find, fix, and install trampolines so they are safe and last a long time.
              </p>
              <Button asChild size="lg" className="bg-forest hover:bg-forest-light text-white font-sans font-semibold">
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-cream-deeper">
              <Image
                src="/images/family.jpeg"
                alt="Family enjoying a trampoline in their backyard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces text-4xl lg:text-5xl font-bold text-white tracking-tight mb-14">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              "Safe and reliable",
              "High quality work",
              "Local Bay Area service",
            ].map((item) => (
              <div
                key={item}
                className="flex flex-col items-center gap-4 bg-white/8 rounded-2xl p-8 border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-amber/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-amber" />
                </div>
                <p className="font-fraunces font-semibold text-white text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces text-4xl lg:text-5xl font-bold text-forest tracking-tight mb-8">
            Let&apos;s build something your family will love.
          </h2>
          <Button asChild size="xl" variant="amber">
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
