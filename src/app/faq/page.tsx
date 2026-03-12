'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLang } from '@/context/LanguageContext';

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left rounded-xl px-6 py-5 transition-all duration-200"
        style={{
          background: open ? 'var(--bg-card)' : 'transparent',
          border: `1px solid ${open ? 'rgba(232,255,0,0.2)' : 'var(--border)'}`,
        }}
      >
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-semibold" style={{ color: '#fff', fontFamily: 'var(--font-body), system-ui' }}>
            {q}
          </span>
          <svg
            width="14" height="14" fill="none" stroke={open ? '#E8FF00' : 'var(--text-muted)'} strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            className="flex-shrink-0 transition-transform duration-200"
            style={{ transform: open ? 'rotate(45deg)' : 'none' }}
            viewBox="0 0 24 24"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
        {open && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-3 text-sm leading-relaxed"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body), system-ui' }}
          >
            {a}
          </motion.p>
        )}
      </button>
    </motion.div>
  );
}

export default function FaqPage() {
  const { t, isRTL } = useLang();

  return (
    <section className="relative" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '7rem', paddingBottom: '7rem', borderTop: '1px solid var(--border)' }}>
      <div className={`max-w-7xl mx-auto px-6 md:px-10 ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 text-center">
            <p className="section-label mb-3">{t.faq.badge}</p>
            <h2 style={{ fontFamily: 'var(--font-heading), Georgia, serif', fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.08, color: '#fff' }}>
              {t.faq.title}
            </h2>
          </motion.div>

          <div className="space-y-3">
            {t.faq.items.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
