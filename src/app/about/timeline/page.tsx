'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Timeline() {
  const { t } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setHovered] = useState<number | null>(null);
  // '遊戲工程師 - Cocos Creator',
  const timeline = [
    {
      year: '2024',
      title: `${t('timeline_progress_title_1')} - Cocos Creator`,
      desc: `${t('timeline_progress_desc_1')}`,
      color: 'bg-yellow-200',
    },
    {
      year: '2021',
      title: `${t('timeline_progress_title_2')} - Pixi`,
      desc: `${t('timeline_progress_desc_2')}`,
      color: 'bg-blue-200',
    },
    {
      year: '2018',
      title: `${t('timeline_progress_title_3')} - Cocos2dx`,
      desc: `${t('timeline_progress_desc_3')}`,
      color: 'border-green-400',
    },
    {
      year: '2017',
      // title: '於國立虎尾科技大學資訊工程系畢業',
      title: `${t('timeline_progress_title_4')}`,
      desc: `${t('timeline_progress_desc_4')}`,
      color: 'border-green-400',
    },
  ];

  return (
    <section className="relative max-w-3xl mx-auto sm:px-10 py-16 bg-white dark:bg-neutral-900">
      <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-800 dark:text-gray-100">
        {t('timeline')}
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
              <p className="text-sm mt-1 text-gray-600 dark:text-gray-400 whitespace-pre-line">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * lottery
 * xuan shi: win go/trx-win go/sb/5d
 * Table
 * skyline: sb/paijiu
 * mu yei: bai ren niu niu/hong hei da zhan/long hu/bai jia le/se dei/shai bao/beng chi bao ma/sen lin wu hui/fan tan/an da ba ha
 * Slot
 * xuan shi: fortune gems/money coming/super ace/crazy 777
 * mu yei: cai fu xiang shen/xin yun shui guo ji/gua gua le/plinko
 * Casual
 * skyline: over 10 games.
 * mu yei: mines
 */
