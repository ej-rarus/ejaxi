'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavItem {
  href: string;
  icon: string;
  label: string;
}

interface NavSection {
  title: string;
  items?: NavItem[];
  folder?: {
    icon: string;
    label: string;
    items: NavItem[];
  };
}

const navSections: Record<string, NavSection> = {
  start: {
    title: '시작하기',
    items: [
      { href: '/', icon: 'fa-home', label: '홈' },
      { href: '/about', icon: 'fa-info-circle', label: 'AX란?' },
    ],
  },
  tools: {
    title: 'AI 도구',
    folder: {
      icon: 'fa-toolbox',
      label: 'AI 도구 가이드',
      items: [
        { href: '/tools/claude-code', icon: 'fa-robot', label: 'Claude Code' },
        { href: '/tools/cursor', icon: 'fa-i-cursor', label: 'Cursor' },
        { href: '/tools/chatgpt', icon: 'fa-comment-dots', label: 'ChatGPT' },
      ],
    },
  },
  workflows: {
    title: '워크플로우',
    folder: {
      icon: 'fa-project-diagram',
      label: '업무 자동화',
      items: [
        { href: '/workflows/document', icon: 'fa-file-alt', label: '문서 작업' },
        { href: '/workflows/data', icon: 'fa-database', label: '데이터 분석' },
        { href: '/workflows/development', icon: 'fa-code', label: '개발 생산성' },
      ],
    },
  },
  resources: {
    title: '리소스',
    items: [
      { href: '/cases', icon: 'fa-briefcase', label: '적용 사례' },
      { href: '/learning', icon: 'fa-graduation-cap', label: '학습 경로' },
      { href: '/glossary', icon: 'fa-book', label: '용어 사전' },
    ],
  },
};

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [openFolders, setOpenFolders] = useState<string[]>(['tools', 'workflows']);

  const toggleFolder = (key: string) => {
    setOpenFolders((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const isActive = (href: string) => pathname === href;

  const renderNavItems = (items: NavItem[]) => {
    return items.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className={`nav-item ${isActive(item.href) ? 'active' : ''}`}
        onClick={onClose}
      >
        <i className={`fas ${item.icon}`}></i>
        <span>{item.label}</span>
      </Link>
    ));
  };

  const renderSection = (key: string, section: NavSection) => {
    if (section.folder) {
      return (
        <div className="nav-section" key={key}>
          <div className="nav-section-title">{section.title}</div>
          <div
            className={`nav-folder ${openFolders.includes(key) ? 'open' : ''}`}
            onClick={() => toggleFolder(key)}
          >
            <div className="nav-item nav-folder-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <i className={`fas ${section.folder.icon}`}></i>
                <span>{section.folder.label}</span>
              </div>
              <i className="fas fa-chevron-right arrow"></i>
            </div>
            <div className="nav-folder-content">
              {section.folder.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-item ${isActive(item.href) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                >
                  <i className={`fas ${item.icon}`}></i>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="nav-section" key={key}>
        <div className="nav-section-title">{section.title}</div>
        {section.items && renderNavItems(section.items)}
      </div>
    );
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <Link href="/" className="logo" onClick={onClose}>
          <div className="logo-icon">
            <i className="fas fa-bolt"></i>
          </div>
          <span>EJAXI</span>
        </Link>
      </div>

      <nav>
        {Object.entries(navSections).map(([key, section]) =>
          renderSection(key, section)
        )}
      </nav>
    </aside>
  );
}
