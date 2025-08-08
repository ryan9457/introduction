export default function Profile() {
  return (
    <section className="relative px-6 py-10 md:py-16">
      <div className="max-w-3xl mx-auto backdrop-blur-md bg-white/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-xl p-8 md:p-10 space-y-6 transition-all">
        <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 tracking-tight">
          簡介
        </h1>
        <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 tracking-tight">
          Profile
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
          我是一名遊戲工程師，擁有將近 7 年的休閒類遊戲開發經驗。
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
          除了遊戲開發，也參與過跨部門協作網頁後台、聊天室周邊等項目。
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
          閒暇之餘會紀錄一些心得文章。
        </p>
        <p className="italic text-neutral-500 dark:text-neutral-400 text-base">
          「可以為夢想忙碌，不可因忙碌而忘記夢想。」
        </p>
      </div>
    </section>
  );
}
