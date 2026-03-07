'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { en } from '@/translations/en';
import { ar } from '@/translations/ar';

export type Language = 'en' | 'ar';
export type Translations = typeof en;

interface LanguageContextType {
  lang: Language;
  t: Translations;
  setLang: (l: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  t: en,
  setLang: () => {},
  isRTL: false,
});

const translations: Record<Language, Translations> = { en, ar };

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Language | null;
    if (stored === 'en' || stored === 'ar') setLangState(stored);
  }, []);

  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('lang', lang);
  }, [lang]);

  const setLang = (l: Language) => setLangState(l);

  return (
    <LanguageContext.Provider
      value={{ lang, t: translations[lang], setLang, isRTL: lang === 'ar' }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
