'use client';

import Link from 'next/link';
import { Language, useUISettings } from '@/components/providers/UISettingsProvider';

type LegalSection = { title: string; points: string[] };

const PRIVACY_COPY: Record<Language, {
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
    title: 'Privacy',
    accent: 'Policy',
    lastUpdatedLabel: 'Last updated',
    intro: 'This Privacy Policy explains how The Percentage FZ-LLC collects, uses, stores, and protects information when you use our website and services.',
    backHome: 'Back to Home',
    sections: [
      { title: '1. Information We Collect', points: ['Contact details such as name, email, phone, and company information.', 'Project and service details shared during discovery, onboarding, and delivery.', 'Technical and usage data including browser, IP, and page interactions.'] },
      { title: '2. How We Use Information', points: ['To communicate, deliver services, and manage client relationships.', 'To improve website experience, reporting, and operational quality.', 'To send essential updates, invoices, and support communications.'] },
      { title: '3. Sharing and Disclosure', points: ['We may share data with trusted service providers that support delivery.', 'We may disclose data when required by law or legal process.', 'We do not sell personal information to third parties.'] },
      { title: '4. Security and Retention', points: ['We apply reasonable technical and organizational safeguards.', 'Data is retained only as needed for services, legal obligations, and legitimate business use.', 'No system can guarantee absolute security.'] },
      { title: '5. Your Rights', points: ['You may request access, correction, or deletion of your personal data where applicable.', 'You may contact us for privacy-related requests or concerns.'] },
      { title: '6. Contact', points: ['The Percentage FZ-LLC', 'Email: thepercentage@outlook.com', 'Phone: +971 56 331 9030 , +971 56 929 8537'] },
    ],
  },
  ar: {
    legalLabel: 'قانوني',
    title: 'سياسة',
    accent: 'الخصوصية',
    lastUpdatedLabel: 'آخر تحديث',
    intro: 'توضح سياسة الخصوصية هذه كيفية جمع The Percentage FZ-LLC للمعلومات واستخدامها وتخزينها وحمايتها عند استخدام موقعنا وخدماتنا.',
    backHome: 'العودة إلى الرئيسية',
    sections: [
      { title: '1. المعلومات التي نجمعها', points: ['بيانات الاتصال مثل الاسم والبريد الإلكتروني والهاتف ومعلومات الشركة.', 'تفاصيل المشروع والخدمة التي تتم مشاركتها خلال الاكتشاف والتهيئة والتنفيذ.', 'بيانات تقنية واستخدام مثل المتصفح وعنوان IP وتفاعلات الصفحات.'] },
      { title: '2. كيف نستخدم المعلومات', points: ['للتواصل وتقديم الخدمات وإدارة العلاقة مع العملاء.', 'لتحسين تجربة الموقع وجودة العمليات والتقارير.', 'لإرسال التحديثات الأساسية والفواتير ورسائل الدعم.'] },
      { title: '3. مشاركة البيانات والإفصاح', points: ['قد نشارك البيانات مع مزودي خدمات موثوقين يدعمون تقديم الخدمة.', 'قد نفصح عن البيانات إذا تطلب القانون أو الإجراءات القانونية ذلك.', 'لا نبيع المعلومات الشخصية لأي طرف ثالث.'] },
      { title: '4. الأمان والاحتفاظ بالبيانات', points: ['نطبق إجراءات حماية تقنية وتنظيمية معقولة.', 'نحتفظ بالبيانات فقط للمدة اللازمة للخدمة والالتزامات القانونية والاستخدام المشروع.', 'لا يوجد نظام يمكنه ضمان أمان مطلق.'] },
      { title: '5. حقوقك', points: ['يمكنك طلب الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها حيثما ينطبق ذلك.', 'يمكنك التواصل معنا لأي طلبات أو استفسارات متعلقة بالخصوصية.'] },
      { title: '6. التواصل', points: ['The Percentage FZ-LLC', 'البريد الإلكتروني: thepercentage@outlook.com', 'الهاتف: +971 56 331 9030 , +971 56 929 8537'] },
    ],
  },
  fr: {
    legalLabel: 'Juridique',
    title: 'Politique de',
    accent: 'Confidentialite',
    lastUpdatedLabel: 'Derniere mise a jour',
    intro: 'Cette politique explique comment The Percentage FZ-LLC collecte, utilise, conserve et protege les informations dans le cadre de ses services.',
    backHome: 'Retour a l accueil',
    sections: [
      { title: '1. Informations Collectees', points: ['Coordonnees: nom, email, telephone, societe.', 'Informations projet partagees durant audit, onboarding et execution.', 'Donnees techniques: navigateur, IP, interactions web.'] },
      { title: '2. Utilisation des Donnees', points: ['Communication, livraison des services, suivi client.', 'Amelioration continue de nos operations et de la qualite.', 'Envoi des informations essentielles: updates, factures, support.'] },
      { title: '3. Partage et Divulgation', points: ['Partage possible avec des prestataires de confiance necessaires a la livraison.', 'Divulgation possible en cas d obligation legale.', 'Aucune vente de donnees personnelles a des tiers.'] },
      { title: '4. Securite et Conservation', points: ['Mesures techniques et organisationnelles raisonnables.', 'Conservation limitee aux besoins contractuels et legaux.', 'Aucun systeme ne garantit une securite absolue.'] },
      { title: '5. Vos Droits', points: ['Vous pouvez demander acces, correction ou suppression selon le cadre applicable.', 'Vous pouvez nous contacter pour toute question de confidentialite.'] },
      { title: '6. Contact', points: ['The Percentage FZ-LLC', 'Email: thepercentage@outlook.com', 'Phone: +971 56 331 9030 , +971 56 929 8537'] },
    ],
  },
  nl: {
    legalLabel: 'Juridisch',
    title: 'Privacy',
    accent: 'Beleid',
    lastUpdatedLabel: 'Laatst bijgewerkt',
    intro: 'Dit privacybeleid legt uit hoe The Percentage FZ-LLC gegevens verzamelt, gebruikt, bewaart en beschermt bij gebruik van onze diensten.',
    backHome: 'Terug naar Home',
    sections: [
      { title: '1. Welke Gegevens We Verzamelen', points: ['Contactgegevens zoals naam, e-mail, telefoon en bedrijfsinformatie.', 'Projectinformatie gedeeld tijdens intake, onboarding en uitvoering.', 'Technische gegevens zoals browser, IP-adres en websitegebruik.'] },
      { title: '2. Hoe We Gegevens Gebruiken', points: ['Voor communicatie, servicelevering en klantbeheer.', 'Voor verbetering van website, processen en kwaliteit.', 'Voor noodzakelijke updates, facturatie en supportberichten.'] },
      { title: '3. Delen van Gegevens', points: ['Gegevens kunnen gedeeld worden met vertrouwde leveranciers voor servicelevering.', 'Openbaarmaking kan plaatsvinden als de wet dat vereist.', 'Wij verkopen geen persoonsgegevens aan derden.'] },
      { title: '4. Beveiliging en Bewaartermijn', points: ['We gebruiken redelijke technische en organisatorische beveiliging.', 'Gegevens worden bewaard zolang nodig voor dienstverlening en wettelijke plichten.', 'Absolute beveiliging kan niet worden gegarandeerd.'] },
      { title: '5. Jouw Rechten', points: ['Je kunt verzoeken om inzage, correctie of verwijdering waar van toepassing.', 'Je kunt contact opnemen voor privacyvragen of verzoeken.'] },
      { title: '6. Contact', points: ['The Percentage FZ-LLC', 'Email: thepercentage@outlook.com', 'Phone: +971 56 331 9030 , +971 56 929 8537'] },
    ],
  },
  tl: {
    legalLabel: 'Legal',
    title: 'Privacy',
    accent: 'Policy',
    lastUpdatedLabel: 'Huling update',
    intro: 'Ipinapaliwanag ng policy na ito kung paano kinokolekta, ginagamit, iniimbak, at pinoprotektahan ng The Percentage FZ-LLC ang iyong impormasyon.',
    backHome: 'Bumalik sa Home',
    sections: [
      { title: '1. Anong Impormasyon ang Kinokolekta', points: ['Contact details gaya ng pangalan, email, phone, at company details.', 'Project information na ibinibigay sa discovery, onboarding, at delivery.', 'Technical data gaya ng browser, IP, at paggamit ng website.'] },
      { title: '2. Paano Ginagamit ang Impormasyon', points: ['Para sa komunikasyon, service delivery, at client management.', 'Para mapabuti ang website at quality ng operations.', 'Para sa updates, invoices, at support communication.'] },
      { title: '3. Pagbabahagi ng Data', points: ['Maaaring ibahagi sa trusted providers na kailangan sa service delivery.', 'Maaaring mag-disclose kapag required ng batas.', 'Hindi kami nagbebenta ng personal data sa third parties.'] },
      { title: '4. Security at Retention', points: ['May reasonable technical at organizational safeguards kami.', 'Data ay iniingatan lamang ayon sa operational at legal need.', 'Walang system na may absolute security guarantee.'] },
      { title: '5. Iyong Mga Karapatan', points: ['Maaari kang humiling ng access, correction, o deletion kung applicable.', 'Maaari kang makipag-ugnayan para sa anumang privacy concern.'] },
      { title: '6. Contact', points: ['The Percentage FZ-LLC', 'Email: thepercentage@outlook.com', 'Phone: +971 56 331 9030 , +971 56 929 8537'] },
    ],
  },
  hi: {
    legalLabel: 'कानूनी',
    title: 'गोपनीयता',
    accent: 'नीति',
    lastUpdatedLabel: 'अंतिम अपडेट',
    intro: 'यह गोपनीयता नीति बताती है कि The Percentage FZ-LLC आपकी जानकारी को कैसे एकत्र, उपयोग, संग्रहीत और सुरक्षित करता है।',
    backHome: 'होम पर वापस',
    sections: [
      { title: '1. हम कौन-सी जानकारी एकत्र करते हैं', points: ['नाम, ईमेल, फोन और कंपनी विवरण जैसी संपर्क जानकारी।', 'डिस्कवरी, ऑनबोर्डिंग और डिलीवरी के दौरान साझा की गई परियोजना जानकारी।', 'ब्राउज़र, IP और वेबसाइट उपयोग जैसी तकनीकी जानकारी।'] },
      { title: '2. जानकारी का उपयोग कैसे करते हैं', points: ['संचार, सेवा डिलीवरी और क्लाइंट प्रबंधन के लिए।', 'वेबसाइट अनुभव, रिपोर्टिंग और संचालन गुणवत्ता सुधारने के लिए।', 'आवश्यक अपडेट, इनवॉइस और सपोर्ट संदेश भेजने के लिए।'] },
      { title: '3. डेटा साझा करना और खुलासा', points: ['सेवा डिलीवरी में सहायता करने वाले विश्वसनीय सेवा प्रदाताओं के साथ डेटा साझा किया जा सकता है।', 'कानून या कानूनी प्रक्रिया की आवश्यकता पर खुलासा किया जा सकता है।', 'हम व्यक्तिगत डेटा तीसरे पक्ष को नहीं बेचते हैं।'] },
      { title: '4. सुरक्षा और डेटा संरक्षण अवधि', points: ['हम उचित तकनीकी और संगठनात्मक सुरक्षा उपाय लागू करते हैं।', 'डेटा केवल उतनी अवधि तक रखा जाता है जितनी सेवा, कानूनी दायित्व और वैध व्यावसायिक उपयोग के लिए जरूरी हो।', 'कोई भी प्रणाली पूर्ण सुरक्षा की गारंटी नहीं दे सकती।'] },
      { title: '5. आपके अधिकार', points: ['जहां लागू हो, आप अपने व्यक्तिगत डेटा तक पहुंच, संशोधन या हटाने का अनुरोध कर सकते हैं।', 'गोपनीयता संबंधी किसी भी अनुरोध या चिंता के लिए आप हमसे संपर्क कर सकते हैं।'] },
      { title: '6. संपर्क', points: ['The Percentage FZ-LLC', 'ईमेल: thepercentage@outlook.com', 'फ़ोन: +971 56 331 9030 , +971 56 929 8537'] },
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

export default function PrivacyPolicyPage() {
  const { language } = useUISettings();
  const copy = PRIVACY_COPY[language];
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
