import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

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
  description: "Scale your e-commerce operations with AI-driven analytics, inventory synchronization, and global logistics management.",
  keywords: ["e-commerce operations", "inventory management", "logistics", "analytics", "The Percentage Company"],
  openGraph: {
    title: "The Percentage Company | Intelligent E-commerce Operations",
    description: "Scale your e-commerce operations with AI-driven analytics, inventory synchronization, and global logistics management.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased font-body bg-black text-white selection:bg-brand-blue selection:text-white">
        <Navigation />
        <main className="min-h-screen relative overflow-hidden bg-black">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
