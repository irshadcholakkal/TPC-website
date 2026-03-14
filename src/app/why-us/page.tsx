'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Language, useUISettings } from '@/components/providers/UISettingsProvider';

type Point = { title: string; desc: string };

const WHY_COPY: Record<Language, {
  label: string;
  titleLead: string;
  titleAccent: string;
  points: Point[];
}> = {
  en: {
    label: 'Why The Percentage',
    titleLead: "We Don't Get Paid to Try.",
    titleAccent: 'We Get Paid to Deliver.',
    points: [
      { title: 'Performance-Linked Model', desc: 'Our incentives are aligned with yours. If growth does not happen, we do not win.' },
      { title: 'UAE Market Expertise', desc: 'We understand local behavior, platform rules, logistics realities, and conversion drivers.' },
      { title: 'One Team, Full Stack', desc: 'No handoffs and no hidden outsourcing. Strategy, execution, and optimization in one team.' },
      { title: 'Transparent Operations', desc: 'You get clear reporting, honest metrics, and direct communication every month.' },
      { title: 'Fast Onboarding', desc: 'We move in days, not months. We adapt quickly and start delivering early.' },
      { title: 'Registered and Compliant', desc: 'RAKEZ-registered and professionally structured for long-term business partnerships.' },
    ],
  },
  ar: {
    label: 'لماذا The Percentage',
    titleLead: 'لا نتقاضى أجراً على المحاولة.',
    titleAccent: 'نتقاضى أجراً على النتائج.',
    points: [
      { title: 'نموذج مرتبط بالأداء', desc: 'حوافزنا متوافقة مع أهدافك. إذا لم يتحقق النمو، فلا نجاح لنا.' },
      { title: 'خبرة سوق الإمارات', desc: 'نفهم سلوك المستهلك المحلي، قواعد المنصات، التحديات اللوجستية، ومحركات التحويل.' },
      { title: 'فريق واحد متكامل', desc: 'بدون تفويض مخفي. الاستراتيجية والتنفيذ والتحسين ضمن فريق واحد.' },
      { title: 'عمليات شفافة', desc: 'تقارير واضحة، أرقام دقيقة، وتواصل مباشر كل شهر.' },
      { title: 'تهيئة سريعة', desc: 'نبدأ خلال أيام لا أشهر، ونحقق قيمة مبكرة بسرعة.' },
      { title: 'مسجلون ومتوافقون', desc: 'شركة مسجلة في RAKEZ ومهيكلة لشراكات أعمال طويلة الأمد.' },
    ],
  },
  fr: {
    label: 'Pourquoi The Percentage',
    titleLead: "Nous ne sommes pas payés pour essayer.",
    titleAccent: 'Nous sommes payés pour livrer.',
    points: [
      { title: 'Modèle lié à la performance', desc: 'Nos intérêts sont alignés sur les vôtres. Pas de croissance, pas de gain pour nous.' },
      { title: 'Expertise du marché UAE', desc: 'Nous maîtrisons les comportements locaux, les règles plateformes, la logistique et les leviers de conversion.' },
      { title: 'Une seule équipe full-stack', desc: 'Aucune sous-traitance cachée. Stratégie, exécution et optimisation dans la même équipe.' },
      { title: 'Opérations transparentes', desc: 'Reporting clair, métriques honnêtes et communication directe chaque mois.' },
      { title: 'Onboarding rapide', desc: 'Nous avançons en jours, pas en mois, et livrons rapidement les priorités.' },
      { title: 'Enregistrés et conformes', desc: 'Structure RAKEZ enregistrée, pensée pour des partenariats professionnels durables.' },
    ],
  },
  nl: {
    label: 'Waarom The Percentage',
    titleLead: 'Wij worden niet betaald om te proberen.',
    titleAccent: 'Wij worden betaald om te leveren.',
    points: [
      { title: 'Prestatiegericht model', desc: 'Onze incentives lopen gelijk met die van jou. Geen groei betekent geen winst voor ons.' },
      { title: 'Kennis van de UAE-markt', desc: 'We kennen lokaal koopgedrag, platformregels, logistiek en conversiehefbomen.' },
      { title: 'Eén team, full-stack', desc: 'Geen verborgen uitbesteding. Strategie, uitvoering en optimalisatie in één team.' },
      { title: 'Transparante operatie', desc: 'Heldere rapportage, eerlijke cijfers en directe communicatie elke maand.' },
      { title: 'Snelle onboarding', desc: 'We bewegen in dagen, niet maanden, en starten snel met leveren.' },
      { title: 'Geregistreerd en compliant', desc: 'RAKEZ-geregistreerd en professioneel ingericht voor duurzame samenwerking.' },
    ],
  },
  tl: {
    label: 'Bakit The Percentage',
    titleLead: 'Hindi kami binabayaran para sumubok.',
    titleAccent: 'Binabayaran kami para maghatid ng resulta.',
    points: [
      { title: 'Modelong naka-link sa performance', desc: 'Magkapareho ang interes natin. Kapag walang growth, wala ring panalo para sa amin.' },
      { title: 'Kaalaman sa UAE market', desc: 'Alam namin ang local behavior, platform rules, logistics realities, at conversion drivers.' },
      { title: 'Isang team, full stack', desc: 'Walang tagong outsourcing. Isang team para sa strategy, execution, at optimization.' },
      { title: 'Transparent na operasyon', desc: 'Malinaw na reports, tapat na metrics, at direktang komunikasyon buwan-buwan.' },
      { title: 'Mabilis na onboarding', desc: 'Kumikilos kami sa loob ng ilang araw, hindi buwan, at maagang nagde-deliver.' },
      { title: 'Rehistrado at compliant', desc: 'RAKEZ-registered at propesyonal ang setup para sa long-term na partnership.' },
    ],
  },
  hi: {
    label: 'क्यों The Percentage',
    titleLead: 'हमें कोशिश करने के लिए भुगतान नहीं मिलता।',
    titleAccent: 'हमें परिणाम देने के लिए भुगतान मिलता है।',
    points: [
      { title: 'परफॉर्मेंस-लिंक्ड मॉडल', desc: 'हमारे प्रोत्साहन आपके लक्ष्यों से जुड़े हैं। ग्रोथ नहीं तो हमारी जीत नहीं।' },
      { title: 'UAE मार्केट विशेषज्ञता', desc: 'हम स्थानीय व्यवहार, प्लेटफॉर्म नियम, लॉजिस्टिक्स और कन्वर्ज़न कारकों को गहराई से समझते हैं।' },
      { title: 'एक टीम, फुल स्टैक', desc: 'कोई छिपी आउटसोर्सिंग नहीं। रणनीति से निष्पादन तक एक ही टीम।' },
      { title: 'पारदर्शी संचालन', desc: 'स्पष्ट रिपोर्टिंग, ईमानदार आँकड़े, और हर महीने सीधा संवाद।' },
      { title: 'तेज़ ऑनबोर्डिंग', desc: 'हम महीनों नहीं, दिनों में शुरू करते हैं और जल्दी परिणाम देना शुरू कर देते हैं।' },
      { title: 'पंजीकृत और अनुपालन', desc: 'RAKEZ पंजीकृत संरचना, जो दीर्घकालिक व्यावसायिक साझेदारी के लिए तैयार है।' },
    ],
  },
};

export default function WhyUsPage() {
  const pathname = usePathname();
  const { language } = useUISettings();
  const copy = WHY_COPY[language];
  const HeadingTag = pathname === '/why-us' ? 'h1' : 'h2';

  return (
    <section id="why-us" aria-labelledby="why-us-title" className="section-base" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-strong)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <span className="section-label">{copy.label}</span>
          <HeadingTag id="why-us-title" style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--text-primary)' }}>
            {copy.titleLead}
            <br />
            <span style={{ color: 'var(--color-accent)' }}>{copy.titleAccent}</span>
          </HeadingTag>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {copy.points.map((point, i) => (
            <motion.div key={`${point.title}-${i}`} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }}>
              <div
                className="card p-6 h-full transition-all duration-300"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(var(--color-accent-rgb), 0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-strong)';
                }}
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] block mb-4" style={{ color: 'var(--text-quiet)', fontFamily: 'var(--font-mono), monospace' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-bold mb-2.5" style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: '1.05rem', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                  {point.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body), system-ui', fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--text-dim)' }}>
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
