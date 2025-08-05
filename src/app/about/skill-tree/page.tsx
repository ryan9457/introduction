'use client';

enum Level {
  Beginner,
  Intermediate,
  Advanced,
}

interface Skill {
  name: string;
  level: number;
}

const skills: { category: string; items: Skill[] }[] = [
  {
    category: '程式語言',
    items: [
      { name: 'C#', level: Level.Intermediate },
      { name: 'TypeScript', level: Level.Advanced },
      { name: 'JavaScript', level: Level.Advanced },
    ],
  },
  {
    category: '遊戲引擎',
    items: [
      { name: 'Unity', level: Level.Intermediate },
      { name: 'Cocos', level: Level.Advanced },
      { name: 'Pixi', level: Level.Advanced },
    ],
  },
  {
    category: '前端框架',
    items: [
      { name: 'React', level: Level.Intermediate },
      { name: 'Vue', level: Level.Intermediate },
    ],
  },
  {
    category: '版本控制',
    items: [{ name: 'Git', level: Level.Advanced }],
  },
  {
    category: '動畫相關',
    items: [
      { name: 'Spine', level: Level.Advanced },
      { name: 'Particle', level: Level.Advanced },
      { name: 'GSAP', level: Level.Advanced },
    ],
  },
];

const levelColor = [
  'bg-red-300 dark:bg-red-700',
  'bg-orange-200 dark:bg-orange-600',
  'bg-green-200 dark:bg-green-600',
];

export default function SkillTree() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-100">技能樹</h2>
      <div className="space-y-10">
        {skills.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase mb-4">
              {group.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {group.items.map((skill, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-neutral-200 dark:border-neutral-700 p-3 flex flex-col justify-between h-[70px] shadow-sm hover:shadow-md transition-shadow duration-200 bg-white/50 dark:bg-neutral-900/40"
                >
                  <span className="text-sm font-medium text-neutral-800 dark:text-neutral-100">
                    {skill.name}
                  </span>
                  <div className="flex space-x-1 mt-auto">
                    {[0, 1, 2].map((step, index) => {
                      return (
                        <div
                          key={step}
                          className={`w-1/3 h-4 rounded-sm ${skill.level < index ? 'bg-neutral-200 dark:bg-neutral-800' : levelColor[skill.level]}`}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
