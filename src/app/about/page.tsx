'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Language, useUISettings } from '@/components/providers/UISettingsProvider';

const ABOUT_COPY: Record<Language, {
  label: string;
  titleLead: string;
  titleAccent: string;
  cta: string;
  paragraphs: string[];
  footnote: string;
}> = {
  en: {
    label: 'Who We Are',
    titleLead: 'A Company That Earns Its Place -',
    titleAccent: 'Every Month.',
    cta: 'Work With Us',
    paragraphs: [
      'The Percentage FZ-LLC is a UAE-based e-commerce solutions company built on one simple principle: we only succeed when you do.',
      'We manage, build, and grow e-commerce businesses across marketplaces and direct-to-consumer channels - taking a percentage of the results we deliver, not just a retainer fee for showing up.',
      'From Amazon.ae and Noon.com marketplace optimization to custom website development, creative production, and performance marketing - we are your operations team, your tech team, and your growth team in one.',
      'Registered under the RAK Economic Zone (RAKEZ), operating out of the UAE, serving brands that are serious about scaling.',
    ],
    footnote: 'RAKEZ Registered - UAE Operations',
  },
  ar: {
    label: 'من نحن',
    titleLead: 'شركة تثبت قيمتها -',
    titleAccent: 'كل شهر.',
    cta: 'اعمل معنا',
    paragraphs: [
      'The Percentage FZ-LLC شركة إماراتية لحلول التجارة الإلكترونية، مبنية على مبدأ بسيط: نجاحنا مرتبط بنجاحك.',
      'نحن ندير ونبني وننمي الأعمال عبر المنصات وقنوات البيع المباشر، ونتقاضى نسبة من النتائج التي نحققها.',
      'من تحسين Amazon.ae وNoon.com إلى تطوير المواقع المخصصة والإنتاج الإبداعي والتسويق الأدائي - نحن فريق العمليات والتقنية والنمو في مكان واحد.',
      'مسجلون في RAK Economic Zone (RAKEZ) ونعمل من الإمارات مع العلامات الجادة في التوسع.',
    ],
    footnote: 'مسجل في RAKEZ - عمليات في الإمارات',
  },
  fr: {
    label: 'Qui Nous Sommes',
    titleLead: 'Une Entreprise Qui Merite Sa Place -',
    titleAccent: 'Chaque Mois.',
    cta: 'Travailler Avec Nous',
    paragraphs: [
      'The Percentage FZ-LLC est une societe basee aux EAU, construite sur un principe simple: notre reussite depend de la votre.',
      'Nous gerons, construisons et faisons croitre des activites e-commerce sur marketplaces et canaux directs - avec un modele base sur les resultats.',
      'De l optimisation Amazon.ae et Noon.com au developpement web sur mesure, a la creation et au marketing de performance - nous agissons comme une equipe complete.',
      'Enregistres sous RAK Economic Zone (RAKEZ), nous accompagnons les marques ambitieuses de la region.',
    ],
    footnote: 'Enregistre RAKEZ - Operations UAE',
  },
  nl: {
    label: 'Wie Wij Zijn',
    titleLead: 'Een Bedrijf Dat Zijn Plek Verdient -',
    titleAccent: 'Elke Maand.',
    cta: 'Werk Met Ons',
    paragraphs: [
      'The Percentage FZ-LLC is een in de VAE gevestigd e-commerce bedrijf, gebouwd op een simpel principe: wij slagen alleen als jij slaagt.',
      'Wij beheren, bouwen en laten e-commerce bedrijven groeien op marketplaces en D2C-kanalen - met een resultaatgericht percentage model.',
      'Van Amazon.ae en Noon.com optimalisatie tot maatwerk websites, creative productie en performance marketing - wij zijn je operations-, tech- en growth-team ineen.',
      'Geregistreerd onder RAK Economic Zone (RAKEZ), actief in de VAE voor merken die serieus willen schalen.',
    ],
    footnote: 'RAKEZ Geregistreerd - VAE Operaties',
  },
  tl: {
    label: 'Sino Kami',
    titleLead: 'Isang Kumpanyang Pinapatunayan ang Halaga -',
    titleAccent: 'Bawat Buwan.',
    cta: 'Makipagtrabaho sa Amin',
    paragraphs: [
      'Ang The Percentage FZ-LLC ay UAE-based na e-commerce solutions company na may simpleng prinsipyo: tagumpay namin ay tagumpay mo.',
      'Pinapatakbo, binubuo, at pinalalago namin ang mga negosyo sa marketplaces at direct-to-consumer channels gamit ang result-based na modelo.',
      'Mula Amazon.ae at Noon.com optimization hanggang custom websites, creative production, at performance marketing - iisang team kami para sa operations, tech, at growth.',
      'Rehistrado sa RAK Economic Zone (RAKEZ), nagseserbisyo sa mga brand na seryosong mag-scale sa UAE.',
    ],
    footnote: 'RAKEZ Rehistrado - UAE Operations',
  },
  hi: {
    label: 'हम कौन हैं',
    titleLead: 'एक ऐसी कंपनी जो अपनी जगह कमाती है -',
    titleAccent: 'हर महीने।',
    cta: 'हमारे साथ काम करें',
    paragraphs: [
      'The Percentage FZ-LLC यूएई आधारित ई-कॉमर्स सॉल्यूशंस कंपनी है, जो एक सरल सिद्धांत पर काम करती है: हमारी सफलता आपकी सफलता से जुड़ी है।',
      'हम मार्केटप्लेस और डायरेक्ट चैनलों पर बिज़नेस को मैनेज, बिल्ड और ग्रो करते हैं - पूरी तरह परिणाम-आधारित मॉडल के साथ।',
      'Amazon.ae और Noon.com ऑप्टिमाइज़ेशन से लेकर कस्टम वेबसाइट डेवलपमेंट, क्रिएटिव प्रोडक्शन और परफॉर्मेंस मार्केटिंग तक - हम आपकी पूरी टीम हैं।',
      'हम RAK Economic Zone (RAKEZ) में पंजीकृत हैं और यूएई के ग्रोथ-फोकस्ड ब्रांड्स के साथ काम करते हैं।',
    ],
    footnote: 'RAKEZ पंजीकृत - यूएई ऑपरेशंस',
  },
};

function scrollToContact(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (href.startsWith('#')) {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function AboutPage() {
  const pathname = usePathname();
  const { language } = useUISettings();
  const copy = ABOUT_COPY[language];
  const isStandaloneRoute = pathname === '/about';
  const HeadingTag = isStandaloneRoute ? 'h1' : 'h2';
  const contactHref = pathname === '/' ? '#contact' : '/#contact';

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" aria-labelledby="about-title" className="section-base" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-strong)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.span variants={item} className="section-label">{copy.label}</motion.span>
            <motion.div variants={item}>
              <HeadingTag id="about-title" style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.025em', color: 'var(--text-primary)', marginBottom: '2rem' }}>
                {copy.titleLead} <span style={{ color: 'var(--color-accent)' }}>{copy.titleAccent}</span>
              </HeadingTag>
            </motion.div>
            <motion.a variants={item} href={contactHref} onClick={(e) => scrollToContact(e, pathname === '/' ? '#contact' : '/#contact')} className="btn-primary inline-flex">
              {copy.cta} {'->'}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5"
          >
            {copy.paragraphs.map((text, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-body), system-ui',
                  fontSize: i === 0 ? '1.05rem' : '0.95rem',
                  lineHeight: 1.75,
                  color: i === 0 ? 'var(--text-secondary)' : 'var(--text-dim)',
                  fontWeight: i === 0 ? 500 : 400,
                }}
              >
                {text}
              </p>
            ))}

            <div className="pt-4 flex items-center gap-3">
              <span className="accent-dot" />
              <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>
                {copy.footnote}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


