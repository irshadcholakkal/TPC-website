import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

// Editorial serif — matches PP Editorial New used on caret.so
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thepercentagecompany.com"),
  title: {
    default: "The Percentage FZ-LLC | Full-Stack E-Commerce Partner UAE",
    template: "%s | The Percentage FZ-LLC",
  },
  description:
    "The Percentage FZ-LLC is your full-stack e-commerce partner in the UAE — Amazon.ae & Noon.com marketplace management, website development, mobile apps, performance marketing, and creative production. RAKEZ registered.",
  keywords: [
    "e-commerce partner UAE",
    "Amazon.ae management",
    "Noon.com seller management",
    "e-commerce website development Dubai",
    "performance marketing UAE",
    "The Percentage FZ-LLC",
    "RAKEZ e-commerce company",
    "full stack e-commerce UAE",
    "marketplace management Dubai",
    "e-commerce growth UAE",
    "mobile app development UAE",
    "creative production Dubai",
  ],
  authors: [{ name: "The Percentage Company" }],
  creator: "The Percentage Company",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://thepercentagecompany.com",
    siteName: "The Percentage Company",
    title: "The Percentage Company | E-commerce Operations Management Dubai",
    description:
      "Full-service e-commerce management for jewellery and retail brands across Amazon, Keeta, Talabat, Smile & more.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "The Percentage Company" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Percentage Company | E-commerce Operations Management Dubai",
    description: "Full-service e-commerce management for jewellery and retail brands.",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "https://thepercentagecompany.com" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "The Percentage Company",
  description: "E-commerce operations management for jewellery and retail brands across Amazon, Keeta, Talabat, Smile, and custom platforms.",
  url: "https://thepercentagecompany.com",
  areaServed: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 25.2048, longitude: 55.2708 } },
  address: { "@type": "PostalAddress", addressCountry: "AE", addressRegion: "Dubai" },
  serviceType: "E-commerce Operations Management",
  sameAs: ["https://www.instagram.com/thepercentagecompany"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
        <ThemeProvider>
          <LanguageProvider>
            <Navigation />
            <main className="min-h-screen relative overflow-hidden">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
