'use client';

import { useLang } from '@/context/LanguageContext';

export default function Footer() {
  const year = new Date().getFullYear();
  const { t, isRTL } = useLang();
  const serviceLinks = Array(t.footer.services.length).fill('#services');
  const companyLinks = ['#about', '#how-it-works', '#pricing', '#contact'];

  const smooth = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  };

  return (
    <footer className={`relative ${isRTL ? 'rtl' : 'ltr'}`} style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-[10px] font-black"
                style={{ background: '#E8FF00', color: '#000000' }}>
                TPC
              </span>
              <span className="text-sm font-semibold" style={{ fontFamily: 'var(--font-heading), Georgia, serif', color: 'var(--text-primary)' }}>
                The Percentage FZ-LLC
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-3 max-w-xs" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body), system-ui' }}>
              {t.footer.tagline}
            </p>
            <p className="text-xs mb-5" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body), system-ui' }}>
              {t.footer.registered}
            </p>
            <div className="flex gap-2">
              <a href="#" className="toggle-btn" aria-label="Twitter">
                <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="toggle-btn" aria-label="LinkedIn">
                <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.instagram.com/thepercentagecompany" target="_blank" rel="noopener noreferrer" className="toggle-btn" aria-label="Instagram">
                <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 018.17 2.525c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.315 2m0-2c-2.695 0-3.023.012-4.075.059-1.106.05-2.073.237-2.9.559a6.903 6.903 0 00-2.502 1.628 6.903 6.903 0 00-1.628 2.502c-.322.827-.51 1.794-.559 2.901C.635 8.956.623 9.284.623 12s.013 3.044.059 4.101c.049 1.106.237 2.073.559 2.9a6.903 6.903 0 001.628 2.502 6.903 6.903 0 002.502 1.628c.827.322 1.794.51 2.901.559 1.057.049 1.385.06 4.048.06 2.663 0 2.991-.013 4.048-.06 1.106-.05 2.073-.237 2.9-.559a6.903 6.903 0 002.502-1.628 6.903 6.903 0 001.628-2.502c.322-.827.51-1.794.559-2.901.049-1.057.06-1.385.06-4.048 0-2.663-.013-2.991-.06-4.048-.05-1.106-.237-2.073-.559-2.9a6.903 6.903 0 00-1.628-2.502 6.903 6.903 0 00-2.502-1.628c-.827-.322-1.794-.51-2.901-.559C15.338.013 15.01 0 12.315 0z" clipRule="evenodd"/><circle cx="12.315" cy="12" r="4.176"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="section-label mb-4">{t.footer.sections.services}</p>
            <ul className="space-y-2.5">
              {t.footer.services.map((item, i) => (
                <li key={i}>
                  <a href={serviceLinks[i]} onClick={(e) => smooth(e, serviceLinks[i])}
                    className="text-sm transition-colors duration-150"
                    style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body), system-ui' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="section-label mb-4">{t.footer.sections.company}</p>
            <ul className="space-y-2.5">
              {t.footer.company.map((item, i) => (
                <li key={i}>
                  <a href={companyLinks[i]} onClick={(e) => smooth(e, companyLinks[i])}
                    className="text-sm transition-colors duration-150"
                    style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body), system-ui' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="section-label mb-4">{t.footer.sections.legal}</p>
            <ul className="space-y-2.5">
              {t.footer.legal.map((item, i) => (
                <li key={i}>
                  <a href="/" className="text-sm transition-colors duration-150"
                    style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body), system-ui' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 py-5" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body), system-ui' }}>
            © {year} {t.footer.copyright}
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body), system-ui' }}>
            {t.footer.registered}
          </p>
        </div>
      </div>
    </footer>
  );
}
