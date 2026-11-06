import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import "./inner.css";
import { keywords, seo, siteUrl } from "@/lib/seo";

// Type system — same pairing as the reference site (hydropsindia.com):
// Cormorant Garamond (display) · DM Sans (body, nav, labels)
const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// Logo wordmark only
const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: seo.title, template: "%s | HEES UAE" },
  description: seo.description,
  keywords,
  applicationName: "Hydro Environmental & Engineering Services LLC",
  authors: [{ name: "Hydro Environmental & Engineering Services LLC" }],
  creator: "Hydro Environmental & Engineering Services LLC",
  publisher: "Island Tower Group of Companies",
  category: "Process engineering and industrial services",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Hydro Environmental & Engineering Services LLC",
    title: seo.shortTitle,
    description: seo.description,
    locale: "en_AE",
  },
  twitter: { card: "summary_large_image", title: seo.shortTitle, description: seo.description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  other: { "geo.region": "AE-SH", "geo.placename": "Sharjah" },
};

export const viewport: Viewport = {
  themeColor: "#0a1d33",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AE" suppressHydrationWarning className={`${display.variable} ${body.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
