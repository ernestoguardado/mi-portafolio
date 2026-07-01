import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/i18n';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-gray-200 py-6 text-center text-sm text-gray-400 dark:border-gray-800 dark:text-gray-600">
      © {year} Ernesto Bladimir Guardado — {t(translations.footer.rights)}
    </footer>
  );
}
