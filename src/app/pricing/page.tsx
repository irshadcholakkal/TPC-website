'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function PricingPage() {
  const { t, isRTL } = useLang();

  const accentPlans = [0, 1, 2];
  const highlightIndex = 1; // "Recommended" card gets extra highlight

  return (
    <section className="relative section-padding overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-[0.06]"
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
          <span className="badge mb-5">{t.pricing.badge}</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight mb-5 leading-tight">
            <span className="text-gradient-white">{t.pricing.title1}</span>
            <br />
            <span className="text-gradient">{t.pricing.title2}</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: 'var(--text-secondary)' }}>
            {t.pricing.subtitle}
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {t.pricing.plans.map((plan, index) => {
            const isHighlighted = index === highlightIndex;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col rounded-2xl overflow-hidden ${isHighlighted ? 'ring-2' : ''}`}
                style={{
                  background: isHighlighted
                    ? 'linear-gradient(160deg, rgba(249,115,22,0.12) 0%, var(--bg-card) 40%)'
                    : 'var(--bg-card)',
                  border: `1px solid ${isHighlighted ? 'rgba(249,115,22,0.4)' : 'var(--border)'}`,
                  boxShadow: isHighlighted ? 'var(--shadow-card), 0 0 50px rgba(249,115,22,0.12)' : 'var(--shadow-card)',
                }}
              >
                {/* Badge */}
                {plan.highlight && (
                  <div className="px-6 pt-6 pb-0">
                    <span
                      className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={
                        isHighlighted
                          ? { background: 'linear-gradient(135deg, #F97316, #F97316)', color: '#fff' }
                          : { background: 'var(--bg-secondary)', color: 'var(--text-muted)', border: '1px solid var(--border)' }
                      }
                    >
                      {plan.highlight}
                    </span>
                  </div>
                )}

                <div className="flex flex-col flex-1 p-7">
                  {/* Plan name & price */}
                  <div className="mb-7">
                    <h3 className="text-lg font-bold mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span
                        className="text-4xl lg:text-5xl font-black font-heading tracking-tight"
                        style={{ color: isHighlighted ? '#FB923C' : 'var(--text-primary)' }}
                      >
                        {plan.price}
                      </span>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                      {plan.period}
                    </span>
                    <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="divider mb-6" />

                  {/* Features */}
                  <ul className="space-y-3.5 flex-1 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ background: isHighlighted ? 'rgba(249,115,22,0.2)' : 'var(--bg-secondary)', color: '#FB923C' }}
                        >
                          <CheckIcon />
                        </span>
                        <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className={isHighlighted ? 'btn-accent text-center w-full py-3 text-sm' : 'btn-ghost text-center w-full py-3 text-sm'}
                  >
                    {t.pricing.cta}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm mt-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          {t.pricing.note}
        </motion.p>
      </div>
    </section>
  );
}
