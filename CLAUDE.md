# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed locally (`node_modules/puppeteer`). Chrome is at `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color

---

# Project: The Bay Area Backyard Pros

## Business Overview
- **Company:** The Bay Area Backyard Pros
- **Owner:** Nate Macdonald — a teacher based in Mill Valley, CA
- **Team:** Nate + his sons Quinn and Peter (Bodhi is not included in customer-facing copy). They split up jobs independently or work together depending on the day.
- **Service area:** The San Francisco Bay Area (not just Marin County)
- **Phone:** 415.728.8244
- **Email:** placeholder `nate@bayareabackyardpros.com` — Nate will provide a real company email when ready
- **What they do:** Springfree trampoline sales (refurbished), installation, repairs, and relocation
- **Tagline:** "Safe. Trampolines. Built to Last."

## Tech Stack
- **Framework:** Next.js 14 App Router (TypeScript)
- **Styling:** Tailwind CSS with custom design tokens
- **Components:** shadcn/ui (Button, Card, Input, Textarea, Label, Select, Badge)
- **Fonts:** Fraunces (headings) + DM Sans (body) via next/font/google
- **Payments:** Stripe (installed, test mode placeholders in `.env.local`)
- **Dev server:** `npm run dev` — runs on port 3000 (or 3001 if 3000 is taken)

## Design System
Custom Tailwind tokens defined in `tailwind.config.ts`:
- `forest` / `forest-dark` / `forest-muted` / `forest-light` — primary green
- `cream` / `cream-dark` / `cream-deeper` — background tones
- `charcoal` / `charcoal-muted` — text colors
- `amber` — accent/CTA color (buttons, highlights)
- Fonts: `font-fraunces` (headings), `font-sans` = DM Sans (body)

## Pages
| Route | Description |
|---|---|
| `/` | Home — hero (real photo), services grid, trust signals, testimonials, CTA |
| `/services` | 4 service sections: Refurbished Sales, Installation, Repairs, Relocation |
| `/shop` | Product listings with Buy Now → checkout flow |
| `/checkout` | Add-ons picker, zip code delivery fee lookup, order summary → Stripe |
| `/checkout/success` | Post-payment confirmation page |
| `/book` | Booking page with Calendly widget placeholder |
| `/about` | About page — Nate + Quinn + Peter, father & sons story |
| `/contact` | Contact form (client component) + contact info |

## Key Components
- `components/Navbar.tsx` — always `bg-charcoal`, white text, amber "Book Now" button, leaf icon
- `components/Footer.tsx` — dark footer with links, phone, service area
- `components/ContactForm.tsx` — `"use client"` form (split from contact/page.tsx to allow metadata)
- `components/ui/button.tsx` — variants: default, amber, outline, ghost, link, outline-amber, forest

## Current Inventory (Shop)
| Product | Price | ~Retail |
|---|---|---|
| 10ft Round | $800 | ~$1,600 |
| 8×13ft Oval | $950 | ~$1,900 |
| 11×11ft Square | $975 | ~$1,950 |

All ~50% off retail. Delivery + professional installation available.

## Add-Ons (Shop/Checkout)
- Basketball Hoop: +$75 (with installation +$120)
- Yard Leveling: $50–$150 (if needed, confirmed on-site)
- Trampoline Scooter: +$50
- Trampoline Sprinkler: +$40 (with installation +$80)
- Trampoline Lights (Solar): +$40 (with installation +$80)

## Delivery Zones
| Fee | Areas |
|---|---|
| $150 | Marin & San Francisco |
| $190 | Oakland, Daly City → Redwood City |
| $250 | San Jose, Walnut Creek, Santa Rosa |
| $300 | Sacramento, Santa Cruz |

Zip code lookup lives in `lib/delivery.ts`.

## Stripe Setup
- Packages installed: `stripe`, `@stripe/stripe-js`
- API route: `app/api/checkout/route.ts` — creates a Stripe Checkout session
- Env vars in `.env.local`:
  - `STRIPE_SECRET_KEY` — replace with real key from stripe.com dashboard
  - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — replace with real publishable key
- Currently using placeholder test keys — **not functional until real keys are added**
- Stripe API version: `2026-04-22.dahlia`

## Images
All real photos live in `public/images/`:
- `hero.jpeg` — hero background (home page)
- `repairs-tech.jpeg` — person working on trampoline (repairs section) — text was cropped out of this image
- `installation.jpeg` — assembled trampoline in backyard (installation section)
- `sales.jpeg` — sales section image
- Original source files are in `brand_assets/`
- Shop product cards and about page photo are still placeholders — Nate will supply photos

## To-Do / Not Yet Done
- [ ] Real company email (swap `nate@bayareabackyardpros.com` everywhere)
- [ ] Real Stripe keys (add to `.env.local`)
- [ ] Shop product photos (Nate will supply photos of each trampoline size)
- [ ] About page photo (placeholder box is there, ready to receive image)
- [ ] Wire up contact form to actually send emails (currently no backend — use Formspree or Resend)
- [ ] Set up Calendly (or similar) on the book page
- [ ] Deploy to Vercel + connect domain

## Decisions & Preferences
- Ask before building anything non-trivial
- No "certified" or "insured" language anywhere customer-facing
- Do not say "warranty" — they don't offer one
- Service area is "the Bay Area" or "the San Francisco Bay Area" — not "Marin County"
- Navbar is always solid `bg-charcoal` — never transparent or scroll-triggered
- No gradient bridges between page sections
- Bodhi is Nate's son but is NOT mentioned in customer-facing copy — only Quinn and Peter
