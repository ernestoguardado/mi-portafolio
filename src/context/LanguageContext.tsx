import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Language } from '@/types';

interface LanguageContextValue {
  lang: Language;
  toggleLang: () => void;
  t: (text: { es: string; en: string }) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('es');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Language | null;
    if (saved) setLang(saved);
  }, []);

  const toggleLang = () => {
    setLang((l) => {
      const next = l === 'es' ? 'en' : 'es';
      localStorage.setItem('lang', next);
      return next;
    });
  };

  const t = (text: { es: string; en: string }) => text[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
