'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

type Article = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags: string[];
  release: boolean;
};

export default function Column() {
  const { t } = useTranslation();
  const articles: Article[] = [
    {
      date: '2025-08-02',
      title: `${t('article_unity_title_4')}`,
      excerpt: `${t('article_unity_desc_4')}`,
      slug: '/',
      tags: ['Unity'],
      release: false,
    },
    {
      date: '2025-07-26',
      title: `${t('article_unity_title_3')}`,
      excerpt: `${t('article_unity_desc_3')}`,
      slug: '/',
      tags: ['Unity'],
      release: false,
    },
    {
      date: '2025-07-25',
      title: `${t('article_unity_title_2')}`,
      excerpt: `${t('article_unity_desc_2')}`,
      slug: '/',
      tags: ['Unity'],
      release: false,
    },
    {
      date: '2025-07-24',
      title: `${t('article_unity_title_1')}`,
      excerpt: `${t('article_unity_desc_1')}`,
      slug: '/column/unity/sprite-auto-slicer',
      tags: ['Unity'],
      release: true,
    },
  ];

  return (
    <div className="relative bg-white dark:bg-neutral-900 px-6 py-10">
      <div className="max-w-3xl mx-auto backdrop-blur-md bg-white/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-xl p-8 md:p-10 space-y-6 transition-all">
        <h2 className="text-3xl font-bold  text-gray-800 dark:text-white mb-12">{t('column')}</h2>
        {/* <h2 className="text-3xl font-bold  text-gray-800 dark:text-white mb-12">文章列表</h2> */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {articles.map((article, i) => (
            <Link
              key={i}
              href={{
                pathname: article.slug,
                query: article,
              }}
              className={`group block p-5 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-neutral-50 dark:bg-neutral-800 hover:bg-white dark:hover:bg-neutral-700 ${
                article.release
                  ? 'pointer-events-auto'
                  : 'pointer-events-none opacity-50 cursor-not-allowed'
              }`}
            >
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{article.date}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:underline">
                {article.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
                {article.release ? '' : `${t('article_status_closed')}`}
                {/* {article.release ? '' : '(暫不開放閱讀)'} */}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {article.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
