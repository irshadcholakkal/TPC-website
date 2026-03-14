'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import { Language, useUISettings } from '@/components/providers/UISettingsProvider';

type ServiceItem = { icon: string; title: string; description: string };

const SERVICES_COPY: Record<Language, {
  label: string;
  titleLead: string;
  titleAccent: string;
  services: ServiceItem[];
}> = {
  en: {
    label: 'What We Do',
    titleLead: 'Full-Stack E-Commerce.',
    titleAccent: 'Nothing Left Out.',
    services: [
      {
        icon: '01',
        title: 'Marketplace Management',
        description:
          'We handle your complete Amazon.ae and Noon.com presence, including listings, SEO, A+ content, ads, inventory coordination, and conversion growth.',
      },
      {
        icon: '02',
        title: 'E-Commerce Website Development',
        description:
          'We build fast, mobile-first websites with payments, inventory flows, and UX that converts visitors into buyers in the UAE market.',
      },
      {
        icon: '03',
        title: 'Mobile App Development',
        description:
          'We create custom iOS and Android apps connected to your store, operations, and marketing stack for seamless customer experience.',
      },
      {
        icon: '04',
        title: 'Performance and Growth Marketing',
        description:
          'We run data-led campaigns across Google, Meta, TikTok, and marketplaces, tracking every dirham and optimizing for return on ad spend.',
      },
      {
        icon: '05',
        title: 'Creative Production',
        description:
          'From product visuals and videos to campaigns and brand assets, we produce creative that stops scrolling and drives conversions.',
      },
      {
        icon: '06',
        title: 'Custom Software and Systems',
        description:
          'We design and build internal tools, ERP integrations, automation workflows, and dashboards tailored to your business operations.',
      },
    ],
  },
  ar: {
    label: 'ماذا نقدم',
    titleLead: 'حلول تجارة إلكترونية متكاملة.',
    titleAccent: 'بدون أي فجوات.',
    services: [
      {
        icon: '01',
        title: 'إدارة المتاجر الإلكترونية',
        description:
          'ندير حضورك بالكامل على Amazon.ae وNoon.com، من القوائم وتحسين البحث إلى الإعلانات والمخزون ورفع التحويل.',
      },
      {
        icon: '02',
        title: 'تطوير مواقع التجارة الإلكترونية',
        description:
          'نبني مواقع سريعة ومهيأة للجوال مع الدفع وإدارة المخزون وتجربة استخدام تحول الزوار إلى مشترين.',
      },
      {
        icon: '03',
        title: 'تطوير تطبيقات الجوال',
        description:
          'نصمم تطبيقات iOS وAndroid مخصصة ومتصلة بمتجرك وعملياتك وتسويقك لتجربة عميل متكاملة.',
      },
      {
        icon: '04',
        title: 'التسويق الأدائي والنمو',
        description:
          'نطلق حملات قائمة على البيانات عبر Google وMeta وTikTok والمنصات، مع تحسين مستمر للعائد على الإنفاق.',
      },
      {
        icon: '05',
        title: 'الإنتاج الإبداعي',
        description:
          'من صور المنتجات والفيديو إلى الحملات وأصول العلامة التجارية، نصنع محتوى يلفت الانتباه ويزيد المبيعات.',
      },
      {
        icon: '06',
        title: 'أنظمة وبرمجيات مخصصة',
        description:
          'نبني أدوات داخلية وتكاملات ERP وأتمتة ولوحات بيانات مصممة خصيصاً لعملياتك التجارية.',
      },
    ],
  },
  fr: {
    label: 'Ce que nous faisons',
    titleLead: 'E-commerce full-stack.',
    titleAccent: "Rien n'est oublié.",
    services: [
      {
        icon: '01',
        title: 'Gestion marketplace',
        description:
          'Nous pilotons votre présence Amazon.ae et Noon.com : fiches produits, SEO, contenu A+, publicités, stock et conversion.',
      },
      {
        icon: '02',
        title: 'Développement de sites e-commerce',
        description:
          'Nous construisons des sites rapides, mobile-first, avec paiement, flux de stock et UX orientée conversion.',
      },
      {
        icon: '03',
        title: "Développement d'applications mobiles",
        description:
          'Nous créons des applications iOS et Android connectées à votre boutique, vos opérations et votre stack marketing.',
      },
      {
        icon: '04',
        title: 'Marketing de performance et croissance',
        description:
          'Nous exécutons des campagnes pilotées par la donnée sur Google, Meta, TikTok et marketplaces avec un suivi précis du ROI.',
      },
      {
        icon: '05',
        title: 'Production créative',
        description:
          'Visuels produits, vidéos, campagnes et assets de marque : du contenu qui capte l’attention et augmente les ventes.',
      },
      {
        icon: '06',
        title: 'Logiciels et systèmes sur mesure',
        description:
          'Nous développons des outils internes, intégrations ERP, automatisations et dashboards adaptés à vos opérations.',
      },
    ],
  },
  nl: {
    label: 'Wat we doen',
    titleLead: 'Full-stack e-commerce.',
    titleAccent: 'Niets blijft liggen.',
    services: [
      {
        icon: '01',
        title: 'Marketplacebeheer',
        description:
          'Wij beheren je volledige aanwezigheid op Amazon.ae en Noon.com, inclusief listings, SEO, advertenties, voorraad en conversie.',
      },
      {
        icon: '02',
        title: 'E-commerce websiteontwikkeling',
        description:
          'Wij bouwen snelle mobile-first websites met betalingen, voorraadstromen en UX die bezoekers omzet in kopers.',
      },
      {
        icon: '03',
        title: 'Mobiele app-ontwikkeling',
        description:
          'Wij maken maatwerk iOS- en Android-apps die naadloos koppelen met je store, operatie en marketingstack.',
      },
      {
        icon: '04',
        title: 'Performance- en groeimarketing',
        description:
          'Data-gedreven campagnes op Google, Meta, TikTok en marketplaces met continue optimalisatie voor maximaal rendement.',
      },
      {
        icon: '05',
        title: 'Creatieve productie',
        description:
          'Van productvisuals en video tot campagnemateriaal en merkassets die aandacht trekken en verkoop stimuleren.',
      },
      {
        icon: '06',
        title: 'Maatwerk software en systemen',
        description:
          'Wij bouwen interne tools, ERP-koppelingen, automatiseringen en dashboards die aansluiten op je bedrijfsprocessen.',
      },
    ],
  },
  tl: {
    label: 'Ano ang ginagawa namin',
    titleLead: 'Full-stack e-commerce.',
    titleAccent: 'Walang naiiwan.',
    services: [
      {
        icon: '01',
        title: 'Pamamahala ng marketplace',
        description:
          'Kami ang humahawak ng buong Amazon.ae at Noon.com presence mo: listings, SEO, ads, stock coordination, at conversion growth.',
      },
      {
        icon: '02',
        title: 'Pagbuo ng e-commerce website',
        description:
          'Gumagawa kami ng mabilis na mobile-first websites na may payment, inventory flow, at UX na nagpapataas ng benta.',
      },
      {
        icon: '03',
        title: 'Pagbuo ng mobile app',
        description:
          'Bumubuo kami ng custom iOS at Android apps na konektado sa store, operations, at marketing stack mo.',
      },
      {
        icon: '04',
        title: 'Performance at growth marketing',
        description:
          'Data-driven campaigns sa Google, Meta, TikTok, at marketplaces na may malinaw na tracking at ROI optimization.',
      },
      {
        icon: '05',
        title: 'Creative production',
        description:
          'Mula product visuals at video hanggang campaign assets, gumagawa kami ng content na humihinto ng scroll at nagko-convert.',
      },
      {
        icon: '06',
        title: 'Custom software at systems',
        description:
          'Gumagawa kami ng internal tools, ERP integrations, automation workflows, at dashboards para sa negosyo mo.',
      },
    ],
  },
  hi: {
    label: 'हम क्या करते हैं',
    titleLead: 'फुल-स्टैक ई-कॉमर्स।',
    titleAccent: 'कुछ भी अधूरा नहीं।',
    services: [
      {
        icon: '01',
        title: 'मार्केटप्लेस प्रबंधन',
        description:
          'हम Amazon.ae और Noon.com पर आपकी पूरी उपस्थिति संभालते हैं: लिस्टिंग, SEO, विज्ञापन, इन्वेंटरी और कन्वर्ज़न सहित।',
      },
      {
        icon: '02',
        title: 'ई-कॉमर्स वेबसाइट डेवलपमेंट',
        description:
          'हम तेज, मोबाइल-फर्स्ट वेबसाइट बनाते हैं जिनमें पेमेंट, इन्वेंटरी फ्लो और कन्वर्ज़न-केंद्रित UX शामिल होता है।',
      },
      {
        icon: '03',
        title: 'मोबाइल ऐप डेवलपमेंट',
        description:
          'हम iOS और Android के कस्टम ऐप बनाते हैं जो आपके स्टोर, ऑपरेशंस और मार्केटिंग स्टैक से जुड़े होते हैं।',
      },
      {
        icon: '04',
        title: 'परफॉर्मेंस और ग्रोथ मार्केटिंग',
        description:
          'हम Google, Meta, TikTok और मार्केटप्लेस पर डेटा-ड्रिवन कैंपेन चलाते हैं और बेहतर ROI के लिए लगातार सुधार करते हैं।',
      },
      {
        icon: '05',
        title: 'क्रिएटिव प्रोडक्शन',
        description:
          'प्रोडक्ट विज़ुअल्स, वीडियो, कैंपेन और ब्रांड एसेट्स तक, हम ऐसा क्रिएटिव बनाते हैं जो ध्यान खींचे और बिक्री बढ़ाए।',
      },
      {
        icon: '06',
        title: 'कस्टम सॉफ्टवेयर और सिस्टम',
        description:
          'हम आंतरिक टूल्स, ERP इंटीग्रेशन, ऑटोमेशन वर्कफ़्लो और डैशबोर्ड आपके बिज़नेस ऑपरेशंस के अनुसार बनाते हैं।',
      },
    ],
  },
};

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-80, 80], [6, -6]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-80, 80], [-8, 8]), { stiffness: 200, damping: 30 });

  return (
    <motion.div
      ref={ref}
      style={{ perspective: 800, rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <div className="card p-7 h-full flex flex-col" style={{ transformStyle: 'preserve-3d' }}>
        <span className="text-3xl mb-5 block" style={{ transform: 'translateZ(20px)', color: 'var(--color-accent)', fontFamily: 'var(--font-mono), monospace' }}>
          {service.icon}
        </span>
        <h3
          className="font-bold mb-3"
          style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: '1.1rem', color: 'var(--text-primary)', letterSpacing: '-0.01em', transform: 'translateZ(16px)' }}
        >
          {service.title}
        </h3>
        <p style={{ fontFamily: 'var(--font-body), system-ui', fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--text-dim)', transform: 'translateZ(8px)' }}>
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const pathname = usePathname();
  const { language } = useUISettings();
  const copy = SERVICES_COPY[language];
  const HeadingTag = pathname === '/services' ? 'h1' : 'h2';

  return (
    <section id="services" aria-labelledby="services-title" className="section-base" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-strong)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <span className="section-label">{copy.label}</span>
          <HeadingTag id="services-title" style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.08, color: 'var(--text-primary)' }}>
            {copy.titleLead} <span style={{ color: 'var(--color-accent)' }}>{copy.titleAccent}</span>
          </HeadingTag>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {copy.services.map((service, i) => (
            <ServiceCard key={`${service.title}-${i}`} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
