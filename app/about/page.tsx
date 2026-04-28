import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Shield,
  Users,
  ArrowRight,
  CheckCircle2,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About — Local Experts You Can Trust",
  description:
    "Meet Nate Macdonald and his three boys Quinn, Peter, and Bodhi — the Mill Valley family behind The Bay Area Backyard Pros. Expert Springfree trampoline service built on trust.",
};

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Every decision we make — from the trampolines we sell to how we install them — is guided by one question: is this as safe as possible? We don't cut corners. Ever.",
  },
  {
    icon: Heart,
    title: "Quality Always",
    description:
      "We only sell and service Springfree trampolines because they are, simply put, the best. And when we refurbish them, we use genuine parts and do the job right.",
  },
  {
    icon: Users,
    title: "Community Roots",
    description:
      "We&apos;re a father and his three boys from Mill Valley. We know these streets, we know these families, and we care about doing right by our community. Word of mouth is everything to us.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-cream-dark overflow-hidden">
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-forest/6 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <Badge variant="default" className="mb-6">
                <Leaf className="w-3.5 h-3.5 mr-1.5" />
                Our Story
              </Badge>
              <h1 className="font-fraunces text-5xl lg:text-6xl font-bold text-charcoal tracking-tighter mb-6 leading-[0.95]">
                Local Experts{" "}
                <span className="text-forest italic">You Can Trust</span>
              </h1>
              <p className="text-charcoal-muted text-xl font-sans leading-relaxed mb-10">
                Hi — I&apos;m Nate Macdonald, a Mill Valley teacher, and together
                with my three boys Quinn, Peter, and Bodhi, we run The Bay Area Backyard Pros.
                Sometimes we work jobs together, sometimes we split up and cover
                more ground — but it&apos;s always one of us showing up for you.
              </p>
              <div className="flex gap-10">
                <div>
                  <div className="font-fraunces text-4xl font-bold text-forest">3+</div>
                  <div className="text-charcoal-muted text-sm font-sans mt-1">Years Serving Families</div>
                </div>
                <div>
                  <div className="font-fraunces text-4xl font-bold text-forest">500+</div>
                  <div className="text-charcoal-muted text-sm font-sans mt-1">Happy Customers</div>
                </div>
                <div>
                  <div className="font-fraunces text-4xl font-bold text-forest">Bay</div>
                  <div className="text-charcoal-muted text-sm font-sans mt-1">Area & Beyond</div>
                </div>
              </div>
            </div>
            {/* Photo placeholder */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border-2 border-dashed border-charcoal/20 bg-charcoal/5 flex flex-col items-center justify-center gap-3">
              <div className="w-14 h-14 rounded-full bg-charcoal/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-charcoal/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
              </div>
              <span className="text-charcoal/35 text-sm font-sans">Photo coming soon</span>
            </div>
          </div>
        </div>
      </section>
      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-fraunces text-4xl font-bold text-charcoal tracking-tighter mb-8">
            How It Started
          </h2>

          <div className="space-y-6 text-charcoal-muted font-sans text-lg leading-relaxed">
            <p>
              I&apos;ve been a teacher in Mill Valley for years, and that background
              shaped everything about how I approach this work. You spend enough
              time around kids and you develop a pretty strong instinct for what
              keeps them safe — and what doesn&apos;t.
            </p>
            <p>
              When we got a Springfree trampoline for our own backyard, I was
              immediately impressed. No springs on the outside. Soft frame edge.
              A design that genuinely thought through the ways kids get hurt and
              engineered them away. My boys and I all became believers.
            </p>
            <p>
              What I noticed was that families in the Bay Area who wanted a Springfree
              didn&apos;t have a great local option. Big box stores didn&apos;t carry
              them. Buying one used online felt like a gamble. There was no one
              to call if something needed fixing. So the boys and I stepped in —
              got trained on the product, built relationships with suppliers, and
              started helping neighbors get set up safely.
            </p>
            <p>
              Three years in, we&apos;ve helped hundreds of families across Mill
              Valley, Tiburon, San Rafael, and beyond. Sometimes all four of us
              are on the same job; sometimes Quinn or Peter heads out
              solo. Either way, every job gets the same care and attention.
              These are our neighbors — we don&apos;t cut corners.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              "Springfree Specialist",
              "Locally owned & operated",
              "Mill Valley, CA based",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-forest shrink-0" />
                <span className="text-charcoal text-sm font-sans font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Values */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4">
              What We Stand For
            </Badge>
            <h2 className="font-fraunces text-4xl lg:text-5xl font-bold text-charcoal tracking-tighter mb-4">
              Our Values
            </h2>
            <p className="text-charcoal-muted text-lg font-sans max-w-lg mx-auto leading-relaxed">
              These aren&apos;t buzzwords — they&apos;re the actual beliefs that guide
              every service call, every sale, every interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl p-8 shadow-card border border-cream-deeper text-center hover:shadow-card-hover hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-7 h-7 text-forest" />
                  </div>
                  <h3 className="font-fraunces font-bold text-2xl text-charcoal mb-4">
                    {value.title}
                  </h3>
                  <p className="text-charcoal-muted font-sans text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px",
        }} />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-white tracking-tighter mb-5">
            Let&apos;s work together.
          </h2>
          <p className="text-white/65 text-lg font-sans leading-relaxed mb-8">
            Whether you need a trampoline, an installation, a repair, or just
            some advice — Nate, Quinn, Peter, and Bodhi are here for it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="amber" size="xl" asChild>
              <Link href="/book">
                Book a Service
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="xl"
              asChild
              className="bg-white/15 text-white border border-white/25 hover:bg-white/25"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
