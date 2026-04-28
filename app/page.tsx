import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Wrench,
  Truck,
  ShoppingBag,
  Star,
  CheckCircle2,
  ArrowRight,
  Award,
  Users,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Safe. Trampolines. Built to Last. | The Bay Area Backyard Pros",
  description:
    "Expert Springfree trampoline sales, installation, repair, and relocation in Mill Valley, CA. Quality-inspected refurbished trampolines built for families.",
};

const services = [
  {
    icon: ShoppingBag,
    title: "Refurbished Sales",
    description:
      "Springfree trampolines fully inspected and ready to enjoy. Premium quality at a fraction of new pricing.",
    cta: "Browse Shop",
    href: "/shop",
  },
  {
    icon: Wrench,
    title: "Installation",
    description:
      "Professional setup by experienced technicians. Safety-first approach means every bolt torqued, every component verified.",
    cta: "Learn More",
    href: "/services",
  },
  {
    icon: Shield,
    title: "Repairs",
    description:
      "All Springfree models serviced. Parts sourced directly. We fix it right — quickly, affordably, with a satisfaction guarantee.",
    cta: "Get a Quote",
    href: "/services",
  },
  {
    icon: Truck,
    title: "Relocation",
    description:
      "Moving homes? We safely disassemble, transport, and reassemble your Springfree trampoline — no damage, no stress.",
    cta: "Learn More",
    href: "/services",
  },
];

const trustSignals = [
  {
    icon: Clock,
    stat: "3+",
    label: "Years of Experience",
    description: "Serving Mill Valley & surrounding areas",
  },
  {
    icon: Award,
    stat: "★",
    label: "Springfree Specialist",
    description: "Experienced Springfree trampoline technicians",
  },
  {
    icon: Users,
    stat: "500+",
    label: "Happy Families",
    description: "Trampolines sold, installed, and repaired with care",
  },
  {
    icon: CheckCircle2,
    stat: "✓",
    label: "Satisfaction Guarantee",
    description: "We stand behind every job we do. Period.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Mill Valley, CA",
    rating: 5,
    text: "We bought a refurbished Springfree from The Bay Area Backyard Pros and couldn't be happier. The trampoline was spotless, set up perfectly, and our kids haven't stopped bouncing. Absolutely worth every penny.",
    service: "Refurbished Sale + Installation",
  },
  {
    name: "James T.",
    location: "Tiburon, CA",
    rating: 5,
    text: "After a spring broke, I was dreading the repair process. Nate came out the same week, had the parts on hand, and fixed everything in under an hour. Incredibly professional.",
    service: "Repair Service",
  },
  {
    name: "The Patel Family",
    location: "San Rafael, CA",
    rating: 5,
    text: "Moving the trampoline during our house move seemed like a nightmare — until we found The Bay Area Backyard Pros. They handled everything seamlessly. Zero damage, zero stress. Highly recommend.",
    service: "Relocation",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-charcoal">
        {/* Background layers */}
        <div className="absolute inset-0">
          {/* Real photo background */}
          <Image
            src="/images/hero.jpeg"
            alt="Springfree trampoline in a sunny backyard"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/80 via-charcoal/65 to-forest-dark/70" />
          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "256px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 pt-40">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <div className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
            <span className="text-white/80 text-xs font-sans font-medium tracking-wide uppercase">
              Springfree Specialist — Mill Valley, CA
            </span>
          </div>

          <h1
            className="font-fraunces text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tightest leading-[0.95] mb-6 animate-fade-up opacity-0-init"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            Safe.{" "}
            <span className="text-amber italic">Trampolines.</span>
            <br />
            Built to Last.
          </h1>

          <p
            className="text-white/70 text-lg sm:text-xl font-sans leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up opacity-0-init"
            style={{ animationDelay: "250ms", animationFillMode: "forwards" }}
          >
            Expert Springfree trampoline sales, installation, repair, and
            relocation. Your local professionals in Mill Valley — serving
            families across the Bay Area with pride.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0-init"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            <Button variant="amber" size="xl" asChild className="w-full sm:w-auto">
              <Link href="/book">
                Book Now
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="xl"
              asChild
              className="w-full sm:w-auto text-white hover:bg-white/10 border border-white/25 hover:border-white/40"
            >
              <Link href="/shop">Browse Trampolines</Link>
            </Button>
          </div>

          {/* Quick trust badges */}
          <div
            className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 animate-fade-up opacity-0-init"
            style={{ animationDelay: "550ms", animationFillMode: "forwards" }}
          >
            {["Springfree Specialist", "Locally Trusted", "Satisfaction Guaranteed"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0" />
                  <span className="text-white/60 text-sm font-sans">{item}</span>
                </div>
              )
            )}
          </div>
        </div>


      </section>
      {/* Services Overview */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4">
              What We Do
            </Badge>
            <h2 className="font-fraunces text-4xl lg:text-5xl font-bold text-charcoal tracking-tighter mb-4">
              Every Trampoline Need,{" "}
              <span className="text-forest italic">Handled.</span>
            </h2>
            <p className="text-charcoal-muted text-lg font-sans max-w-xl mx-auto leading-relaxed">
              From finding the perfect refurbished trampoline to keeping it in
              top shape for years — we&apos;ve got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group hover:shadow-card-hover hover:-translate-y-1 cursor-pointer"
                >
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-forest/8 flex items-center justify-center mb-5 group-hover:bg-forest group-hover:shadow-forest transition-[background-color,box-shadow]">
                      <Icon className="w-6 h-6 text-forest group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-fraunces font-semibold text-xl text-charcoal mb-3">
                      {service.title}
                    </h3>
                    <p className="text-charcoal-muted text-sm font-sans leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-forest text-sm font-sans font-semibold hover:gap-3 transition-[gap] group/link"
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* Trust Signals */}
      <section className="py-24 lg:py-32 bg-forest relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px",
          }}
        />
        <div className="absolute -right-20 top-0 w-96 h-96 bg-amber/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces text-4xl lg:text-5xl font-bold text-white tracking-tighter mb-4">
              Why Families Choose Us
            </h2>
            <p className="text-white/60 text-lg font-sans max-w-xl mx-auto leading-relaxed">
              We&apos;re not just a service company. We&apos;re your neighbors — and we
              treat every job like it&apos;s in our own backyard.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div
                  key={signal.label}
                  className="bg-white/8 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-white/12 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-amber/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-amber" />
                  </div>
                  <div className="font-fraunces text-4xl font-bold text-white mb-1">
                    {signal.stat}
                  </div>
                  <div className="font-fraunces font-semibold text-white/90 text-lg mb-2">
                    {signal.label}
                  </div>
                  <p className="text-white/50 text-sm font-sans leading-relaxed">
                    {signal.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4">
              Reviews
            </Badge>
            <h2 className="font-fraunces text-4xl lg:text-5xl font-bold text-charcoal tracking-tighter mb-4">
              Don&apos;t Take Our Word for It
            </h2>
            <p className="text-charcoal-muted text-lg font-sans max-w-xl mx-auto leading-relaxed">
              Hundreds of families. One consistent result: they love it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forest via-forest-muted to-forest-light" />
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber fill-amber" />
                    ))}
                  </div>
                  <blockquote className="text-charcoal text-[15px] font-sans leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-fraunces font-semibold text-charcoal">
                        {testimonial.name}
                      </div>
                      <div className="text-charcoal-muted text-xs font-sans mt-0.5">
                        {testimonial.location}
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs shrink-0">
                      {testimonial.service}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-forest/30 rounded-full blur-[100px]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="amber" className="mb-6 bg-amber/20 text-amber border-amber/30">
            Ready to Get Started?
          </Badge>
          <h2 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-6">
            Your backyard&apos;s best upgrade starts here.
          </h2>
          <p className="text-white/60 text-lg font-sans leading-relaxed mb-10 max-w-xl mx-auto">
            Book a service appointment or browse our refurbished trampoline
            inventory. We make it simple.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="amber" size="xl" asChild>
              <Link href="/book">
                Book Now
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
            <Button
              size="xl"
              asChild
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 w-full sm:w-auto"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
