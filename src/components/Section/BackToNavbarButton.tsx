import { useRouter } from 'next/router';
import { useLanguage } from '@/context/LanguageContext';

export default function BackToNavbarButton() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <button
      onClick={() => router.push('/navbar')}
      className="flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      {t({ es: 'Menú', en: 'Menu' })}
    </button>
  );
}
