import type { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Contact The Percentage FZ-LLC | Request a Free Audit',
  description:
    'Contact The Percentage FZ-LLC for a free e-commerce audit, marketplace support, website development, performance marketing, or custom software.',
  path: '/contact',
  keywords: ['contact ecommerce agency UAE', 'free ecommerce audit', 'contact The Percentage FZ-LLC'],
});

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
