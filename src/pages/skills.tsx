import Layout from '@/components/UI/Layout';
import PageHeader from '@/components/UI/PageHeader';
import SectionHeader from '@/components/UI/SectionHeader';
import BackToNavbarButton from '@/components/Section/BackToNavbarButton';
import { useLanguage } from '@/context/LanguageContext';
import { skills } from '@/data/skills';

export default function Skills() {
  const { t } = useLanguage();

  const categories = ['frontend', 'backend', 'databases', 'tools'] as const;
  const categoryLabels = {
    frontend: { es: 'Frontend', en: 'Frontend' },
    backend: { es: 'Backend', en: 'Backend' },
    databases: { es: 'Bases de datos', en: 'Databases' },
    tools: { es: 'Herramientas & DevOps', en: 'Tools & DevOps' },
  };

  return (
    <Layout title="Habilidades | Ernesto Guardado">
      <PageHeader left={<BackToNavbarButton />} />
      <div className="mx-auto w-full max-w-2xl px-4 py-16">
        <SectionHeader
          title={t({ es: 'Habilidades', en: 'Skills' })}
          subtitle={t({ es: 'Tecnologías con las que trabajo', en: 'Technologies I work with' })}
        />
        <div className="space-y-8">
          {categories.map((cat) => {
            const filtered = skills.filter((s) => s.category === cat);
            if (!filtered.length) return null;
            return (
              <div key={cat}>
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {t(categoryLabels[cat])}
                </h2>
                <div className="space-y-3">
                  {filtered.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                        <div
                          className="h-1.5 rounded-full bg-gray-900 dark:bg-white transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
