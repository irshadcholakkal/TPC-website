'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Language, useUISettings } from '@/components/providers/UISettingsProvider';

const STATS_COPY: Record<Language, string[]> = {
  en: ['E-Commerce Focused', 'Commission Only', 'Pricing Models', 'Marketplace Platforms', 'Operations Support'],
  ar: ['تركيز على التجارة الإلكترونية', 'عمولة فقط', 'نماذج التسعير', 'منصات المتاجر', 'دعم العمليات'],
  fr: ['Axé e-commerce', 'Commission uniquement', 'Modèles tarifaires', 'Plateformes marketplace', 'Support opérationnel'],
  nl: ['E-commerce focus', 'Alleen commissie', 'Prijsmodellen', 'Marketplace-platforms', 'Operationele support'],
  tl: ['Tutok sa e-commerce', 'Komisyon lamang', 'Mga modelo ng presyo', 'Mga marketplace platform', 'Suporta sa operasyon'],
  hi: ['ई-कॉमर्स केंद्रित', 'सिर्फ कमीशन', 'प्राइसिंग मॉडल', 'मार्केटप्लेस प्लेटफॉर्म', 'ऑपरेशंस सपोर्ट'],
};

function AnimatedStat({ to, suffix, label }: { to: number | null; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(to === null ? suffix : '0' + (to === 0 ? suffix : ''));

  useEffect(() => {
    if (!inView || to === null) return;

    let v = 0;
    const t = setInterval(() => {
      v += to / (1800 / 16);
      if (v >= to) {
        setCount(to + suffix);
        clearInterval(t);
      } else {
        setCount(Math.floor(v) + suffix);
      }
    }, 16);

    return () => clearInterval(t);
  }, [inView, suffix, to]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-6 py-5">
      <span
        className="font-black mb-1"
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          color: 'var(--color-accent)',
          textShadow: '0 0 20px rgba(var(--color-accent-rgb), 0.4)',
          lineHeight: 1.1,
        }}
      >
        {count}
      </span>
      <span
        className="text-xs uppercase tracking-widest font-medium"
        style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-mono), monospace', letterSpacing: '0.12em' }}
      >
        {label}
      </span>
    </div>
  );
}

const BASE_STATS = [
  { to: 100, suffix: '%' },
  { to: 2, suffix: '%' },
  { to: 3, suffix: '' },
  { to: 2, suffix: '' },
  { to: null, suffix: '24/7' },
] as const;

export default function StatsBar() {
  const { language } = useUISettings();
  const labels = STATS_COPY[language];

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-strong)',
        borderBottom: '1px solid var(--border-strong)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5 divide-x"
          style={{ borderColor: 'var(--border-strong)' }}
        >
          {BASE_STATS.map((s, i) => (
            <AnimatedStat key={i} to={s.to} suffix={s.suffix} label={labels[i]} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
