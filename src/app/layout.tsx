import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Percentage Company | Intelligent E-commerce Operations",
  description:
    "Scale your e-commerce operations with AI-driven analytics, inventory synchronization, and global logistics management.",
  keywords: [
    "e-commerce operations",
    "inventory management",
    "logistics",
    "analytics",
    "The Percentage Company",
  ],
  openGraph: {
    title: "The Percentage Company | Intelligent E-commerce Operations",
    description:
      "Scale your e-commerce operations with AI-driven analytics, inventory synchronization, and global logistics management.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased font-body" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
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
