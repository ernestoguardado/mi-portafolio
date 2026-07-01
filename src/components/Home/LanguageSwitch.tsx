import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitch() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="rounded-md px-3 py-1.5 text-sm font-medium text-gray-500 ring-1 ring-gray-300 transition hover:text-gray-900 dark:text-gray-400 dark:ring-gray-700 dark:hover:text-white"
      aria-label="Cambiar idioma"
    >
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
