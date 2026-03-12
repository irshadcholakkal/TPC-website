'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

export default function HowItWorksPage() {
  const { t, isRTL } = useLang();

  return (
    <section className="relative" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '7rem', paddingBottom: '7rem', borderTop: '1px solid var(--border)' }}>
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none" />
      <div className={`relative z-10 max-w-7xl mx-auto px-6 md:px-10 ${isRTL ? 'rtl' : 'ltr'}`}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <p className="section-label mb-3">{t.howItWorks.badge}</p>
          <h2 style={{ fontFamily: 'var(--font-heading), Georgia, serif', fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.08, color: '#fff' }}>
            {t.howItWorks.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.howItWorks.steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.09 }}>
              <div className="rounded-2xl p-6 h-full transition-all duration-300"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(232,255,0,0.2)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'; }}>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black" style={{ color: '#E8FF00', fontFamily: 'var(--font-body), system-ui' }}>
                    {step.number}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-muted)', border: '1px solid var(--border)', fontFamily: 'var(--font-body), system-ui' }}>
                    {step.duration}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#fff', fontFamily: 'var(--font-heading), Georgia, serif' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body), system-ui' }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
