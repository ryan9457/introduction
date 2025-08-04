'use client';

import Remaster from './remaster/page';

export default function Home() {
  // redirect('/portfolio/dragon\'s-trail');
  return (
    <div className="min-w-screen min-h-screen bg-neutral-100 dark:bg-neutral-900 text-gray-800 dark:text-gray-100">
      <section className="relative px-6 py-24 text-center dark:from-purple-900 dark:to-yellow-900">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight leading-tight">Ryan Chen</h1>
        <p className="max-w-xl mx-auto text-lg text-gray-700 dark:text-gray-200">
          遊戲與互動設計開發者
        </p>
        <div className="absolute -top-4 -left-8 w-24 h-24 bg-amber-300 opacity-30 rotate-12 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 opacity-20 -rotate-12 rounded-full blur-3xl" />
      </section>
      <section className="relative px-6 py-10 md:py-16">
        <div className="max-w-3xl mx-auto backdrop-blur-md bg-white/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-xl p-8 md:p-10 space-y-6 transition-all">
          <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 tracking-tight">
            目前正在...
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
            進行有趣的 Web Game 並以週為單位復刻還原的開發挑戰。
          </p>
        </div>

        <Remaster />
      </section>
    </div>
  );
}
