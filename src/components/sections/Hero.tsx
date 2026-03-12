'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useLang } from '@/context/LanguageContext';

function ArrowRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState(value);
  const numericPart = value.replace(/[^0-9]/g, '');
  const isAnimatable = numericPart.length > 0 && !value.includes('/');

  useEffect(() => {
    if (!inView || !isAnimatable) return;
    const num = parseInt(numericPart, 10);
    const suffix = value.replace(/[0-9]/g, '');
    let v = 0;
    const t = setInterval(() => {
      v += num / (1600 / 16);
      if (v >= num) { setDisplayed(num + suffix); clearInterval(t); }
      else setDisplayed(Math.floor(v) + suffix);
    }, 16);
    return () => clearInterval(t);
  }, [inView]);

  return (
    <div ref={ref} className="text-center">
      <div className="stat-number text-3xl md:text-4xl font-black tracking-tight mb-1.5" style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
        {displayed}
      </div>
      <div className="text-[10px] uppercase tracking-[0.16em] font-medium" style={{ color: 'var(--text-muted)' }}>
        {label}
      </div>
    </div>
  );
}

function DashboardMockup() {
  const metrics = [
    { label: 'Amazon.ae Revenue', value: 'AED 84,230', change: '+31%' },
    { label: 'Noon.com Units', value: '1,284', change: '+18%' },
    { label: 'Ad ROAS', value: '4.7×', change: '+0.8' },
  ];
  const bars = [35, 55, 42, 78, 60, 92, 70];

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: '#0A0A0A', border: '1px solid #2A2A2A', boxShadow: '0 32px 80px rgba(0,0,0,0.8)' }}>
      <div className="flex items-center gap-1.5 px-4 py-3" style={{ background: '#111', borderBottom: '1px solid #1e1e1e' }}>
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,95,87,0.6)' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,189,46,0.6)' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(40,202,65,0.6)' }} />
        <span className="ml-3 text-[10px]" style={{ color: '#444', fontFamily: 'var(--font-body), system-ui' }}>The Percentage — Operations Dashboard</span>
      </div>
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-3 gap-2.5">
          {metrics.map((m, i) => (
            <div key={i} className="rounded-xl p-3" style={{ background: '#161616', border: '1px solid #1e1e1e' }}>
              <p className="text-[9px] uppercase tracking-wider mb-1.5 font-medium" style={{ color: '#555' }}>{m.label}</p>
              <p className="text-sm font-black leading-tight mb-1" style={{ color: '#fff', fontFamily: 'var(--font-body), system-ui' }}>{m.value}</p>
              <p className="text-[10px] font-bold" style={{ color: '#E8FF00' }}>{m.change}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl p-4" style={{ background: '#161616', border: '1px solid #1e1e1e' }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-[9px] uppercase tracking-wider font-semibold" style={{ color: '#555' }}>Monthly Revenue</p>
            <span className="text-[9px] px-2 py-0.5 rounded-full font-bold" style={{ background: 'rgba(232,255,0,0.1)', color: '#E8FF00' }}>+23% MoM</span>
          </div>
          <div className="flex items-end gap-1.5 h-10">
            {bars.map((h, i) => (
              <motion.div key={i} className="flex-1 rounded-sm"
                initial={{ height: 0 }} animate={{ height: `${h}%` }}
                transition={{ duration: 0.6, delay: 0.9 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: i === 5 ? '#E8FF00' : '#2A2A2A', alignSelf: 'flex-end' }}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          {['Amazon.ae', 'Noon.com', 'Direct Store'].map((p, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#E8FF00' }} />
                <span className="text-xs font-medium" style={{ color: '#666' }}>{p}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20 h-1 rounded-full overflow-hidden" style={{ background: '#1a1a1a' }}>
                  <motion.div className="h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${[88, 74, 62][i]}%` }}
                    transition={{ duration: 0.7, delay: 1.2 + i * 0.1 }}
                    style={{ background: 'linear-gradient(90deg, #888800, #E8FF00)' }}
                  />
                </div>
                <span className="text-[10px] font-bold w-7 text-right" style={{ color: '#555' }}>{[88, 74, 62][i]}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t, isRTL } = useLang();
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-mesh-dark" style={{ paddingTop: '80px' }}>
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(232,255,0,0.35) 50%, transparent 90%)' }} />

      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-20 ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="badge mb-7 w-fit">{t.hero.badge}</div>

            <h1 className="mb-6" style={{
              fontFamily: 'var(--font-heading), Georgia, serif',
              fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)',
              fontWeight: 900, lineHeight: 1.04, letterSpacing: '-0.025em', color: '#FFFFFF',
            }}>
              {t.hero.headline1}
              <br />
              <span style={{ color: '#E8FF00' }}>{t.hero.headline2}</span>
            </h1>

            <p className="mb-8 text-base md:text-lg leading-relaxed max-w-lg"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body), system-ui' }}>
              {t.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="btn-accent px-7 py-3 text-sm">
                {t.hero.cta} <ArrowRight />
              </a>
              <a href="#services" onClick={(e) => scrollTo(e, 'services')} className="btn-ghost px-7 py-3 text-sm">
                {t.hero.ctaSecondary}
              </a>
            </div>

            <div className="flex items-center gap-10">
              {t.hero.stats.map((s, i) => (
                <div key={i} className="flex items-stretch">
                  <Stat value={s.value} label={s.label} />
                  {i < t.hero.stats.length - 1 && (
                    <div className="w-px mx-6 self-stretch" style={{ background: 'var(--border)' }} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 32, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
