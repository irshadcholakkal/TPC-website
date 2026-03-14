'use client';

import { Language, useUISettings } from '@/components/providers/UISettingsProvider';

const TRUST_COPY: Record<Language, { heading: string; platforms: string[] }> = {
  en: {
    heading: 'We operate your business across leading platforms',
    platforms: ['Amazon.ae', 'Noon.com', 'Shopify', 'Medusa', 'Google Ads', 'Meta Ads', 'TikTok Ads', 'Custom Stores', 'WhatsApp Commerce', 'iOS and Android'],
  },
  ar: {
    heading: 'ندير أعمالك عبر أهم المنصات',
    platforms: ['Amazon.ae', 'Noon.com', 'Shopify', 'Medusa', 'إعلانات Google', 'إعلانات Meta', 'إعلانات TikTok', 'متاجر مخصصة', 'تجارة WhatsApp', 'iOS وAndroid'],
  },
  fr: {
    heading: 'Nous pilotons votre activité sur les principales plateformes',
    platforms: ['Amazon.ae', 'Noon.com', 'Shopify', 'Medusa', 'Publicités Google', 'Publicités Meta', 'Publicités TikTok', 'Boutiques sur mesure', 'Commerce WhatsApp', 'iOS et Android'],
  },
  nl: {
    heading: 'Wij beheren je business op toonaangevende platforms',
    platforms: ['Amazon.ae', 'Noon.com', 'Shopify', 'Medusa', 'Google Ads', 'Meta Ads', 'TikTok Ads', 'Maatwerk winkels', 'WhatsApp Commerce', 'iOS en Android'],
  },
  tl: {
    heading: 'Pinapatakbo namin ang negosyo mo sa mga nangungunang platform',
    platforms: ['Amazon.ae', 'Noon.com', 'Shopify', 'Medusa', 'Google Ads', 'Meta Ads', 'TikTok Ads', 'Mga custom store', 'WhatsApp Commerce', 'iOS at Android'],
  },
  hi: {
    heading: 'हम आपके व्यवसाय को शीर्ष प्लेटफॉर्म्स पर चलाते हैं',
    platforms: ['Amazon.ae', 'Noon.com', 'Shopify', 'Medusa', 'Google Ads', 'Meta Ads', 'TikTok Ads', 'कस्टम स्टोर्स', 'WhatsApp Commerce', 'iOS और Android'],
  },
};

export default function TrustSection() {
  const { language } = useUISettings();
  const content = TRUST_COPY[language];
  const items = [...content.platforms, ...content.platforms];

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-strong)',
        padding: '3rem 0',
        overflow: 'hidden',
      }}
    >
      <p
        className="text-center mb-6"
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--text-quiet)',
        }}
      >
        {content.heading}
      </p>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--bg-primary), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, var(--bg-primary), transparent)' }} />

        <div className="flex gap-3 w-max animate-ticker">
          {items.map((name, i) => (
            <div key={i} className="flex items-center gap-2 px-5 py-2.5 rounded-lg select-none whitespace-nowrap" style={{ background: 'var(--surface)', border: '1px solid var(--border-strong)' }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-accent)', boxShadow: '0 0 6px rgba(var(--color-accent-rgb), 0.6)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-body), system-ui' }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
