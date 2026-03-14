'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Language, useUISettings } from '@/components/providers/UISettingsProvider';

type LinkItem = { label: string; href: string };

const FOOTER_COPY: Record<Language, {
  brandTitle: string;
  brandSubtitle: string;
  registeredLine: string;
  servicesTitle: string;
  servicesLinks: LinkItem[];
  companyTitle: string;
  companyLinks: LinkItem[];
  legalTitle: string;
  legalLinks: LinkItem[];
  rightsReserved: string;
  registeredBottom: string;
}> = {
  en: {
    brandTitle: 'The Percentage FZ-LLC',
    brandSubtitle: 'E-Commerce Solutions and Digital Growth',
    registeredLine: 'Registered under RAK Economic Zone (RAKEZ), UAE.',
    servicesTitle: 'Services',
    servicesLinks: [
      { label: 'Marketplace Management', href: '#services' },
      { label: 'Website Development', href: '#services' },
      { label: 'Mobile Apps', href: '#services' },
      { label: 'Performance Marketing', href: '#services' },
      { label: 'Creative Production', href: '#services' },
      { label: 'Custom Software', href: '#services' },
    ],
    companyTitle: 'Company',
    companyLinks: [
      { label: 'About Us', href: '#about' },
      { label: 'How We Work', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Contact', href: '#contact' },
    ],
    legalTitle: 'Legal',
    legalLinks: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
    ],
    rightsReserved: 'All rights reserved.',
    registeredBottom: 'Registered under RAK Economic Zone (RAKEZ), UAE.',
  },
  ar: {
    brandTitle: 'The Percentage FZ-LLC',
    brandSubtitle: 'حلول التجارة الإلكترونية والنمو الرقمي',
    registeredLine: 'مسجلون في RAK Economic Zone (RAKEZ)، الإمارات.',
    servicesTitle: 'الخدمات',
    servicesLinks: [
      { label: 'إدارة المتاجر', href: '#services' },
      { label: 'تطوير المواقع', href: '#services' },
      { label: 'تطبيقات الجوال', href: '#services' },
      { label: 'التسويق الأدائي', href: '#services' },
      { label: 'الإنتاج الإبداعي', href: '#services' },
      { label: 'برمجيات مخصصة', href: '#services' },
    ],
    companyTitle: 'الشركة',
    companyLinks: [
      { label: 'من نحن', href: '#about' },
      { label: 'كيف نعمل', href: '#how-it-works' },
      { label: 'الأسعار', href: '#pricing' },
      { label: 'تواصل', href: '#contact' },
    ],
    legalTitle: 'قانوني',
    legalLinks: [
      { label: 'سياسة الخصوصية', href: '/privacy-policy' },
      { label: 'شروط الخدمة', href: '/terms-of-service' },
    ],
    rightsReserved: 'جميع الحقوق محفوظة.',
    registeredBottom: 'مسجلون في RAK Economic Zone (RAKEZ)، الإمارات.',
  },
  fr: {
    brandTitle: 'The Percentage FZ-LLC',
    brandSubtitle: 'Solutions e-commerce et croissance digitale',
    registeredLine: 'Enregistrés sous RAK Economic Zone (RAKEZ), UAE.',
    servicesTitle: 'Services',
    servicesLinks: [
      { label: 'Gestion Marketplace', href: '#services' },
      { label: 'Développement web', href: '#services' },
      { label: 'Applications Mobiles', href: '#services' },
      { label: 'Marketing Performance', href: '#services' },
      { label: 'Production créative', href: '#services' },
      { label: 'Logiciels sur mesure', href: '#services' },
    ],
    companyTitle: 'Entreprise',
    companyLinks: [
      { label: 'À propos', href: '#about' },
      { label: 'Notre méthode', href: '#how-it-works' },
      { label: 'Tarifs', href: '#pricing' },
      { label: 'Contact', href: '#contact' },
    ],
    legalTitle: 'Juridique',
    legalLinks: [
      { label: 'Politique de confidentialité', href: '/privacy-policy' },
      { label: 'Conditions de Service', href: '/terms-of-service' },
    ],
    rightsReserved: 'Tous droits réservés.',
    registeredBottom: 'Enregistrés sous RAK Economic Zone (RAKEZ), UAE.',
  },
  nl: {
    brandTitle: 'The Percentage FZ-LLC',
    brandSubtitle: 'E-commerceoplossingen en digitale groei',
    registeredLine: 'Geregistreerd onder RAK Economic Zone (RAKEZ), UAE.',
    servicesTitle: 'Diensten',
    servicesLinks: [
      { label: 'Marketplace Management', href: '#services' },
      { label: 'Websiteontwikkeling', href: '#services' },
      { label: 'Mobiele Apps', href: '#services' },
      { label: 'Performance Marketing', href: '#services' },
      { label: 'Creatieve productie', href: '#services' },
      { label: 'Maatwerk Software', href: '#services' },
    ],
    companyTitle: 'Bedrijf',
    companyLinks: [
      { label: 'Over Ons', href: '#about' },
      { label: 'Werkwijze', href: '#how-it-works' },
      { label: 'Prijzen', href: '#pricing' },
      { label: 'Contact', href: '#contact' },
    ],
    legalTitle: 'Juridisch',
    legalLinks: [
      { label: 'Privacybeleid', href: '/privacy-policy' },
      { label: 'Servicevoorwaarden', href: '/terms-of-service' },
    ],
    rightsReserved: 'Alle rechten voorbehouden.',
    registeredBottom: 'Geregistreerd onder RAK Economic Zone (RAKEZ), UAE.',
  },
  tl: {
    brandTitle: 'The Percentage FZ-LLC',
    brandSubtitle: 'E-Commerce Solutions at Digital Growth',
    registeredLine: 'Rehistrado sa RAK Economic Zone (RAKEZ), UAE.',
    servicesTitle: 'Mga Serbisyo',
    servicesLinks: [
      { label: 'Pamamahala ng marketplace', href: '#services' },
      { label: 'Pagbuo ng website', href: '#services' },
      { label: 'Mobile apps', href: '#services' },
      { label: 'Performance Marketing', href: '#services' },
      { label: 'Creative Production', href: '#services' },
      { label: 'Custom Software', href: '#services' },
    ],
    companyTitle: 'Kumpanya',
    companyLinks: [
      { label: 'Tungkol sa Amin', href: '#about' },
      { label: 'Paano Kami Gumagana', href: '#how-it-works' },
      { label: 'Presyo', href: '#pricing' },
      { label: 'Makipag-ugnayan', href: '#contact' },
    ],
    legalTitle: 'Legal',
    legalLinks: [
      { label: 'Patakaran sa Privacy', href: '/privacy-policy' },
      { label: 'Mga Tuntunin ng Serbisyo', href: '/terms-of-service' },
    ],
    rightsReserved: 'Lahat ng karapatan ay nakalaan.',
    registeredBottom: 'Rehistrado sa RAK Economic Zone (RAKEZ), UAE.',
  },
  hi: {
    brandTitle: 'The Percentage FZ-LLC',
    brandSubtitle: 'ई-कॉमर्स समाधान और डिजिटल ग्रोथ',
    registeredLine: 'RAK Economic Zone (RAKEZ), UAE के अंतर्गत पंजीकृत।',
    servicesTitle: 'सेवाएं',
    servicesLinks: [
      { label: 'मार्केटप्लेस प्रबंधन', href: '#services' },
      { label: 'वेबसाइट डेवलपमेंट', href: '#services' },
      { label: 'मोबाइल ऐप्स', href: '#services' },
      { label: 'परफॉर्मेंस मार्केटिंग', href: '#services' },
      { label: 'क्रिएटिव प्रोडक्शन', href: '#services' },
      { label: 'कस्टम सॉफ्टवेयर', href: '#services' },
    ],
    companyTitle: 'कंपनी',
    companyLinks: [
      { label: 'हमारे बारे में', href: '#about' },
      { label: 'हम कैसे काम करते हैं', href: '#how-it-works' },
      { label: 'कीमतें', href: '#pricing' },
      { label: 'संपर्क', href: '#contact' },
    ],
    legalTitle: 'कानूनी',
    legalLinks: [
      { label: 'गोपनीयता नीति', href: '/privacy-policy' },
      { label: 'सेवा की शर्तें', href: '/terms-of-service' },
    ],
    rightsReserved: 'सभी अधिकार सुरक्षित।',
    registeredBottom: 'RAK Economic Zone (RAKEZ), UAE के अंतर्गत पंजीकृत।',
  },
};

function smooth(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (href.startsWith('#')) {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function resolveFooterHref(pathname: string, href: string) {
  if (!href.startsWith('#')) {
    return href;
  }

  return pathname === '/' ? href : `/${href}`;
}

export default function Footer() {
  const pathname = usePathname();
  const { language } = useUISettings();
  const copy = FOOTER_COPY[language];

  return (
    <footer style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-strong)' }}>
      <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(var(--color-accent-rgb), 0.3) 50%, transparent 95%)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-md text-sm font-black" style={{ background: 'var(--color-accent)', color: 'var(--color-accent-contrast)', fontFamily: 'var(--font-heading), sans-serif', boxShadow: '0 0 16px rgba(var(--color-accent-rgb), 0.3)' }}>
                %
              </span>
              <span className="font-bold text-sm" style={{ fontFamily: 'var(--font-heading), sans-serif', color: 'var(--text-primary)' }}>
                {copy.brandTitle}
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-2 max-w-xs" style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-body), system-ui' }}>
              {copy.brandSubtitle}
            </p>
            <p className="text-xs mb-5" style={{ color: 'var(--text-quiet)', fontFamily: 'var(--font-mono), monospace' }}>
              {copy.registeredLine}
            </p>
            <div className="flex gap-2">
              {[
                { label: 'LinkedIn', href: '#', icon: 'IN' },
                { label: 'Instagram', href: 'https://www.instagram.com/thepercentagecompany', icon: 'IG' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border-strong)', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono), monospace', fontSize: '0.65rem', fontWeight: 700 }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-accent)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(var(--color-accent-rgb), 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-subtle)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-strong)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color: 'var(--text-quiet)', fontFamily: 'var(--font-mono), monospace' }}>
              {copy.servicesTitle}
            </p>
            <ul className="space-y-2.5">
              {copy.servicesLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={resolveFooterHref(pathname, item.href)}
                    onClick={(e) => smooth(e, pathname === '/' ? item.href : `/${item.href}`)}
                    className="text-sm transition-colors duration-150"
                    style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-body), system-ui' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-subtle)')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color: 'var(--text-quiet)', fontFamily: 'var(--font-mono), monospace' }}>
              {copy.companyTitle}
            </p>
            <ul className="space-y-2.5">
              {copy.companyLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={resolveFooterHref(pathname, item.href)}
                    onClick={(e) => smooth(e, pathname === '/' ? item.href : `/${item.href}`)}
                    className="text-sm transition-colors duration-150"
                    style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-body), system-ui' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-subtle)')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color: 'var(--text-quiet)', fontFamily: 'var(--font-mono), monospace' }}>
              {copy.legalTitle}
            </p>
            <ul className="space-y-2.5">
              {copy.legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-body), system-ui' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-subtle)')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6" style={{ borderTop: '1px solid var(--border-strong)' }}>
          <p className="text-xs" style={{ color: 'var(--text-quiet)', fontFamily: 'var(--font-mono), monospace' }}>
            (c) {new Date().getFullYear()} {copy.brandTitle}. {copy.rightsReserved}
          </p>
          <p className="text-xs" style={{ color: 'var(--text-quiet)', fontFamily: 'var(--font-mono), monospace' }}>
            {copy.registeredBottom}
          </p>
        </div>
      </div>
    </footer>
  );
}
