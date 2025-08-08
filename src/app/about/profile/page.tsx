'use client';

import { useTranslation } from 'react-i18next';

export default function Profile() {
  const { t } = useTranslation();
  return (
    <section className="relative px-6 py-10 md:py-16">
      <div className="max-w-3xl mx-auto backdrop-blur-md bg-white/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-xl p-8 md:p-10 space-y-6 transition-all">
        <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 tracking-tight">
          {t('profile')}
        </h1>
        <p className="italic text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed whitespace-pre-line">
          {t('profile_paragraph_1')}
        </p>
        <p className="italic text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed whitespace-pre-line">
          {t('profile_paragraph_2')}
        </p>
        <p className="italic text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
          {t('profile_paragraph_3')}
        </p>
        <p className="italic text-neutral-500 dark:text-neutral-400 text-base">
          {`「${t('profile_slogon')}」`}
        </p>
      </div>
    </section>
  );
}
