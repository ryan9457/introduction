'use client';
import Image from "next/image";

type Props = {
  topic: string;
  id: number
  name: string
  description: string
  features: string[]
  steps: {images: string[], title: string, description: string}[]
}

type HighlightProps = {
  ImportType: string;
  Status: string;
  Enabled: string;
  Disabled: string;
  Default: string;
  Json: string;
};

const HIGHLIGHT_KEYWORDS: Record<keyof HighlightProps, string>  = {
  ImportType: 'text-black',
  Status: 'text-black',
  Enabled: 'text-green-500 font-medium',
  Disabled: 'text-red-500 font-medium',
  Default: 'text-grey',
  Json: 'text-yellow-500',
};

function highlightKeywords(text: string): string {
  let result = text;

  for (const keyword in HIGHLIGHT_KEYWORDS) {
    const classNames = HIGHLIGHT_KEYWORDS[keyword as keyof HighlightProps];
    const styled = `<span class="inline-block px-2 py-0.5 font-semibold rounded ${classNames}">${keyword}</span>`;
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    result = result.replace(regex, styled);
  }

  return result.replace(/\n/g, '<br />'); // 支援換行
}

export default function Kit({ name, description, features = [], steps = [], topic}: Props) {
    return (
      <div className="space-y-4 bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition">
          {/* Header */}
        <div className="text-2xl font-bold text-gray-900 tracking-tight leading-snug border-l-4 border-indigo-500 pl-4">
          <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
        </div>
        {/* Topic */}
        <span className="inline-block text-sm md:text-base font-semibold tracking-wider uppercase bg-indigo-100 text-indigo-800 px-5 py-2 rounded-md shadow-sm mb-2">
          {topic}
        </span>
        {/* Description */}
        <p className="text-gray-600 whitespace-pre-line">{description}</p>
        {/* Features */}
        {features.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">主要功能</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          </div>
        )}
        {/* Steps */}
        {steps.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">操作步驟</h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight leading-snug border-l-4 border-indigo-500 pl-4">
                  步驟 {index + 1}：{step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: highlightKeywords(step.description) }}/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {step.images.map((img, idx) => (
                    <div key={idx} className="w-full">
                      <Image
                        src={img}
                        alt={`步驟 ${index + 1} - 圖 ${idx + 1}`}
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-md border shadow-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
}