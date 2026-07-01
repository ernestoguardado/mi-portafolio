import { ReactNode } from 'react';
import LanguageSwitch from '@/components/Home/LanguageSwitch';
import ThemeToggle from '@/components/Home/ThemeToggle';
import CodeOrbit from './CodeOrbit';

interface PageHeaderProps {
  left?: ReactNode;
}

export default function PageHeader({ left }: PageHeaderProps) {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <CodeOrbit size={40} />
          {left}
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
