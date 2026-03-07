'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

export default function HowItWorksPage() {
  const { t, isRTL } = useLang();

  return (
    <section className="relative section-padding overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      {/* Accent orb */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-[0.05]"
        style={{ background: 'radial-gradient(ellipse, #6366F1, transparent 70%)' }}
      />

      <div className={`max-w-7xl mx-auto px-5 md:px-8 lg:px-12 ${isRTL ? 'rtl' : 'ltr'}`}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="badge mb-5">{t.howItWorks.badge}</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight mb-5 text-gradient-white">
            {t.howItWorks.title}
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: 'var(--text-secondary)' }}>
            {t.howItWorks.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connector line */}
          <div
            className="absolute left-[27px] md:left-1/2 top-8 bottom-8 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, transparent, var(--border), var(--border), transparent)' }}
          />

          <div className="space-y-10 md:space-y-0">
            {t.howItWorks.steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`md:flex md:items-center md:gap-8 ${isEven ? '' : 'md:flex-row-reverse'} mb-10 md:mb-16`}
                >
                  {/* Card */}
                  <div className="flex-1">
                    <div
                      className="glass-card p-7 md:p-8"
                    >
                      <div className="flex items-start gap-5">
                        <div
                          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm"
                          style={{
                            background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(99,102,241,0.15))',
                            border: '1px solid rgba(139,92,246,0.25)',
                            color: '#A78BFA',
                          }}
                        >
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3 flex-wrap">
                            <h3 className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                              {step.title}
                            </h3>
                            <span
                              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                              style={{ background: 'rgba(139,92,246,0.1)', color: '#A78BFA', border: '1px solid rgba(139,92,246,0.2)' }}
                            >
                              {step.duration}
                            </span>
                          </div>
                          <p className="leading-relaxed" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex relative items-center justify-center w-6 h-6 flex-shrink-0 z-10">
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-30"
                      style={{ background: '#8B5CF6' }}
                    />
                    <div
                      className="w-4 h-4 rounded-full z-20 border-2"
                      style={{
                        background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
                        borderColor: 'var(--bg-secondary)',
                        boxShadow: '0 0 12px rgba(139,92,246,0.5)',
                      }}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
