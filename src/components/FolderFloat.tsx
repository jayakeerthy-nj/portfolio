import React, { useState } from 'react';
import { Folder, FolderOpen, ArrowUpRight } from 'lucide-react';

interface NoteItem {
  id: string;
  label: string;
  category: string;
  xOffset: number; // in px
  yOffset: number; // in px
  rotate: number; // in deg
}

interface FolderFloatProps {
  label?: string;
  sublabel?: string;
  notes?: NoteItem[];
}

export const FolderFloat: React.FC<FolderFloatProps> = ({
  label = "Projects",
  sublabel = "Verified engineering implementations",
  notes = [
    { id: '1', label: 'AI Vaidya (RAG · 96.4%)', category: 'GenAI', xOffset: -72, yOffset: -46, rotate: -4 },
    { id: '2', label: 'POLARIS (ML · 0.924 F1)', category: 'ML Engine', xOffset: 72, yOffset: -50, rotate: 4 },
    { id: '3', label: 'AI Chess Rival (IEEE 4th)', category: 'Game Theory', xOffset: -60, yOffset: -20, rotate: -2 },
    { id: '4', label: 'Full Stack (React · TS)', category: 'Web Systems', xOffset: 66, yOffset: -22, rotate: 3 },
  ]
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative select-none inline-block my-2"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Floating Cloud Notes (Springs out in 3D right above the folder without overflowing awkwardly) */}
      <div className="absolute left-1/2 bottom-12 -translate-x-1/2 pointer-events-none w-72 h-28 flex items-center justify-center z-20">
        {notes.map((note) => {
          return (
            <div
              key={note.id}
              className={`absolute whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-mono font-medium border transition-all duration-200 ease-out ${
                isOpen
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-50 translate-y-6 pointer-events-none'
              }`}
              style={{
                transform: isOpen
                  ? `translate(${note.xOffset}px, ${note.yOffset}px) rotate(${note.rotate}deg)`
                  : 'translate(0px, 16px) scale(0.4)',
                backgroundColor: '#f5f5f5',
                color: '#111113',
                borderColor: '#e4e4e7',
                boxShadow: '0 12px 24px -4px rgba(0, 0, 0, 0.4), 0 2px 6px rgba(0, 0, 0, 0.2)'
              }}
            >
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="font-semibold text-zinc-900">{note.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Folder Body (Quiet Graphite Ramp) */}
      <a 
        href="#projects" 
        className="group cursor-pointer relative block w-60 sm:w-64 rounded-xl p-3.5 bg-[#1c1c20] hover:bg-[#232328] border border-white/[0.08] hover:border-white/[0.16] shadow-xl transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        {/* Top Folder Tab */}
        <div className="absolute -top-2.5 left-4 w-14 h-2.5 bg-[#26262b] rounded-t-md border-t border-l border-r border-white/[0.08]" />

        {/* Paper insert peeking out */}
        <div 
          className={`absolute left-3.5 right-3.5 h-4 rounded-t-sm bg-[#ededed] transition-all duration-200 ${
            isOpen ? '-top-3.5 shadow-sm' : '-top-1'
          }`}
        />

        {/* Folder Front Flap */}
        <div className="relative z-10 pt-0.5">
          <div className="flex items-center justify-between pb-1 text-[#ededed]">
            <div className="flex items-center space-x-2">
              {isOpen ? (
                <FolderOpen className="w-4 h-4 text-emerald-400" />
              ) : (
                <Folder className="w-4 h-4 text-emerald-400" />
              )}
              <span className="text-xs font-mono font-medium tracking-tight text-[#ededed]">
                {label}
              </span>
            </div>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#27272d] text-[#a1a1a6] border border-white/[0.06] flex items-center gap-0.5">
              <span>{isOpen ? 'Explore' : 'Open'}</span>
              <ArrowUpRight className="w-2.5 h-2.5" />
            </span>
          </div>

          <p className="text-[11px] font-mono text-[#9ca3af] pl-6">
            {sublabel}
          </p>
        </div>
      </a>
    </div>
  );
};
