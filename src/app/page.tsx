'use client';

import Hero from '@/components/sections/Hero';
import TrustSection from '@/components/sections/TrustSection';
import dynamic from 'next/dynamic';
import ServicesPage from './services/page';
import HowItWorksPage from './how-it-works/page';
import AboutPage from './about/page';
import PricingPage from './pricing/page';
import WhyUsPage from './why-us/page';
import IndustriesPage from './industries/page';

const TestimonialsSection = dynamic(() => import('./testimonials-section/page'));
const FaqPage = dynamic(() => import('./faq/page'));
const ContactPage = dynamic(() => import('./contact/page'));

export default function Home() {
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="trust"><TrustSection /></section>
      <section id="about"><AboutPage /></section>
      <section id="services"><ServicesPage /></section>
      <section id="how-it-works"><HowItWorksPage /></section>
      <section id="why-us"><WhyUsPage /></section>
      <section id="industries"><IndustriesPage /></section>
      <section id="testimonials"><TestimonialsSection /></section>
      <section id="pricing"><PricingPage /></section>
      <section id="faq"><FaqPage /></section>
      <section id="contact"><ContactPage /></section>
    </>
  );
}
