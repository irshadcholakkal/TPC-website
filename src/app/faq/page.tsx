'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Language, useUISettings } from '@/components/providers/UISettingsProvider';

type FAQItem = { q: string; a: string };

const FAQ_COPY: Record<Language, {
  label: string;
  titleLead: string;
  titleAccent: string;
  items: FAQItem[];
}> = {
  en: {
    label: 'Common Questions',
    titleLead: 'Clear Answers.',
    titleAccent: 'No Fluff.',
    items: [
      { q: 'What does the commission apply to?', a: 'Commission is calculated on net revenue from managed channels after returns, VAT, and marketplace fees.' },
      { q: 'Do I need to sign a long-term contract?', a: 'No. We work on monthly agreements with notice periods.' },
      { q: 'What costs am I responsible for?', a: 'You cover domains, hosting, ad spend, and logistics. We cover service delivery and execution.' },
      { q: 'How quickly can you start?', a: 'Usually within 5 to 7 business days after agreement and onboarding.' },
      { q: 'Do you work with businesses outside the UAE?', a: 'Our core focus is UAE and GCC, but we evaluate regional projects case by case.' },
      { q: 'Can I hire you for one service only?', a: 'Yes. Services are independently scoped and you can expand later.' },
      { q: 'How does performance-based qualification work?', a: 'We review your store data, sales history, and category fit before approving that model.' },
    ],
  },
  ar: {
    label: 'الأسئلة الشائعة',
    titleLead: 'إجابات واضحة.',
    titleAccent: 'بدون مبالغة.',
    items: [
      { q: 'على ماذا تُحسب النسبة؟', a: 'تُحسب النسبة على صافي الإيراد من القنوات المُدارة بعد المرتجعات وضريبة القيمة المضافة ورسوم المنصات.' },
      { q: 'هل أحتاج إلى عقد طويل الأمد؟', a: 'لا. نعمل باتفاقيات شهرية مع فترات إشعار.' },
      { q: 'ما التكاليف التي أتحملها أنا؟', a: 'أنت تتحمل الدومين والاستضافة والميزانية الإعلانية واللوجستيات، ونحن نتحمل تنفيذ الخدمة.' },
      { q: 'ما سرعة بدء العمل؟', a: 'عادة خلال 5 إلى 7 أيام عمل بعد الاتفاق والتهيئة.' },
      { q: 'هل تعملون مع شركات خارج الإمارات؟', a: 'تركيزنا الأساسي على الإمارات والخليج، مع دراسة المشاريع الإقليمية حالة بحالة.' },
      { q: 'هل يمكن التعاقد على خدمة واحدة فقط؟', a: 'نعم. كل خدمة قابلة للتنفيذ بشكل مستقل ويمكن التوسع لاحقاً.' },
      { q: 'كيف يتم التأهيل لخطة الأداء؟', a: 'نراجع بيانات متجرك وتاريخ المبيعات وملاءمة الفئة قبل الموافقة على هذا النموذج.' },
    ],
  },
  fr: {
    label: 'Questions fréquentes',
    titleLead: 'Réponses claires.',
    titleAccent: 'Sans flou.',
    items: [
      { q: 'Sur quoi la commission est-elle appliquée ?', a: 'La commission est calculée sur le revenu net des canaux gérés après retours, TVA et frais marketplace.' },
      { q: 'Dois-je signer un contrat long terme ?', a: 'Non. Nous travaillons avec des accords mensuels et préavis.' },
      { q: 'Quels coûts restent à ma charge ?', a: 'Vous couvrez le domaine, l’hébergement, le budget ads et la logistique. Nous couvrons la prestation.' },
      { q: 'Sous quel délai pouvez-vous démarrer ?', a: 'En général sous 5 à 7 jours ouvrables après accord et onboarding.' },
      { q: 'Travaillez-vous hors UAE ?', a: 'Notre focus principal est UAE et GCC, avec étude de certains projets régionaux.' },
      { q: 'Puis-je commencer avec un seul service ?', a: 'Oui. Chaque service peut être cadré indépendamment puis étendu.' },
      { q: 'Comment fonctionne la qualification performance-based ?', a: 'Nous analysons vos données boutique, votre historique de ventes et l’adéquation catégorie avant validation.' },
    ],
  },
  nl: {
    label: 'Veelgestelde vragen',
    titleLead: 'Duidelijke antwoorden.',
    titleAccent: 'Geen ruis.',
    items: [
      { q: 'Waarop geldt de commissie?', a: 'De commissie wordt berekend op netto omzet na retouren, btw en marketplacekosten.' },
      { q: 'Is een lang contract verplicht?', a: 'Nee, we werken met maandelijkse afspraken.' },
      { q: 'Welke kosten zijn voor mij?', a: 'Domein, hosting, advertentiebudget en logistiek zijn voor jou. Wij leveren de service.' },
      { q: 'Hoe snel kunnen jullie starten?', a: 'Meestal binnen 5 tot 7 werkdagen na akkoord en onboarding.' },
      { q: 'Werken jullie buiten de VAE?', a: 'Onze kernfocus is UAE en GCC, met ruimte voor passende regionale projecten.' },
      { q: 'Kan ik met een dienst starten?', a: 'Ja, diensten zijn los inzetbaar en later uit te breiden.' },
      { q: 'Hoe werkt performance-based toelating?', a: 'We beoordelen storedata, verkoophistorie en categorie-fit vooraf.' },
    ],
  },
  tl: {
    label: 'Karaniwang tanong',
    titleLead: 'Malinaw na sagot.',
    titleAccent: 'Walang paligoy.',
    items: [
      { q: 'Saan ina-apply ang commission?', a: 'Kinakalkula ito sa net revenue matapos ang returns, VAT, at marketplace fees.' },
      { q: 'Kailangan ba ng long-term contract?', a: 'Hindi. Monthly agreements ang setup namin.' },
      { q: 'Anong gastos ang sa akin?', a: 'Ikaw sa domain, hosting, ads, at logistics. Kami sa service execution.' },
      { q: 'Gaano kabilis kayo makakapagsimula?', a: 'Karaniwan 5 hanggang 7 business days matapos ang agreement at onboarding.' },
      { q: 'May clients ba kayo sa labas ng UAE?', a: 'UAE at GCC ang pangunahing focus pero tumatanggap kami ng ilang regional projects.' },
      { q: 'Pwede ba isang service lang muna?', a: 'Oo. Pwede kang magsimula sa isa at magdagdag habang lumalaki.' },
      { q: 'Paano ang qualification para sa performance-based plan?', a: 'Sinusuri namin ang store data, sales history, at category fit bago ma-approve.' },
    ],
  },
  hi: {
    label: 'आम सवाल',
    titleLead: 'सीधे जवाब।',
    titleAccent: 'बिना घुमाव।',
    items: [
      { q: 'कमीशन किस पर लागू होता है?', a: 'कमीशन प्रबंधित चैनलों की नेट रेवेन्यू पर लगाया जाता है, रिटर्न, VAT और मार्केटप्लेस फीस घटाने के बाद।' },
      { q: 'क्या लंबी अवधि का कॉन्ट्रैक्ट जरूरी है?', a: 'नहीं। हम मासिक एग्रीमेंट और नोटिस अवधि के साथ काम करते हैं।' },
      { q: 'मुझे कौन-कौन से खर्च उठाने होंगे?', a: 'डोमेन, होस्टिंग, ऐड स्पेंड और लॉजिस्टिक्स आपकी जिम्मेदारी है। सेवा निष्पादन हमारी।' },
      { q: 'आप कितनी जल्दी शुरू कर सकते हैं?', a: 'आम तौर पर एग्रीमेंट और ऑनबोर्डिंग के बाद 5 से 7 कार्य दिवसों में।' },
      { q: 'क्या आप UAE के बाहर भी काम करते हैं?', a: 'हमारा मुख्य फोकस UAE और GCC है, लेकिन कुछ क्षेत्रीय प्रोजेक्ट केस-दर-केस लेते हैं।' },
      { q: 'क्या मैं सिर्फ एक सेवा से शुरुआत कर सकता हूँ?', a: 'हाँ। सेवाएं स्वतंत्र रूप से ली जा सकती हैं और बाद में विस्तार किया जा सकता है।' },
      { q: 'परफॉर्मेंस-बेस्ड प्लान की योग्यता कैसे तय होती है?', a: 'हम आपके स्टोर डेटा, बिक्री इतिहास और कैटेगरी फिट की समीक्षा करके मंजूरी देते हैं।' },
    ],
  },
};

function FaqItem({ item, i }: { item: FAQItem; i: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left rounded-xl px-6 py-5 transition-all duration-200"
        style={{
          background: open ? 'var(--surface)' : 'transparent',
          border: `1px solid ${open ? 'rgba(var(--color-accent-rgb), 0.2)' : 'var(--border-strong)'}`,
          cursor: 'pointer',
        }}
      >
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body), system-ui' }}>
            {item.q}
          </span>
          <svg
            width="14"
            height="14"
            fill="none"
            stroke={open ? 'var(--color-accent)' : 'var(--text-subtle)'}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            className="flex-shrink-0 transition-transform duration-200"
            style={{ transform: open ? 'rotate(45deg)' : 'none' }}
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
            style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-body), system-ui' }}
          >
            {item.a}
          </motion.p>
        )}
      </button>
    </motion.div>
  );
}

export default function FaqPage() {
  const pathname = usePathname();
  const { language } = useUISettings();
  const copy = FAQ_COPY[language];
  const HeadingTag = pathname === '/faq' ? 'h1' : 'h2';

  return (
    <section id="faq" aria-labelledby="faq-title" className="section-base" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-strong)' }}>
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="section-label">{copy.label}</span>
          <HeadingTag id="faq-title" style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.08, color: 'var(--text-primary)' }}>
            {copy.titleLead} <span style={{ color: 'var(--color-accent)' }}>{copy.titleAccent}</span>
          </HeadingTag>
        </motion.div>
        <div className="space-y-3">
          {copy.items.map((item, i) => (
            <FaqItem key={`${item.q}-${i}`} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
