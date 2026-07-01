import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/helpers';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: ReactNode;
}

export default function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const base = 'px-5 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-gray-900 text-white hover:bg-gray-700 focus:ring-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200',
    outline: 'border border-gray-900 text-gray-900 hover:bg-gray-100 focus:ring-gray-900 dark:border-white dark:text-white dark:hover:bg-gray-800',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-400 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800',
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
