import Layout from '@/components/UI/Layout';
import PageHeader from '@/components/UI/PageHeader';
import NavbarMenu from '@/components/Navbar/NavbarMenu';
import BackToHomeLogo from '@/components/Navbar/BackToHomeLogo';
import CodeOrbit from '@/components/UI/CodeOrbit';
import { useLanguage } from '@/context/LanguageContext';

export default function NavbarPage() {
  const { t } = useLanguage();

  return (
    <Layout title="Menú | Ernesto Guardado">
      <PageHeader left={<BackToHomeLogo />} />
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">

        {/* Encabezado con CodeOrbit */}
        <div className="mb-10 w-full max-w-lg flex flex-col items-center text-center">
          <div className="hidden sm:block mb-2">
            <CodeOrbit size={72} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t({ es: '¿Qué quieres explorar?', en: 'What do you want to explore?' })}
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {t({ es: 'Selecciona una sección', en: 'Select a section' })}
          </p>
          <div className="mt-3 h-1 w-16 rounded bg-gray-900 dark:bg-white" />
        </div>

        <NavbarMenu />
      </div>
    </Layout>
  );
}
