'use client';

// import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ThemeToggle from './theme-toggle/page';

const categories: { name: string; href: string }[] = [
  // { name: 'About', href: '/about' },
  // { name: 'Column', href: '/column' },
  // { name: 'Contact', href: '/contact' },
];

export default function Header() {
  // const pathname = usePathname();
  return (
    <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* LOGO 或站名 */}
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
          {/* {categories.filter(({ href }) => href === pathname)[0]?.name || ''} */}
          Portfolio
        </Link>
        {/* 導覽列 */}
        <nav className="flex items-center space-x-6">
          {categories.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
          {/* 主題切換按鈕 */}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
