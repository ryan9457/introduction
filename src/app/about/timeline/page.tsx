'use client';

import { useState } from 'react';

const timeline = [
  {
    year: '2024',
    title: '遊戲工程師 - Cocos Creator',
    desc: 'Game Engineer - Cocos Creator',
    color: 'bg-yellow-200',
  },
  {
    year: '2021',
    title: '遊戲工程師 - Pixi',
    desc: 'Game Engineer - Pixi',
    color: 'bg-blue-200',
  },
  {
    year: '2018',
    title: '遊戲工程師 - Cocos2dx',
    desc: `Game Engineer - Cocos2dx`,
    color: 'border-green-400',
  },
  {
    year: '2017',
    title: '於國立虎尾科技大學資訊工程系畢業',
    desc: `Graduated from NFU CSIE with bachelor's degree.`,
    color: 'border-green-400',
  },
];

export default function Timeline() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setHovered] = useState<number | null>(null);

  return (
    <section className="relative px-4 sm:px-10 py-16 bg-white dark:bg-neutral-900">
      <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-800 dark:text-gray-100">
        歷程
      </h2>
      <div className="relative border-l-2 border-gray-300 dark:border-gray-600 ml-3 sm:ml-1 max-w-3xl mx-auto">
        {timeline.map((item, i) => (
          <div
            key={i}
            className={`group mb-12 pl-6 sm:pl-10 relative ${i % 2 === 0 ? 'sm:ml-0' : 'sm:ml-10'}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl shadow-sm p-4 transition-transform duration-300 group-hover:scale-[1.02]">
              <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                {item.year} - {item.title}
              </h3>
              <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
