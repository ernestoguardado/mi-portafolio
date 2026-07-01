import Layout from '@/components/UI/Layout';
import PageHeader from '@/components/UI/PageHeader';
import SectionHeader from '@/components/UI/SectionHeader';
import BackToNavbarButton from '@/components/Section/BackToNavbarButton';
import { useLanguage } from '@/context/LanguageContext';
import { experience } from '@/data/experience';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <Layout title="Experiencia | Ernesto Guardado">
      <PageHeader left={<BackToNavbarButton />} />
      <div className="mx-auto w-full max-w-2xl px-4 py-16">
        <SectionHeader
          title={t({ es: 'Experiencia', en: 'Experience' })}
          subtitle={t({ es: 'Mi trayectoria profesional', en: 'My professional journey' })}
        />
        <ol className="relative border-l border-gray-200 dark:border-gray-800">
          {experience.map((exp) => (
            <li key={exp.id} className="mb-8 ml-6">
              <span className="absolute -left-2 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 ring-4 ring-white dark:bg-white dark:ring-gray-950" />
              <p className="text-xs font-medium uppercase tracking-widest text-gray-400">{exp.period}</p>
              <h3 className="mt-1 font-semibold text-gray-900 dark:text-white">{t(exp.role)}</h3>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{exp.company}</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{t(exp.description)}</p>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  );
}
