import Link from 'next/link';

type Article = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags: string[];
  release: boolean;
};

const articles: Article[] = [
  {
    date: '2025-08-02',
    title: 'Sprite Text',
    excerpt: '解決 TextMeshPro 無法為圖集調色的問題，也支援單圖設定。',
    slug: '/',
    tags: ['Unity'],
    release: false,
  },
  {
    date: '2025-07-26',
    title: 'Audio Segment Extract',
    excerpt: '支援一體式音效的片段播放',
    slug: '/',
    tags: ['Unity'],
    release: false,
  },
  {
    date: '2025-07-25',
    title: 'Atlas Generator',
    excerpt: '批量把圖加進圖集裡。',
    slug: '/',
    tags: ['Unity'],
    release: false,
  },
  {
    date: '2025-07-24',
    title: 'Sprite Auto Slicer',
    excerpt: '簡化繁瑣的匯圖裁切範圍的惱人問題。',
    slug: '/column/unity/sprite-auto-slicer',
    tags: ['Unity'],
    release: true,
  },
];

export default function Column() {
  return (
    <div className="relative bg-white dark:bg-neutral-900 px-6 py-10 md:py-16">
      <div className="max-w-3xl mx-auto backdrop-blur-md bg-white/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-xl p-8 md:p-10 space-y-6 transition-all">
        <h2 className="text-3xl font-bold  text-gray-800 dark:text-white mb-12">文章列表</h2>
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
                {article.release ? '' : '(暫不開放閱讀)'}
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
