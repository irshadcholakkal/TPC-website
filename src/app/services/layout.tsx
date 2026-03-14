import type { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'E-Commerce Services | Marketplace, Web, Apps, Marketing',
  description:
    'Explore marketplace management, Shopify website development, mobile apps, performance marketing, creative production, and custom software services in the UAE.',
  path: '/services',
  keywords: ['marketplace management UAE', 'Shopify development Dubai', 'performance marketing agency UAE'],
});

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
