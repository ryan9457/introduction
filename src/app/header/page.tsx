'use client';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const menuItems = [
  // { id: 1, label: '首頁', href: '/' },
  { id: 2, label: '作品集', href: '/portfolio/dragon\'s-trail' },
  { id: 3, label: '工具包', href: '/toolkit/sprite-auto-slicer' },
//   { id: 4, label: '聯絡我們', href: '/contact' },
];

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname()
  const pageTitleMap: Record<string, string> = {
    '/': '首頁',
    '/portfolio/dragon\'s-trail': '作品集',
    '/toolkit/sprite-auto-slicer': '工具包',
  }

  // 點擊外部時自動關閉下拉選單
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="text-2xl font-bold text-indigo-600">{pageTitleMap[pathname] || ''}</div>

        {/* 右側選單 */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            選單
            <svg
              className="ml-2 h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={dropdownOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} />
            </svg>
          </button>

          {/* 下拉選單 */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
              <ul className="py-1">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <Link
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
