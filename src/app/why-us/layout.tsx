import type { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Why Choose The Percentage FZ-LLC | Performance-Led Partner',
  description:
    'Understand what makes The Percentage FZ-LLC different: execution speed, platform expertise, accountable growth, and practical e-commerce systems.',
  path: '/why-us',
  keywords: ['why choose ecommerce agency UAE', 'performance-led growth partner', 'Amazon Noon experts UAE'],
});

export default function WhyUsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
