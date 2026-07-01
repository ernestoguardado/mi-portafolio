import Layout from '@/components/UI/Layout';
import PageHeader from '@/components/UI/PageHeader';
import SectionHeader from '@/components/UI/SectionHeader';
import BackToNavbarButton from '@/components/Section/BackToNavbarButton';
import { useLanguage } from '@/context/LanguageContext';
import { spokenLanguages } from '@/data/languages';

export default function About() {
  const { t } = useLanguage();

  return (
    <Layout title="Sobre mí | Ernesto Guardado">
      <PageHeader left={<BackToNavbarButton />} />
      <div className="mx-auto w-full max-w-2xl px-4 py-16">
        <SectionHeader
          title={t({ es: 'Sobre mí', en: 'About me' })}
          subtitle={t({ es: 'Conoce un poco más sobre quién soy', en: 'Learn a little more about who I am' })}
        />

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {t({
            es: 'Ingeniero de Software con 3+ años de experiencia construyendo y manteniendo aplicaciones web escalables con React, Next.js, TypeScript, GraphQL, NestJS y MongoDB. Trabajo tanto en frontend como en backend, entregando interfaces responsivas, integraciones de APIs, sistemas de autenticación y funcionalidades críticas para entornos de producción. Me apasiona la arquitectura de software, el código limpio y el crecimiento profesional continuo.',
            en: 'Software Engineer with 3+ years of experience building and maintaining scalable web applications using React, Next.js, TypeScript, GraphQL, NestJS, and MongoDB. Experienced in both frontend and backend development, delivering responsive user interfaces, API integrations, authentication systems, and business-critical features for production environments. Passionate about software architecture, clean code, and continuous professional growth.',
          })}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium text-gray-400 uppercase tracking-widest text-xs mb-1">
              {t({ es: 'Ubicación', en: 'Location' })}
            </p>
            <p className="text-gray-700 dark:text-gray-300">El Salvador (Remote)</p>
          </div>
          <div>
            <p className="font-medium text-gray-400 uppercase tracking-widest text-xs mb-1">
              {t({ es: 'Correo', en: 'Email' })}
            </p>
            <a href="mailto:ernesto.jonh0@gmail.com" className="text-gray-700 dark:text-gray-300 hover:underline">
              ernesto.jonh0@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
            {t({ es: 'Idiomas', en: 'Languages' })}
          </h2>
          <ul className="space-y-2">
            {spokenLanguages.map((lang) => (
              <li key={lang.name.en} className="flex justify-between text-sm">
                <span className="font-medium text-gray-700 dark:text-gray-300">{t(lang.name)}</span>
                <span className="text-gray-400">{t(lang.level)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
