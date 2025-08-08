'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

type GameProps = {
  label: string;
  key: string;
  width: number;
  height: number;
  version: string;
};

export default function Remaster() {
  const { t } = useTranslation();
  const [active, setActive] = useState<string | null>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const gameList: GameProps[] = useMemo(() => {
    return [
      {
        label: `${t('remaster_game_2')}`,
        key: 'banana-mania',
        width: 480,
        height: 640,
        version: '1.0.0',
      },
      {
        label: `${t('remaster_game_1')}`,
        key: `dragon's-trail`,
        width: 640,
        height: 960,
        version: '1.0.0',
      },
    ];
  }, [t]);

  useEffect(() => {
    const config = gameList.filter(({ key }) => key === active).pop();
    if (!config) {
      return;
    }
    const dir = `./game/${config.key}/Build`; // ✅ 改為根據 active 動態組合
    const script = document.createElement('script');
    script.src = `${dir}/Web.loader.js`; // 根據你的輸出路徑調整
    const canvas = canvasRef.current;
    const div = divRef.current;
    script.onload = async () => {
      if (!div || !canvas) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const instance = (window as any).unityInstance;
      if (instance) {
        await instance.Quit();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).unityInstance = null;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).unityInstance = await (window as any)
        .createUnityInstance(canvas, {
          dataUrl: `${dir}/Web.data`,
          frameworkUrl: `${dir}/Web.framework.js`,
          codeUrl: `${dir}/Web.wasm`,
          streamingAssetsUrl: `${dir}/../StreamingAssets`,
          productName: config.key || '',
          productVersion: config.version,
        })
        .catch((err: Error) => {
          console.error('failed to load Unity Instance', err);
        });
      handleResize();
    };
    const handleResize = () => {
      if (!div || !canvas) {
        return;
      }
      const divAspect = div.clientWidth / div.clientHeight;
      const width = config.width || 1;
      const height = config.height || 1;
      const aspect = width / height;

      if (divAspect < aspect) {
        // 當父節點的寬高比小於遊戲預期寬高比時以"寬度"填滿為優先，並壓縮高度維持一樣的比例
        const targeHeight = (1 / aspect) * div.clientWidth;
        canvas.style.width = `${div.clientWidth}px`;
        canvas.style.height = `${targeHeight}px`;
      } else {
        // 當遊戲預期寬高比小於父節點的寬高比時以"高度"填滿為優先，並壓縮高度維持一樣的比例
        const targetWidth = aspect * div.clientHeight;
        canvas.style.width = `${targetWidth}px`;
        canvas.style.height = `${div.clientHeight}px`;
      }
    };
    window.addEventListener('resize', handleResize);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
      window.removeEventListener('resize', handleResize);
    };
  }, [active, gameList]);

  return (
    <section className="bg-white dark:bg-neutral-900 backdrop-blur-md p-8 md:p-10 space-y-6 transition-all">
      <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-200 mb-4">
        {t('remaster_tips')}
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
