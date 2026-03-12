'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

const platforms = ['Amazon', 'Shopify', 'Medusa', 'Noon', 'Keeta', 'Talabat', 'Smile', 'WhatsApp', 'Custom Store'];

export default function TrustSection() {
  const { t } = useLang();
  const items = [...platforms, ...platforms];

  return (
    <section
      className="relative py-14 overflow-hidden"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-[0.22em]"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body), system-ui' }}
        >
          {t.trust.heading}
        </motion.p>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg-secondary), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg-secondary), transparent)' }} />

        <div className="flex gap-3 w-max animate-ticker">
          {items.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border select-none whitespace-nowrap"
              style={{ background: 'var(--bg-card)', borderColor: 'rgba(255,255,255,0.07)' }}
            >
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#E8FF00' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body), system-ui' }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
