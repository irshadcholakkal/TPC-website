'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

export default function WhyUsPage() {
  const { t, isRTL } = useLang();

  return (
    <section className="relative" style={{ backgroundColor: 'var(--bg-secondary)', paddingTop: '7rem', paddingBottom: '7rem', borderTop: '1px solid var(--border)' }}>
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none" />
      <div className={`relative z-10 max-w-7xl mx-auto px-6 md:px-10 ${isRTL ? 'rtl' : 'ltr'}`}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <p className="section-label mb-3">{t.whyUs.badge}</p>
          <h2 style={{ fontFamily: 'var(--font-heading), Georgia, serif', fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.08, color: '#fff' }}>
            {t.whyUs.title1}<br />
            <span style={{ color: '#E8FF00' }}>{t.whyUs.title2}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.whyUs.points.map((point, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }}>
              <div className="rounded-2xl p-6 h-full transition-all duration-300"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(232,255,0,0.2)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'; }}>
                <span className="text-xs font-black uppercase tracking-[0.2em] block mb-4"
                  style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body), system-ui' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-base font-semibold mb-2.5"
                  style={{ color: '#fff', fontFamily: 'var(--font-heading), Georgia, serif' }}>
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body), system-ui' }}>
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
