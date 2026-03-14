'use client';

import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import TrustSection from '@/components/sections/TrustSection';
import AboutPage from './about/page';
import ServicesPage from './services/page';
import HowItWorksPage from './how-it-works/page';
import WhyUsPage from './why-us/page';
import IndustriesPage from './industries/page';
import PricingPage from './pricing/page';
import FaqPage from './faq/page';
import ContactPage from './contact/page';

export default function Home() {
  return (
    <>
      {/* 1. Hero — 3D % symbol + headline + CTAs */}
      <Hero />

      {/* 2. Stats bar — 5 key metrics */}
      <StatsBar />

      {/* 3. Platform ticker */}
      <TrustSection />

      {/* 4. About */}
      <AboutPage />

      {/* 5. Services — 6 cards with 3D tilt */}
      <ServicesPage />

      {/* 6. How It Works — 4-step process */}
      <HowItWorksPage />

      {/* 7. Why Choose Us — 6 points */}
      <WhyUsPage />

      {/* 8. Industries — tag cloud */}
      <IndustriesPage />

      {/* 9. Pricing — 3 plans */}
      <PricingPage />

      {/* 10. FAQ — accordion */}
      <FaqPage />

      {/* 11. Contact — form + info */}
      <ContactPage />
    </>
  );
}
