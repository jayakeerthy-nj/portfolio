import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-dashed border-white/[0.08] bg-[#0d0d0e] py-12 px-4 sm:px-6 lg:px-8 font-mono text-xs text-[#9ca3af]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top bar with JK Logo & Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-dashed border-white/[0.08]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#212126] border border-white/[0.08] text-[#ededed] flex items-center justify-center font-semibold text-xs shadow-sm">
              {PERSONAL_INFO.initials}
            </div>
            <div>
              <span className="font-semibold text-[#ededed] block">{PERSONAL_INFO.name}</span>
              <span className="text-[11px] text-[#9ca3af]">BMSIT AIML • Bengaluru, India</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#161619] border border-white/[0.08] text-[#a1a1a6] hover:text-[#ededed] hover:border-white/[0.18] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#161619] border border-white/[0.08] text-[#a1a1a6] hover:text-[#ededed] hover:border-white/[0.18] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email Jayakeerthy"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#161619] border border-white/[0.08] text-[#a1a1a6] hover:text-[#ededed] hover:border-white/[0.18] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenTerminal}
              aria-label="Open Interactive Terminal"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#161619] border border-white/[0.08] text-[#a1a1a6] hover:text-[#ededed] hover:border-white/[0.18] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              title="Open Terminal (Ctrl + `)"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#161619] border border-white/[0.08] text-[#a1a1a6] hover:text-[#ededed] hover:border-white/[0.18] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Spec Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#9ca3af]">
          <div>
            &copy; 2026 {PERSONAL_INFO.name}. Built with React, TypeScript &amp; Tailwind CSS.
          </div>
          <div className="flex items-center space-x-2">
            <span>Terminal aesthetic</span>
            <span>•</span>
            <span className="text-[#a1a1a6]">BMS Institute of Technology</span>
            <span>•</span>
            <span className="text-emerald-400">All systems nominal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
