import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/i18n';

const sections = [
  {
    key: 'about' as const,
    href: '/about',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    color: 'group-hover:text-indigo-500 dark:group-hover:text-indigo-400',
    accent: 'group-hover:border-indigo-200 dark:group-hover:border-indigo-800',
    bg: 'group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/40',
  },
  {
    key: 'skills' as const,
    href: '/skills',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    color: 'group-hover:text-cyan-500 dark:group-hover:text-cyan-400',
    accent: 'group-hover:border-cyan-200 dark:group-hover:border-cyan-800',
    bg: 'group-hover:bg-cyan-50 dark:group-hover:bg-cyan-950/40',
  },
  {
    key: 'projects' as const,
    href: '/projects',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
    color: 'group-hover:text-violet-500 dark:group-hover:text-violet-400',
    accent: 'group-hover:border-violet-200 dark:group-hover:border-violet-800',
    bg: 'group-hover:bg-violet-50 dark:group-hover:bg-violet-950/40',
  },
  {
    key: 'experience' as const,
    href: '/experience',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
    color: 'group-hover:text-teal-500 dark:group-hover:text-teal-400',
    accent: 'group-hover:border-teal-200 dark:group-hover:border-teal-800',
    bg: 'group-hover:bg-teal-50 dark:group-hover:bg-teal-950/40',
  },
  {
    key: 'education' as const,
    href: '/education',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    color: 'group-hover:text-amber-500 dark:group-hover:text-amber-400',
    accent: 'group-hover:border-amber-200 dark:group-hover:border-amber-800',
    bg: 'group-hover:bg-amber-50 dark:group-hover:bg-amber-950/40',
  },
  {
    key: 'contact' as const,
    href: '/contact',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    color: 'group-hover:text-rose-500 dark:group-hover:text-rose-400',
    accent: 'group-hover:border-rose-200 dark:group-hover:border-rose-800',
    bg: 'group-hover:bg-rose-50 dark:group-hover:bg-rose-950/40',
  },
];

export default function NavbarMenu() {
  const { t } = useLanguage();

  return (
    <nav className="grid w-full max-w-lg grid-cols-2 gap-3 sm:grid-cols-3">
      {sections.map(({ key, href, icon, color, accent, bg }) => (
        <Link
          key={key}
          href={href}
          className={`group flex flex-col items-center gap-3 rounded-2xl border border-gray-200 px-4 py-6 text-center transition-all duration-200 dark:border-gray-800 ${accent} ${bg}`}
        >
          <span className={`text-gray-400 transition-colors duration-200 dark:text-gray-500 ${color}`}>
            {icon}
          </span>
          <span className={`text-sm font-semibold text-gray-600 transition-colors duration-200 dark:text-gray-400 ${color}`}>
            {t(translations.nav[key])}
          </span>
          <span className="text-gray-300 transition-colors duration-200 group-hover:translate-x-0.5 dark:text-gray-700 text-xs">→</span>
        </Link>
      ))}
    </nav>
  );
}
