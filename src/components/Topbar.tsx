'use client';

import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeProvider';

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  const router = useRouter();
  const { toggleTheme } = useTheme();

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (
      e.target instanceof HTMLInputElement ||
      e.target instanceof HTMLTextAreaElement
    ) {
      return;
    }

    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const modifier = isMac ? e.metaKey : e.ctrlKey;

    if (modifier) {
      switch (e.key.toLowerCase()) {
        case 'd':
          e.preventDefault();
          toggleTheme();
          break;
        case '1':
          e.preventDefault();
          router.push('/');
          break;
        case '2':
          e.preventDefault();
          router.push('/about');
          break;
      }
    }
  }, [toggleTheme, router]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <button className="mobile-toggle" onClick={onMenuClick}>
        <i className="fas fa-bars"></i>
      </button>

      <div className="topbar">
        <div className="topbar-title">
          <span>AI Transformation Guide</span>
        </div>
        <div className="topbar-actions">
          <ThemeToggle />
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      <style jsx>{`
        .topbar-title {
          font-weight: 600;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .topbar-title {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
