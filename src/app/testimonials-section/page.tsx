'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

export default function TestimonialsSection() {
  const { t, isRTL } = useLang();

  return (
    <section className="relative" style={{ backgroundColor: 'var(--bg-secondary)', paddingTop: '7rem', paddingBottom: '7rem', borderTop: '1px solid var(--border)' }}>
      <div className={`max-w-7xl mx-auto px-6 md:px-10 ${isRTL ? 'rtl' : 'ltr'}`}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14 text-center">
          <p className="section-label mb-3">{t.testimonials.badge}</p>
          <h2 style={{ fontFamily: 'var(--font-heading), Georgia, serif', fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.08, color: '#fff' }}>
            {t.testimonials.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {t.testimonials.items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="rounded-2xl p-8 h-full" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                {/* Quote mark */}
                <div className="text-4xl font-black mb-5 leading-none" style={{ color: '#E8FF00', fontFamily: 'Georgia, serif' }}>"</div>
                <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body), system-ui', fontStyle: 'italic' }}>
                  {item.quote}
                </p>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#fff', fontFamily: 'var(--font-body), system-ui' }}>{item.author}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body), system-ui' }}>{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
