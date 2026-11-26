import React, { useState, useEffect, useRef } from 'react';
import { Terminal, FileCode2, Menu, X, Circle, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResume, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ticking = useRef(false);

  // Optimized passive scroll listener with requestAnimationFrame
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'jayakeerthy.tsx', href: '#hero', section: 'hero' },
    { label: 'projects.py', href: '#projects', section: 'projects' },
    { label: 'skills.json', href: '#skills', section: 'skills' },
    { label: 'about.md', href: '#about', section: 'about' },
    { label: 'journey.log', href: '#journey', section: 'journey' },
    { label: 'contact.sh', href: '#contact', section: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 border-b ${
      scrolled 
        ? 'bg-[#0d0d0e]/95 backdrop-blur-md border-white/[0.08] shadow-lg' 
        : 'bg-[#0d0d0e] border-white/[0.08]'
    }`}>
      {/* Top macOS-style IDE bar */}
      <div className="flex items-center justify-between px-3 md:px-5 h-10 border-b border-white/[0.06] font-mono text-xs">
        {/* Left: macOS dots & Breadcrumb */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 opacity-70">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3a3a40] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#3a3a40] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#3a3a40] inline-block" />
          </div>
          <div className="h-3.5 w-px bg-white/[0.08] hidden sm:block" />
          <div className="hidden sm:flex items-center space-x-1 text-[#9ca3af]">
            <span>workspace</span>
            <span>/</span>
            <span className="text-[#ededed] font-medium">{PERSONAL_INFO.name.replace(/\s+/g, '-').toLowerCase()}</span>
            <span>/</span>
            <span className="text-[#ededed]">portfolio</span>
          </div>
        </div>

        {/* Center: Live Availability Pill */}
        <div className="hidden md:flex items-center space-x-2 px-2.5 py-1 rounded-md bg-[#161619] border border-white/[0.08]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[11px] text-[#ededed] font-mono">Open to Internships • BMSIT AIML (CGPA 9.13)</span>
        </div>

        {/* Right: Quick actions */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenTerminal}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#161619] hover:bg-[#212126] border border-white/[0.08] text-[#ededed] hover:text-white transition-colors text-xs font-mono focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            title="Open Interactive IDE Terminal"
            aria-label="Open terminal drawer"
          >
            <Terminal className="w-3.5 h-3.5 text-zinc-300" />
            <span className="hidden sm:inline">Terminal</span>
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-[#ededed] hover:bg-white text-[#111113] transition-colors text-xs font-mono font-medium shadow-sm focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            aria-label="Open resume viewer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Accessible 44x44px mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center rounded-lg text-[#a1a1a6] hover:text-[#ededed] hover:bg-white/[0.05] transition-colors md:hidden focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Editor Tabs bar (Quiet, Finethought tab style) */}
      <nav className="hidden md:flex items-center px-2 h-9 overflow-x-auto bg-[#0d0d0e] border-b border-white/[0.06] text-xs font-mono scrollbar-none" aria-label="Editor sections">
        <div className="flex items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.section;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`group flex items-center space-x-2 px-4 h-9 border-r border-white/[0.06] transition-all focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none ${
                  isActive
                    ? 'bg-[#161619] text-[#ededed] border-t-2 border-t-white font-medium'
                    : 'text-[#9ca3af] hover:text-[#ededed] hover:bg-white/[0.02] border-t-2 border-t-transparent'
                }`}
              >
                <FileCode2 className={`w-3.5 h-3.5 ${isActive ? 'text-[#ededed]' : 'text-[#9ca3af]'}`} />
                <span>{item.label}</span>
                {isActive && (
                  <Circle className="w-1 h-1 fill-white text-white ml-1" />
                )}
              </a>
            );
          })}
        </div>

        <div className="ml-auto flex items-center pr-3 text-[11px] text-[#9ca3af] space-x-3">
          <span>UTF-8</span>
          <span>TypeScript / React</span>
        </div>
      </nav>

      {/* Mobile Dropdown Menu with 44px+ touch targets */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161619] border-b border-white/[0.08] px-4 py-3 font-mono text-xs space-y-1 animate-fadeIn">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-3 py-3 rounded-lg text-[#ededed] hover:bg-[#212126] transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none min-h-[44px]"
            >
              <FileCode2 className="w-4 h-4 text-emerald-400" />
              <span>{item.label}</span>
            </a>
          ))}
          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex-1 mr-2 flex items-center justify-center space-x-1.5 py-2.5 rounded-lg bg-[#212126] text-[#ededed] border border-white/[0.08] min-h-[44px]"
            >
              <Terminal className="w-4 h-4" />
              <span>Terminal</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 ml-2 flex items-center justify-center space-x-1.5 py-2.5 rounded-lg bg-[#ededed] text-[#111113] font-medium min-h-[44px]"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
