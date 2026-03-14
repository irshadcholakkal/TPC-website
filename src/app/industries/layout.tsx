import type { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Industries We Serve | E-Commerce Growth Across Categories',
  description:
    'See the industries The Percentage FZ-LLC supports across the UAE, including beauty, fashion, electronics, home, health, food, and more.',
  path: '/industries',
  keywords: ['e-commerce industries UAE', 'marketplace categories UAE', 'industry growth partner'],
});

export default function IndustriesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
