'use client';

import { useEffect, useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    const html = document.documentElement;
    const nextTheme = html.classList.contains('dark') ? 'light' : 'dark';
    html.classList.toggle('dark', nextTheme === 'dark');
    localStorage.setItem('theme', nextTheme);
    setIsDark(nextTheme === 'dark');
  };

  useEffect(() => {
    // toggleTheme();
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  return (
    <div className={''}>
      <button
        onClick={toggleTheme}
        className=" relative flex items-center justify-center
        w-10 h-5
        rounded-full border-2
        border-gray-300 dark:border-gray-600
        bg-white dark:bg-zinc-900
        transition-colors duration-500 ease-in-out
        overflow-hidden
        shadow-md"
      >
        <MdLightMode
          className={`absolute text-yellow-500
          transition-all duration-500 ease-in-out
          ${isDark ? 'translate-x-[-100%] opacity-0' : 'translate-x-0 opacity-100'}
        `}
        />
        <MdDarkMode
          className={`
          absolute text-sky-900
          transition-all duration-500 ease-in-out
          ${isDark ? 'translate-x-0 opacity-100' : 'translate-x-[100%] opacity-0'}
        `}
        />
      </button>
    </div>
  );
}
