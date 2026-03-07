'use client';

import { useLang } from '@/context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, isRTL } = useLang();

  const serviceLinks = ['#services', '#services', '#services'];
  const companyLinks = ['#testimonials', '#how-it-works', '#contact'];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer
      className={`relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}
      style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-secondary)' }}
    >
      {/* Top gradient accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-1 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6), rgba(99,102,241,0.6), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1 space-y-6">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-white text-xs font-black"
                  style={{ background: 'linear-gradient(135deg, #8B5CF6, #6366F1)' }}
                >
                  TPC
                </span>
                <span className="font-bold font-heading text-base" style={{ color: 'var(--text-primary)' }}>
                  The Percentage Co.
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t.footer.tagline}
              </p>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
                {t.footer.newsletter}
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t.footer.emailPlaceholder}
                  className="input-field text-xs py-2.5 px-3 flex-1"
                />
                <button
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white transition-opacity hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #8B5CF6, #6366F1)' }}
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="3" y1="8" x2="13" y2="8" />
                    <polyline points="9 4 13 8 9 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--text-muted)' }}>
              {t.footer.sections.services}
            </h4>
            <ul className="space-y-3">
              {t.footer.services.map((item, i) => (
                <li key={i}>
                  <a
                    href={serviceLinks[i]}
                    onClick={(e) => handleScroll(e, serviceLinks[i])}
                    className="text-sm transition-colors duration-200 hover:text-gradient"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--text-muted)' }}>
              {t.footer.sections.company}
            </h4>
            <ul className="space-y-3">
              {t.footer.company.map((item, i) => (
                <li key={i}>
                  <a
                    href={companyLinks[i]}
                    onClick={(e) => handleScroll(e, companyLinks[i])}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--text-muted)' }}>
              {t.footer.sections.legal}
            </h4>
            <ul className="space-y-3">
              {t.footer.legal.map((item, i) => (
                <li key={i}>
                  <a
                    href="/"
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {currentYear} {t.footer.copyright}
          </p>
          <div className="flex gap-4">
            {/* Twitter/X */}
            <a href="#" className="toggle-btn" aria-label="Twitter">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="toggle-btn" aria-label="LinkedIn">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/thepercentagecompany" target="_blank" rel="noopener noreferrer" className="toggle-btn" aria-label="Instagram">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 018.17 2.525c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.315 2m0-2c-2.695 0-3.023.012-4.075.059-1.106.05-2.073.237-2.9.559a6.903 6.903 0 00-2.502 1.628 6.903 6.903 0 00-1.628 2.502c-.322.827-.51 1.794-.559 2.901C.635 8.956.623 9.284.623 12s.013 3.044.059 4.101c.049 1.106.237 2.073.559 2.9a6.903 6.903 0 001.628 2.502 6.903 6.903 0 002.502 1.628c.827.322 1.794.51 2.901.559 1.057.049 1.385.06 4.048.06 2.663 0 2.991-.013 4.048-.06 1.106-.05 2.073-.237 2.9-.559a6.903 6.903 0 002.502-1.628 6.903 6.903 0 001.628-2.502c.322-.827.51-1.794.559-2.901.049-1.057.06-1.385.06-4.048 0-2.663-.013-2.991-.06-4.048-.05-1.106-.237-2.073-.559-2.9a6.903 6.903 0 00-1.628-2.502 6.903 6.903 0 00-2.502-1.628c-.827-.322-1.794-.51-2.901-.559C15.338.013 15.01 0 12.315 0z" clipRule="evenodd" />
                <circle cx="12.315" cy="12" r="4.176" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
