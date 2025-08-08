'use client';

import About from './about/page';
import Chanllenge from './challenge/page';
import Column from './column/page';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();

  if (!i18n.isInitialized) return null;

  return (
    <div className="min-h-screen pt-15 bg-neutral-100 dark:bg-neutral-900 text-gray-600 dark:text-gray-100">
      <section className="relative px-6 py-24 text-center dark:from-purple-900 dark:to-yellow-900">
        <h1 className="italic text-5xl font-extrabold mb-4 tracking-tight leading-tight">
          Ryan Chen
        </h1>
        <p className="max-w-xl mx-auto text-lg text-gray-700 dark:text-gray-200">{t('title')}</p>
        <div className="absolute top-0 left-0 w-32 h-32 bg-amber-300 opacity-30 rotate-12 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 opacity-20 -rotate-12 rounded-full blur-3xl" />
      </section>
      <About />
      <Chanllenge />
      <Column />
    </div>
  );
}
