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
        className="bg-white dark:bg-black text-gray-800 dark:text-white transition-colors duration-300"
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code} className=" text-s">
            {l.label}
          </option>
        ))}
      </select>
    </div>
  );
}
