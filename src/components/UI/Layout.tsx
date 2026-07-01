import { ReactNode } from 'react';
import Head from 'next/head';
import Footer from './Footer';
interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = 'Ernesto Guardado | Portfolio',
  description = 'Portafolio personal de Ernesto Guardado, desarrollador web.',
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </div>
    </>
  );
}
