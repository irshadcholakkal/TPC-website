import type { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Terms of Service | The Percentage FZ-LLC',
  description: 'Review the terms that govern the use of The Percentage FZ-LLC website, content, communications, and services.',
  path: '/terms-of-service',
});

export default function TermsOfServiceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
