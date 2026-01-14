'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={theme === 'light' ? '다크모드로 변경' : '라이트모드로 변경'}
    >
      <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
    </button>
  );
}
