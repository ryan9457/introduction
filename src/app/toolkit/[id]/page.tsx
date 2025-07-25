import Toolkit from "./Kit";

type Props = {
    params: Promise<{ id: string, gameName: string }>
};

export async function generateStaticParams() {
 return [
    { id: 'sprite-auto-slicer' },
  ]
}

export async function generateMetadata({ params }: Props) {
  const id = (await params).id;

  return {
    title: `${id}`,
  }
}

export default async function GamePage({ params }: Props) {
  const id = +(await params).id;
  const path = '../sprite-auto-slicer'
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Toolkit
        id={id}
        name="SriteAutoSlicer"
        description={`
          專為開發人員打造的自動化懶人工具。
          簡化繁瑣的貼圖流程，大幅降低手動設定裁切範圍的惱人問題
        `}
        topic = {`自動化裁圖工具`}
        features={[
          "導入資源即自動裁切",
          "支援單圖",
          "支援圖集(需有參照描述檔 \"json\")",
        ]}
        steps={[
          {
            images: [`${path}/step_1-1.png`, `${path}/step_1-2.png`],
            title: "右鍵點選 \"SpriteAutoSlicer\"",
            description: `- ImportType: Default 為單圖，Json 為圖集
            - Status: Enabled 為啟用，Disabled 為關閉
            (灰階為目前狀態)
            `,
          },
          {
            images: [`${path}/step_2-1.png`, `${path}/step_2-2.png`],
            title: "將描述檔及圖集導入到 Assets 底下(以圖集為例)",
            description: `導入後編輯器就會依照描述檔對圖集進行裁切
            (若為單圖記得將 ImportType 切至 Default 只需導入圖片資源即會自動裁切成原始大小)
            `,
          },
          {
            images: [`${path}/step_3.png`],
            title: "享用甜美的果實吧",
            description: ``,
          },
        ]}
      />
    </div>
  );
}