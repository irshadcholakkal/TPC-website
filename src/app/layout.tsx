import type { Metadata } from "next";
import { Syne, DM_Sans, Space_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import UISettingsProvider from "@/components/providers/UISettingsProvider";
import { SITE_NAME, SITE_URL, absoluteUrl, createMetadata } from "@/lib/seo";

const GA_MEASUREMENT_ID = "G-QPL6B76DWT";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  category: "business",
  ...createMetadata({
    title: "The Percentage FZ-LLC | E-Commerce Growth Partner in the UAE",
    description:
      "UAE-based e-commerce agency specializing in Amazon.ae, Noon, Shopify websites, mobile apps, and performance marketing with performance-linked pricing.",
    path: "/",
    keywords: [
      "e-commerce agency UAE",
      "Amazon.ae management",
      "Noon seller management UAE",
      "Shopify development UAE",
      "performance marketing Dubai",
      "marketplace management UAE",
      "The Percentage FZ-LLC",
      "RAKEZ registered e-commerce company",
    ],
  }),
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/favicon.ico"),
    sameAs: ["https://www.instagram.com/thepercentagecompany"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+971506331903",
        email: "thepercentage@outlook.com",
        areaServed: "AE",
        availableLanguage: ["English", "Arabic", "French", "Dutch", "Tagalog", "Hindi"],
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    description:
      "UAE-based full-stack e-commerce agency for Amazon.ae, Noon, websites, mobile apps, creative production, and performance marketing.",
    url: SITE_URL,
    telephone: "+971506331903",
    email: "thepercentage@outlook.com",
    areaServed: "AE",
    serviceType: [
      "Marketplace management",
      "E-commerce website development",
      "Mobile app development",
      "Performance marketing",
      "Creative production",
      "Custom software development",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "AE",
      addressRegion: "RAK Economic Zone",
    },
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" data-theme="dark" className={`${syne.variable} ${dmSans.variable} ${spaceMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className="antialiased" style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <UISettingsProvider>
          <Navigation />
          <main className="min-h-screen relative overflow-hidden">
            {children}
          </main>
          <Footer />
        </UISettingsProvider>
      </body>
    </html>
  );
}
