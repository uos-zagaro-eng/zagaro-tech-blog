import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Link } from '@/components/common/Link';
import { ContentLayout } from '@/components/features/app/Layout';
import { NavBar } from './NavBar';

export const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ContentLayout className="sticky top-0 z-10 py-3 bg-primary-1 shadow-sm">
      <nav className="hstack justify-between">
        <Link href="/" passHref>
          <a className="select-none text-primary-1 text-2xl md:text-3xl font-bold">
            ZAGARO-TechBlog
          </a>
        </Link>

        <div className="hidden lg:flex">
          <NavBar />
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            className="icon-btn"
            aria-label="toggle theme"
            onClick={toggleTheme}
          >
            {mounted && (theme === 'dark' ? <FiSun /> : <FiMoon />)}
          </button>
        </div>
      </nav>
    </ContentLayout>
  );
};
