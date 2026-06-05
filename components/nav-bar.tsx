'use client';

import { useState, useEffect } from 'react';
import { Home, User, Briefcase, GraduationCap, Code, FolderGit2, Mail } from 'lucide-react';

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
  };

  return (
    <nav
      className={`flex-shrink-0 backdrop-blur-md sticky top-0 z-50 shadow-xl border-b transition-all duration-300 ${
        isOnHomeSection
          ? 'bg-white/20 border-white/30'
          : 'bg-white border-gray-200'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <h1 className="text-sm font-semibold text-gray-900">Shengyao Tang</h1>
        </div>

        <div className="flex gap-1">
          {navItems.map(({ label, icon: Icon, sectionId }) => (
            <button
              key={sectionId}
              onClick={() => handleNavClick(sectionId)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-gray-700 hover:text-gray-900 transition-colors text-sm"
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
