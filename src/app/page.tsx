'use client';

import About from './about/page';
import Chanllenge from './challenge/page';
import Column from './column/page';

export default function Home() {
  // redirect('/portfolio/dragon\'s-trail');
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 text-gray-800 dark:text-gray-100">
      <section className="relative px-6 py-24 text-center dark:from-purple-900 dark:to-yellow-900">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight leading-tight">Ryan Chen</h1>
        <p className="max-w-xl mx-auto text-lg text-gray-700 dark:text-gray-200">
          遊戲與互動設計開發者
        </p>
        <div className="absolute -top-4 -left-8 w-24 h-24 bg-amber-300 opacity-30 rotate-12 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 opacity-20 -rotate-12 rounded-full blur-3xl" />
      </section>
      <About />
      <Chanllenge />
      <Column />
    </div>
  );
}
