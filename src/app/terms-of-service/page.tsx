'use client';

import Link from 'next/link';
import { Language, useUISettings } from '@/components/providers/UISettingsProvider';

type LegalSection = { title: string; points: string[] };

const TERMS_COPY: Record<Language, {
  legalLabel: string;
  title: string;
  accent: string;
  lastUpdatedLabel: string;
  intro: string;
  backHome: string;
  sections: LegalSection[];
}> = {
  en: {
    legalLabel: 'Legal',
    title: 'Terms of',
    accent: 'Service',
    lastUpdatedLabel: 'Last updated',
    intro: 'These Terms of Service define the legal framework for using this website and working with The Percentage FZ-LLC.',
    backHome: 'Back to Home',
    sections: [
      { title: '1. Acceptance of Terms', points: ['By using this website or our services, you agree to these terms.', 'If you do not agree, please discontinue use.'] },
      { title: '2. Scope of Services', points: ['We provide e-commerce, growth, and related digital services.', 'Detailed scope, timelines, and deliverables are defined in separate agreements.'] },
      { title: '3. Client Responsibilities', points: ['You must provide accurate information, timely approvals, and required access.', 'You remain responsible for product legality, compliance, and business claims.'] },
      { title: '4. Fees and Payments', points: ['Fees, revenue shares, and billing cycles are defined in your signed proposal or agreement.', 'Late or missed payments may impact delivery timelines.'] },
      { title: '5. Performance Disclaimer', points: ['We do not guarantee specific sales, rank, traffic, or profit outcomes.', 'Results depend on market conditions, competition, and third-party platforms.'] },
      { title: '6. Intellectual Property and Confidentiality', points: ['Each party retains ownership of pre-existing intellectual property.', 'Confidential information must be protected and not shared without consent.'] },
      { title: '7. Limitation of Liability and Governing Law', points: ['Liability is limited to the extent permitted by applicable law and contract.', 'These terms are governed by applicable UAE legal framework.'] },
      { title: '8. Contact', points: ['Email: thepercentage@outlook.com', 'Phone: +971 50 633 1903'] },
    ],
  },
  ar: {
    legalLabel: 'قانوني',
    title: 'شروط',
    accent: 'الخدمة',
    lastUpdatedLabel: 'آخر تحديث',
    intro: 'تحدد شروط الخدمة هذه الإطار القانوني لاستخدام الموقع والعمل مع The Percentage FZ-LLC.',
    backHome: 'العودة إلى الرئيسية',
    sections: [
      { title: '1. قبول الشروط', points: ['باستخدامك للموقع أو خدماتنا فإنك توافق على هذه الشروط.', 'إذا كنت لا توافق، يرجى التوقف عن الاستخدام.'] },
      { title: '2. نطاق الخدمات', points: ['نقدم خدمات التجارة الإلكترونية والنمو الرقمي والخدمات المرتبطة بها.', 'نطاق العمل التفصيلي والجدول الزمني والمخرجات يتم تحديدها في اتفاقيات منفصلة.'] },
      { title: '3. مسؤوليات العميل', points: ['يلتزم العميل بتقديم معلومات صحيحة وموافقات في الوقت المناسب وتوفير صلاحيات الوصول المطلوبة.', 'يبقى العميل مسؤولاً عن قانونية المنتجات والامتثال والادعاءات التجارية الخاصة به.'] },
      { title: '4. الرسوم والمدفوعات', points: ['تُحدد الرسوم ونسب المشاركة ودورات الفوترة في المقترح أو الاتفاقية الموقعة.', 'قد يؤثر التأخير أو عدم السداد على جداول التنفيذ والتسليم.'] },
      { title: '5. إخلاء مسؤولية الأداء', points: ['لا نضمن نتائج محددة في المبيعات أو الترتيب أو الزيارات أو الأرباح.', 'تعتمد النتائج على ظروف السوق والمنافسة والمنصات الخارجية.'] },
      { title: '6. الملكية الفكرية والسرية', points: ['يحتفظ كل طرف بملكية حقوقه الفكرية السابقة.', 'يجب حماية المعلومات السرية وعدم مشاركتها دون موافقة.'] },
      { title: '7. حدود المسؤولية والقانون الحاكم', points: ['تكون المسؤولية محدودة بالقدر الذي يسمح به القانون والعقد المطبق.', 'تخضع هذه الشروط للإطار القانوني المعمول به في دولة الإمارات.'] },
      { title: '8. التواصل', points: ['البريد الإلكتروني: thepercentage@outlook.com', 'الهاتف: +971 50 633 1903'] },
    ],
  },
  fr: {
    legalLabel: 'Juridique',
    title: 'Conditions de',
    accent: 'Service',
    lastUpdatedLabel: 'Derniere mise a jour',
    intro: 'Ces conditions definissent le cadre legal pour l utilisation du site et des services de The Percentage FZ-LLC.',
    backHome: 'Retour a l accueil',
    sections: [
      { title: '1. Acceptation', points: ['En utilisant ce site ou nos services, vous acceptez ces conditions.', 'Si vous n acceptez pas, merci de ne pas utiliser nos services.'] },
      { title: '2. Portee des Services', points: ['Nous proposons des services e-commerce et croissance digitale.', 'Le perimetre detaille est defini dans vos accords commerciaux.'] },
      { title: '3. Responsabilites Client', points: ['Vous fournissez informations exactes, validations et acces necessaires.', 'Vous etes responsable de la conformite de vos produits et contenus.'] },
      { title: '4. Tarifs et Paiements', points: ['Tarifs et cycles de paiement sont specifies dans vos accords.', 'Les retards de paiement peuvent impacter la livraison.'] },
      { title: '5. Clause Performance', points: ['Aucun resultat commercial specifique ne peut etre garanti.', 'Les resultats dependent du marche, de la concurrence et des plateformes.'] },
      { title: '6. Propriete Intellectuelle et Confidentialite', points: ['Chaque partie conserve sa propriete intellectuelle preexistante.', 'Les informations confidentielles doivent rester protegees.'] },
      { title: '7. Responsabilite et Droit Applicable', points: ['La responsabilite est limitee selon le cadre contractuel et legal.', 'Ces conditions sont regies par le cadre juridique applicable aux UAE.'] },
      { title: '8. Contact', points: ['Email: thepercentage@outlook.com', 'Phone: +971 50 633 1903'] },
    ],
  },
  nl: {
    legalLabel: 'Juridisch',
    title: 'Voorwaarden van',
    accent: 'Service',
    lastUpdatedLabel: 'Laatst bijgewerkt',
    intro: 'Deze voorwaarden vormen het juridische kader voor gebruik van de website en samenwerking met The Percentage FZ-LLC.',
    backHome: 'Terug naar Home',
    sections: [
      { title: '1. Acceptatie', points: ['Door gebruik van site of diensten ga je akkoord met deze voorwaarden.', 'Als je niet akkoord bent, stop dan met gebruik.'] },
      { title: '2. Omvang van Diensten', points: ['Wij leveren e-commerce en digitale groeidiensten.', 'Scope en deliverables staan in afzonderlijke commerciële afspraken.'] },
      { title: '3. Verantwoordelijkheden van de Klant', points: ['Je levert correcte informatie, tijdige approvals en benodigde toegang.', 'Je bent verantwoordelijk voor compliance van producten en claims.'] },
      { title: '4. Kosten en Betalingen', points: ['Tarieven en betaalcycli zijn vastgelegd in je overeenkomst.', 'Te late betalingen kunnen impact hebben op planning en delivery.'] },
      { title: '5. Performance Disclaimer', points: ['Specifieke verkoop- of winstresultaten worden niet gegarandeerd.', 'Resultaten hangen af van markt, concurrentie en platformfactoren.'] },
      { title: '6. Intellectueel Eigendom en Vertrouwelijkheid', points: ['Bestaand intellectueel eigendom blijft eigendom van de oorspronkelijke partij.', 'Vertrouwelijke informatie moet beschermd blijven.'] },
      { title: '7. Aansprakelijkheid en Toepasselijk Recht', points: ['Aansprakelijkheid is beperkt binnen de wettelijke en contractuele grenzen.', 'Deze voorwaarden vallen onder het toepasselijke UAE juridisch kader.'] },
      { title: '8. Contact', points: ['Email: thepercentage@outlook.com', 'Phone: +971 50 633 1903'] },
    ],
  },
  tl: {
    legalLabel: 'Legal',
    title: 'Terms of',
    accent: 'Service',
    lastUpdatedLabel: 'Huling update',
    intro: 'Ang terms na ito ang legal framework para sa paggamit ng website at pakikipagtrabaho sa The Percentage FZ-LLC.',
    backHome: 'Bumalik sa Home',
    sections: [
      { title: '1. Pagtanggap sa Terms', points: ['Sa paggamit ng site o services, sumasang-ayon ka sa terms na ito.', 'Kung hindi ka sang-ayon, itigil ang paggamit.'] },
      { title: '2. Saklaw ng Serbisyo', points: ['Nagbibigay kami ng e-commerce at digital growth services.', 'Ang detailed scope ay nasa hiwalay na proposal o agreement.'] },
      { title: '3. Responsibilidad ng Client', points: ['Dapat kang magbigay ng tamang impormasyon, approvals, at access sa tamang oras.', 'Ikaw ang responsable sa compliance ng products at claims mo.'] },
      { title: '4. Bayad at Billing', points: ['Ang fees at billing cycle ay nasa iyong agreement.', 'Ang late payment ay maaaring makaapekto sa delivery timeline.'] },
      { title: '5. Performance Disclaimer', points: ['Walang garantiyang specific sales o profit outcome.', 'Depende ang resulta sa market, competition, at third-party platforms.'] },
      { title: '6. IP at Confidentiality', points: ['Bawat panig ay may pagmamay-ari sa sariling pre-existing IP.', 'Dapat protektado ang confidential information.'] },
      { title: '7. Liability at Governing Law', points: ['Limitado ang liability ayon sa batas at kontrata.', 'Saklaw ito ng applicable UAE legal framework.'] },
      { title: '8. Contact', points: ['Email: thepercentage@outlook.com', 'Phone: +971 50 633 1903'] },
    ],
  },
  hi: {
    legalLabel: 'कानूनी',
    title: 'सेवा की',
    accent: 'शर्तें',
    lastUpdatedLabel: 'अंतिम अपडेट',
    intro: 'ये शर्तें वेबसाइट उपयोग और The Percentage FZ-LLC के साथ काम करने का कानूनी ढांचा निर्धारित करती हैं।',
    backHome: 'होम पर वापस',
    sections: [
      { title: '1. शर्तों की स्वीकृति', points: ['इस वेबसाइट या हमारी सेवाओं का उपयोग करते ही आप इन शर्तों से सहमत माने जाएंगे।', 'यदि आप सहमत नहीं हैं, तो कृपया उपयोग बंद करें।'] },
      { title: '2. सेवाओं का दायरा', points: ['हम ई-कॉमर्स, ग्रोथ और संबंधित डिजिटल सेवाएं प्रदान करते हैं।', 'विस्तृत स्कोप, टाइमलाइन और डिलिवरेबल्स अलग एग्रीमेंट में परिभाषित होते हैं।'] },
      { title: '3. क्लाइंट की जिम्मेदारियां', points: ['आपको सही जानकारी, समय पर अनुमोदन और आवश्यक एक्सेस देना होगा।', 'उत्पाद की वैधता, अनुपालन और व्यावसायिक दावों की जिम्मेदारी क्लाइंट की होगी।'] },
      { title: '4. शुल्क और भुगतान', points: ['शुल्क, राजस्व साझेदारी और बिलिंग चक्र आपके हस्ताक्षरित प्रस्ताव या एग्रीमेंट में निर्धारित होंगे।', 'देरी से भुगतान सेवा डिलीवरी की टाइमलाइन को प्रभावित कर सकता है।'] },
      { title: '5. प्रदर्शन अस्वीकरण', points: ['हम विशिष्ट बिक्री, रैंक, ट्रैफिक या लाभ की गारंटी नहीं देते।', 'परिणाम बाजार की स्थिति, प्रतिस्पर्धा और थर्ड-पार्टी प्लेटफॉर्म पर निर्भर करते हैं।'] },
      { title: '6. बौद्धिक संपदा और गोपनीयता', points: ['हर पक्ष अपनी पूर्व-विद्यमान बौद्धिक संपदा का स्वामित्व बनाए रखता है।', 'गोपनीय जानकारी को सुरक्षित रखना और बिना सहमति साझा न करना आवश्यक है।'] },
      { title: '7. देयता सीमा और लागू कानून', points: ['देयता लागू कानून और अनुबंध की सीमा तक सीमित रहेगी।', 'ये शर्तें UAE के लागू कानूनी ढांचे द्वारा संचालित होंगी।'] },
      { title: '8. संपर्क', points: ['ईमेल: thepercentage@outlook.com', 'फ़ोन: +971 50 633 1903'] },
    ],
  },
};

const LAST_UPDATED_BY_LANGUAGE: Record<Language, string> = {
  en: 'March 13, 2026',
  ar: '13 مارس 2026',
  fr: '13 mars 2026',
  nl: '13 maart 2026',
  tl: 'Marso 13, 2026',
  hi: '13 मार्च 2026',
};

export default function TermsOfServicePage() {
  const { language } = useUISettings();
  const copy = TERMS_COPY[language];
  const lastUpdated = LAST_UPDATED_BY_LANGUAGE[language];

  return (
    <section className="section-base" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-strong)', paddingTop: '6.5rem' }}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.16em] mb-3" style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-mono), monospace' }}>
            {copy.legalLabel}
          </p>
          <h1 style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.08, color: 'var(--text-primary)' }}>
            {copy.title} <span style={{ color: 'var(--color-accent)' }}>{copy.accent}</span>
          </h1>
          <p className="mt-3 text-sm" style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-body), system-ui' }}>
            {copy.lastUpdatedLabel}: {lastUpdated}
          </p>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-body), system-ui' }}>
            {copy.intro}
          </p>
          <Link href="/" className="inline-flex mt-5 text-sm font-semibold" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body), system-ui' }}>
            {copy.backHome}
          </Link>
        </div>

        <div className="space-y-6">
          {copy.sections.map((section) => (
            <article key={section.title} className="rounded-2xl p-6 md:p-7" style={{ background: 'var(--surface)', border: '1px solid var(--border-strong)' }}>
              <h2 className="mb-3" style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: '1.15rem', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>
                {section.title}
              </h2>
              <ul className="space-y-2.5">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="accent-dot mt-2.5 shrink-0" />
                    <span style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-body), system-ui' }}>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
