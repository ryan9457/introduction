'use client';
import React, { useEffect, useRef } from "react";

type Props = {
  dir: string
  name: string
}

export default function GameProduct({ dir, name }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
      const script = document.createElement("script");
      script.src = `${dir}/Web.loader.js`; // 根據你的輸出路徑調整
      script.onload = () => {
        if (!canvasRef.current) return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).createUnityInstance(canvasRef.current, {
          dataUrl: `${dir}/Web.data`,
          frameworkUrl: `${dir}/Web.framework.js`,
          codeUrl: `${dir}/Web.wasm`,
          productName: name || '',
          productVersion: "1.0",
        })
          .then(() => {
            console.log("Unity Instance loaded.");
          })
          .catch((err: Error) => {
            console.error("failed to load Unity Instance", err);
          });
      };
      document.body.appendChild(script);
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.removeChild(script);
        document.body.style.overflow = '';
      };
    }, []);
  
    return (
      // 橫版最大寬度 = 寬度 × 寬 / 高 ≤ 100vh
      <div className="w-screen flex items-center justify-center">
          <canvas ref={canvasRef} id="canvas" className="relative w-full max-w-[66.67vh] aspect-[2/3]" />
      </div>
    );
}