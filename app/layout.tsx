import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://backyardbros.co"),
  title: {
    default: "The Bay Area Backyard Pros | Springfree Trampoline Sales & Service",
    template: "%s | The Bay Area Backyard Pros",
  },
  description:
    "Expert Springfree trampoline sales, installation, repair, and relocation in Mill Valley, CA. Quality-inspected refurbished trampolines built for families.",
  keywords: [
    "Springfree trampoline",
    "refurbished trampoline",
    "trampoline installation",
    "trampoline repair",
    "trampoline relocation",
    "backyard trampoline",
  ],
  openGraph: {
    type: "website",
    siteName: "The Bay Area Backyard Pros",
    title: "The Bay Area Backyard Pros | Springfree Trampoline Sales & Service",
    description:
      "Expert Springfree trampoline sales, installation, repair, and relocation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
