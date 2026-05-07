import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/shop", label: "Shop Trampolines" },
  { href: "/book", label: "Book Appointment" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/services", label: "Refurbished Sales" },
  { href: "/services", label: "Installation" },
  { href: "/services", label: "Repairs" },
  { href: "/services", label: "Relocation" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded-md">
              <Image
                src="/images/logo-hex.png"
                alt="Bay Area Backyard Pros"
                width={120}
                height={120}
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 font-sans">
              Your local Springfree trampoline specialist in Mill Valley, CA.
              Sales, installation, repair, and relocation. Built for families.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-forest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-forest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-fraunces font-semibold text-white mb-4 text-base">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm font-sans hover:text-white transition-colors focus-visible:outline-none focus-visible:text-amber"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-fraunces font-semibold text-white mb-4 text-base">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-white/60 text-sm font-sans hover:text-white transition-colors focus-visible:outline-none focus-visible:text-amber"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-fraunces font-semibold text-white mb-4 text-base">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber mt-0.5 shrink-0" />
                <a href="tel:+14157288244" className="text-white/60 text-sm font-sans hover:text-white transition-colors">
                  415.728.8244
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber mt-0.5 shrink-0" />
                <a href="mailto:nate@bayareabackyardpros.com" className="text-white/60 text-sm font-sans hover:text-white transition-colors break-all">
                  nate@bayareabackyardpros.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber mt-0.5 shrink-0" />
                <a href="mailto:sales@bayareabackyardpros.com" className="text-white/60 text-sm font-sans hover:text-white transition-colors break-all">
                  sales@bayareabackyardpros.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber mt-0.5 shrink-0" />
                <a href="mailto:install@bayareabackyardpros.com" className="text-white/60 text-sm font-sans hover:text-white transition-colors break-all">
                  install@bayareabackyardpros.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber mt-0.5 shrink-0" />
                <a href="mailto:support@bayareabackyardpros.com" className="text-white/60 text-sm font-sans hover:text-white transition-colors break-all">
                  support@bayareabackyardpros.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm font-sans">
                  Serving the San Francisco Bay Area
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-sans">
            © {new Date().getFullYear()} The Bay Area Backyard Pros. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-sans italic">
            Built for families, by locals.
          </p>
        </div>
      </div>
    </footer>
  );
}
