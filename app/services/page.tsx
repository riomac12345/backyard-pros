import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  Wrench,
  Shield,
  Truck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Services — Expert Trampoline Services",
  description:
    "Professional Springfree trampoline services in Mill Valley, CA: refurbished sales, installation, repair, and relocation. Satisfaction guaranteed.",
};

const services = [
  {
    id: "sales",
    icon: ShoppingBag,
    title: "Refurbished Trampoline Sales",
    subtitle: "Springfree Specialist",
    description:
      "Every trampoline we sell has been through a rigorous inspection and refurbishment process. We source quality used Springfree trampolines, restore them to like-new condition, and sell them at a fraction of the retail price — without compromising safety.",
    features: [
      "Multi-point safety inspection on every unit",
      "Broken parts replaced with genuine Springfree components",
      "Deep-cleaned and fully inspected prior to sale",
      "Handled by experienced Springfree technicians",
      "Delivery & installation available",
    ],
    cta: "Browse Inventory",
    ctaHref: "/shop",
    ctaSecondary: "Get a Quote",
    ctaSecondaryHref: "/contact",
    accentColor: "forest",
    imageHint: "Refurbished trampoline, clean backyard",
    image: "/images/sales.jpeg" as string | undefined,
  },
  {
    id: "installation",
    icon: Wrench,
    title: "Professional Installation",
    subtitle: "Safety-First Setup",
    description:
      "Don't risk improper assembly. Our experienced technicians install your Springfree trampoline correctly the first time — level, secure, and fully tested before we leave. We ensure your trampoline performs safely for years to come.",
    features: [
      "We come to you — no hauling or drop-off required",
      "Setup done right the first time, every time",
      "We don't leave until everything is perfect",
      "Kids can be bouncing the same day",
      "Serving Mill Valley and the greater Bay Area",
      "Flexible scheduling around your family's routine",
    ],
    cta: "Get a Quote",
    ctaHref: "/contact",
    ctaSecondary: "Call 415.728.8244",
    ctaSecondaryHref: "tel:+14157288244",
    accentColor: "amber",
    imageHint: "Trampoline installation in backyard",
    image: "/images/installation.jpeg" as string | undefined,
  },
  {
    id: "repairs",
    icon: Shield,
    title: "Repairs",
    subtitle: "All Springfree Models",
    description:
      "Springs worn out? Frame bent? Enclosure torn? We service all Springfree trampoline models and stock genuine replacement parts. Our technicians diagnose the issue, source the parts, and complete the repair efficiently — so your trampoline is back in action fast.",
    features: [
      "Diagnosis and repair estimate provided upfront",
      "We use real parts — no cheap substitutes",
      "Frame, mat, enclosure, and spring repair",
      "Both residential and commercial units serviced",
      "Most repairs completed in a single visit",
      "Satisfaction guarantee on all repairs",
    ],
    cta: "Get a Quote",
    ctaHref: "/contact",
    ctaSecondary: "Call 415.728.8244",
    ctaSecondaryHref: "tel:+14157288244",
    accentColor: "forest",
    imageHint: "Trampoline repair service",
    image: "/images/repairs-tech.jpeg" as string | undefined,
  },
  {
    id: "relocation",
    icon: Truck,
    title: "Relocation",
    subtitle: "Moving Your Trampoline Safely",
    description:
      "Moving homes is stressful enough without worrying about your trampoline. We handle the full relocation process: safe disassembly, careful transport, and proper reinstallation at your new property. Your trampoline arrives intact and set up right.",
    features: [
      "We take it apart, we put it back together",
      "Nothing gets left behind or lost in the move",
      "Reinstallation at new site included",
      "We check for any damage while we have it apart",
      "Available anywhere in the Bay Area",
      "Flexible scheduling around your move date",
    ],
    cta: "Get a Quote",
    ctaHref: "/contact",
    ctaSecondary: "Call 415.728.8244",
    ctaSecondaryHref: "tel:+14157288244",
    accentColor: "amber",
    imageHint: "Moving a trampoline safely",
    image: undefined as string | undefined,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-24 bg-forest overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px",
          }}
        />
        <div className="absolute -right-40 top-0 w-96 h-96 bg-amber/10 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge
              variant="amber"
              className="mb-6 bg-amber/20 text-amber border-amber/30"
            >
              Our Services
            </Badge>
            <h1 className="font-fraunces text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-6 leading-[0.95]">
              Expert Trampoline{" "}
              <span className="text-amber italic">Services</span>
            </h1>
            <p className="text-white/65 text-xl font-sans leading-relaxed max-w-2xl">
              From refurbished sales to repairs, installation, and relocation
              across Mill Valley and the Bay Area — we&apos;re the only call you need to make.
            </p>
            <div className="mt-8 inline-block bg-white/10 border border-white/20 rounded-lg px-5 py-3">
              <p className="text-white/70 text-sm font-sans">
                <span className="text-amber font-semibold">Pricing Note:</span>{" "}
                Contact us for a custom quote — every job is different and we
                believe in transparent, fair pricing.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Service Sections */}
      <div className="bg-cream">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;
          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-20 lg:py-28 ${isEven ? "bg-cream" : "bg-white"}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/*
                  Mobile:  title → image → description/features/CTA (DOM order)
                  Desktop: two columns — text left/right, image opposite (grid placement)
                */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-7 lg:gap-y-0 lg:items-stretch">

                  {/* Badge + Title */}
                  <div className={`lg:self-end lg:pb-4 ${!isEven ? "lg:col-start-2 lg:row-start-1" : "lg:col-start-1 lg:row-start-1"}`}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-forest" />
                      </div>
                      <Badge variant="secondary">{service.subtitle}</Badge>
                    </div>
                    <h2 className="font-fraunces text-4xl lg:text-5xl font-bold text-charcoal tracking-tighter leading-[1.05]">
                      {service.title}
                    </h2>
                  </div>

                  {/* Image — row-span-2 on desktop so it fills both text rows */}
                  <div className={`lg:row-span-2 lg:row-start-1 ${!isEven ? "lg:col-start-1" : "lg:col-start-2"}`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-full min-h-[280px] shadow-card-hover">
                      <Image
                        src={service.image ?? `https://placehold.co/800x600/2D5016/FAF7F2?text=${encodeURIComponent(service.title)}`}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                    </div>
                  </div>

                  {/* Description + Features + CTA */}
                  <div className={`${!isEven ? "lg:col-start-2 lg:row-start-2" : "lg:col-start-1 lg:row-start-2"}`}>
                    <p className="text-charcoal-muted text-lg font-sans leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-10">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-forest mt-0.5 shrink-0" />
                          <span className="text-charcoal text-[15px] font-sans">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="amber" size="lg" asChild>
                        <Link href={service.ctaHref}>
                          {service.cta}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <Link href={service.ctaSecondaryHref}>
                          {service.ctaSecondary}
                        </Link>
                      </Button>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>
      {/* CTA */}
      <section className="py-20 bg-charcoal relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-forest/40 rounded-full blur-[80px]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-white tracking-tighter mb-5">
            Not sure what you need?
          </h2>
          <p className="text-white/60 text-lg font-sans leading-relaxed mb-8">
            Give us a call or shoot us a message. We&apos;ll figure out the best
            solution together — no pressure, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="amber" size="xl" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="xl"
              asChild
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
            >
              <Link href="tel:+14157288244">Call 415.728.8244</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
