'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Language, useUISettings } from '@/components/providers/UISettingsProvider';

type ContactCopy = {
  sectionLabel: string;
  title: string;
  subtitle: string;
  description: string;
  infoPhoneLabel: string;
  infoEmailLabel: string;
  infoLocationLabel: string;
  infoLocationValue: string;
  fieldFullName: string;
  fieldBusinessName: string;
  fieldEmail: string;
  fieldPhone: string;
  fieldService: string;
  fieldMessage: string;
  placeholderFullName: string;
  placeholderBusinessName: string;
  placeholderEmail: string;
  placeholderPhone: string;
  placeholderService: string;
  placeholderMessage: string;
  serviceOptions: string[];
  submit: string;
  sending: string;
  success: string;
  error: string;
  errorName: string;
  errorBusiness: string;
  errorEmailRequired: string;
  errorEmailInvalid: string;
  errorPhone: string;
};

const CONTACT_COPY: Record<Language, ContactCopy> = {
  en: {
    sectionLabel: "Let's Talk",
    title: 'Ready to Grow?',
    subtitle: 'Start With a Free Audit.',
    description: 'Tell us about your business and we will identify where revenue is leaking - with no cost and no commitment.',
    infoPhoneLabel: 'Phone / WhatsApp',
    infoEmailLabel: 'Email',
    infoLocationLabel: 'Location',
    infoLocationValue: 'RAK Economic Zone (RAKEZ), UAE',
    fieldFullName: 'Full Name',
    fieldBusinessName: 'Business Name',
    fieldEmail: 'Email Address',
    fieldPhone: 'Phone / WhatsApp',
    fieldService: 'What are you looking for?',
    fieldMessage: 'Message (optional)',
    placeholderFullName: 'Your full name',
    placeholderBusinessName: 'Your brand or company',
    placeholderEmail: 'you@yourbrand.com',
    placeholderPhone: '+971 50 000 0000',
    placeholderService: 'Select a service...',
    placeholderMessage: 'Tell us more about your business...',
    serviceOptions: [
      'Marketplace Management (Amazon / Noon)',
      'E-Commerce Website Development',
      'Mobile App Development',
      'Performance Marketing',
      'Creative Production',
      'Custom Software',
      'Full-Service Partnership',
      'Not sure - I need advice',
    ],
    submit: 'Request Free Audit',
    sending: 'Sending...',
    success: 'Thank you! We will be in touch within 24 hours.',
    error: 'Something went wrong. Email us at thepercentage@outlook.com',
    errorName: 'Name is required',
    errorBusiness: 'Business name is required',
    errorEmailRequired: 'Email is required',
    errorEmailInvalid: 'Invalid email',
    errorPhone: 'Phone is required',
  },
  ar: {
    sectionLabel: 'لنتحدث',
    title: 'هل أنت جاهز للنمو؟',
    subtitle: 'ابدأ بتدقيق مجاني.',
    description: 'أخبرنا عن عملك وسنحدد أكبر فرص النمو لديك بدون تكلفة وبدون التزام.',
    infoPhoneLabel: 'الهاتف / واتساب',
    infoEmailLabel: 'البريد الإلكتروني',
    infoLocationLabel: 'الموقع',
    infoLocationValue: 'RAK Economic Zone (RAKEZ), UAE',
    fieldFullName: 'الاسم الكامل',
    fieldBusinessName: 'اسم النشاط التجاري',
    fieldEmail: 'عنوان البريد الإلكتروني',
    fieldPhone: 'الهاتف / واتساب',
    fieldService: 'ما الخدمة التي تبحث عنها؟',
    fieldMessage: 'الرسالة (اختياري)',
    placeholderFullName: 'اكتب اسمك الكامل',
    placeholderBusinessName: 'اسم العلامة أو الشركة',
    placeholderEmail: 'you@yourbrand.com',
    placeholderPhone: '+971 50 000 0000',
    placeholderService: 'اختر خدمة...',
    placeholderMessage: 'أخبرنا المزيد عن نشاطك...',
    serviceOptions: [
      'إدارة المتاجر (Amazon / Noon)',
      'تطوير موقع تجارة إلكترونية',
      'تطوير تطبيق جوال',
      'تسويق أدائي',
      'إنتاج إبداعي',
      'برمجيات مخصصة',
      'شراكة شاملة',
      'غير متأكد - أحتاج استشارة',
    ],
    submit: 'اطلب تدقيقاً مجانياً',
    sending: 'جارٍ الإرسال...',
    success: 'شكراً لك! سنتواصل معك خلال 24 ساعة.',
    error: 'حدث خطأ. راسلنا على: thepercentage@outlook.com',
    errorName: 'الاسم مطلوب',
    errorBusiness: 'اسم النشاط التجاري مطلوب',
    errorEmailRequired: 'البريد الإلكتروني مطلوب',
    errorEmailInvalid: 'البريد الإلكتروني غير صحيح',
    errorPhone: 'رقم الهاتف مطلوب',
  },
  fr: {
    sectionLabel: 'Parlons',
    title: 'Prêt à grandir ?',
    subtitle: 'Commencez par un audit gratuit.',
    description: 'Parlez-nous de votre activité et nous identifierons vos meilleures opportunités de croissance, sans engagement.',
    infoPhoneLabel: 'Telephone / WhatsApp',
    infoEmailLabel: 'Email',
    infoLocationLabel: 'Localisation',
    infoLocationValue: 'RAK Economic Zone (RAKEZ), UAE',
    fieldFullName: 'Nom Complet',
    fieldBusinessName: 'Nom de la société',
    fieldEmail: 'Adresse email',
    fieldPhone: 'Telephone / WhatsApp',
    fieldService: 'Quel service cherchez-vous ?',
    fieldMessage: 'Message (optionnel)',
    placeholderFullName: 'Votre nom complet',
    placeholderBusinessName: 'Votre marque ou société',
    placeholderEmail: 'you@yourbrand.com',
    placeholderPhone: '+971 50 000 0000',
    placeholderService: 'Sélectionnez un service...',
    placeholderMessage: 'Parlez-nous de votre activité...',
    serviceOptions: [
      'Gestion Marketplace (Amazon / Noon)',
      'Développement de site e-commerce',
      'Développement d’application mobile',
      'Marketing Performance',
      'Production créative',
      'Logiciel sur mesure',
      'Partenariat Full-Service',
      'Pas sûr - Besoin de conseil',
    ],
    submit: 'Demander un audit gratuit',
    sending: 'Envoi en cours...',
    success: 'Merci ! Nous vous recontacterons sous 24 heures.',
    error: 'Une erreur est survenue. Écrivez-nous : thepercentage@outlook.com',
    errorName: 'Le nom est requis',
    errorBusiness: 'Le nom de société est requis',
    errorEmailRequired: 'L’email est requis',
    errorEmailInvalid: 'Email invalide',
    errorPhone: 'Le téléphone est requis',
  },
  nl: {
    sectionLabel: 'Laten We Praten',
    title: 'Klaar om te Groeien?',
    subtitle: 'Start met een Gratis Audit.',
    description: 'Vertel ons over je business en wij laten zien waar de grootste groeikansen liggen.',
    infoPhoneLabel: 'Telefoon / WhatsApp',
    infoEmailLabel: 'E-mail',
    infoLocationLabel: 'Locatie',
    infoLocationValue: 'RAK Economic Zone (RAKEZ), UAE',
    fieldFullName: 'Volledige Naam',
    fieldBusinessName: 'Bedrijfsnaam',
    fieldEmail: 'E-mailadres',
    fieldPhone: 'Telefoon / WhatsApp',
    fieldService: 'Waar ben je naar op zoek?',
    fieldMessage: 'Bericht (optioneel)',
    placeholderFullName: 'Je volledige naam',
    placeholderBusinessName: 'Je merk of bedrijf',
    placeholderEmail: 'you@yourbrand.com',
    placeholderPhone: '+971 50 000 0000',
    placeholderService: 'Selecteer een dienst...',
    placeholderMessage: 'Vertel meer over je business...',
    serviceOptions: [
      'Marketplace Management (Amazon / Noon)',
      'E-Commerce Website Ontwikkeling',
      'Mobiele App Ontwikkeling',
      'Performance Marketing',
      'Creative Productie',
      'Maatwerk Software',
      'Full-Service Partnership',
      'Niet zeker - Ik heb advies nodig',
    ],
    submit: 'Gratis Audit Aanvragen',
    sending: 'Verzenden...',
    success: 'Bedankt! We nemen binnen 24 uur contact op.',
    error: 'Er ging iets mis. Mail ons op thepercentage@outlook.com',
    errorName: 'Naam is verplicht',
    errorBusiness: 'Bedrijfsnaam is verplicht',
    errorEmailRequired: 'E-mail is verplicht',
    errorEmailInvalid: 'Ongeldig e-mailadres',
    errorPhone: 'Telefoon is verplicht',
  },
  tl: {
    sectionLabel: 'Mag Usap Tayo',
    title: 'Handa Ka Nang Lumago?',
    subtitle: 'Magsimula sa Libreng Audit.',
    description: 'Ibahagi ang details ng negosyo mo at ipapakita namin ang pinakamalaking growth opportunities.',
    infoPhoneLabel: 'Phone / WhatsApp',
    infoEmailLabel: 'Email',
    infoLocationLabel: 'Lokasyon',
    infoLocationValue: 'RAK Economic Zone (RAKEZ), UAE',
    fieldFullName: 'Buong Pangalan',
    fieldBusinessName: 'Pangalan ng Negosyo',
    fieldEmail: 'Email Address',
    fieldPhone: 'Phone / WhatsApp',
    fieldService: 'Anong service ang kailangan mo?',
    fieldMessage: 'Mensahe (optional)',
    placeholderFullName: 'Buong pangalan mo',
    placeholderBusinessName: 'Pangalan ng brand o kumpanya',
    placeholderEmail: 'you@yourbrand.com',
    placeholderPhone: '+971 50 000 0000',
    placeholderService: 'Pumili ng service...',
    placeholderMessage: 'Sabihin pa ang tungkol sa negosyo mo...',
    serviceOptions: [
      'Pamamahala ng Marketplace (Amazon / Noon)',
      'Pagbuo ng E-Commerce Website',
      'Pagbuo ng Mobile App',
      'Performance Marketing',
      'Creative Production',
      'Custom Software',
      'Full-Service Partnership',
      'Hindi sigurado - Kailangan ko ng payo',
    ],
    submit: 'Humiling ng Libreng Audit',
    sending: 'Ipinapadala...',
    success: 'Salamat! Makikipag-ugnayan kami sa loob ng 24 oras.',
    error: 'May problema. I-email kami sa thepercentage@outlook.com',
    errorName: 'Kailangan ang pangalan',
    errorBusiness: 'Kailangan ang pangalan ng negosyo',
    errorEmailRequired: 'Kailangan ang email',
    errorEmailInvalid: 'Hindi valid na email',
    errorPhone: 'Kailangan ang phone number',
  },
  hi: {
    sectionLabel: 'आइए बात करें',
    title: 'ग्रोथ के लिए तैयार हैं?',
    subtitle: 'मुफ्त ऑडिट से शुरुआत करें।',
    description: 'अपने व्यवसाय के बारे में बताइए और हम सबसे बड़े ग्रोथ अवसर पहचानेंगे।',
    infoPhoneLabel: 'फ़ोन / व्हाट्सऐप',
    infoEmailLabel: 'ईमेल',
    infoLocationLabel: 'स्थान',
    infoLocationValue: 'RAK Economic Zone (RAKEZ), UAE',
    fieldFullName: 'पूरा नाम',
    fieldBusinessName: 'व्यवसाय का नाम',
    fieldEmail: 'ईमेल पता',
    fieldPhone: 'फ़ोन / व्हाट्सऐप',
    fieldService: 'आप किस सेवा की तलाश में हैं?',
    fieldMessage: 'संदेश (वैकल्पिक)',
    placeholderFullName: 'अपना पूरा नाम लिखें',
    placeholderBusinessName: 'ब्रांड या कंपनी का नाम',
    placeholderEmail: 'you@yourbrand.com',
    placeholderPhone: '+971 50 000 0000',
    placeholderService: 'सेवा चुनें...',
    placeholderMessage: 'अपने व्यवसाय के बारे में और बताइए...',
    serviceOptions: [
      'मार्केटप्लेस प्रबंधन (Amazon / Noon)',
      'ई-कॉमर्स वेबसाइट डेवलपमेंट',
      'मोबाइल ऐप डेवलपमेंट',
      'परफॉर्मेंस मार्केटिंग',
      'क्रिएटिव प्रोडक्शन',
      'कस्टम सॉफ्टवेयर',
      'फुल-सर्विस पार्टनरशिप',
      'पक्का नहीं - मुझे सलाह चाहिए',
    ],
    submit: 'मुफ्त ऑडिट अनुरोध भेजें',
    sending: 'भेजा जा रहा है...',
    success: 'धन्यवाद! हम 24 घंटे के भीतर संपर्क करेंगे।',
    error: 'कुछ गलत हुआ। हमें ईमेल करें: thepercentage@outlook.com',
    errorName: 'नाम आवश्यक है',
    errorBusiness: 'व्यवसाय का नाम आवश्यक है',
    errorEmailRequired: 'ईमेल आवश्यक है',
    errorEmailInvalid: 'ईमेल मान्य नहीं है',
    errorPhone: 'फ़ोन नंबर आवश्यक है',
  },
};

function Label({ text }: { text: string }) {
  return (
    <span className="block mb-2 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-mono), monospace' }}>
      {text}
    </span>
  );
}

export default function ContactPage() {
  const pathname = usePathname();
  const { language } = useUISettings();
  const copy = CONTACT_COPY[language];
  const HeadingTag = pathname === '/contact' ? 'h1' : 'h2';

  const [form, setForm] = useState({ fullName: '', businessName: '', email: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.fullName.trim()) next.fullName = copy.errorName;
    if (!form.businessName.trim()) next.businessName = copy.errorBusiness;
    if (!form.email.trim()) next.email = copy.errorEmailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = copy.errorEmailInvalid;
    if (!form.phone.trim()) next.phone = copy.errorPhone;

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    try {
      const res = await fetch('https://formspree.io/f/mzddzozp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ fullName: '', businessName: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-base" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-strong)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="section-label">{copy.sectionLabel}</span>
            <HeadingTag id="contact-title" className="mb-2" style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.08, color: 'var(--text-primary)' }}>
              {copy.title}
            </HeadingTag>
            <p className="mb-5 text-xl font-semibold italic" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-heading), sans-serif' }}>
              {copy.subtitle}
            </p>
            <p className="mb-10 text-base leading-relaxed" style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-body), system-ui' }}>
              {copy.description}
            </p>

            <div className="space-y-3">
              {[
                { icon: '☎', label: copy.infoPhoneLabel, value: '+971 56 331 9030 , +971 56 929 8537' },
                { icon: '✉', label: copy.infoEmailLabel, value: 'thepercentage@outlook.com' },
                { icon: '⌖', label: copy.infoLocationLabel, value: copy.infoLocationValue },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-200"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border-strong)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(var(--color-accent-rgb), 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-strong)';
                  }}
                >
                  <span className="text-xs font-black" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono), monospace' }}>{item.icon}</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-semibold mb-0.5" style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-mono), monospace' }}>
                      {item.label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body), system-ui' }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="rounded-2xl p-7 md:p-8" style={{ background: 'var(--surface)', border: '1px solid var(--border-strong)' }}>
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName"><Label text={copy.fieldFullName} /></label>
                    <input type="text" id="fullName" name="fullName" value={form.fullName} onChange={onChange} className="input-field" placeholder={copy.placeholderFullName} />
                    {errors.fullName && <p className="text-xs mt-1" style={{ color: '#F87171' }}>{errors.fullName}</p>}
                  </div>
                  <div>
                    <label htmlFor="businessName"><Label text={copy.fieldBusinessName} /></label>
                    <input type="text" id="businessName" name="businessName" value={form.businessName} onChange={onChange} className="input-field" placeholder={copy.placeholderBusinessName} />
                    {errors.businessName && <p className="text-xs mt-1" style={{ color: '#F87171' }}>{errors.businessName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email"><Label text={copy.fieldEmail} /></label>
                    <input type="email" id="email" name="email" value={form.email} onChange={onChange} className="input-field" placeholder={copy.placeholderEmail} />
                    {errors.email && <p className="text-xs mt-1" style={{ color: '#F87171' }}>{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone"><Label text={copy.fieldPhone} /></label>
                    <input type="tel" id="phone" name="phone" value={form.phone} onChange={onChange} className="input-field" placeholder={copy.placeholderPhone} />
                    {errors.phone && <p className="text-xs mt-1" style={{ color: '#F87171' }}>{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="service"><Label text={copy.fieldService} /></label>
                  <select id="service" name="service" value={form.service} onChange={onChange} className="input-field" style={{ cursor: 'pointer' }}>
                    <option value="">{copy.placeholderService}</option>
                    {copy.serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message"><Label text={copy.fieldMessage} /></label>
                  <textarea id="message" name="message" value={form.message} onChange={onChange} rows={4} className="input-field resize-none" placeholder={copy.placeholderMessage} />
                </div>

                <button type="submit" disabled={submitting} className="btn-primary w-full py-4 text-sm justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {copy.sending}
                    </span>
                  ) : `${copy.submit} ->`}
                </button>

                {status === 'success' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-center py-3 rounded-lg" style={{ background: 'rgba(var(--color-accent-rgb), 0.07)', color: 'var(--color-accent)', border: '1px solid rgba(var(--color-accent-rgb), 0.2)', fontFamily: 'var(--font-body), system-ui' }}>
                    {copy.success}
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-center py-3 rounded-lg" style={{ background: 'rgba(239,68,68,0.07)', color: '#F87171', border: '1px solid rgba(239,68,68,0.2)', fontFamily: 'var(--font-body), system-ui' }}>
                    {copy.error}
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
