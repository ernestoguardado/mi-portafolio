import { useRouter } from 'next/router';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/i18n';
import Button from '@/components/UI/Button';

export default function EnterButton() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <Button onClick={() => router.push('/navbar')} className="mt-2 px-8 py-3 text-base">
      {t(translations.home.enter)}
      <span className="ml-2">→</span>
    </Button>
  );
}
