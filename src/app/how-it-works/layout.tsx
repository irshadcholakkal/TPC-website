import type { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'How It Works | E-Commerce Audit, Execution, Growth',
  description:
    'See how The Percentage FZ-LLC audits your business, sets the growth plan, executes quickly, and scales revenue across channels.',
  path: '/how-it-works',
  keywords: ['e-commerce onboarding UAE', 'growth process', 'marketplace audit process'],
});

export default function HowItWorksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
