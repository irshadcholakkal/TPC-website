'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ThreeDMarquee } from '@/components/ui/3d-marquee';
import { Language, Theme, useUISettings } from '@/components/providers/UISettingsProvider';

const HERO_COPY: Record<
  Language,
  {
    badge: string;
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    ctaAudit: string;
    ctaServices: string;
    trustline: string;
  }
> = {
  en: {
    badge: 'UAE-Based - RAKEZ Registered - Performance-Driven',
    titleLead: "We Don't Just Build.",
    titleAccent: 'We Grow.',
    subtitle:
      'The Percentage is your full-stack e-commerce partner - from strategy and development to marketplace management and performance marketing. We take a percentage. You take the growth.',
    ctaAudit: 'Get a Free Audit',
    ctaServices: 'See What We Do',
    trustline: 'UAE-Based - RAKEZ Registered - Performance-Driven',
  },
  ar: {
    badge: 'مقرنا الإمارات - مسجلون في RAKEZ - نمو قائم على الأداء',
    titleLead: 'لا نكتفي بالبناء.',
    titleAccent: 'نحن نحقق النمو.',
    subtitle:
      'The Percentage هو شريكك المتكامل في التجارة الإلكترونية، من الاستراتيجية والتطوير إلى إدارة المتاجر والتسويق الأدائي. نحن نأخذ نسبة، وأنت تأخذ النمو.',
    ctaAudit: 'احصل على تدقيق مجاني',
    ctaServices: 'اطلع على خدماتنا',
    trustline: 'مقرنا الإمارات - مسجلون في RAKEZ - نمو قائم على الأداء',
  },
  fr: {
    badge: 'Basés aux EAU - Enregistrés à la RAKEZ - Axés performance',
    titleLead: 'Nous ne faisons pas que construire.',
    titleAccent: 'Nous faisons grandir.',
    subtitle:
      'The Percentage est votre partenaire e-commerce full-stack, de la stratégie et du développement à la gestion marketplace et au marketing de performance. Nous prenons un pourcentage, vous prenez la croissance.',
    ctaAudit: 'Audit gratuit',
    ctaServices: 'Voir nos services',
    trustline: 'Basés aux EAU - Enregistrés à la RAKEZ - Axés performance',
  },
  nl: {
    badge: 'Gebaseerd in de VAE - Geregistreerd bij RAKEZ - Prestatiegedreven',
    titleLead: 'Wij bouwen niet alleen.',
    titleAccent: 'Wij laten je groeien.',
    subtitle:
      'The Percentage is je full-stack e-commercepartner: van strategie en ontwikkeling tot marketplacebeheer en performance marketing. Wij nemen een percentage, jij pakt de groei.',
    ctaAudit: 'Gratis audit',
    ctaServices: 'Bekijk onze diensten',
    trustline: 'Gebaseerd in de VAE - Geregistreerd bij RAKEZ - Prestatiegedreven',
  },
  tl: {
    badge: 'Naka-base sa UAE - Rehistrado sa RAKEZ - Performance-driven',
    titleLead: 'Hindi lang kami gumagawa.',
    titleAccent: 'Pinapalaki namin.',
    subtitle:
      'Ang The Percentage ang full-stack e-commerce partner mo, mula strategy at development hanggang marketplace management at performance marketing. Kumuha kami ng porsyento, at sa iyo ang paglago.',
    ctaAudit: 'Libreng audit',
    ctaServices: 'Tingnan ang serbisyo',
    trustline: 'Naka-base sa UAE - Rehistrado sa RAKEZ - Performance-driven',
  },
  hi: {
    badge: 'यूएई आधारित - RAKEZ पंजीकृत - प्रदर्शन-केंद्रित',
    titleLead: 'हम सिर्फ बनाते नहीं हैं।',
    titleAccent: 'हम बढ़ाते हैं।',
    subtitle:
      'The Percentage आपका फुल-स्टैक ई-कॉमर्स पार्टनर है, रणनीति और डेवलपमेंट से लेकर मार्केटप्लेस मैनेजमेंट और परफॉर्मेंस मार्केटिंग तक। हम प्रतिशत लेते हैं, विकास आपका होता है।',
    ctaAudit: 'मुफ्त ऑडिट लें',
    ctaServices: 'हमारी सेवाएं देखें',
    trustline: 'यूएई आधारित - RAKEZ पंजीकृत - प्रदर्शन-केंद्रित',
  },
};

type HeroVisualCard = {
  eyebrow: string;
  title: string;
  subtitle: string;
  metricLabel: string;
  metricValue: string;
};

const HERO_VISUAL_CARDS: Record<Language, HeroVisualCard[]> = {
  en: [
    {
      eyebrow: 'Marketplace Ops',
      title: 'Catalog, pricing and fulfillment kept in sync.',
      subtitle: 'Amazon, Noon and storefront operations handled from one workflow.',
      metricLabel: 'Channels',
      metricValue: '3+',
    },
    {
      eyebrow: 'Store Build',
      title: 'Fast storefronts designed to lift conversion.',
      subtitle: 'Landing pages, PDPs and checkout flows tuned for sales.',
      metricLabel: 'Launch',
      metricValue: '14 days',
    },
    {
      eyebrow: 'Performance Ads',
      title: 'Paid media optimized around profitable acquisition.',
      subtitle: 'Creative, targeting and budget control aligned to margin.',
      metricLabel: 'ROAS',
      metricValue: '4.8x',
    },
    {
      eyebrow: 'Customer Support',
      title: 'WhatsApp, email and ticket coverage that closes buyers.',
      subtitle: 'Support teams answer faster and recover abandoned intent.',
      metricLabel: 'Coverage',
      metricValue: '24/7',
    },
    {
      eyebrow: 'Retention Flows',
      title: 'Email, SMS and loyalty automations drive repeat orders.',
      subtitle: 'Post-purchase sequences keep customers active and buying again.',
      metricLabel: 'Repeat',
      metricValue: '+31%',
    },
    {
      eyebrow: 'Analytics Stack',
      title: 'Revenue, orders and ad spend tracked in one clean view.',
      subtitle: 'Founders see channel performance without digging through tools.',
      metricLabel: 'Reports',
      metricValue: 'Live',
    },
  ],
  ar: [
    {
      eyebrow: 'عمليات المتاجر',
      title: 'مزامنة الكتالوج والأسعار والتنفيذ عبر كل القنوات.',
      subtitle: 'إدارة Amazon وNoon والمتجر من سير عمل واحد.',
      metricLabel: 'القنوات',
      metricValue: '3+',
    },
    {
      eyebrow: 'بناء المتجر',
      title: 'واجهات سريعة مصممة لرفع معدل التحويل.',
      subtitle: 'صفحات الهبوط والمنتجات والدفع مبنية لزيادة المبيعات.',
      metricLabel: 'الإطلاق',
      metricValue: '14 يوماً',
    },
    {
      eyebrow: 'إعلانات الأداء',
      title: 'إدارة الإعلانات المدفوعة وفق اكتساب مربح.',
      subtitle: 'الإبداع والاستهداف والميزانية مرتبطة مباشرة بالهامش.',
      metricLabel: 'العائد',
      metricValue: '4.8x',
    },
    {
      eyebrow: 'دعم العملاء',
      title: 'واتساب والبريد والتذاكر بتغطية تساعد على إغلاق المبيعات.',
      subtitle: 'الرد الأسرع يقلل التردد ويستعيد نية الشراء المفقودة.',
      metricLabel: 'التغطية',
      metricValue: '24/7',
    },
    {
      eyebrow: 'الاحتفاظ',
      title: 'أتمتة البريد والرسائل والولاء ترفع الطلبات المتكررة.',
      subtitle: 'رحلات ما بعد الشراء تبقي العملاء نشطين ويعودون للشراء.',
      metricLabel: 'التكرار',
      metricValue: '+31%',
    },
    {
      eyebrow: 'التحليلات',
      title: 'الإيرادات والطلبات والإنفاق الإعلاني في عرض واحد واضح.',
      subtitle: 'صاحب المتجر يرى أداء القنوات بدون التنقل بين أدوات كثيرة.',
      metricLabel: 'التقارير',
      metricValue: 'مباشر',
    },
  ],
  fr: [
    {
      eyebrow: 'Gestion Marketplace',
      title: 'Catalogue, prix et logistique restent synchronisés.',
      subtitle: 'Amazon, Noon et la boutique sont pilotés depuis un seul flux.',
      metricLabel: 'Canaux',
      metricValue: '3+',
    },
    {
      eyebrow: 'Création Boutique',
      title: 'Des vitrines rapides conçues pour mieux convertir.',
      subtitle: 'Landing pages, fiches produit et checkout ajustés pour vendre.',
      metricLabel: 'Lancement',
      metricValue: '14 jours',
    },
    {
      eyebrow: 'Publicité Performance',
      title: 'Le paid media est piloté autour d une acquisition rentable.',
      subtitle: 'Créa, ciblage et budget sont reliés à la marge.',
      metricLabel: 'ROAS',
      metricValue: '4.8x',
    },
    {
      eyebrow: 'Support Client',
      title: 'WhatsApp, email et tickets pour conclure plus de ventes.',
      subtitle: 'Une réponse plus rapide récupère les intentions perdues.',
      metricLabel: 'Couverture',
      metricValue: '24/7',
    },
    {
      eyebrow: 'Rétention',
      title: 'Email, SMS et fidélité font revenir les commandes.',
      subtitle: 'Les séquences post-achat gardent les clients actifs.',
      metricLabel: 'Réachat',
      metricValue: '+31%',
    },
    {
      eyebrow: 'Analytique',
      title: 'CA, commandes et dépenses pub dans une vue claire.',
      subtitle: 'Les fondateurs voient chaque canal sans jongler entre outils.',
      metricLabel: 'Rapports',
      metricValue: 'Direct',
    },
  ],
  nl: [
    {
      eyebrow: 'Marketplace-beheer',
      title: 'Catalogus, prijzen en fulfilment blijven synchroon.',
      subtitle: 'Amazon, Noon en je storefront worden vanuit een workflow beheerd.',
      metricLabel: 'Kanalen',
      metricValue: '3+',
    },
    {
      eyebrow: 'Winkelbouw',
      title: 'Snelle storefronts gebouwd voor hogere conversie.',
      subtitle: 'Landingpages, PDPs en checkoutflows afgestemd op verkoop.',
      metricLabel: 'Livegang',
      metricValue: '14 dagen',
    },
    {
      eyebrow: 'Prestatie-ads',
      title: 'Paid media geoptimaliseerd voor winstgevende acquisitie.',
      subtitle: 'Creatie, targeting en budget sturen direct op marge.',
      metricLabel: 'ROAS',
      metricValue: '4.8x',
    },
    {
      eyebrow: 'Klantsupport',
      title: 'WhatsApp, e-mail en tickets die koopbeslissingen afronden.',
      subtitle: 'Snellere support herstelt verloren koopintentie.',
      metricLabel: 'Dekking',
      metricValue: '24/7',
    },
    {
      eyebrow: 'Retentie',
      title: 'E-mail, sms en loyaliteitsflows verhogen herhaalaankopen.',
      subtitle: 'Post-purchase automations houden klanten actief.',
      metricLabel: 'Herhaal',
      metricValue: '+31%',
    },
    {
      eyebrow: 'Analyse',
      title: 'Omzet, orders en ad spend in een helder overzicht.',
      subtitle: 'Founders zien kanaalprestatie zonder door tools te zoeken.',
      metricLabel: 'Rapporten',
      metricValue: 'Live',
    },
  ],
  tl: [
    {
      eyebrow: 'Pamamahala ng Marketplace',
      title: 'Magkakatugma ang catalog, pricing at fulfillment.',
      subtitle: 'Amazon, Noon at storefront operations sa iisang workflow.',
      metricLabel: 'Mga Channel',
      metricValue: '3+',
    },
    {
      eyebrow: 'Paggawa ng Store',
      title: 'Mabilis na storefront na ginawa para tumaas ang conversion.',
      subtitle: 'Landing page, PDP at checkout flow na nakaayos para sa benta.',
      metricLabel: 'Paglunsad',
      metricValue: '14 araw',
    },
    {
      eyebrow: 'Mga Ad na Performance',
      title: 'Bayad na ads na naka-tune para sa kumikitang acquisition.',
      subtitle: 'Creative, targeting at budget ay nakaayon sa margin.',
      metricLabel: 'ROAS',
      metricValue: '4.8x',
    },
    {
      eyebrow: 'Suporta sa Customer',
      title: 'WhatsApp, email at ticket coverage na tumutulong magsara ng benta.',
      subtitle: 'Mas mabilis na sagot ang bumabawi sa nawawalang buying intent.',
      metricLabel: 'Saklaw',
      metricValue: '24/7',
    },
    {
      eyebrow: 'Retention',
      title: 'Email, SMS at loyalty automations para sa repeat orders.',
      subtitle: 'Pinananatiling aktibo ng post-purchase flows ang mga customer.',
      metricLabel: 'Ulit na Order',
      metricValue: '+31%',
    },
    {
      eyebrow: 'Analytics',
      title: 'Revenue, orders at ad spend sa isang malinaw na view.',
      subtitle: 'Kita agad ng founders ang performance ng bawat channel.',
      metricLabel: 'Mga Ulat',
      metricValue: 'Live',
    },
  ],
  hi: [
    {
      eyebrow: 'मार्केटप्लेस ऑप्स',
      title: 'कैटलॉग, प्राइसिंग और फुलफिलमेंट एक साथ सिंक रहते हैं।',
      subtitle: 'Amazon, Noon और स्टोरफ्रंट संचालन एक ही वर्कफ्लो से चलते हैं।',
      metricLabel: 'चैनल',
      metricValue: '3+',
    },
    {
      eyebrow: 'स्टोर बिल्ड',
      title: 'तेज स्टोरफ्रंट जो कन्वर्जन बढ़ाने के लिए बनाए जाते हैं।',
      subtitle: 'लैंडिंग पेज, PDP और चेकआउट फ्लो बिक्री के लिए ऑप्टिमाइज़ किए जाते हैं।',
      metricLabel: 'लॉन्च',
      metricValue: '14 दिन',
    },
    {
      eyebrow: 'परफॉर्मेंस विज्ञापन',
      title: 'पेड मीडिया को लाभदायक अधिग्रहण के अनुसार चलाया जाता है।',
      subtitle: 'क्रिएटिव, टार्गेटिंग और बजट सीधे मार्जिन से जुड़े रहते हैं।',
      metricLabel: 'ROAS',
      metricValue: '4.8x',
    },
    {
      eyebrow: 'कस्टमर सपोर्ट',
      title: 'WhatsApp, ईमेल और टिकट कवरेज बिक्री बंद करने में मदद करती है।',
      subtitle: 'तेज जवाब खोई हुई खरीदारी मंशा को वापस लाते हैं।',
      metricLabel: 'कवरेज',
      metricValue: '24/7',
    },
    {
      eyebrow: 'रिटेंशन फ्लो',
      title: 'ईमेल, SMS और लॉयल्टी ऑटोमेशन दोबारा ऑर्डर बढ़ाते हैं।',
      subtitle: 'पोस्ट-परचेज फ्लो ग्राहकों को सक्रिय रखकर वापस लाते हैं।',
      metricLabel: 'रीपीट',
      metricValue: '+31%',
    },
    {
      eyebrow: 'एनालिटिक्स',
      title: 'रेवेन्यू, ऑर्डर और ऐड स्पेंड एक साफ दृश्य में दिखते हैं।',
      subtitle: 'फाउंडर्स बिना कई टूल देखे हर चैनल की स्थिति समझते हैं।',
      metricLabel: 'रिपोर्ट',
      metricValue: 'लाइव',
    },
  ],
};

const MARQUEE_PALETTE = [
  { accent: '#3B82F6', accentSoft: '#1D4ED8', tint: '#93C5FD' },
  { accent: '#22C55E', accentSoft: '#166534', tint: '#86EFAC' },
  { accent: '#F59E0B', accentSoft: '#B45309', tint: '#FCD34D' },
  { accent: '#A855F7', accentSoft: '#6D28D9', tint: '#D8B4FE' },
  { accent: '#14B8A6', accentSoft: '#0F766E', tint: '#99F6E4' },
  { accent: '#F43F5E', accentSoft: '#BE123C', tint: '#FDA4AF' },
] as const;

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function escapeSvgText(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function wrapSvgText(value: string, maxChars: number) {
  const words = value.split(/\s+/);
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length <= maxChars || current.length === 0) {
      current = next;
      continue;
    }

    lines.push(current);
    current = word;
  }

  if (current) {
    lines.push(current);
  }

  return lines;
}

function renderSvgTextLines({
  lines,
  x,
  startY,
  lineHeight,
  fill,
  fontSize,
  fontWeight,
  textAnchor,
  fontFamily,
  letterSpacing = '0',
  bidi,
}: {
  lines: string[];
  x: number;
  startY: number;
  lineHeight: number;
  fill: string;
  fontSize: number;
  fontWeight: number;
  textAnchor: 'start' | 'end';
  fontFamily: string;
  letterSpacing?: string;
  bidi: string;
}) {
  return lines
    .map(
      (line, lineIndex) =>
        `<text x="${x}" y="${startY + lineIndex * lineHeight}" fill="${fill}" font-family="${fontFamily}" font-size="${fontSize}" font-weight="${fontWeight}" letter-spacing="${letterSpacing}" text-anchor="${textAnchor}"${bidi}>${escapeSvgText(line)}</text>`,
    )
    .join('');
}

function getMarqueeThemeStyles(theme: Theme) {
  if (theme === 'light') {
    return {
      rootFill: '#FFFFFF',
      frameFill: '#FFFFFF',
      frameStroke: '#EEF2F7',
      gridStroke: '#EEF3F8',
      gridOpacity: '0.14',
      innerStroke: '#EEF2F7',
      innerStrokeOpacity: '0.9',
      chromeDot: '#E2E8F0',
      chromeBar: '#F8FAFC',
      glowOpacity: '0.05',
      chipOpacity: '0.08',
      title: '#0F172A',
      text: '#475569',
      muted: '#64748B',
      panelFill: '#FFFFFF',
      panelStroke: '#EEF2F7',
      neutralFill: '#F8FAFC',
      neutralLine: '#EEF2F7',
      accentValue: '#0F172A',
    } as const;
  }

  return {
    rootFill: '#050506',
    frameFill: '#07080A',
    frameStroke: '#35363B',
    gridStroke: '#141519',
    gridOpacity: '0.4',
    innerStroke: '#FFFFFF',
    innerStrokeOpacity: '0.06',
    chromeDot: '#2E3036',
    chromeBar: '#141519',
    glowOpacity: '0.2',
    chipOpacity: '0.16',
    title: '#F8FAFC',
    text: '#D1D5DB',
    muted: '#9CA3AF',
    panelFill: '#0B0C0F',
    panelStroke: '#2A2C31',
    neutralFill: '#17181D',
    neutralLine: '#1A1C22',
    accentValue: '#FFFFFF',
  } as const;
}

function createMarqueeCardImage(card: HeroVisualCard, index: number, isRtl: boolean, theme: Theme) {
  const palette = MARQUEE_PALETTE[index % MARQUEE_PALETTE.length];
  const styles = getMarqueeThemeStyles(theme);
  const titleLines = wrapSvgText(card.title, isRtl ? 16 : 19).slice(0, 3);
  const subtitleLines = wrapSvgText(card.subtitle, isRtl ? 20 : 24).slice(0, 3);
  const titleX = isRtl ? 406 : 66;
  const textAnchor = isRtl ? 'end' : 'start';
  const bidi = isRtl ? ' direction="rtl" unicode-bidi="plaintext"' : '';
  const variant = index % 3;
  const statPanelX = isRtl ? 48 : 278;
  const statPanelTextX = isRtl ? 188 : 302;
  const detailPanelX = isRtl ? 246 : 48;
  const chartOriginX = isRtl ? 80 : 280;
  const chartBarX = chartOriginX + 24;
  const topMetricLabelX = isRtl ? 176 : 304;
  const topMetricValueX = isRtl ? 176 : 304;
  const bottomLeftX = isRtl ? 412 : 68;
  const bottomRightX = isRtl ? 214 : 266;

  const accentStops = `
    <linearGradient id="accent-${index}" x1="56" y1="84" x2="414" y2="584" gradientUnits="userSpaceOnUse">
      <stop stop-color="${palette.accent}" />
      <stop offset="1" stop-color="${palette.accentSoft}" />
    </linearGradient>
  `;

  const commonChrome = `
    <rect x="8" y="8" width="464" height="624" rx="28" fill="${styles.frameFill}" stroke="${styles.frameStroke}" stroke-width="2" />
    <rect x="20" y="20" width="440" height="600" rx="22" fill="url(#grid-${index})" opacity="${styles.gridOpacity}" />
    <rect x="20" y="20" width="440" height="600" rx="22" stroke="${styles.innerStroke}" stroke-opacity="${styles.innerStrokeOpacity}" stroke-dasharray="6 8" />
    <ellipse cx="422" cy="72" rx="152" ry="146" fill="url(#glow-${index})" />
    <circle cx="54" cy="48" r="5" fill="${styles.chromeDot}" />
    <circle cx="76" cy="48" r="5" fill="${styles.chromeDot}" />
    <circle cx="98" cy="48" r="5" fill="${styles.chromeDot}" />
    <rect x="344" y="41" width="84" height="12" rx="6" fill="${styles.chromeBar}" />
  `;

  const variantZero = `
    <rect x="52" y="88" width="132" height="30" rx="12" fill="${palette.accent}" fill-opacity="${styles.chipOpacity}" />
    ${renderSvgTextLines({
      lines: [card.eyebrow.toUpperCase()],
      x: isRtl ? 170 : 66,
      startY: 108,
      lineHeight: 0,
      fill: palette.tint,
      fontSize: 13,
      fontWeight: 700,
      textAnchor: isRtl ? 'end' : 'start',
      fontFamily: 'Arial, Helvetica, sans-serif',
      letterSpacing: '2',
      bidi,
    })}
    ${renderSvgTextLines({
      lines: titleLines,
      x: titleX,
      startY: 188,
      lineHeight: 48,
      fill: styles.title,
      fontSize: 42,
      fontWeight: 800,
      textAnchor,
      fontFamily: 'Arial Black, Arial, Helvetica, sans-serif',
      letterSpacing: '-1.4',
      bidi,
    })}
    <line x1="${isRtl ? 406 : 66}" y1="336" x2="${isRtl ? 286 : 214}" y2="336" stroke="url(#accent-${index})" stroke-width="3.5" stroke-linecap="round" />
    ${renderSvgTextLines({
      lines: subtitleLines,
      x: titleX,
      startY: 376,
      lineHeight: 24,
      fill: styles.muted,
      fontSize: 16,
      fontWeight: 500,
      textAnchor,
      fontFamily: 'Arial, Helvetica, sans-serif',
      bidi,
    })}

    <rect x="${statPanelX}" y="442" width="154" height="136" rx="20" fill="${styles.panelFill}" stroke="${styles.panelStroke}" />
    ${renderSvgTextLines({
      lines: [card.metricLabel.toUpperCase()],
      x: statPanelTextX,
      startY: 474,
      lineHeight: 0,
      fill: styles.muted,
      fontSize: 11,
      fontWeight: 700,
      textAnchor: isRtl ? 'end' : 'start',
      fontFamily: 'Arial, Helvetica, sans-serif',
      letterSpacing: '2',
      bidi,
    })}
    ${renderSvgTextLines({
      lines: [card.metricValue],
      x: statPanelTextX,
      startY: 530,
      lineHeight: 0,
      fill: styles.accentValue,
      fontSize: 34,
      fontWeight: 800,
      textAnchor: isRtl ? 'end' : 'start',
      fontFamily: 'Arial Black, Arial, Helvetica, sans-serif',
      bidi,
    })}
    <path d="M${isRtl ? 184 : 298} 552C${isRtl ? 170 : 312} 542 ${isRtl ? 146 : 336} 552 ${isRtl ? 132 : 350} 534C${isRtl ? 118 : 364} 516 ${isRtl ? 92 : 390} 524 ${isRtl ? 78 : 404} 502" stroke="url(#accent-${index})" stroke-width="3" stroke-linecap="round" />

    <rect x="${detailPanelX}" y="442" width="182" height="136" rx="20" fill="${styles.panelFill}" stroke="${styles.panelStroke}" />
    ${renderSvgTextLines({
      lines: [card.eyebrow],
      x: isRtl ? 408 : 72,
      startY: 476,
      lineHeight: 0,
      fill: styles.title,
      fontSize: 15,
      fontWeight: 700,
      textAnchor: isRtl ? 'end' : 'start',
      fontFamily: 'Arial, Helvetica, sans-serif',
      bidi,
    })}
    <rect x="${isRtl ? 266 : 72}" y="500" width="138" height="12" rx="6" fill="${styles.neutralFill}" />
    <rect x="${isRtl ? 302 : 72}" y="526" width="102" height="12" rx="6" fill="${palette.accent}" fill-opacity="0.72" />
    <rect x="${isRtl ? 248 : 72}" y="552" width="156" height="12" rx="6" fill="${styles.neutralFill}" />
  `;

  const variantOne = `
    <rect x="48" y="84" width="384" height="120" rx="20" fill="${styles.panelFill}" stroke="${styles.panelStroke}" />
    ${renderSvgTextLines({
      lines: [card.eyebrow.toUpperCase()],
      x: titleX,
      startY: 116,
      lineHeight: 0,
      fill: palette.tint,
      fontSize: 12,
      fontWeight: 700,
      textAnchor,
      fontFamily: 'Arial, Helvetica, sans-serif',
      letterSpacing: '2',
      bidi,
    })}
    ${renderSvgTextLines({
      lines: wrapSvgText(card.title, isRtl ? 18 : 24).slice(0, 2),
      x: titleX,
      startY: 158,
      lineHeight: 32,
      fill: styles.title,
      fontSize: 28,
      fontWeight: 800,
      textAnchor,
      fontFamily: 'Arial Black, Arial, Helvetica, sans-serif',
      letterSpacing: '-0.8',
      bidi,
    })}
    ${renderSvgTextLines({
      lines: [card.metricLabel.toUpperCase()],
      x: topMetricLabelX,
      startY: 118,
      lineHeight: 0,
      fill: styles.muted,
      fontSize: 11,
      fontWeight: 700,
      textAnchor: isRtl ? 'end' : 'start',
      fontFamily: 'Arial, Helvetica, sans-serif',
      letterSpacing: '2',
      bidi,
    })}
    ${renderSvgTextLines({
      lines: [card.metricValue],
      x: topMetricValueX,
      startY: 166,
      lineHeight: 0,
      fill: palette.accent,
      fontSize: 34,
      fontWeight: 800,
      textAnchor: isRtl ? 'end' : 'start',
      fontFamily: 'Arial Black, Arial, Helvetica, sans-serif',
      bidi,
    })}

    <rect x="48" y="224" width="384" height="212" rx="20" fill="${styles.panelFill}" stroke="${styles.panelStroke}" />
    <line x1="72" y1="274" x2="408" y2="274" stroke="${styles.neutralLine}" />
    <line x1="72" y1="320" x2="408" y2="320" stroke="${styles.neutralLine}" />
    <line x1="72" y1="366" x2="408" y2="366" stroke="${styles.neutralLine}" />
    <rect x="${chartBarX}" y="334" width="18" height="70" rx="9" fill="${palette.accent}" fill-opacity="0.5" />
    <rect x="${chartBarX + 30}" y="290" width="18" height="114" rx="9" fill="${palette.accent}" fill-opacity="0.64" />
    <rect x="${chartBarX + 60}" y="250" width="18" height="154" rx="9" fill="${palette.accent}" fill-opacity="0.82" />
    <rect x="${chartBarX + 90}" y="306" width="18" height="98" rx="9" fill="${palette.accent}" fill-opacity="0.56" />
    <path d="M${chartOriginX} 350C${chartOriginX + 28} 334 ${chartOriginX + 56} 336 ${chartOriginX + 84} 304C${chartOriginX + 108} 278 ${chartOriginX + 138} 272 ${chartOriginX + 166} 246" stroke="url(#accent-${index})" stroke-width="3.2" stroke-linecap="round" />
    ${renderSvgTextLines({
      lines: wrapSvgText(card.subtitle, isRtl ? 18 : 22).slice(0, 3),
      x: isRtl ? 408 : 72,
      startY: 286,
      lineHeight: 26,
      fill: styles.text,
      fontSize: 16,
      fontWeight: 600,
      textAnchor: isRtl ? 'end' : 'start',
      fontFamily: 'Arial, Helvetica, sans-serif',
      bidi,
    })}

    <rect x="48" y="456" width="118" height="112" rx="18" fill="${styles.panelFill}" stroke="${styles.panelStroke}" />
    <rect x="181" y="456" width="118" height="112" rx="18" fill="${styles.panelFill}" stroke="${styles.panelStroke}" />
    <rect x="314" y="456" width="118" height="112" rx="18" fill="${styles.panelFill}" stroke="${styles.panelStroke}" />
    <text x="72" y="490" fill="${styles.muted}" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="700" letter-spacing="2">A01</text>
    <text x="72" y="536" fill="${styles.title}" font-family="Arial Black, Arial, Helvetica, sans-serif" font-size="26" font-weight="800">01</text>
    <text x="205" y="490" fill="${styles.muted}" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="700" letter-spacing="2">A02</text>
    <text x="205" y="536" fill="${palette.accent}" font-family="Arial Black, Arial, Helvetica, sans-serif" font-size="26" font-weight="800">02</text>
    <text x="338" y="490" fill="${styles.muted}" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="700" letter-spacing="2">A03</text>
    <text x="338" y="536" fill="${styles.title}" font-family="Arial Black, Arial, Helvetica, sans-serif" font-size="26" font-weight="800">03</text>
  `;

  const variantTwo = `
    <rect x="48" y="84" width="384" height="170" rx="22" fill="${styles.panelFill}" stroke="${styles.panelStroke}" />
    <rect x="${isRtl ? 286 : 48}" y="104" width="146" height="30" rx="12" fill="${palette.accent}" fill-opacity="${styles.chipOpacity}" />
    ${renderSvgTextLines({
      lines: [card.metricLabel.toUpperCase()],
      x: isRtl ? 418 : 62,
      startY: 124,
      lineHeight: 0,
      fill: palette.tint,
      fontSize: 12,
      fontWeight: 700,
      textAnchor: isRtl ? 'end' : 'start',
      fontFamily: 'Arial, Helvetica, sans-serif',
      letterSpacing: '2',
      bidi,
    })}
    ${renderSvgTextLines({
      lines: [card.metricValue],
      x: isRtl ? 418 : 62,
      startY: 210,
      lineHeight: 0,
      fill: styles.accentValue,
      fontSize: 58,
      fontWeight: 800,
      textAnchor: isRtl ? 'end' : 'start',
      fontFamily: 'Arial Black, Arial, Helvetica, sans-serif',
      bidi,
    })}
    <path d="M${isRtl ? 182 : 298} 128C${isRtl ? 164 : 316} 118 ${isRtl ? 136 : 344} 118 ${isRtl ? 118 : 362} 140C${isRtl ? 104 : 376} 158 ${isRtl ? 80 : 400} 166 ${isRtl ? 64 : 416} 154" stroke="url(#accent-${index})" stroke-width="3.5" stroke-linecap="round" />

    <rect x="48" y="274" width="384" height="158" rx="20" fill="${styles.panelFill}" stroke="${styles.panelStroke}" />
    ${renderSvgTextLines({
      lines: titleLines,
      x: titleX,
      startY: 334,
      lineHeight: 40,
      fill: styles.title,
      fontSize: 34,
      fontWeight: 800,
      textAnchor,
      fontFamily: 'Arial Black, Arial, Helvetica, sans-serif',
      letterSpacing: '-1',
      bidi,
    })}
    ${renderSvgTextLines({
      lines: subtitleLines,
      x: titleX,
      startY: 408,
      lineHeight: 24,
      fill: styles.muted,
      fontSize: 15,
      fontWeight: 500,
      textAnchor,
      fontFamily: 'Arial, Helvetica, sans-serif',
      bidi,
    })}

    <rect x="48" y="452" width="184" height="120" rx="18" fill="${styles.panelFill}" stroke="${styles.panelStroke}" />
    <rect x="248" y="452" width="184" height="120" rx="18" fill="${styles.panelFill}" stroke="${styles.panelStroke}" />
    <text x="${bottomLeftX}" y="486" fill="${styles.title}" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="700" text-anchor="${isRtl ? 'end' : 'start'}"${bidi}>${escapeSvgText(card.eyebrow)}</text>
    <rect x="${isRtl ? 96 : 68}" y="512" width="144" height="10" rx="5" fill="${styles.neutralFill}" />
    <rect x="${isRtl ? 128 : 68}" y="538" width="112" height="10" rx="5" fill="${palette.accent}" fill-opacity="0.72" />
    <text x="${bottomRightX}" y="486" fill="${styles.muted}" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="700" letter-spacing="2" text-anchor="${isRtl ? 'end' : 'start'}"${bidi}>${escapeSvgText(card.metricLabel.toUpperCase())}</text>
    <line x1="268" y1="516" x2="412" y2="516" stroke="${styles.neutralLine}" />
    <line x1="268" y1="542" x2="398" y2="542" stroke="${styles.neutralLine}" />
  `;

  const content = variant === 0 ? variantZero : variant === 1 ? variantOne : variantTwo;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 640" fill="none">
      <defs>
        <pattern id="grid-${index}" width="22" height="22" patternUnits="userSpaceOnUse">
          <path d="M22 0H0V22" fill="none" stroke="${styles.gridStroke}" stroke-width="1" />
        </pattern>
        <radialGradient id="glow-${index}" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(422 72) rotate(134) scale(240 220)">
          <stop stop-color="${palette.tint}" stop-opacity="${styles.glowOpacity}" />
          <stop offset="1" stop-color="${palette.tint}" stop-opacity="0" />
        </radialGradient>
        ${accentStops}
      </defs>
      <rect width="480" height="640" rx="30" fill="${styles.rootFill}" />
      ${commonChrome}
      ${content}
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function HeroVisualPanel({ images }: { images: string[] }) {
  const { theme } = useUISettings();

  return (
    <div className="relative h-full w-full overflow-hidden lg:overflow-visible">
      <ThreeDMarquee
        images={images}
        theme={theme}
        className="absolute -left-[16%] -right-[34%] top-[6%] bottom-[-20%] translate-x-[10%] sm:-left-[12%] sm:-right-[32%] sm:top-[7%] sm:bottom-[-22%] sm:translate-x-[12%] lg:-left-[20%] lg:-right-[58%] lg:top-[8%] lg:bottom-[-28%] lg:translate-x-[16%]"
      />
    </div>
  );
}

export default function Hero() {
  const { language, theme } = useUISettings();
  const copy = HERO_COPY[language];
  const visualCards = HERO_VISUAL_CARDS[language];

  const marqueeImages = useMemo(
    () => visualCards.map((card, index) => createMarqueeCardImage(card, index, language === 'ar', theme)),
    [language, theme, visualCards],
  );

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: 'transparent', paddingTop: '64px' }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[calc(100vh-64px)] py-16">
          <motion.div variants={stagger} initial="hidden" animate="show" className="lg:pr-10">
            <motion.div variants={item}>
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
                style={{
                  border: '1px solid var(--border-soft)',
                  background: 'rgba(255,255,255,0.03)',
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--text-faint)',
                }}
              >
                <span className="accent-dot" />
                {copy.badge}
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h1
                style={{
                  fontFamily: 'var(--font-heading), Arial Black, sans-serif',
                  fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
                  fontWeight: 800,
                  lineHeight: 1.04,
                  letterSpacing: '-0.03em',
                  marginBottom: '1.5rem',
                }}
              >
                <span style={{ color: 'var(--text-primary)', display: 'block' }}>{copy.titleLead}</span>
                <span style={{ color: 'var(--color-accent)', display: 'block' }}>{copy.titleAccent}</span>
              </h1>
            </motion.div>

            <motion.p
              variants={item}
              style={{
                fontFamily: 'var(--font-body), system-ui',
                fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                maxWidth: '480px',
                marginBottom: '2.5rem',
              }}
            >
              {copy.subtitle}
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="btn-primary">
                {copy.ctaAudit}
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="btn-secondary">
                {copy.ctaServices}
              </a>
            </motion.div>

            <motion.p
              variants={item}
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#3A3A3A',
              }}
            >
              {copy.trustline}
            </motion.p>
          </motion.div>

          <div className="relative lg:-mr-36" style={{ height: 'clamp(430px, 70vw, 860px)' }}>
            <HeroVisualPanel images={marqueeImages} />
          </div>
        </div>
      </div>
    </section>
  );
}
