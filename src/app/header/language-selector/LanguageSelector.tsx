'use client';

import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// 語系資料
const languages = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '繁體中文' },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const onSelect = useCallback(
    (language: string) => {
      i18n.changeLanguage(language);
      localStorage.setItem('language', language);
      setLang(language);
    },
    [i18n]
  );

  useEffect(() => {
    onSelect(localStorage.getItem('language') as string);
  }, [onSelect]);

  if (!i18n.isInitialized) return null;

  return (
    <div className="relative inline-block text-left">
      <select
        value={lang}
        onChange={(e) => onSelect(e.target.value)}
        className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code} className="bg-white dark:bg-gray-800">
            {l.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
        ▼
      </div>
    </div>
  );
}
