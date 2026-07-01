import Layout from '@/components/UI/Layout';
import PageHeader from '@/components/UI/PageHeader';
import SectionHeader from '@/components/UI/SectionHeader';
import BackToNavbarButton from '@/components/Section/BackToNavbarButton';
import { useLanguage } from '@/context/LanguageContext';
import { education } from '@/data/education';

export default function Education() {
  const { t } = useLanguage();

  return (
    <Layout title="Educación | Ernesto Guardado">
      <PageHeader left={<BackToNavbarButton />} />
      <div className="mx-auto w-full max-w-2xl px-4 py-16">
        <SectionHeader
          title={t({ es: 'Educación', en: 'Education' })}
          subtitle={t({ es: 'Mi formación académica', en: 'My academic background' })}
        />
        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="rounded-xl border border-gray-200 p-5 dark:border-gray-800"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-gray-400">{edu.period}</p>
              <h3 className="mt-1 font-semibold text-gray-900 dark:text-white">{t(edu.degree)}</h3>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{edu.institution}</p>
              {edu.description && (
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{t(edu.description)}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
