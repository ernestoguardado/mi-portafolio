import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/i18n";

export default function Hero() {
  const { t } = useLanguage();
  const [zoomed, setZoomed] = useState(false);

  const toggle = () => setZoomed(true);
  const collapse = () => setZoomed(false);

  return (
    <div className="flex flex-col items-center text-center">

      {/* Overlay ampliado — click/tap en cualquier lugar cierra */}
      <div
        onClick={collapse}
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out
          ${zoomed ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className={`relative h-72 w-72 overflow-hidden rounded-full border-4 border-white shadow-2xl transition-transform duration-300 ease-in-out
          ${zoomed ? 'scale-100' : 'scale-50'}`}>
          <img
            src="/images/profile.jpeg"
            alt="Ernesto Guardado"
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>
      </div>

      {/* Foto original */}
      <div
        className="mb-6 h-32 w-32 cursor-zoom-in overflow-hidden rounded-full border-4 border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800 select-none"
        onClick={toggle}
      >
        <img
          src="/images/profile.jpeg"
          alt="Ernesto Guardado"
          className="h-full w-full object-cover"
          draggable={false}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 dark:text-gray-500">
        {t(translations.home.greeting)}
      </p>
      <h1 className="relative mt-3 inline-block">
        <span className="absolute left-0 bottom-1 h-4 w-full rounded-sm bg-gray-200 dark:bg-gray-700 -z-10 translate-y-1" />
        <span className="relative z-10 text-5xl font-black tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          Ernesto Guardado
        </span>
      </h1>
      <div className="mt-4 flex items-center gap-2">
        <span className="h-px w-6 bg-gray-300 dark:bg-gray-600" />
        <p className="text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400">
          {t(translations.home.role)}
        </p>
        <span className="h-px w-6 bg-gray-300 dark:bg-gray-600" />
      </div>

      <a
        href="/cv/ErnestoGuardadoCV.pdf"
        download
        className="mt-6 inline-flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        {t({ es: 'Descargar CV', en: 'Download CV' })}
      </a>
    </div>
  );
}
