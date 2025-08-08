'use client';

import { useTranslation } from 'react-i18next';

type SkillProps = {
  id: string;
  value: number;
};

type PolygonNodeProps = {
  title: string;
  skills: SkillProps[];
};

// 多邊形技能節點元件
function PolygonNode({ title, skills = [] }: PolygonNodeProps) {
  let edgePoints = '';
  let radarPoints = '';
  const n = Math.floor(skills.length);
  if (n < 3 || n > 99) {
    return;
  }
  const edgeLength = 70;
  const size = 208;
  const center = size / 2;
  const maxRadius = edgeLength / (2 * Math.sin(Math.PI / n));
  edgePoints = skills
    .map((_, index) => {
      const angle = (2 * Math.PI * index) / skills.length;
      const r = maxRadius;
      const x = center + r * Math.cos(angle - Math.PI / 2);
      const y = center + r * Math.sin(angle - Math.PI / 2);
      return `${x},${y}`;
    })
    .join(' ');
  radarPoints = skills
    .map((skill, index) => {
      const angle = (2 * Math.PI * index) / skills.length;
      const r = (skill.value / 100) * maxRadius;
      const x = center + r * Math.cos(angle - Math.PI / 2);
      const y = center + r * Math.sin(angle - Math.PI / 2);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="relative w-52 h-52 flex items-center justify-center">
      {/* SVG Radar Background */}
      <svg viewBox={`0 0 ${size} ${size}`} className="absolute w-full h-full pointer-events-none">
        {/* 雷達圖背景底盤 */}
        {skills.length > 2 && (
          <polygon
            points={skills
              .map((_, index) => {
                const angle = (2 * Math.PI * index) / skills.length;
                const x = center + maxRadius * Math.cos(angle - Math.PI / 2);
                const y = center + maxRadius * Math.sin(angle - Math.PI / 2);
                return `${x},${y}`;
              })
              .join(' ')}
            fill="none"
            stroke="rgba(203, 213, 225, 0.4)"
            strokeWidth={1}
          />
        )}
        <polygon
          points={radarPoints}
          fill="rgba(99, 102, 241, 0.3)"
          stroke="rgba(99, 102, 241, 0.8)"
          strokeWidth={2}
        />
        <polygon
          points={edgePoints}
          fill="rgba(174, 174, 176, 0.3)"
          stroke="rgba(59, 60, 63, 0.8)"
          strokeWidth={2}
        />
      </svg>
      <span>{title}</span>
      {/* 子技能外圍分布：id 文字放在頂點外圍 */}
      {skills.map((skill, index) => {
        const angle = (2 * Math.PI * index) / n;
        const radius = maxRadius + 10;
        const x = center + radius * Math.cos(angle - Math.PI / 2);
        const y = center + radius * Math.sin(angle - Math.PI / 2);
        return (
          <div
            key={skill.id}
            className="absolute text-center font-semibold text-sm text-gray-800 dark:text-gray-100"
            style={{
              transform: `translate(${index % (n / 2) === 0 ? -50 : index > n / 2 ? -100 : 0}%, ${-50}%)`,
              left: `${x}px`,
              top: `${y}px`,
            }}
          >
            <div className="font-semibold">{skill.id}</div>
            {/* <div className="text-xs text-gray-500">{skill.value}</div> */}
          </div>
        );
      })}
    </div>
  );
}

// 主頁面
export default function PowerRadar() {
  const { t } = useTranslation();
  const skillTree = [
    {
      id: 'unity',
      name: 'Unity',
      skills: [
        { id: 'Scripting', value: 80 },
        { id: 'Proficiency', value: 70 },
        { id: 'Animation ', value: 70 },
        { id: 'Resource', value: 80 },
        { id: 'X-Platform', value: 70 },
        { id: 'Workflow', value: 70 },
      ],
    },
    {
      id: 'cocos',
      name: 'Cocos',
      skills: [
        { id: 'Scripting', value: 90 },
        { id: 'Proficiency', value: 90 },
        { id: 'Animation ', value: 90 },
        { id: 'Resource', value: 90 },
        { id: 'X-Platform', value: 70 },
        { id: 'Workflow', value: 90 },
      ],
    },
    {
      id: 'pixi',
      name: 'Pixi',
      skills: [
        { id: 'Scripting', value: 90 },
        { id: 'Proficiency', value: 90 },
        { id: 'Animation ', value: 90 },
        { id: 'Resource', value: 90 },
        { id: 'X-Platform', value: 70 },
        { id: 'Workflow', value: 90 },
      ],
    },
  ];

  return (
    <div className="relative max-w-3xl mx-auto sm:px-10 bg-white dark:bg-neutral-900">
      <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 tracking-tight">
        {t('power_radar')}
      </h1>
      <div className="flex flex-wrap gap-20 justify-center">
        {skillTree.map((node) => (
          <PolygonNode key={node.id} title={node.name} skills={node.skills} />
        ))}
      </div>
    </div>
  );
}
