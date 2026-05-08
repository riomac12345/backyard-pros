import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { RefurbishedSection } from "@/components/RefurbishedSection";

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

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center py-24 pt-32 sm:py-32 sm:pt-40">
          <div className="mb-6 sm:mb-8">
            <Image
              src="/images/logo-hex.png"
              alt="Bay Area Backyard Pros"
              width={500}
              height={500}
              className="mx-auto w-[200px] sm:w-[280px] lg:w-[320px] h-auto drop-shadow-2xl rounded-2xl"
              priority
            />
          </div>

          <h1 className="font-fraunces text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[1.08] mb-5 sm:mb-6" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
            <span className="text-[#C8A96A]">Premium Refurbished Springfree Trampolines</span>{" "}
            for Bay Area Families
          </h1>

          <p className="text-white/80 text-lg sm:text-2xl font-fraunces italic leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
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

      <RefurbishedSection />

      <WhyChooseUsSection />

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-forest tracking-tight mb-8">
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
