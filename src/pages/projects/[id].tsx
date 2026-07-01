import { useState, useEffect, useCallback } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/UI/Layout';
import PageHeader from '@/components/UI/PageHeader';
import BackToNavbarButton from '@/components/Section/BackToNavbarButton';
import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/data/projects';
import { Project } from '@/types';

interface Props { project: Project }

export default function ProjectDetail({ project }: Props) {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const images = project.images ?? [];

  const prev = useCallback(() =>
    setSelected((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() =>
    setSelected((i) => (i + 1) % images.length), [images.length]);

  /* Navegar con teclado dentro del lightbox */
  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') setLightbox(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, next, prev]);

  return (
    <Layout title={`${project.title} | Ernesto Guardado`}>
      <PageHeader left={<BackToNavbarButton />} />

      {/* ── Lightbox con navegación ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={() => setLightbox(false)}
        >
          {/* Cerrar */}
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Contador */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs text-white">
            {selected + 1} / {images.length}
          </div>

          {/* Flecha izquierda */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/25 transition"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Imagen */}
          <img
            src={images[selected]}
            alt={`${project.title} ${selected + 1}`}
            className="max-h-[85vh] max-w-[80vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Flecha derecha */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/25 transition"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Miniaturas en lightbox */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setSelected(i); }}
                className={`shrink-0 h-12 w-16 overflow-hidden rounded-md border-2 transition-all ${
                  i === selected ? 'border-white opacity-100' : 'border-transparent opacity-40 hover:opacity-70'
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mx-auto w-full max-w-3xl px-4 py-12">

        {/* ── Título + logo ── */}
        <div className="mb-8 flex items-center gap-4">
          {project.logo && (
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-white p-1 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <img src={project.logo} alt={`${project.title} logo`} className="h-full w-full object-contain" />
            </div>
          )}
          <div>
            <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              {project.title}
            </h1>
            <div className="mt-1.5 flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              {project.role && (
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  {t(project.role)}
                </span>
              )}
              {project.period && (
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                  {project.period}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
              {tag}
            </span>
          ))}
        </div>

        {/* ── Galería ── */}
        {images.length > 0 && (
          <div className="mb-8">
            {/* Imagen principal */}
            <div
              className="relative overflow-hidden rounded-2xl bg-white cursor-zoom-in"
              onClick={() => setLightbox(true)}
            >
              <img
                src={images[selected]}
                alt={`${project.title} screenshot ${selected + 1}`}
                className="w-full h-72 object-contain sm:h-96 transition-transform duration-300 hover:scale-[1.02]"
              />
              {/* Flechas sobre imagen principal */}
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute bottom-3 right-3 rounded-lg bg-black/40 px-2 py-1 text-xs text-white backdrop-blur-sm">
                {selected + 1} / {images.length}
              </div>
            </div>

            {/* Miniaturas */}
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`shrink-0 h-16 w-24 overflow-hidden rounded-lg border-2 transition-all duration-150 ${
                    i === selected ? 'border-indigo-500 opacity-100' : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-contain" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Descripción */}
        {project.longDescription && (
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              {t({ es: 'Sobre el proyecto', en: 'About the project' })}
            </h2>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
              {t(project.longDescription)}
            </p>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-gray-900 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:border-white dark:hover:text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Demo
            </a>
          )}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: projects.map((p) => ({ params: { id: p.id } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = ({ params }) => {
  const project = projects.find((p) => p.id === params?.id) ?? null;
  if (!project) return { notFound: true };
  return { props: { project } };
};
