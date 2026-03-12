'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLang } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t, isRTL } = useLang();
  const [form, setForm] = useState({ fullName: '', businessName: '', email: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = t.contact.validation.nameRequired;
    if (!form.businessName.trim()) e.businessName = t.contact.validation.businessRequired;
    if (!form.email.trim()) e.email = t.contact.validation.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t.contact.validation.emailInvalid;
    if (!form.phone.trim()) e.phone = t.contact.validation.phoneRequired;
    setErrors(e);
    return !Object.keys(e).length;
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
      if (res.ok) { setStatus('success'); setForm({ fullName: '', businessName: '', email: '', phone: '', service: '', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
    finally { setSubmitting(false); }
  };

  const L = ({ text }: { text: string }) => (
    <span className="block text-[10px] font-bold uppercase tracking-[0.14em] mb-2" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body), system-ui' }}>
      {text}
    </span>
  );

  return (
    <section className="relative" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '7rem', paddingBottom: '7rem', borderTop: '1px solid var(--border)' }}>
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none" />
      <div className={`relative z-10 max-w-7xl mx-auto px-6 md:px-10 ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-3">{t.contact.badge}</p>
            <h2 className="mb-3" style={{ fontFamily: 'var(--font-heading), Georgia, serif', fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.08, color: '#fff' }}>
              {t.contact.title}
            </h2>
            <p className="text-xl font-semibold mb-5" style={{ color: '#E8FF00', fontFamily: 'var(--font-heading), Georgia, serif', fontStyle: 'italic' }}>
              {t.contact.subtitle}
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body), system-ui' }}>
              {t.contact.body}
            </p>

            <div className="space-y-3">
              {[
                { icon: '📞', label: 'Phone / WhatsApp', value: t.contact.phone },
                { icon: '✉️', label: 'Email', value: t.contact.email },
                { icon: '📍', label: 'Location', value: t.contact.address },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 rounded-xl px-5 py-4"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-semibold mb-0.5" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body), system-ui' }}>{item.label}</p>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body), system-ui' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="rounded-2xl p-7 md:p-8" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName"><L text={t.contact.fields.fullName} /></label>
                    <input type="text" id="fullName" name="fullName" value={form.fullName} onChange={onChange}
                      className="input-field" placeholder={t.contact.fields.fullNamePlaceholder} />
                    {errors.fullName && <p className="text-xs mt-1" style={{ color: '#F87171' }}>{errors.fullName}</p>}
                  </div>
                  <div>
                    <label htmlFor="businessName"><L text={t.contact.fields.businessName} /></label>
                    <input type="text" id="businessName" name="businessName" value={form.businessName} onChange={onChange}
                      className="input-field" placeholder={t.contact.fields.businessNamePlaceholder} />
                    {errors.businessName && <p className="text-xs mt-1" style={{ color: '#F87171' }}>{errors.businessName}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email"><L text={t.contact.fields.email} /></label>
                    <input type="email" id="email" name="email" value={form.email} onChange={onChange}
                      className="input-field" placeholder={t.contact.fields.emailPlaceholder} />
                    {errors.email && <p className="text-xs mt-1" style={{ color: '#F87171' }}>{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone"><L text={t.contact.fields.phone} /></label>
                    <input type="tel" id="phone" name="phone" value={form.phone} onChange={onChange}
                      className="input-field" placeholder={t.contact.fields.phonePlaceholder} />
                    {errors.phone && <p className="text-xs mt-1" style={{ color: '#F87171' }}>{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="service"><L text={t.contact.fields.service} /></label>
                  <select id="service" name="service" value={form.service} onChange={onChange} className="input-field">
                    <option value="">Select a service...</option>
                    {t.contact.fields.serviceOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message"><L text={t.contact.fields.message} /></label>
                  <textarea id="message" name="message" value={form.message} onChange={onChange}
                    rows={4} className="input-field resize-none" placeholder={t.contact.fields.messagePlaceholder} />
                </div>
                <button type="submit" disabled={submitting}
                  className="btn-accent w-full py-4 text-sm font-bold disabled:opacity-50">
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      {t.contact.submitting}
                    </span>
                  ) : t.contact.submit}
                </button>
                {status === 'success' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-sm text-center py-3 rounded-lg"
                    style={{ background: 'rgba(232,255,0,0.07)', color: '#E8FF00', border: '1px solid rgba(232,255,0,0.2)', fontFamily: 'var(--font-body), system-ui' }}>
                    {t.contact.success}
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-sm text-center py-3 rounded-lg"
                    style={{ background: 'rgba(239,68,68,0.07)', color: '#F87171', border: '1px solid rgba(239,68,68,0.2)', fontFamily: 'var(--font-body), system-ui' }}>
                    {t.contact.error}
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
