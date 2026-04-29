"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const serviceTypes = [
  { value: "sales", label: "Refurbished Trampoline Purchase" },
  { value: "installation", label: "Installation" },
  { value: "repair", label: "Repair" },
  { value: "relocation", label: "Relocation" },
  { value: "quote", label: "General Quote Request" },
  { value: "other", label: "Other / Not Sure" },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function validate(data: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!data.serviceType) errors.serviceType = "Please select a service type";
  if (!data.message.trim()) errors.message = "Message is required";
  else if (data.message.trim().length < 10)
    errors.message = "Please provide a bit more detail (at least 10 characters)";
  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleServiceChange = (value: string) => {
    setForm((prev) => ({ ...prev, serviceType: value }));
    if (errors.serviceType) {
      setErrors((prev) => ({ ...prev, serviceType: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setErrors({ message: "Something went wrong. Please try again or call us directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-card border border-cream-deeper p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-forest" />
        </div>
        <h2 className="font-fraunces font-bold text-3xl text-charcoal mb-4">
          Message Sent!
        </h2>
        <p className="text-charcoal-muted font-sans text-lg leading-relaxed max-w-md mx-auto mb-8">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours —
          usually much sooner.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="forest" size="lg" asChild>
            <Link href="/book">Book an Appointment</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              setSubmitted(false);
              setForm({
                name: "",
                email: "",
                phone: "",
                serviceType: "",
                message: "",
              });
            }}
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-card border border-cream-deeper p-8">
      <h2 className="font-fraunces font-bold text-2xl text-charcoal mb-2">
        Send Us a Message
      </h2>
      <p className="text-charcoal-muted text-sm font-sans mb-8">
        Fill out the form below and we&apos;ll be in touch quickly.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Name */}
        <div>
          <Label htmlFor="name" className="mb-1.5 block">
            Full Name <span className="text-amber-dark">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={errors.name ? "border-red-400 focus-visible:ring-red-400" : ""}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500 font-sans">{errors.name}</p>
          )}
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email" className="mb-1.5 block">
              Email <span className="text-amber-dark">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className={errors.email ? "border-red-400 focus-visible:ring-red-400" : ""}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-500 font-sans">{errors.email}</p>
            )}
          </div>
          <div>
            <Label htmlFor="phone" className="mb-1.5 block">
              Phone{" "}
              <span className="text-charcoal-muted font-normal">(optional)</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="(403) 555-0000"
            />
          </div>
        </div>

        {/* Service Type */}
        <div>
          <Label htmlFor="serviceType" className="mb-1.5 block">
            Service Type <span className="text-amber-dark">*</span>
          </Label>
          <Select value={form.serviceType} onValueChange={handleServiceChange}>
            <SelectTrigger
              className={errors.serviceType ? "border-red-400 focus:ring-red-400" : ""}
            >
              <SelectValue placeholder="What can we help you with?" />
            </SelectTrigger>
            <SelectContent>
              {serviceTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.serviceType && (
            <p className="mt-1.5 text-xs text-red-500 font-sans">{errors.serviceType}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="message" className="mb-1.5 block">
            Message <span className="text-amber-dark">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your trampoline, what you need, and any relevant details (model, size, location, etc.)..."
            className={`min-h-[140px] ${errors.message ? "border-red-400 focus-visible:ring-red-400" : ""}`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-500 font-sans">{errors.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="amber"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send className="w-4 h-4" />
            </>
          )}
        </Button>

        <p className="text-center text-charcoal-muted text-xs font-sans">
          We respect your privacy. Your info is never shared or sold.
        </p>
      </form>
    </div>
  );
}
