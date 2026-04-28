import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-forest" />
        </div>
        <h1 className="font-fraunces text-4xl font-bold text-charcoal tracking-tighter mb-4">
          Order Confirmed!
        </h1>
        <p className="text-charcoal-muted font-sans text-lg leading-relaxed mb-8">
          Thanks for your order. We&apos;ll reach out shortly to schedule your delivery and setup. If you have any questions, give us a call at{" "}
          <a href="tel:+14157288244" className="text-forest font-semibold hover:underline">415.728.8244</a>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="amber" size="lg" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
