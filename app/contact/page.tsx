import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Get in Touch",
  description:
    "Contact The Bay Area Backyard Pros. Questions, quotes, or just want to chat trampolines — we're here.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "415.728.8244",
    href: "tel:+14157288244",
    description: "Mon–Sat, 8am–6pm",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "The San Francisco Bay Area",
    href: null,
    description: "We come to you",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat: 8am–6pm",
    href: null,
    description: "Closed Sundays",
  },
];

const emails = [
  { label: "General", value: "nate@backyardbros.co", href: "mailto:nate@backyardbros.co", description: "General inquiries" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-cream overflow-hidden">
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-forest/5 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="default" className="mb-6">
            Contact Us
          </Badge>
          <h1 className="font-fraunces text-5xl lg:text-6xl font-bold text-charcoal tracking-tighter mb-5 leading-[0.95]">
            Let&apos;s Talk{" "}
            <span className="text-forest italic">Trampolines</span>
          </h1>
          <p className="text-charcoal-muted text-xl font-sans leading-relaxed max-w-2xl">
            Have a question? Ready for a quote? Just want some advice? We&apos;re
            here for it. Reach out and we&apos;ll get back to you quickly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-4 order-2 lg:order-1">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.label}
                    className="bg-white rounded-xl p-5 shadow-card border border-cream-deeper"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-forest" />
                      </div>
                      <div>
                        <div className="text-xs font-sans font-semibold text-charcoal-muted uppercase tracking-wide mb-0.5">
                          {info.label}
                        </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-fraunces font-semibold text-charcoal text-base hover:text-forest transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="font-fraunces font-semibold text-charcoal text-base">
                            {info.value}
                          </div>
                        )}
                        <div className="text-charcoal-muted text-xs font-sans mt-0.5">
                          {info.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Email — all in one card */}
              <div className="bg-white rounded-xl p-5 shadow-card border border-cream-deeper">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-forest" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-sans font-semibold text-charcoal-muted uppercase tracking-wide mb-3">
                      Email
                    </div>
                    <div className="space-y-2.5">
                      {emails.map((email) => (
                        <div key={email.label}>
                          <div className="text-[10px] font-sans font-semibold text-charcoal-muted uppercase tracking-wide">
                            {email.label}
                          </div>
                          <a
                            href={email.href}
                            className="font-sans text-sm text-charcoal hover:text-forest transition-colors break-all"
                          >
                            {email.value}
                          </a>
                          <div className="text-charcoal-muted text-xs font-sans">
                            {email.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Service area map placeholder */}
              <div className="bg-white rounded-xl overflow-hidden shadow-card border border-cream-deeper">
                <div className="aspect-[4/3] bg-forest/5 flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="w-10 h-10 text-forest/40 mx-auto mb-3" />
                    <p className="text-charcoal-muted text-sm font-sans">
                      Service area map
                    </p>
                    <p className="text-charcoal-muted/60 text-xs font-sans mt-1">
                      Map embed goes here
                    </p>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <p className="text-charcoal text-sm font-sans font-medium">
                    Serving the San Francisco Bay Area
                  </p>
                  <p className="text-charcoal-muted text-xs font-sans mt-1">
                    Not sure if we cover your area? Just ask.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form (client component) */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
