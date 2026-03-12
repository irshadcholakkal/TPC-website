'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useLang } from '@/context/LanguageContext';

function SunIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 10));

  const links = [
    { href: '#services', label: t.nav.services },
    { href: '#how-it-works', label: t.nav.process },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#contact', label: t.nav.contact },
  ];

  const smooth = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(6,6,6,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-[64px]">

          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => smooth(e, '#hero')}
            className="flex items-center gap-2.5 cursor-pointer select-none"
          >
            <span
              className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-[10px] font-black text-black"
              style={{ background: '#E8FF00' }}
            >
              TPC
            </span>
            <span
              className="text-[14px] font-semibold tracking-tight"
              style={{ fontFamily: 'var(--font-heading), Georgia, serif', color: 'var(--text-primary)' }}
            >
              The Percentage Co.
            </span>
          </a>

          {/* Desktop links — centered, minimal */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => smooth(e, link.href)}
                className="px-4 py-2 text-sm rounded-lg transition-all duration-150"
                style={{
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="toggle-btn text-[11px] font-bold" aria-label="Switch language">
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
            <button onClick={toggleTheme} className="toggle-btn" aria-label="Toggle theme">
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <a
              href="#contact"
              onClick={(e) => smooth(e, '#contact')}
              className="btn-accent hidden md:inline-flex text-xs px-5 py-2.5"
            >
              {t.nav.getStarted}
            </a>
            <button className="md:hidden toggle-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileOpen
                  ? (<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>)
                  : (<><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>)
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => smooth(e, link.href)}
                  className="px-3 py-2.5 rounded-lg text-sm"
                  style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <a href="#contact" onClick={(e) => smooth(e, '#contact')} className="btn-accent w-full text-sm">
                  {t.nav.getStarted}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
