'use client';

import { useState, useEffect } from 'react';
import { Home, User, Briefcase, GraduationCap, Code, FolderGit2, Mail, Sun, Moon, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home',       icon: Home,          sectionId: 'chat'       },
  { label: 'About',      icon: User,          sectionId: 'about'      },
  { label: 'Experience', icon: Briefcase,     sectionId: 'experience' },
  { label: 'Education',  icon: GraduationCap, sectionId: 'education'  },
  { label: 'Skills',     icon: Code,          sectionId: 'skills'     },
  { label: 'Projects',   icon: FolderGit2,    sectionId: 'projects'   },
  { label: 'Contact',    icon: Mail,          sectionId: 'contact'    },
];

export function NavBar() {
  const [isOnHomeSection, setIsOnHomeSection] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      applyDark(true);
      setIsDark(true);
    }
  }, []);

  const applyDark = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundImage = 'none';
      document.body.style.backgroundColor = '#0f0f1a';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1557682260-96773eb01377?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJtJTIwb3JhbmdlJTIweWVsbG93JTIwZ3JhZGllbnQlMjBtaW5pbWFsaXN0JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzgwNDM3NjMzfDA&ixlib=rb-4.1.0&q=80&w=1080)';
      document.body.style.backgroundColor = '';
    }
  };

  const toggleDark = () => {
    const nowDark = !isDark;
    applyDark(nowDark);
    localStorage.setItem('theme', nowDark ? 'dark' : 'light');
    setIsDark(nowDark);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsOnHomeSection(window.scrollY < window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`flex-shrink-0 backdrop-blur-md sticky top-0 z-50 shadow-xl border-b transition-all duration-300 ${
        isOnHomeSection
          ? 'bg-white/20 border-white/30 dark:bg-black/20 dark:border-white/10'
          : 'bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <h1 className="text-sm font-semibold text-gray-900 dark:text-white">Shengyao Tang</h1>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(({ label, icon: Icon, sectionId }) => (
            <button
              key={sectionId}
              onClick={() => handleNavClick(sectionId)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{label}</span>
            </button>
          ))}
          <button
            onClick={toggleDark}
            className="ml-2 p-1.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleDark}
            className="p-1.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="p-1.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className={`md:hidden border-t ${isOnHomeSection ? 'bg-white/80 border-white/30 dark:bg-black/80 dark:border-white/10' : 'bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700'} backdrop-blur-md`}>
          {navItems.map(({ label, icon: Icon, sectionId }) => (
            <button
              key={sectionId}
              onClick={() => handleNavClick(sectionId)}
              className="flex items-center gap-3 w-full px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm"
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
