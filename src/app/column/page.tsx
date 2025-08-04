import Link from 'next/link';

type Article = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags: string[];
};

const articles: Article[] = [
  // {
  //   date: '2025-08-02',
  //   title: 'Sprite Text',
  //   excerpt: '解決 TMP_Text 無法為 Sprite Asset 調色的問題。',
  //   slug: '/toolkit/sprite-auto-slicer',
  //   tags: ['Unity'],
  // },
  // {
  //   date: '2025-07-25',
  //   title: 'Atlas Generator',
  //   excerpt: '你還在一張一張把圖加進圖集裡嗎?也許你該試試看這個工具。',
  //   slug: '/toolkit/sprite-auto-slicer',
  //   tags: ['Unity'],
  // },
  {
    date: '2025-07-24',
    title: 'Sprite Auto Slicer',
    excerpt: '簡化繁瑣的匯圖裁切範圍的惱人問題。',
    slug: '/column/unity/sprite-auto-slicer',
    tags: ['Unity'],
  },
];

export default function Column() {
  return (
    <div className="w-screen h-screen py-16 px-4 bg-white dark:bg-neutral-900">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
        文章列表
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {articles.map((article, i) => (
          <Link
            key={i}
            href={{
              pathname: article.slug,
              query: article,
              hash: 'team', // 跳到指定區塊
            }}
            className="group block p-5 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-neutral-50 dark:bg-neutral-800 hover:bg-white dark:hover:bg-neutral-700"
          >
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{article.date}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:underline">
              {article.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">{article.excerpt}</p>
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
  );
}
