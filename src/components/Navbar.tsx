import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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
  const [istTime, setIstTime] = useState('');
  const ticking = useRef(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 32, restDelta: 0.001 });

  useEffect(() => {
    const formatIst = () =>
      new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(new Date());

    setIstTime(formatIst());
    const timer = setInterval(() => setIstTime(formatIst()), 1000);
    return () => clearInterval(timer);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#F4F6F0]/90 backdrop-blur-md border-[#485550]/15 shadow-[0_4px_20px_-8px_rgba(72,85,80,0.12)]'
          : 'bg-[#F4F6F0] border-[#485550]/12'
      }`}
    >
      {/* Scroll Progress Hairline */}
      <motion.div
        style={{ scaleX }}
        className="h-[2.5px] w-full bg-[#485550] origin-left"
      />

      {/* Top IDE Bar */}
      <div className="flex items-center justify-between px-3 md:px-5 h-10 border-b border-[#485550]/10 font-mono text-xs">
        {/* Left: Window dots & Breadcrumb */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#485550]/20 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#485550]/20 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#C0EB6A] inline-block" />
          </div>
          <div className="h-3.5 w-px bg-[#485550]/15 hidden sm:block" />
          <div className="hidden sm:flex items-center space-x-1 text-[#5C6B65]">
            <span>workspace</span>
            <span>/</span>
            <span className="text-[#1E2623] font-medium">{PERSONAL_INFO.name.replace(/\s+/g, '-').toLowerCase()}</span>
            <span>/</span>
            <span className="text-[#485550]">portfolio</span>
          </div>
        </div>

        {/* Center: Live Availability Pill */}
        <div className="hidden md:flex items-center space-x-2 px-3 py-1 rounded-md bg-[#FFFFFF] border border-[#485550]/15 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#C0EB6A] ring-2 ring-[#485550]/20" />
          <span className="text-[11px] text-[#1E2623] font-mono">Open to Internships • BMSIT AIML (CGPA 9.13)</span>
        </div>

        {/* Right: Quick actions */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenTerminal}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#FFFFFF] hover:bg-[#EAECE4] border border-[#485550]/15 text-[#485550] hover:text-[#1E2623] transition-colors text-xs font-mono focus-visible:ring-2 focus-visible:ring-[#485550] focus-visible:outline-none"
            title="Open Interactive Terminal"
            aria-label="Open terminal drawer"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Terminal</span>
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-[#485550] hover:bg-[#38433F] text-[#FFFFFF] transition-colors text-xs font-mono font-medium shadow-sm focus-visible:ring-2 focus-visible:ring-[#485550] focus-visible:outline-none"
            aria-label="Open resume viewer"
          >
            <Download className="w-3.5 h-3.5 text-[#C0EB6A]" />
            <span>Resume</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center rounded-lg text-[#485550] hover:bg-[#485550]/10 transition-colors md:hidden focus-visible:ring-2 focus-visible:ring-[#485550] focus-visible:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Editor Tabs Bar */}
      <nav className="hidden md:flex items-center px-2 h-9 overflow-x-auto bg-[#EAECE4]/70 border-b border-[#485550]/10 text-xs font-mono" aria-label="Editor sections">
        <div className="flex items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.section;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`group flex items-center space-x-2 px-4 h-9 border-r border-[#485550]/10 transition-colors focus-visible:ring-2 focus-visible:ring-[#485550] focus-visible:outline-none ${
                  isActive
                    ? 'bg-[#FFFFFF] text-[#1E2623] border-t-2 border-t-[#485550] font-medium'
                    : 'text-[#5C6B65] hover:text-[#1E2623] hover:bg-[#FFFFFF]/50 border-t-2 border-t-transparent'
                }`}
              >
                <FileCode2 className={`w-3.5 h-3.5 ${isActive ? 'text-[#485550]' : 'text-[#5C6B65]'}`} />
                <span>{item.label}</span>
                {isActive && (
                  <Circle className="w-1.5 h-1.5 fill-[#C0EB6A] text-[#485550] ml-1" />
                )}
              </a>
            );
          })}
        </div>

        <div className="ml-auto flex items-center pr-3 text-[11px] text-[#485550] tabular-nums space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C0EB6A] ring-1 ring-[#485550]/30" />
          <span>{istTime} IST</span>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#485550]/15 px-4 py-3 font-mono text-xs space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-3 py-3 rounded-lg text-[#1E2623] hover:bg-[#F4F6F0] transition-colors min-h-[44px]"
            >
              <FileCode2 className="w-4 h-4 text-[#485550]" />
              <span>{item.label}</span>
            </a>
          ))}
          <div className="pt-2 border-t border-[#485550]/10 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-lg bg-[#F4F6F0] text-[#485550] border border-[#485550]/15 min-h-[44px]"
            >
              <Terminal className="w-4 h-4" />
              <span>Terminal</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-lg bg-[#485550] text-[#FFFFFF] font-medium min-h-[44px]"
            >
              <Download className="w-4 h-4 text-[#C0EB6A]" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
