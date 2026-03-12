'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

function Check() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function PricingPage() {
  const { t, isRTL } = useLang();

  return (
    <section className="relative" style={{ backgroundColor: 'var(--bg-secondary)', paddingTop: '7rem', paddingBottom: '7rem', borderTop: '1px solid var(--border)' }} aria-labelledby="pricing-heading">
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none" />
      <div className={`relative z-10 max-w-7xl mx-auto px-6 md:px-10 ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <p className="section-label mb-3">{t.pricing.badge}</p>
            <h2 id="pricing-heading" style={{ fontFamily: 'var(--font-heading), Georgia, serif', fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.08, color: '#fff' }}>
              {t.pricing.title1}{' '}<em style={{ color: '#E8FF00', fontStyle: 'italic' }}>{t.pricing.title2}</em>
            </h2>
            <p className="mt-4 text-base" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body), system-ui' }}>
              {t.pricing.subtitle}
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--bg-card)', border: '1px solid rgba(232,255,0,0.2)' }}>
              {/* Top accent */}
              <div className="h-0.5" style={{ background: 'linear-gradient(90deg, transparent, #E8FF00, transparent)' }} />

              <div className="p-8 md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body), system-ui' }}>
                  {t.pricing.starting}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-1">
                  <span style={{ fontFamily: 'var(--font-heading), Georgia, serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, lineHeight: 1, color: '#E8FF00' }}>
                    {t.pricing.fee}
                  </span>
                </div>
                <p className="text-sm mb-4" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body), system-ui' }}>
                  {t.pricing.feeNote}
                </p>

                {/* Commission line */}
                <div className="inline-flex items-center gap-3 rounded-xl px-5 py-3 mb-8" style={{ background: 'rgba(232,255,0,0.06)', border: '1px solid rgba(232,255,0,0.2)' }}>
                  <span className="text-lg font-black" style={{ color: '#E8FF00', fontFamily: 'var(--font-body), system-ui' }}>+</span>
                  <span className="text-base font-semibold" style={{ color: '#fff', fontFamily: 'var(--font-body), system-ui' }}>
                    {t.pricing.commission}
                  </span>
                </div>

                {/* Features */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {t.pricing.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(232,255,0,0.12)', color: '#E8FF00' }}>
                        <Check />
                      </span>
                      <span className="text-sm" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body), system-ui' }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact"
                  onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="btn-accent inline-flex px-8 py-3.5 text-sm font-bold w-full sm:w-auto justify-center">
                  {t.pricing.cta} →
                </a>

                <p className="mt-6 text-xs leading-relaxed" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body), system-ui' }}>
                  {t.pricing.note}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
