'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t, isRTL } = useLang();

  return (
    <section className="relative section-padding overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(ellipse, #F97316, transparent 70%)' }}
      />

      <div className={`max-w-7xl mx-auto px-5 md:px-8 lg:px-12 ${isRTL ? 'rtl' : 'ltr'}`}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="badge mb-5">{t.about.badge}</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight mb-5 leading-[1.05]">
            <span className="text-gradient-white block">{t.about.title1}</span>
            <span className="text-gradient">{t.about.title2}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-secondary)' }}>
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20 md:mb-24"
        >
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Accent corner */}
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full blur-2xl opacity-10 pointer-events-none"
              style={{ background: 'radial-gradient(#F97316, transparent)' }}
            />
            <div className="relative z-10 space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed font-light" style={{ color: 'var(--text-primary)' }}>
                {t.about.mission1.split('jewellery and retail brands').map((part, i) =>
                  i === 0
                    ? <span key={i}>{part}<span className="font-semibold text-gradient">jewellery and retail brands</span></span>
                    : <span key={i}>{part}</span>
                )}
              </p>
              <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #F97316, transparent)' }} />
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t.about.mission2}
              </p>
              <div className="pt-5" style={{ borderTop: '1px solid var(--border)' }}>
                <p className="text-sm font-semibold uppercase tracking-[0.15em]" style={{ color: 'var(--text-muted)' }}>
                  {t.about.mission3}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold font-heading tracking-tight mb-3 text-gradient-white">
              {t.about.valuesTitle}
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t.about.valuesSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.about.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="glass-card p-7 h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-sm font-black"
                    style={{
                      background: 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(234,108,10,0.15))',
                      border: '1px solid rgba(249,115,22,0.25)',
                      color: '#FB923C',
                    }}
                  >
                    {value.icon}
                  </div>
                  <h4 className="text-[18px] font-bold mb-3 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                    {value.title}
                  </h4>
                  <p className="leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
