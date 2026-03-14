import type { Metadata } from 'next';

export const SITE_URL = 'https://thepercentagecompany.com';
export const SITE_NAME = 'The Percentage FZ-LLC';

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export type SiteRoute = {
  path: string;
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
};

export const SITE_ROUTES: SiteRoute[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/how-it-works', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/why-us', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/industries', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/pricing', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-of-service', changeFrequency: 'yearly', priority: 0.3 },
];

export function absoluteUrl(path = '/') {
  return new URL(path, SITE_URL).toString();
}

export function createMetadata({ title, description, path = '/', keywords = [] }: MetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}
