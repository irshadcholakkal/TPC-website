'use client';

import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Language, useUISettings } from '@/components/providers/UISettingsProvider';

const NAV_LINKS = [
  { href: '#about', key: 'nav.about' },
  { href: '#services', key: 'nav.services' },
  { href: '#how-it-works', key: 'nav.howItWorks' },
  { href: '#pricing', key: 'nav.pricing' },
  { href: '#contact', key: 'nav.contact' },
] as const;

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (href.startsWith('#')) {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function resolveNavHref(pathname: string, href: string) {
  if (!href.startsWith('#')) {
    return href;
  }

  return pathname === '/' ? href : `/${href}`;
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const { theme, toggleTheme, language, setLanguage, languageOptions, t } = useUISettings();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 16));

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled && theme === 'dark' ? 'var(--header-bg)' : 'transparent',
        backdropFilter: scrolled && theme === 'dark' ? 'blur(24px) saturate(1.5)' : 'none',
        WebkitBackdropFilter: scrolled && theme === 'dark' ? 'blur(24px) saturate(1.5)' : 'none',
        borderBottom: scrolled && theme === 'dark' ? '1px solid var(--border-strong)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-[64px]">

          {/* Logo — % symbol + wordmark */}
          <a
            href={resolveNavHref(pathname, '#hero')}
            onClick={(e) => smoothScroll(e, pathname === '/' ? '#hero' : '/#hero')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-md text-base font-black transition-all duration-200"
              style={{
                background: 'var(--color-accent)',
                color: 'var(--color-accent-contrast)',
                fontFamily: 'var(--font-heading), sans-serif',
                boxShadow: '0 0 16px rgba(var(--color-accent-rgb), 0.3)',
              }}
            >
              %
            </span>
            <span
              className="hidden sm:inline text-[14px] font-bold tracking-tight transition-colors duration-200"
              style={{ fontFamily: 'var(--font-heading), sans-serif', color: 'var(--text-primary)' }}
            >
              The Percentage
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={resolveNavHref(pathname, link.href)}
                onClick={(e) => smoothScroll(e, pathname === '/' ? link.href : `/${link.href}`)}
                className="px-4 py-2 text-sm rounded-lg transition-colors duration-150"
                style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-body), system-ui' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
              >
                {t(link.key)}
              </a>
            ))}
          </nav>

          {/* Controls + CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="icon-btn inline-flex items-center justify-center px-3 py-2 text-xs font-semibold"
                style={{ fontFamily: 'var(--font-body), system-ui' }}
                aria-label={theme === 'dark' ? t('controls.light') : t('controls.dark')}
              >
                {theme === 'dark' ? t('controls.light') : t('controls.dark')}
              </button>
              <label htmlFor="language-desktop" className="sr-only">{t('controls.language')}</label>
              <select
                id="language-desktop"
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="ui-select text-xs"
                style={{ fontFamily: 'var(--font-body), system-ui' }}
                aria-label={t('controls.language')}
              >
                {languageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <a
              href={resolveNavHref(pathname, '#contact')}
              onClick={(e) => smoothScroll(e, pathname === '/' ? '#contact' : '/#contact')}
              className="btn-primary hidden md:inline-flex text-xs px-5 py-2.5"
            >
              {t('nav.getFreeAudit')}
            </a>
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
              style={{ border: '1px solid var(--border-soft)', background: 'transparent', color: 'var(--text-muted)' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={t('controls.menu')}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileOpen
                  ? (<><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>)
                  : (<><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>)
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="md:hidden py-4"
            style={{
              borderTop: '1px solid var(--border-strong)',
              background: theme === 'dark' ? 'var(--header-bg)' : '#ffffff',
              backdropFilter: theme === 'dark' ? 'blur(24px) saturate(1.4)' : 'none',
              WebkitBackdropFilter: theme === 'dark' ? 'blur(24px) saturate(1.4)' : 'none',
              boxShadow: theme === 'dark' ? 'none' : '0 18px 40px rgba(15, 23, 42, 0.08)',
            }}
          >
            <div className="flex flex-col gap-1">
              <div className="grid grid-cols-[auto_1fr] gap-2 pb-3 mb-3" style={{ borderBottom: '1px solid var(--border-strong)' }}>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="icon-btn h-10 px-3 text-xs font-semibold"
                  style={{ fontFamily: 'var(--font-body), system-ui' }}
                  aria-label={theme === 'dark' ? t('controls.light') : t('controls.dark')}
                >
                  {theme === 'dark' ? t('controls.light') : t('controls.dark')}
                </button>
                <label htmlFor="language-mobile" className="sr-only">{t('controls.language')}</label>
                <select
                  id="language-mobile"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="ui-select h-10 text-sm"
                  style={{ fontFamily: 'var(--font-body), system-ui' }}
                  aria-label={t('controls.language')}
                >
                  {languageOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={resolveNavHref(pathname, link.href)}
                  onClick={(e) => {
                    smoothScroll(e, pathname === '/' ? link.href : `/${link.href}`);
                    setMobileOpen(false);
                  }}
                  className="px-3 py-3 rounded-lg text-sm"
                  style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body), system-ui' }}
                >
                  {t(link.key)}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href={resolveNavHref(pathname, '#contact')}
                  onClick={(e) => {
                    smoothScroll(e, pathname === '/' ? '#contact' : '/#contact');
                    setMobileOpen(false);
                  }}
                  className="btn-primary w-full text-sm justify-center"
                >
                  {t('nav.getFreeAudit')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

