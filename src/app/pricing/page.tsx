'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useUISettings } from '@/components/providers/UISettingsProvider';

const PLANS = [
  {
    badgeKey: 'pricing.plan.fixed.badge',
    nameKey: 'pricing.plan.fixed.name',
    priceKey: 'pricing.plan.fixed.price',
    periodKey: 'pricing.plan.fixed.period',
    descKey: 'pricing.plan.fixed.desc',
    featureKeys: [
      'pricing.plan.fixed.feature1',
      'pricing.plan.fixed.feature2',
      'pricing.plan.fixed.feature3',
      'pricing.plan.fixed.feature4',
      'pricing.plan.fixed.feature5',
      'pricing.plan.fixed.feature6',
    ],
    ctaKey: 'pricing.plan.fixed.cta',
    featured: false,
  },
  {
    badgeKey: 'pricing.plan.hybrid.badge',
    nameKey: 'pricing.plan.hybrid.name',
    priceKey: 'pricing.plan.hybrid.price',
    periodKey: 'pricing.plan.hybrid.period',
    descKey: 'pricing.plan.hybrid.desc',
    featureKeys: [
      'pricing.plan.hybrid.feature1',
      'pricing.plan.hybrid.feature2',
      'pricing.plan.hybrid.feature3',
      'pricing.plan.hybrid.feature4',
      'pricing.plan.hybrid.feature5',
    ],
    ctaKey: 'pricing.plan.hybrid.cta',
    featured: true,
  },
  {
    badgeKey: 'pricing.plan.performance.badge',
    nameKey: 'pricing.plan.performance.name',
    priceKey: 'pricing.plan.performance.price',
    periodKey: 'pricing.plan.performance.period',
    descKey: 'pricing.plan.performance.desc',
    featureKeys: [
      'pricing.plan.performance.feature1',
      'pricing.plan.performance.feature2',
      'pricing.plan.performance.feature3',
      'pricing.plan.performance.feature4',
      'pricing.plan.performance.feature5',
    ],
    ctaKey: 'pricing.plan.performance.cta',
    featured: false,
  },
] as const;

function Check() {
  return (
    <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function scrollToContact(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (href.startsWith('#')) {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function PricingPage() {
  const pathname = usePathname();
  const { t } = useUISettings();
  const isStandaloneRoute = pathname === '/pricing';
  const HeadingTag = isStandaloneRoute ? 'h1' : 'h2';
  const contactHref = pathname === '/' ? '#contact' : '/#contact';

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="section-base" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-strong)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="section-label">{t('pricing.sectionLabel')}</span>
          <HeadingTag id="pricing-title" style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.08, color: 'var(--text-primary)' }}>
            {t('pricing.titleLead')}{' '}
            <span style={{ color: 'var(--color-accent)' }}>{t('pricing.titleAccent')}</span>
          </HeadingTag>
          <p className="mt-4 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-body), system-ui', fontSize: '1rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start max-w-6xl mx-auto">
          {PLANS.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
              style={{ marginTop: plan.featured ? '0' : '1rem' }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span
                    className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest"
                    style={{ background: 'var(--color-accent)', color: 'var(--color-accent-contrast)', boxShadow: '0 0 20px rgba(var(--color-accent-rgb), 0.4)' }}
                  >
                    {t(plan.badgeKey)}
                  </span>
                </div>
              )}

              <div
                className={`flex flex-col rounded-2xl overflow-hidden ${plan.featured ? 'pricing-featured' : 'card'}`}
                style={{ background: plan.featured ? 'var(--surface)' : 'var(--surface-soft)' }}
              >
                {plan.featured && (
                  <div className="h-0.5" style={{ background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)' }} />
                )}

                <div className="p-7 flex flex-col h-full">
                  {!plan.featured && (
                    <span
                      className="inline-block mb-4 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit"
                      style={{ background: 'rgba(127,127,127,0.12)', color: 'var(--text-subtle)', border: '1px solid var(--border-soft)', fontFamily: 'var(--font-mono), monospace' }}
                    >
                      {t(plan.badgeKey)}
                    </span>
                  )}
                  {plan.featured && <div className="h-6 mb-2" />}

                  <h3 className="font-bold mb-3" style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                    {t(plan.nameKey)}
                  </h3>

                  <div className="mb-1">
                    <span style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                      fontWeight: 700,
                      color: plan.featured ? 'var(--color-accent)' : 'var(--text-primary)',
                      lineHeight: 1,
                      textShadow: plan.featured ? '0 0 30px rgba(var(--color-accent-rgb), 0.4)' : 'none',
                    }}>
                      {t(plan.priceKey)}
                    </span>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-mono), monospace' }}>
                    {t(plan.periodKey)}
                  </p>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-body), system-ui' }}>
                    {t(plan.descKey)}
                  </p>

                  <div className="h-px mb-6" style={{ background: 'var(--border-strong)' }} />

                  <ul className="space-y-3 flex-1 mb-7">
                    {plan.featureKeys.map((featureKey, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: plan.featured ? 'rgba(var(--color-accent-rgb), 0.15)' : 'rgba(127,127,127,0.14)', color: plan.featured ? 'var(--color-accent)' : 'var(--text-muted)' }}
                        >
                          <Check />
                        </span>
                        <span className="text-sm" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body), system-ui' }}>{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={contactHref}
                    onClick={(e) => scrollToContact(e, pathname === '/' ? '#contact' : '/#contact')}
                    className={plan.featured ? 'btn-primary text-center text-sm justify-center' : 'btn-secondary text-center text-sm justify-center'}
                  >
                    {t(plan.ctaKey)} {'->'}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm mb-4" style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-body), system-ui' }}>
            {t('pricing.reassurance1')}
          </p>
          <p className="text-sm mb-3" style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-body), system-ui' }}>
            {t('pricing.reassurance2')}
          </p>
          <a
            href={contactHref}
            onClick={(e) => scrollToContact(e, pathname === '/' ? '#contact' : '/#contact')}
            className="btn-secondary text-sm inline-flex"
          >
            {t('pricing.consultationCta')} {'->'}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

