import CodeOrbit from './CodeOrbit';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-10 flex flex-col items-center text-center">
      <div className="hidden sm:block mb-2">
        <CodeOrbit size={72} />
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{subtitle}</p>
      )}
      <div className="mt-3 h-1 w-16 rounded bg-gray-900 dark:bg-white" />
    </div>
  );
}
