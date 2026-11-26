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
    <footer className="border-t border-dashed border-[#485550]/15 bg-[#EAECE4]/60 py-10 px-4 sm:px-6 lg:px-8 font-mono text-xs text-[#5C6B65]">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-dashed border-[#485550]/15">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-[#485550] text-[#C0EB6A] flex items-center justify-center font-semibold text-xs shadow-xs">
              {PERSONAL_INFO.initials}
            </div>
            <div>
              <span className="font-semibold text-[#1E2623] block">{PERSONAL_INFO.name}</span>
              <span className="text-[11px] text-[#5C6B65]">BMSIT AIML • Bengaluru, India</span>
            </div>
          </div>

          <div className="flex items-center space-x-2.5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#FFFFFF] border border-[#485550]/15 text-[#485550] hover:bg-[#485550] hover:text-[#FFFFFF] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#FFFFFF] border border-[#485550]/15 text-[#485550] hover:bg-[#485550] hover:text-[#FFFFFF] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email Jayakeerthy"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#FFFFFF] border border-[#485550]/15 text-[#485550] hover:bg-[#485550] hover:text-[#FFFFFF] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenTerminal}
              aria-label="Open Interactive Terminal"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#FFFFFF] border border-[#485550]/15 text-[#485550] hover:bg-[#485550] hover:text-[#FFFFFF] transition-colors"
              title="Open Terminal (Ctrl + `)"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#485550] text-[#C0EB6A] hover:bg-[#38433F] transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#5C6B65]">
          <div>&copy; 2026 {PERSONAL_INFO.name}</div>
          <div className="text-[#485550]">BMS Institute of Technology, Bengaluru</div>
        </div>
      </div>
    </footer>
  );
};
