import type { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Privacy Policy | The Percentage FZ-LLC',
  description: 'Read how The Percentage FZ-LLC collects, uses, stores, and protects information across its website and services.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
