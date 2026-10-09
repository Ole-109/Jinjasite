import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Shippori_Mincho_B1, Zen_Kaku_Gothic_New } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/site";
import "./globals.css";

const shippori = Shippori_Mincho_B1({
  variable: "--font-shippori",
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}｜${site.tagline} — 奈良県十津川村・玉置山`,
    template: `%s｜${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: site.name,
    images: [{ url: "/images/honsha.jpg", width: 2400, height: 1599, alt: "霧に包まれた玉置神社本殿" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0c0e0c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" id="top" className={`${shippori.variable} ${zenKaku.variable} ${cormorant.variable}`}>
      <body className="flex min-h-svh flex-col">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-sumi"
        >
          本文へスキップ
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
