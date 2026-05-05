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
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F3D2B]/85 via-[#1F3D2B]/70 to-[#1F3D2B]/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 pt-40">
          <div className="mb-8">
            <Image
              src="/images/logo.png"
              alt="Bay Area Backyard Pros"
              width={280}
              height={210}
              className="mx-auto drop-shadow-lg"
              priority
            />
          </div>

          <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-6">
            Premium Refurbished Trampolines{" "}
            <span className="text-[#C8A96A] italic">for Bay Area Families</span>
          </h1>

          <p className="text-white/75 text-lg sm:text-xl font-sans leading-relaxed max-w-2xl mx-auto mb-10">
            We restore and install trampolines so they feel like new and are safe for families.
          </p>

          <Button
            asChild
            size="xl"
            className="bg-[#C8A96A] hover:bg-[#D4B87A] text-[#1F3D2B] font-sans font-semibold shadow-lg"
          >
            <Link href="/contact">
              Get a Quote
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Service */}
      <section className="py-24 bg-[#F7F4EC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-fraunces text-4xl lg:text-5xl font-bold text-[#1F3D2B] tracking-tighter leading-[1.05] mb-6">
                Refurbished Trampolines
              </h2>
              <p className="text-[#6B6B6B] text-lg font-sans leading-relaxed mb-8">
                We find, fix, and install trampolines so they are safe and last a long time.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#1F3D2B] hover:bg-[#2A5239] text-white font-sans font-semibold"
              >
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#E2DBCC]">
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
      <section className="py-24 bg-[#1F3D2B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces text-4xl lg:text-5xl font-bold text-white tracking-tighter mb-14">
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
                <div className="w-12 h-12 rounded-full bg-[#C8A96A]/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#C8A96A]" />
                </div>
                <p className="font-fraunces font-semibold text-white text-lg">
                  {item}
                </p>
              </div>
            ))}
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
