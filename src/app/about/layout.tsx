import type { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'About The Percentage FZ-LLC | UAE E-Commerce Growth Partner',
  description:
    'Learn about The Percentage FZ-LLC, a UAE-based e-commerce growth partner focused on marketplaces, websites, mobile apps, and performance marketing.',
  path: '/about',
  keywords: ['about The Percentage FZ-LLC', 'e-commerce company UAE', 'RAKEZ e-commerce partner'],
});

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
