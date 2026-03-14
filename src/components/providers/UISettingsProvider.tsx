'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type Theme = 'dark' | 'light';
export type Language = 'en' | 'ar' | 'fr' | 'nl' | 'tl' | 'hi';

const STORAGE_THEME_KEY = 'tpc-theme';
const STORAGE_LANGUAGE_KEY = 'tpc-language';

const LANG_ATTRIBUTE: Record<Language, string> = {
  en: 'en',
  ar: 'ar',
  fr: 'fr',
  nl: 'nl',
  tl: 'tl',
  hi: 'hi',
};

const TRANSLATIONS = {
  en: {
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.howItWorks': 'How It Works',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.getFreeAudit': 'Get Free Audit',
    'controls.dark': 'Dark',
    'controls.light': 'Light',
    'controls.language': 'Language',
    'controls.menu': 'Menu',
    'pricing.sectionLabel': 'Pricing',
    'pricing.titleLead': 'Choose How You Want to',
    'pricing.titleAccent': 'Grow.',
    'pricing.subtitle': 'Three models. One goal: increase your revenue. Pick the structure that fits your business stage today.',
    'pricing.plan.fixed.badge': 'MOST PREDICTABLE',
    'pricing.plan.fixed.name': 'Fixed Monthly',
    'pricing.plan.fixed.price': 'AED 4,999',
    'pricing.plan.fixed.period': '/ month',
    'pricing.plan.fixed.desc': 'Predictable costs for established businesses that want professional management without sharing upside.',
    'pricing.plan.fixed.feature1': 'Complete catalog management',
    'pricing.plan.fixed.feature2': 'Order processing and coordination',
    'pricing.plan.fixed.feature3': 'Weekly performance reports',
    'pricing.plan.fixed.feature4': 'Email and WhatsApp support',
    'pricing.plan.fixed.feature5': 'Unlimited SKUs',
    'pricing.plan.fixed.feature6': 'No sales percentage ever',
    'pricing.plan.fixed.cta': 'Get Started',
    'pricing.plan.hybrid.badge': 'MOST POPULAR',
    'pricing.plan.hybrid.name': 'Fixed + Performance',
    'pricing.plan.hybrid.price': 'AED 2,999',
    'pricing.plan.hybrid.period': '/ month + 3%',
    'pricing.plan.hybrid.desc': 'Lower entry fee plus a small performance share. Best for brands scaling steadily.',
    'pricing.plan.hybrid.feature1': 'Everything in Fixed Monthly',
    'pricing.plan.hybrid.feature2': '3% of monthly sales',
    'pricing.plan.hybrid.feature3': 'Performance-based optimization',
    'pricing.plan.hybrid.feature4': 'Priority support',
    'pricing.plan.hybrid.feature5': 'Dedicated account manager',
    'pricing.plan.hybrid.cta': 'Get Started',
    'pricing.plan.performance.badge': 'ZERO RISK',
    'pricing.plan.performance.name': 'Performance-Based',
    'pricing.plan.performance.price': '18-25%',
    'pricing.plan.performance.period': 'of monthly sales',
    'pricing.plan.performance.desc': 'No monthly fee. No fixed commitment. We only earn when you earn.',
    'pricing.plan.performance.feature1': 'Zero fixed monthly cost',
    'pricing.plan.performance.feature2': 'Full-service management',
    'pricing.plan.performance.feature3': 'Revenue share model',
    'pricing.plan.performance.feature4': 'Full performance accountability',
    'pricing.plan.performance.feature5': 'Strict qualification criteria',
    'pricing.plan.performance.cta': 'Check If You Qualify',
    'pricing.reassurance1': 'All plans include onboarding support, transparent monthly reporting, and a dedicated point of contact. No hidden fees.',
    'pricing.reassurance2': 'Not sure which plan is right for you?',
    'pricing.consultationCta': 'Book a Free Consultation',
  },
  ar: {
    'nav.about': 'من نحن',
    'nav.services': 'الخدمات',
    'nav.howItWorks': 'آلية العمل',
    'nav.pricing': 'الأسعار',
    'nav.contact': 'تواصل',
    'nav.getFreeAudit': 'احصل على تدقيق مجاني',
    'controls.dark': 'داكن',
    'controls.light': 'فاتح',
    'controls.language': 'اللغة',
    'controls.menu': 'القائمة',
    'pricing.sectionLabel': 'الأسعار',
    'pricing.titleLead': 'اختر كيف تريد أن',
    'pricing.titleAccent': 'تنمو.',
    'pricing.subtitle': 'ثلاثة نماذج. هدف واحد: زيادة الإيرادات. اختر الهيكل الأنسب لمرحلة عملك الحالية.',
    'pricing.plan.fixed.badge': 'الأكثر استقراراً',
    'pricing.plan.fixed.name': 'رسوم شهرية ثابتة',
    'pricing.plan.fixed.price': '4,999 درهم',
    'pricing.plan.fixed.period': '/ شهرياً',
    'pricing.plan.fixed.desc': 'تكلفة متوقعة للشركات التي تريد إدارة احترافية دون مشاركة الأرباح.',
    'pricing.plan.fixed.feature1': 'إدارة كاملة للكتالوج',
    'pricing.plan.fixed.feature2': 'معالجة الطلبات والتنسيق',
    'pricing.plan.fixed.feature3': 'تقارير أداء أسبوعية',
    'pricing.plan.fixed.feature4': 'دعم عبر البريد وواتساب',
    'pricing.plan.fixed.feature5': 'عدد غير محدود من المنتجات',
    'pricing.plan.fixed.feature6': 'بدون نسبة من المبيعات',
    'pricing.plan.fixed.cta': 'ابدأ الآن',
    'pricing.plan.hybrid.badge': 'الأكثر طلباً',
    'pricing.plan.hybrid.name': 'ثابت + أداء',
    'pricing.plan.hybrid.price': '2,999 درهم',
    'pricing.plan.hybrid.period': '/ شهرياً + 3%',
    'pricing.plan.hybrid.desc': 'رسوم دخول أقل مع نسبة أداء بسيطة. مناسب للعلامات التي تنمو بثبات.',
    'pricing.plan.hybrid.feature1': 'كل ما في الخطة الثابتة',
    'pricing.plan.hybrid.feature2': '3% من المبيعات الشهرية',
    'pricing.plan.hybrid.feature3': 'تحسين قائم على الأداء',
    'pricing.plan.hybrid.feature4': 'دعم بأولوية',
    'pricing.plan.hybrid.feature5': 'مدير حساب مخصص',
    'pricing.plan.hybrid.cta': 'ابدأ الآن',
    'pricing.plan.performance.badge': 'بدون مخاطرة',
    'pricing.plan.performance.name': 'قائم على الأداء',
    'pricing.plan.performance.price': '18-25%',
    'pricing.plan.performance.period': 'من المبيعات الشهرية',
    'pricing.plan.performance.desc': 'بدون رسوم شهرية وبدون التزام ثابت. نربح فقط عندما تربح.',
    'pricing.plan.performance.feature1': 'بدون تكلفة شهرية ثابتة',
    'pricing.plan.performance.feature2': 'إدارة كاملة للخدمة',
    'pricing.plan.performance.feature3': 'نموذج مشاركة الإيرادات',
    'pricing.plan.performance.feature4': 'مسؤولية كاملة عن الأداء',
    'pricing.plan.performance.feature5': 'معايير تأهيل صارمة',
    'pricing.plan.performance.cta': 'تحقق من أهليتك',
    'pricing.reassurance1': 'جميع الخطط تشمل دعم الإعداد، وتقارير شهرية شفافة، ونقطة تواصل مخصصة. بدون رسوم مخفية.',
    'pricing.reassurance2': 'غير متأكد أي خطة تناسبك؟',
    'pricing.consultationCta': 'احجز استشارة مجانية',
  },
  fr: {
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.howItWorks': 'Comment ça marche',
    'nav.pricing': 'Tarifs',
    'nav.contact': 'Contact',
    'nav.getFreeAudit': 'Audit gratuit',
    'controls.dark': 'Sombre',
    'controls.light': 'Clair',
    'controls.language': 'Langue',
    'controls.menu': 'Menu',
    'pricing.sectionLabel': 'Tarifs',
    'pricing.titleLead': 'Choisissez votre façon de',
    'pricing.titleAccent': 'grandir.',
    'pricing.subtitle': 'Trois modèles. Un objectif : augmenter vos revenus. Choisissez la structure adaptée à votre activité.',
    'pricing.plan.fixed.badge': 'LE PLUS PRÉVISIBLE',
    'pricing.plan.fixed.name': 'Forfait mensuel',
    'pricing.plan.fixed.price': '4 999 AED',
    'pricing.plan.fixed.period': '/ mois',
    'pricing.plan.fixed.desc': 'Des coûts stables pour les entreprises établies qui veulent une gestion pro sans partager leur croissance.',
    'pricing.plan.fixed.feature1': 'Gestion complète du catalogue',
    'pricing.plan.fixed.feature2': 'Traitement et coordination des commandes',
    'pricing.plan.fixed.feature3': 'Rapports hebdomadaires de performance',
    'pricing.plan.fixed.feature4': 'Support email et WhatsApp',
    'pricing.plan.fixed.feature5': 'SKU illimités',
    'pricing.plan.fixed.feature6': 'Aucun pourcentage sur les ventes',
    'pricing.plan.fixed.cta': 'Commencer',
    'pricing.plan.hybrid.badge': 'LE PLUS POPULAIRE',
    'pricing.plan.hybrid.name': 'Fixe + performance',
    'pricing.plan.hybrid.price': '2 999 AED',
    'pricing.plan.hybrid.period': '/ mois + 3%',
    'pricing.plan.hybrid.desc': 'Un coût d’entrée plus bas avec une petite part variable. Idéal pour les marques en croissance.',
    'pricing.plan.hybrid.feature1': 'Tout ce qui est inclus dans le forfait mensuel',
    'pricing.plan.hybrid.feature2': '3% des ventes mensuelles',
    'pricing.plan.hybrid.feature3': 'Optimisation orientée performance',
    'pricing.plan.hybrid.feature4': 'Support prioritaire',
    'pricing.plan.hybrid.feature5': 'Responsable de compte dédié',
    'pricing.plan.hybrid.cta': 'Commencer',
    'pricing.plan.performance.badge': 'RISQUE ZÉRO',
    'pricing.plan.performance.name': 'Basé sur la performance',
    'pricing.plan.performance.price': '18-25%',
    'pricing.plan.performance.period': 'des ventes mensuelles',
    'pricing.plan.performance.desc': 'Aucun frais mensuel. Aucun engagement fixe. Nous gagnons seulement quand vous gagnez.',
    'pricing.plan.performance.feature1': 'Aucun coût mensuel fixe',
    'pricing.plan.performance.feature2': 'Gestion complète du service',
    'pricing.plan.performance.feature3': 'Modèle de partage des revenus',
    'pricing.plan.performance.feature4': 'Responsabilité totale sur la performance',
    'pricing.plan.performance.feature5': 'Critères de qualification stricts',
    'pricing.plan.performance.cta': 'Vérifier votre éligibilité',
    'pricing.reassurance1': 'Tous les plans incluent l’onboarding, des rapports mensuels transparents et un interlocuteur dédié. Aucun frais caché.',
    'pricing.reassurance2': 'Vous hésitez entre les plans ?',
    'pricing.consultationCta': 'Réserver une consultation',
  },
  nl: {
    'nav.about': 'Over ons',
    'nav.services': 'Diensten',
    'nav.howItWorks': 'Werkwijze',
    'nav.pricing': 'Prijzen',
    'nav.contact': 'Contact',
    'nav.getFreeAudit': 'Gratis audit',
    'controls.dark': 'Donker',
    'controls.light': 'Licht',
    'controls.language': 'Taal',
    'controls.menu': 'Menu',
    'pricing.sectionLabel': 'Prijzen',
    'pricing.titleLead': 'Kies hoe jij wilt',
    'pricing.titleAccent': 'groeien.',
    'pricing.subtitle': 'Drie modellen. Eén doel: meer omzet. Kies de structuur die bij jouw bedrijf past.',
    'pricing.plan.fixed.badge': 'MEEST VOORSPELBAAR',
    'pricing.plan.fixed.name': 'Vast maandelijks',
    'pricing.plan.fixed.price': 'AED 4.999',
    'pricing.plan.fixed.period': '/ maand',
    'pricing.plan.fixed.desc': 'Voorspelbare kosten voor gevestigde bedrijven die professionele ondersteuning willen zonder omzetdeling.',
    'pricing.plan.fixed.feature1': 'Volledig catalogusbeheer',
    'pricing.plan.fixed.feature2': 'Orderverwerking en coördinatie',
    'pricing.plan.fixed.feature3': 'Wekelijkse prestatierapporten',
    'pricing.plan.fixed.feature4': 'E-mail- en WhatsApp-ondersteuning',
    'pricing.plan.fixed.feature5': 'Onbeperkt aantal SKU’s',
    'pricing.plan.fixed.feature6': 'Nooit een verkooppercentage',
    'pricing.plan.fixed.cta': 'Start nu',
    'pricing.plan.hybrid.badge': 'MEEST GEKOZEN',
    'pricing.plan.hybrid.name': 'Vast + performance',
    'pricing.plan.hybrid.price': 'AED 2.999',
    'pricing.plan.hybrid.period': '/ maand + 3%',
    'pricing.plan.hybrid.desc': 'Lagere instapkosten met een klein prestatiepercentage. Ideaal voor groeiende merken.',
    'pricing.plan.hybrid.feature1': 'Alles uit Vast maandelijks',
    'pricing.plan.hybrid.feature2': '3% van maandelijkse omzet',
    'pricing.plan.hybrid.feature3': 'Prestatiegerichte optimalisatie',
    'pricing.plan.hybrid.feature4': 'Prioritaire ondersteuning',
    'pricing.plan.hybrid.feature5': 'Dedicated accountmanager',
    'pricing.plan.hybrid.cta': 'Start nu',
    'pricing.plan.performance.badge': 'GEEN RISICO',
    'pricing.plan.performance.name': 'Prestatiegericht',
    'pricing.plan.performance.price': '18-25%',
    'pricing.plan.performance.period': 'van maandelijkse omzet',
    'pricing.plan.performance.desc': 'Geen maandelijkse fee. Geen vaste verplichting. Wij verdienen alleen als jij verdient.',
    'pricing.plan.performance.feature1': 'Geen vaste maandelijkse kosten',
    'pricing.plan.performance.feature2': 'Volledige service',
    'pricing.plan.performance.feature3': 'Omzetdeelmodel',
    'pricing.plan.performance.feature4': 'Volledige performance-verantwoordelijkheid',
    'pricing.plan.performance.feature5': 'Strikte toelatingscriteria',
    'pricing.plan.performance.cta': 'Check je geschiktheid',
    'pricing.reassurance1': 'Alle plannen bevatten onboarding, transparante maandrapportages en één vast aanspreekpunt. Geen verborgen kosten.',
    'pricing.reassurance2': 'Niet zeker welk plan past?',
    'pricing.consultationCta': 'Plan een gratis gesprek',
  },
  tl: {
    'nav.about': 'Tungkol',
    'nav.services': 'Mga serbisyo',
    'nav.howItWorks': 'Paano ito gumagana',
    'nav.pricing': 'Presyo',
    'nav.contact': 'Makipag-ugnayan',
    'nav.getFreeAudit': 'Libreng audit',
    'controls.dark': 'Madilim',
    'controls.light': 'Maliwanag',
    'controls.language': 'Wika',
    'controls.menu': 'Menu',
    'pricing.sectionLabel': 'Presyo',
    'pricing.titleLead': 'Piliin kung paano mo gustong',
    'pricing.titleAccent': 'lumago.',
    'pricing.subtitle': 'Tatlong modelo. Isang layunin: pataasin ang kita mo. Piliin ang setup na bagay sa negosyo mo ngayon.',
    'pricing.plan.fixed.badge': 'PINAKA-PREDICTABLE',
    'pricing.plan.fixed.name': 'Fixed monthly',
    'pricing.plan.fixed.price': 'AED 4,999',
    'pricing.plan.fixed.period': '/ buwan',
    'pricing.plan.fixed.desc': 'Predictable na gastos para sa established na negosyo na gusto ng professional management nang walang revenue sharing.',
    'pricing.plan.fixed.feature1': 'Kumpletong catalog management',
    'pricing.plan.fixed.feature2': 'Order processing at coordination',
    'pricing.plan.fixed.feature3': 'Lingguhang performance reports',
    'pricing.plan.fixed.feature4': 'Email at WhatsApp support',
    'pricing.plan.fixed.feature5': 'Unlimited na SKU',
    'pricing.plan.fixed.feature6': 'Walang sales percentage kailanman',
    'pricing.plan.fixed.cta': 'Magsimula',
    'pricing.plan.hybrid.badge': 'PINAKA-SIKAT',
    'pricing.plan.hybrid.name': 'Fixed + performance',
    'pricing.plan.hybrid.price': 'AED 2,999',
    'pricing.plan.hybrid.period': '/ buwan + 3%',
    'pricing.plan.hybrid.desc': 'Mas mababang entry fee na may maliit na performance share. Best para sa brands na steady ang growth.',
    'pricing.plan.hybrid.feature1': 'Lahat ng nasa Fixed monthly',
    'pricing.plan.hybrid.feature2': '3% ng buwanang sales',
    'pricing.plan.hybrid.feature3': 'Performance-based optimization',
    'pricing.plan.hybrid.feature4': 'Priority support',
    'pricing.plan.hybrid.feature5': 'Dedicated account manager',
    'pricing.plan.hybrid.cta': 'Magsimula',
    'pricing.plan.performance.badge': 'WALANG RISK',
    'pricing.plan.performance.name': 'Performance-based',
    'pricing.plan.performance.price': '18-25%',
    'pricing.plan.performance.period': 'ng buwanang sales',
    'pricing.plan.performance.desc': 'Walang buwanang fee. Walang fixed commitment. Kikita lang kami kapag kumita ka.',
    'pricing.plan.performance.feature1': 'Walang fixed monthly cost',
    'pricing.plan.performance.feature2': 'Full-service management',
    'pricing.plan.performance.feature3': 'Revenue-share model',
    'pricing.plan.performance.feature4': 'Buong performance accountability',
    'pricing.plan.performance.feature5': 'Mahigpit na qualification criteria',
    'pricing.plan.performance.cta': 'Tingnan kung qualified ka',
    'pricing.reassurance1': 'Kasama sa lahat ng plano ang onboarding support, malinaw na buwanang reports, at dedicated contact person. Walang hidden fees.',
    'pricing.reassurance2': 'Hindi sigurado kung anong plan ang tama?',
    'pricing.consultationCta': 'Mag-book ng libreng konsultasyon',
  },
  hi: {
    'nav.about': 'हमारे बारे में',
    'nav.services': 'सेवाएं',
    'nav.howItWorks': 'यह कैसे काम करता है',
    'nav.pricing': 'कीमतें',
    'nav.contact': 'संपर्क',
    'nav.getFreeAudit': 'मुफ्त ऑडिट लें',
    'controls.dark': 'डार्क',
    'controls.light': 'लाइट',
    'controls.language': 'भाषा',
    'controls.menu': 'मेनू',
    'pricing.sectionLabel': 'कीमतें',
    'pricing.titleLead': 'चुनें आप कैसे',
    'pricing.titleAccent': 'बढ़ना चाहते हैं।',
    'pricing.subtitle': 'तीन मॉडल। एक लक्ष्य: आपकी आय बढ़ाना। अपने व्यवसाय के चरण के अनुसार सही संरचना चुनें।',
    'pricing.plan.fixed.badge': 'सबसे स्थिर',
    'pricing.plan.fixed.name': 'फिक्स्ड मासिक',
    'pricing.plan.fixed.price': 'AED 4,999',
    'pricing.plan.fixed.period': '/ महीना',
    'pricing.plan.fixed.desc': 'स्थापित व्यवसायों के लिए अनुमानित लागत, बिना लाभ-साझेदारी के प्रोफेशनल प्रबंधन।',
    'pricing.plan.fixed.feature1': 'पूरा कैटलॉग प्रबंधन',
    'pricing.plan.fixed.feature2': 'ऑर्डर प्रोसेसिंग और समन्वय',
    'pricing.plan.fixed.feature3': 'साप्ताहिक प्रदर्शन रिपोर्ट',
    'pricing.plan.fixed.feature4': 'ईमेल और व्हाट्सऐप सपोर्ट',
    'pricing.plan.fixed.feature5': 'असीमित SKU',
    'pricing.plan.fixed.feature6': 'बिक्री प्रतिशत नहीं',
    'pricing.plan.fixed.cta': 'शुरू करें',
    'pricing.plan.hybrid.badge': 'सबसे लोकप्रिय',
    'pricing.plan.hybrid.name': 'फिक्स्ड + प्रदर्शन',
    'pricing.plan.hybrid.price': 'AED 2,999',
    'pricing.plan.hybrid.period': '/ महीना + 3%',
    'pricing.plan.hybrid.desc': 'कम एंट्री फीस के साथ छोटा प्रदर्शन हिस्सा। लगातार बढ़ते ब्रांड्स के लिए बेहतर।',
    'pricing.plan.hybrid.feature1': 'फिक्स्ड मासिक की सभी सुविधाएं',
    'pricing.plan.hybrid.feature2': 'मासिक बिक्री का 3%',
    'pricing.plan.hybrid.feature3': 'प्रदर्शन-आधारित ऑप्टिमाइजेशन',
    'pricing.plan.hybrid.feature4': 'प्राथमिकता सपोर्ट',
    'pricing.plan.hybrid.feature5': 'समर्पित अकाउंट मैनेजर',
    'pricing.plan.hybrid.cta': 'शुरू करें',
    'pricing.plan.performance.badge': 'शून्य जोखिम',
    'pricing.plan.performance.name': 'प्रदर्शन आधारित',
    'pricing.plan.performance.price': '18-25%',
    'pricing.plan.performance.period': 'मासिक बिक्री का',
    'pricing.plan.performance.desc': 'कोई मासिक फीस नहीं। कोई निश्चित प्रतिबद्धता नहीं। हम तभी कमाते हैं जब आप कमाते हैं।',
    'pricing.plan.performance.feature1': 'कोई फिक्स्ड मासिक लागत नहीं',
    'pricing.plan.performance.feature2': 'फुल-सर्विस प्रबंधन',
    'pricing.plan.performance.feature3': 'रेवेन्यू-शेयर मॉडल',
    'pricing.plan.performance.feature4': 'पूर्ण प्रदर्शन जवाबदेही',
    'pricing.plan.performance.feature5': 'कड़े योग्यता मानदंड',
    'pricing.plan.performance.cta': 'पात्रता जांचें',
    'pricing.reassurance1': 'सभी योजनाओं में ऑनबोर्डिंग सपोर्ट, पारदर्शी मासिक रिपोर्टिंग और समर्पित संपर्क शामिल है। कोई छिपे शुल्क नहीं।',
    'pricing.reassurance2': 'समझ नहीं आ रहा कौन सा प्लान सही है?',
    'pricing.consultationCta': 'मुफ्त परामर्श बुक करें',
  },
} as const;

type TranslationKey = keyof (typeof TRANSLATIONS)['en'];
type TranslationDictionary = (typeof TRANSLATIONS)['en'];

const LANGUAGE_OPTIONS: Array<{ value: Language; label: string }> = [
  { value: 'en', label: 'English' },
  { value: 'ar', label: 'العربية' },
  { value: 'fr', label: 'Français' },
  { value: 'nl', label: 'Nederlands' },
  { value: 'tl', label: 'Tagalog' },
  { value: 'hi', label: 'हिंदी' },
];

function isTheme(value: string | null): value is Theme {
  return value === 'dark' || value === 'light';
}

function isLanguage(value: string | null): value is Language {
  return value === 'en' || value === 'ar' || value === 'fr' || value === 'nl' || value === 'tl' || value === 'hi';
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const storedTheme = window.localStorage.getItem(STORAGE_THEME_KEY);
  return isTheme(storedTheme) ? storedTheme : 'dark';
}

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_LANGUAGE_KEY);
  return isLanguage(storedLanguage) ? storedLanguage : 'en';
}

type UISettingsContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  language: Language;
  setLanguage: (language: Language) => void;
  languageOptions: Array<{ value: Language; label: string }>;
  t: (key: TranslationKey) => string;
};

const UISettingsContext = createContext<UISettingsContextType | undefined>(undefined);

export default function UISettingsProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_LANGUAGE_KEY, language);
  }, [language]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', LANG_ATTRIBUTE[language]);
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [language]);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  const t = useCallback(
    (key: TranslationKey) => {
      const languagePack = TRANSLATIONS[language] as TranslationDictionary;
      return languagePack[key] ?? TRANSLATIONS.en[key];
    },
    [language],
  );

  const contextValue = useMemo<UISettingsContextType>(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      language,
      setLanguage,
      languageOptions: LANGUAGE_OPTIONS,
      t,
    }),
    [language, t, theme, toggleTheme],
  );

  return <UISettingsContext.Provider value={contextValue}>{children}</UISettingsContext.Provider>;
}

export function useUISettings() {
  const context = useContext(UISettingsContext);

  if (!context) {
    throw new Error('useUISettings must be used within UISettingsProvider.');
  }

  return context;
}
