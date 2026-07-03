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
      <PageHeader left={<BackToNavbarButton href="/projects" />} />

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-5 right-5 z-10 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute top-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1 text-xs text-white backdrop-blur-sm">
            {selected + 1} / {images.length}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/25 transition"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <img
            src={images[selected]}
            alt={`${project.title} ${selected + 1}`}
            className="max-h-[85vh] max-w-[80vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/25 transition"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setSelected(i); }}
                className={`shrink-0 h-12 w-16 overflow-hidden rounded-lg border-2 transition-all ${
                  i === selected ? 'border-white opacity-100 scale-110' : 'border-transparent opacity-40 hover:opacity-70'
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Hero del proyecto ── */}
      <div className="border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto w-full max-w-4xl px-4 py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">

            {/* Logo */}
            {project.logo && (
              <div className="shrink-0 h-20 w-20 overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-md dark:border-gray-700 dark:bg-gray-900">
                <img src={project.logo} alt={`${project.title} logo`} className="h-full w-full object-contain" />
              </div>
            )}

            <div className="flex-1 min-w-0">
              <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                {project.title}
              </h1>

              {/* Meta: rol y período */}
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                {project.role && (
                  <span className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4 text-indigo-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    {t(project.role)}
                  </span>
                )}
                {project.period && (
                  <span className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4 text-purple-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    {project.period}
                  </span>
                )}
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-5 flex gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-900 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:border-white dark:hover:text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Contenido principal ── */}
      <div className="mx-auto w-full max-w-4xl px-4 py-12 space-y-12">

        {/* Video */}
        {project.video && (
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-950">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 text-indigo-600 dark:text-indigo-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
                </svg>
              </span>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                {t({ es: 'Demo del proyecto', en: 'Project Demo' })}
              </h2>
            </div>
            <div className="overflow-hidden rounded-2xl bg-black shadow-xl ring-1 ring-black/10 dark:ring-white/10">
              <div className="flex items-center gap-1.5 bg-gray-900 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-3 text-xs text-gray-500 tracking-wide">{project.title} — Demo</span>
              </div>
              <video
                controls
                preload="metadata"
                poster={project.cover}
                className="w-full max-h-[540px] bg-black"
                style={{ display: 'block' }}
              >
                <source src={project.video} type="video/mp4" />
                <source src={project.video} type="video/quicktime" />
              </video>
            </div>
          </section>
        )}

        {/* Descripción */}
        {project.longDescription && (
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-950">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 text-purple-600 dark:text-purple-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </span>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                {t({ es: 'Sobre el proyecto', en: 'About the project' })}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
              {t(project.longDescription)}
            </p>
          </section>
        )}

        {/* Galería */}
        {images.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-950">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 text-cyan-600 dark:text-cyan-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </span>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                {t({ es: 'Galería', en: 'Gallery' })}
              </h2>
              <span className="ml-auto text-xs text-gray-400">{t({ es: 'Click para ampliar', en: 'Click to expand' })}</span>
            </div>

            {/* Imagen principal */}
            <div
              className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 cursor-zoom-in shadow-sm ring-1 ring-black/5 dark:ring-white/5"
              onClick={() => setLightbox(true)}
            >
              <img
                src={images[selected]}
                alt={`${project.title} screenshot ${selected + 1}`}
                className="w-full h-72 object-contain sm:h-[420px] transition-transform duration-300 hover:scale-[1.01]"
              />
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2.5 text-white hover:bg-black/50 transition backdrop-blur-sm"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2.5 text-white hover:bg-black/50 transition backdrop-blur-sm"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute bottom-3 right-3 rounded-lg bg-black/40 px-2.5 py-1 text-xs text-white backdrop-blur-sm">
                {selected + 1} / {images.length}
              </div>
            </div>

            {/* Miniaturas */}
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`shrink-0 h-16 w-24 overflow-hidden rounded-xl border-2 transition-all duration-150 ${
                    i === selected
                      ? 'border-indigo-500 opacity-100 shadow-md'
                      : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-contain bg-white dark:bg-gray-900" />
                </button>
              ))}
            </div>
          </section>
        )}
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
