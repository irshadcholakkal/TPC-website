'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Language, useUISettings } from '@/components/providers/UISettingsProvider';

const INDUSTRIES_COPY: Record<Language, {
  label: string;
  titleLead: string;
  titleAccent: string;
  desc: string;
  tags: string[];
}> = {
  en: {
    label: 'Who We Serve',
    titleLead: 'Built for UAE',
    titleAccent: 'E-Commerce Operators.',
    desc: "Whether you are launching a new brand, selling through Amazon.ae and Noon.com, moving retail online, or scaling a D2C business - we have the team and tools to move you forward.",
    tags: ['Consumer Electronics', 'Fashion and Apparel', 'Health and Beauty', 'Home and Living', 'Grocery and FMCG', 'Sporting Goods', 'Toys and Kids', 'Automotive Accessories', 'Industrial Supplies'],
  },
  ar: {
    label: 'من نخدم',
    titleLead: 'مصمم لسوق الإمارات',
    titleAccent: 'لمشغّلي التجارة الإلكترونية.',
    desc: 'سواء كنت تطلق علامة جديدة، أو تبيع عبر Amazon.ae وNoon.com، أو تنقل تجارة التجزئة إلى الإنترنت، أو توسع نشاط D2C، لدينا الفريق والأدوات لدفعك للأمام.',
    tags: ['إلكترونيات استهلاكية', 'الموضة والملابس', 'الصحة والجمال', 'المنزل والمعيشة', 'البقالة والسلع سريعة الاستهلاك', 'مستلزمات رياضية', 'ألعاب ومنتجات الأطفال', 'إكسسوارات السيارات', 'مستلزمات صناعية'],
  },
  fr: {
    label: 'Qui nous servons',
    titleLead: 'Conçu pour les EAU',
    titleAccent: 'et les opérateurs e-commerce.',
    desc: 'Que vous lanciez une nouvelle marque, vendiez sur Amazon.ae et Noon.com, digitalisiez un retail ou accélériez un D2C, nous avons l’équipe et les outils pour vous faire avancer.',
    tags: ['Électronique grand public', 'Mode et habillement', 'Santé et beauté', 'Maison et lifestyle', 'Épicerie et FMCG', 'Articles de sport', 'Jouets et enfants', 'Accessoires auto', 'Fournitures industrielles'],
  },
  nl: {
    label: 'Wie wij bedienen',
    titleLead: 'Gebouwd voor de VAE',
    titleAccent: 'en e-commerce operators.',
    desc: 'Of je nu een nieuw merk lanceert, verkoopt op Amazon.ae en Noon.com, retail online brengt of een D2C-bedrijf wilt schalen: wij hebben het team en de tools om je vooruit te helpen.',
    tags: ['Consumentenelektronica', 'Mode en kleding', 'Gezondheid en beauty', 'Wonen en interieur', 'Boodschappen en FMCG', 'Sportartikelen', 'Speelgoed en kinderen', 'Autoaccessoires', 'Industriële benodigdheden'],
  },
  tl: {
    label: 'Sino ang sineserbisyuhan namin',
    titleLead: 'Binuo para sa UAE',
    titleAccent: 'at sa mga e-commerce operator.',
    desc: 'Mula sa paglulunsad ng bagong brand, pagbebenta sa Amazon.ae at Noon.com, paglipat ng retail online, hanggang D2C scaling: mayroon kaming team at tools para itulak ka pasulong.',
    tags: ['Consumer electronics', 'Fashion at apparel', 'Health at beauty', 'Home at living', 'Grocery at FMCG', 'Sporting goods', 'Toys at kids', 'Automotive accessories', 'Industrial supplies'],
  },
  hi: {
    label: 'हम किन्हें सेवा देते हैं',
    titleLead: 'यूएई के लिए बनाया गया',
    titleAccent: 'ई-कॉमर्स ऑपरेटर्स के लिए।',
    desc: 'चाहे आप नया ब्रांड लॉन्च कर रहे हों, Amazon.ae और Noon.com पर बेच रहे हों, रिटेल को ऑनलाइन ला रहे हों, या D2C स्केल कर रहे हों, हमारे पास आपको आगे बढ़ाने के लिए टीम और टूल्स हैं।',
    tags: ['कंज्यूमर इलेक्ट्रॉनिक्स', 'फैशन और परिधान', 'हेल्थ और ब्यूटी', 'होम और लिविंग', 'ग्रॉसरी और FMCG', 'स्पोर्टिंग गुड्स', 'टॉयज़ और किड्स', 'ऑटोमोटिव एक्सेसरीज़', 'इंडस्ट्रियल सप्लाई'],
  },
};

export default function IndustriesPage() {
  const pathname = usePathname();
  const { language } = useUISettings();
  const copy = INDUSTRIES_COPY[language];
  const HeadingTag = pathname === '/industries' ? 'h1' : 'h2';

  return (
    <section id="industries" aria-labelledby="industries-title" className="section-base" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-strong)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="section-label">{copy.label}</span>
            <HeadingTag id="industries-title" className="mb-5" style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--text-primary)' }}>
              {copy.titleLead}
              <br />
              <span style={{ color: 'var(--color-accent)' }}>{copy.titleAccent}</span>
            </HeadingTag>
            <p style={{ fontFamily: 'var(--font-body), system-ui', fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-dim)' }}>
              {copy.desc}
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="flex flex-wrap gap-3">
              {copy.tags.map((tag, i) => (
                <motion.span
                  key={`${tag}-${i}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="rounded-full px-5 py-2.5 text-sm font-medium cursor-default transition-all duration-200"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border-strong)', color: 'var(--text-dim)', fontFamily: 'var(--font-body), system-ui' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.borderColor = 'rgba(var(--color-accent-rgb), 0.3)';
                    (e.currentTarget as HTMLSpanElement).style.color = 'var(--color-accent)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.borderColor = 'var(--border-strong)';
                    (e.currentTarget as HTMLSpanElement).style.color = 'var(--text-dim)';
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
