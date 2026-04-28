import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "sk_test_placeholder", {
  apiVersion: "2026-04-22.dahlia",
});

const products: Record<string, { name: string; price: number }> = {
  "10ft-round":   { name: "Springfree 10ft Round",     price: 800 },
  "8x13-oval":    { name: "Springfree 8×13ft Oval",    price: 950 },
  "11x11-square": { name: "Springfree 11×11ft Square", price: 975 },
};

const addOns: Record<string, { name: string; price: number; installPrice?: number }> = {
  hoop:      { name: "Basketball Hoop",          price: 75,  installPrice: 120 },
  leveling:  { name: "Yard Leveling",            price: 100 },
  scooter:   { name: "Trampoline Scooter",       price: 50 },
  sprinkler: { name: "Trampoline Sprinkler",     price: 40,  installPrice: 80 },
  lights:    { name: "Trampoline Lights (Solar)", price: 40, installPrice: 80 },
};

export async function POST(req: NextRequest) {
  try {
    const { productId, selectedAddOns, deliveryFee, deliveryLabel } = await req.json();

    const product = products[productId];
    if (!product) return NextResponse.json({ error: "Invalid product" }, { status: 400 });

    const lineItems: Stripe.Checkout.SessionCreateParams["line_items"] = [
      {
        price_data: {
          currency: "usd",
          product_data: { name: product.name, description: "Fully inspected & refurbished Springfree trampoline" },
          unit_amount: product.price * 100,
        },
        quantity: 1,
      },
    ];

    for (const sel of selectedAddOns ?? []) {
      const addon = addOns[sel.id];
      if (!addon) continue;
      const price = sel.withInstall && addon.installPrice ? addon.installPrice : addon.price;
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: { name: addon.name + (sel.withInstall ? " + Installation" : "") },
          unit_amount: price * 100,
        },
        quantity: 1,
      });
    }

    if (deliveryFee > 0) {
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: { name: `Delivery & Setup — ${deliveryLabel ?? "Bay Area"}` },
          unit_amount: deliveryFee * 100,
        },
        quantity: 1,
      });
    }

    const origin = req.headers.get("origin") ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/shop`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
