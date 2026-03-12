'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';
import { CardSpotlight } from '@/components/ui/card-spotlight';

export default function ServicesPage() {
  const { t, isRTL } = useLang();

  return (
    <section className="relative" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '7rem', paddingBottom: '7rem' }}>
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none" />
      <div className={`relative z-10 max-w-7xl mx-auto px-6 md:px-10 ${isRTL ? 'rtl' : 'ltr'}`}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <p className="section-label mb-3">{t.services.badge}</p>
          <div className="flex items-end gap-6 flex-wrap">
            <h2 style={{ fontFamily: 'var(--font-heading), Georgia, serif', fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.08, color: '#fff' }}>
              {t.services.title1}{' '}<span style={{ color: '#E8FF00' }}>{t.services.title2}</span>
            </h2>
            <p className="text-base pb-1 max-w-md" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body), system-ui' }}>
              {t.services.subtitle}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.services.items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }}>
              <CardSpotlight color="rgba(232,255,0,0.04)" radius={280} className="h-full !p-7 !rounded-2xl"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-2xl mb-4 block">{item.icon}</span>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: '#fff', fontFamily: 'var(--font-heading), Georgia, serif', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body), system-ui' }}>
                    {item.description}
                  </p>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
