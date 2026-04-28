import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, Phone, Mail, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Book Appointment — Schedule Your Service",
  description:
    "Book your Springfree trampoline service appointment. Easy online scheduling for installation, repair, relocation, and more.",
};

const whatToExpect = [
  {
    icon: CheckCircle2,
    title: "Instant Confirmation",
    description:
      "You&apos;ll receive a confirmation email immediately after booking with all appointment details.",
  },
  {
    icon: Phone,
    title: "Technician Will Call",
    description:
      "Nate or one of our technicians will call within 24 hours to confirm details and answer any questions.",
  },
  {
    icon: Clock,
    title: "Arrival Window",
    description:
      "We provide a 2-hour arrival window and send an SMS reminder the morning of your appointment.",
  },
  {
    icon: Mail,
    title: "Estimate Before Work Begins",
    description:
      "For repairs and complex jobs, we&apos;ll provide a written estimate before any work begins. No surprises.",
  },
];

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-cream overflow-hidden">
        <div className="absolute -top-20 left-0 w-[400px] h-[400px] bg-forest/5 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="default" className="mb-6">
            <CalendarDays className="w-3.5 h-3.5 mr-1.5" />
            Book Online
          </Badge>
          <h1 className="font-fraunces text-5xl lg:text-6xl font-bold text-charcoal tracking-tighter mb-6 leading-[0.95]">
            Book Your{" "}
            <span className="text-forest italic">Service</span>
          </h1>
          <p className="text-charcoal-muted text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            Select a date and time that works for you. Our experienced technicians
            are available Monday through Saturday, with flexible scheduling to
            fit your family&apos;s routine.
          </p>
        </div>
      </section>

      {/* Calendly Embed */}
      <section className="pb-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-card border border-cream-deeper overflow-hidden">
            <div className="px-6 py-4 border-b border-cream-deeper bg-cream/50">
              <h2 className="font-fraunces font-semibold text-xl text-charcoal">
                Select a Time
              </h2>
              <p className="text-charcoal-muted text-sm font-sans mt-1">
                Choose a service type and pick your preferred appointment window.
              </p>
            </div>

            {/* CALENDLY_EMBED_HERE */}
            <div
              className="w-full flex items-center justify-center bg-cream/30"
              style={{ minHeight: "700px" }}
            >
              <div className="text-center py-16 px-8">
                <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-5">
                  <CalendarDays className="w-8 h-8 text-forest" />
                </div>
                <h3 className="font-fraunces font-semibold text-2xl text-charcoal mb-3">
                  Calendly Booking Widget
                </h3>
                <p className="text-charcoal-muted font-sans text-base max-w-sm mx-auto leading-relaxed">
                  The scheduling widget will appear here once Calendly is
                  connected. Contact us directly in the meantime.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="amber" size="lg" asChild>
                    <Link href="tel:+14157288244">
                      <Phone className="w-4 h-4" />
                      Call to Book: 415.728.8244
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">Send Us a Message</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fraunces text-3xl lg:text-4xl font-bold text-charcoal tracking-tighter mb-4">
              What to Expect After Booking
            </h2>
            <p className="text-charcoal-muted font-sans leading-relaxed max-w-lg mx-auto">
              We make the process clear and straightforward from the moment you
              book to the moment the job is done.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whatToExpect.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="flex items-start gap-4 p-6 rounded-xl bg-cream border border-cream-deeper"
                >
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-fraunces font-semibold text-lg text-charcoal mb-2">
                      {step.title}
                    </h3>
                    <p
                      className="text-charcoal-muted text-sm font-sans leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: step.description }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional info */}
          <div className="mt-10 bg-amber/8 border border-amber/20 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-amber/20 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-amber-dark" />
              </div>
              <div>
                <h4 className="font-fraunces font-semibold text-charcoal text-lg mb-1">
                  Cancellation Policy
                </h4>
                <p className="text-charcoal-muted text-sm font-sans leading-relaxed">
                  We ask for 24 hours notice if you need to reschedule. Life
                  happens — we get it. No fees for reschedules. Just give us a
                  heads up and we&apos;ll find a new time that works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact alternatives */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-fraunces text-3xl font-bold text-white tracking-tight mb-4">
            Prefer to reach us directly?
          </h2>
          <p className="text-white/60 font-sans text-lg mb-8">
            We&apos;re always happy to chat through your needs before you book.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+14157288244"
              className="flex items-center gap-2 text-white font-sans font-semibold text-lg hover:text-amber transition-colors"
            >
              <Phone className="w-5 h-5" />
              415.728.8244
            </a>
            <span className="text-white/30 hidden sm:block">•</span>
            <a
              href="mailto:hello@thebackyardpros.com"
              className="flex items-center gap-2 text-white font-sans font-semibold text-lg hover:text-amber transition-colors"
            >
              <Mail className="w-5 h-5" />
              hello@thebackyardpros.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
