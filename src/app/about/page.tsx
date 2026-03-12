'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t, isRTL } = useLang();

  return (
    <section className="relative" style={{ backgroundColor: 'var(--bg-secondary)', paddingTop: '7rem', paddingBottom: '7rem', borderTop: '1px solid var(--border)' }}>
      <div className={`max-w-7xl mx-auto px-6 md:px-10 ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-3">{t.about.badge}</p>
            <h2 className="mb-8" style={{ fontFamily: 'var(--font-heading), Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#fff' }}>
              {t.about.headline}
            </h2>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-accent inline-flex px-7 py-3 text-sm">
              {t.about.cta} →
            </a>
          </motion.div>

          {/* Right — body paragraphs */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5">
            {t.about.body.map((para, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)', fontFamily: 'var(--font-body), system-ui', fontWeight: i === 0 ? 500 : 400 }}>
                {i === 0 ? (
                  para.split('we only succeed when you do').map((part, j) =>
                    j === 0
                      ? <span key={j}>{part}<span style={{ color: '#E8FF00' }}>we only succeed when you do</span></span>
                      : <span key={j}>{part}</span>
                  )
                ) : para}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
