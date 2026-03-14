import type { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Pricing | Fixed, Hybrid, and Revenue Share Models',
  description:
    'Compare the pricing models offered by The Percentage FZ-LLC, including fixed retainers, hybrid structures, and revenue-share partnerships.',
  path: '/pricing',
  keywords: ['e-commerce pricing UAE', 'revenue share agency', 'performance-based pricing'],
});

export default function PricingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
