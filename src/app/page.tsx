'use client';

import Hero from '@/components/sections/Hero';
import TrustSection from '@/components/sections/TrustSection';
import dynamic from 'next/dynamic';
import Pricing from './pricing/page';
import HowItWorksPage from './how-it-works/page';
import ServicesPage from './services/page';
import AboutPage from './about/page';

// Dynamically import contact page
const ContactSection = dynamic(() => import('@/app/contact/page'));

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="trust">
        <TrustSection />
      </section>


      <section id="services">
        <ServicesPage />
      </section>

      <section id="how-it-works">
        <HowItWorksPage />
      </section>


      <section id="testimonials">
        <AboutPage />
      </section>


      <section id="pricing">
        <Pricing />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
