'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Language, useUISettings } from '@/components/providers/UISettingsProvider';

type Step = { num: string; title: string; desc: string; time: string };

const PROCESS_COPY: Record<Language, {
  label: string;
  titleLead: string;
  titleAccent: string;
  steps: Step[];
}> = {
  en: {
    label: 'Our Process',
    titleLead: 'Simple. Structured.',
    titleAccent: 'Results First.',
    steps: [
      { num: '01', title: 'Free Audit', desc: 'We analyze your current e-commerce setup, identify leaks, and map growth opportunities.', time: 'Day 1' },
      { num: '02', title: 'Strategy and Proposal', desc: 'You get a tailored plan with clear scope, timeline, and pricing before execution starts.', time: 'Day 2-3' },
      { num: '03', title: 'Onboarding and Execution', desc: 'We plug into your operations quickly and start implementing high-impact priorities.', time: 'Day 5-7' },
      { num: '04', title: 'Grow and Scale', desc: 'We report monthly, optimize continuously, and focus effort where returns are strongest.', time: 'Ongoing' },
    ],
  },
  ar: {
    label: 'آلية عملنا',
    titleLead: 'بسيطة. منظمة.',
    titleAccent: 'النتائج أولاً.',
    steps: [
      { num: '01', title: 'تدقيق مجاني', desc: 'نحلل وضع تجارتك الحالي ونحدد أبرز نقاط التسرب وفرص النمو الأعلى تأثيراً.', time: 'اليوم 1' },
      { num: '02', title: 'الاستراتيجية والمقترح', desc: 'نقدم خطة مخصصة تشمل نطاق العمل والجدول الزمني والتسعير بشكل واضح.', time: 'اليوم 2-3' },
      { num: '03', title: 'التهيئة والتنفيذ', desc: 'نندمج سريعاً مع عملياتك ونبدأ تنفيذ الأولويات ذات الأثر المباشر.', time: 'اليوم 5-7' },
      { num: '04', title: 'النمو والتوسع', desc: 'تقارير شهرية، وتحسين مستمر، وتركيز على القنوات الأعلى عائداً.', time: 'مستمر' },
    ],
  },
  fr: {
    label: 'Notre processus',
    titleLead: 'Simple. Structuré.',
    titleAccent: "Résultats d'abord.",
    steps: [
      { num: '01', title: 'Audit gratuit', desc: 'Nous analysons votre setup e-commerce actuel et identifions les leviers de croissance prioritaires.', time: 'Jour 1' },
      { num: '02', title: 'Stratégie et proposition', desc: 'Vous recevez un plan clair avec périmètre, calendrier et tarification.', time: 'Jour 2-3' },
      { num: '03', title: 'Onboarding et exécution', desc: 'Nous nous intégrons rapidement à vos opérations et lançons les actions à fort impact.', time: 'Jour 5-7' },
      { num: '04', title: 'Croissance et scale', desc: 'Reporting mensuel, optimisation continue et concentration sur les canaux les plus rentables.', time: 'En continu' },
    ],
  },
  nl: {
    label: 'Ons proces',
    titleLead: 'Simpel. Gestructureerd.',
    titleAccent: 'Resultaten eerst.',
    steps: [
      { num: '01', title: 'Gratis audit', desc: 'We analyseren je huidige e-commerce setup en vinden de grootste groeikansen.', time: 'Dag 1' },
      { num: '02', title: 'Strategie en voorstel', desc: 'Je krijgt een plan met duidelijke scope, planning en prijsstructuur.', time: 'Dag 2-3' },
      { num: '03', title: 'Onboarding en uitvoering', desc: 'We sluiten snel aan op je operatie en starten direct met de prioriteiten.', time: 'Dag 5-7' },
      { num: '04', title: 'Groeien en schalen', desc: 'Maandelijkse rapportages, continue optimalisatie en focus op maximaal rendement.', time: 'Doorlopend' },
    ],
  },
  tl: {
    label: 'Proseso namin',
    titleLead: 'Simple. Maayos.',
    titleAccent: 'Resulta muna.',
    steps: [
      { num: '01', title: 'Libreng audit', desc: 'Sinusuri namin ang kasalukuyang setup mo at hinahanap ang pinakamalaking growth opportunities.', time: 'Araw 1' },
      { num: '02', title: 'Strategy at proposal', desc: 'Makakatanggap ka ng malinaw na plano na may scope, timeline, at presyo.', time: 'Araw 2-3' },
      { num: '03', title: 'Onboarding at execution', desc: 'Mabilis kaming sumasama sa operations mo at agad nagsisimula ng high-impact implementation.', time: 'Araw 5-7' },
      { num: '04', title: 'Grow at scale', desc: 'Buwanang reporting, tuloy-tuloy na optimization, at focus sa pinakamalaking return.', time: 'Tuloy-tuloy' },
    ],
  },
  hi: {
    label: 'हमारी प्रक्रिया',
    titleLead: 'सरल। संरचित।',
    titleAccent: 'परिणाम पहले।',
    steps: [
      { num: '01', title: 'मुफ्त ऑडिट', desc: 'हम आपके वर्तमान ई-कॉमर्स सेटअप का विश्लेषण करके प्रमुख ग्रोथ अवसर पहचानते हैं।', time: 'दिन 1' },
      { num: '02', title: 'रणनीति और प्रस्ताव', desc: 'आपको स्पष्ट स्कोप, टाइमलाइन और प्राइसिंग के साथ एक कस्टम प्लान मिलता है।', time: 'दिन 2-3' },
      { num: '03', title: 'ऑनबोर्डिंग और निष्पादन', desc: 'हम जल्दी से आपके ऑपरेशंस में शामिल होकर उच्च-प्रभाव वाले कार्य शुरू करते हैं।', time: 'दिन 5-7' },
      { num: '04', title: 'विकास और विस्तार', desc: 'मासिक रिपोर्टिंग, निरंतर ऑप्टिमाइजेशन और उच्च रिटर्न वाली प्राथमिकताओं पर फोकस।', time: 'निरंतर' },
    ],
  },
};

export default function HowItWorksPage() {
  const pathname = usePathname();
  const { language } = useUISettings();
  const copy = PROCESS_COPY[language];
  const HeadingTag = pathname === '/how-it-works' ? 'h1' : 'h2';

  return (
    <section id="how-it-works" aria-labelledby="how-it-works-title" className="section-base" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-strong)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <span className="section-label">{copy.label}</span>
          <HeadingTag id="how-it-works-title" style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.08, color: 'var(--text-primary)' }}>
            {copy.titleLead} <span style={{ color: 'var(--color-accent)' }}>{copy.titleAccent}</span>
          </HeadingTag>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px hidden lg:block pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, var(--border-soft), var(--border-soft), transparent)', zIndex: 0 }} />

          {copy.steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative z-10"
            >
              <div
                className="card p-6 h-full transition-all duration-300"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(var(--color-accent-rgb), 0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-strong)';
                }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style={{ background: 'rgba(var(--color-accent-rgb), 0.08)', border: '1px solid rgba(var(--color-accent-rgb), 0.15)' }}>
                  <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                    {step.num}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <h3 style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                    {step.title}
                  </h3>
                </div>
                <span className="inline-block mb-3 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-subtle)', border: '1px solid var(--border-soft)', fontFamily: 'var(--font-mono), monospace' }}>
                  {step.time}
                </span>
                <p style={{ fontFamily: 'var(--font-body), system-ui', fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--text-dim)' }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
