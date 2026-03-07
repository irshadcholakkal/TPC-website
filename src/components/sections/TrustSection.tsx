'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

const platforms = [
  'Amazon', 'Shopify', 'Medusa', 'Noon', 'Keeta',
  'Talabat', 'Smile', 'WhatsApp', 'Custom Store',
];

export default function TrustSection() {
  const { t } = useLang();
  // duplicate for seamless loop
  const items = [...platforms, ...platforms];

  return (
    <section className="relative py-16 overflow-hidden" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold uppercase tracking-widest"
          style={{ color: 'var(--text-muted)' }}
        >
          {t.trust.heading}
        </motion.p>
      </div>

      {/* Infinite scroll ticker */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg-secondary), transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg-secondary), transparent)' }} />

        <div className="flex gap-8 w-max animate-ticker">
          {items.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-full border select-none whitespace-nowrap"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #F97316, #F97316)' }}
              />
              <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
