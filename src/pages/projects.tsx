import Link from 'next/link';
import Layout from '@/components/UI/Layout';
import PageHeader from '@/components/UI/PageHeader';
import SectionHeader from '@/components/UI/SectionHeader';
import BackToNavbarButton from '@/components/Section/BackToNavbarButton';
import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/data/projects';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <Layout title="Proyectos | Ernesto Guardado">
      <PageHeader left={<BackToNavbarButton />} />
      <div className="mx-auto w-full max-w-3xl px-4 py-16">
        <SectionHeader
          title={t({ es: 'Proyectos', en: 'Projects' })}
          subtitle={t({ es: 'Algunos de mis trabajos recientes', en: 'Some of my recent work' })}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => {
            const cover = project.cover ?? project.images?.[0] ?? project.image;
            return (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <article className="group cursor-pointer rounded-2xl border border-gray-200 overflow-hidden transition-all duration-200 hover:border-indigo-300 hover:shadow-lg dark:border-gray-800 dark:hover:border-indigo-700">

                  {/* Cover */}
                  <div className="h-44 overflow-hidden bg-white">
                    {cover ? (
                      <img
                        src={cover}
                        alt={project.title}
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-gray-300 dark:text-gray-700">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="h-12 w-12">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M3 9h18M9 21V9" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="shrink-0 text-gray-300 group-hover:text-indigo-400 transition-colors dark:text-gray-600">
                        →
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                      {t(project.description)}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
