import type { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'FAQ | Services, Pricing, Timelines, and Onboarding',
  description:
    'Read common questions about services, pricing, communication, timelines, and onboarding when working with The Percentage FZ-LLC.',
  path: '/faq',
  keywords: ['e-commerce agency FAQ', 'marketplace management questions', 'pricing FAQ UAE'],
});

export default function FaqLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
