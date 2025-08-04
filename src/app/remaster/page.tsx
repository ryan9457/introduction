'use client';
import { useEffect, useRef, useState } from 'react';

type GameProps = {
  label: string;
  key: string;
  width: number;
  height: number;
};

const gameList: GameProps[] = [
  { label: '龍之軌跡', key: `dragon's-trail`, width: 640, height: 960 },
  { label: '香蕉狂熱份子', key: 'banana-mania', width: 480, height: 640 },
];

export default function Remaster() {
  const [active, setActive] = useState<string | null>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (active == null) {
      return;
    }
    const dir = `./game/${active}/Build`; // ✅ 改為根據 active 動態組合
    const script = document.createElement('script');
    script.src = `${dir}/Web.loader.js`; // 根據你的輸出路徑調整
    script.onload = () => {
      const canvas = canvasRef.current;
      const div = divRef.current;
      if (!div || !canvas) return;
      const config = gameList.filter(({ key }) => key === active).pop();
      const width = config?.width || 1;
      const height = config?.height || 1;
      const aspect = width / height;
      const targetWidth = aspect * div.clientHeight;
      canvas.style.width = `${targetWidth}px`;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any)
        .createUnityInstance(canvas, {
          dataUrl: `${dir}/Web.data`,
          frameworkUrl: `${dir}/Web.framework.js`,
          codeUrl: `${dir}/Web.wasm`,
          streamingAssetsUrl: `${dir}/../StreamingAssets`,
          productName: active || '',
          productVersion: '1.0',
        })
        .then(() => {
          console.log('Unity Instance loaded.');
        })
        .catch((err: Error) => {
          console.error('failed to load Unity Instance', err);
        });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [active]);

  return (
    <section className="max-w-3xl mx-auto backdrop-blur-md p-8 md:p-10 space-y-6 transition-all">
      <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-200 mb-4">
        復刻遊戲
      </h2>
      <div className="flex gap-4 mb-6">
        {gameList.map((game) => (
          <IconButton
            key={game.key}
            label={game.label}
            onClick={() => setActive(game.key)}
            active={active === game.key}
          />
        ))}
      </div>
      <div
        ref={divRef}
        className={`relative w-full h-[360px] sm:h-[420px] md:h-[500px] bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden`}
      >
        <canvas
          ref={canvasRef}
          id="canvas"
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full`}
        />
      </div>
    </section>
  );
}

function IconButton({
  label,
  onClick,
  active,
}: {
  label: string;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg border text-sm transition ${
        active
          ? 'bg-neutral-300 dark:bg-neutral-700 border-neutral-400 dark:border-neutral-600'
          : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700'
      }`}
    >
      {label}
    </button>
  );
}
