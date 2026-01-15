import Hero from '@/components/sections/Hero';
import TrustSection from '@/components/sections/TrustSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';
import { TextHoverEffectDemo } from '@/components/sections/hover-text';
import { TimelineDemo } from '@/components/sections/time-line';
import ClaritySection from '@/components/sections/ClaritySection';

export default function Home() {
  return (
    <>

      <Hero />
      <TrustSection />
      <TextHoverEffectDemo />
      {/* <FeaturesSection /> */}
      <TimelineDemo />
      {/* <ClaritySection /> */}
      {/* <TestimonialsSection />
      <PricingSection /> */}
    </>
  );
}
