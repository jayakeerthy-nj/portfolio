import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Trash2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      command: 'init',
      output: (
        <div className="space-y-1 text-[#a1a1a6]">
          <p className="text-[#ededed] font-medium">N J Jayakeerthy — Interactive AIML Terminal [v2.4]</p>
          <p className="text-[#71717a]">Type <span className="text-[#ededed] underline font-medium">help</span> to list available commands. (try: <span className="text-emerald-400 font-mono">about</span>, <span className="text-blue-400 font-mono">projects</span>, <span className="text-purple-400 font-mono">skills</span>, <span className="text-amber-400 font-mono">awards</span>, <span className="text-pink-400 font-mono">resume</span>)</p>
        </div>
      )
    }
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-[#a1a1a6] text-xs">
            <p className="text-[#ededed] font-semibold">AVAILABLE COMMANDS:</p>
            <p><span className="text-[#ededed] w-24 inline-block font-medium">about</span> : Print Jayakeerthy&apos;s biography &amp; credentials</p>
            <p><span className="text-[#ededed] w-24 inline-block font-medium">skills</span> : Display full technical skills matrix</p>
            <p><span className="text-[#ededed] w-24 inline-block font-medium">projects</span> : List engineering projects &amp; papers</p>
            <p><span className="text-[#ededed] w-24 inline-block font-medium">awards</span> : List hackathons &amp; IEEE awards</p>
            <p><span className="text-[#ededed] w-24 inline-block font-medium">contact</span> : Show contact info &amp; phone</p>
            <p><span className="text-[#ededed] w-24 inline-block font-medium">resume</span> : Open the resume modal</p>
            <p><span className="text-[#ededed] w-24 inline-block font-medium">clear</span> : Clear terminal buffer</p>
            <p><span className="text-[#ededed] w-24 inline-block font-medium">whoami</span> : Print current session context</p>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-1 text-xs text-[#a1a1a6]">
            <p className="text-[#ededed] font-semibold">{PERSONAL_INFO.name} ({PERSONAL_INFO.roleTitle})</p>
            <p>{PERSONAL_INFO.tagline}</p>
            <p className="text-[#9ca3af]">College: {PERSONAL_INFO.college} | B.E. AIML (CGPA: {PERSONAL_INFO.cgpa}, Batch 2028)</p>
            <p className="text-[#9ca3af]">Specialization: Unsupervised Learning, ML Algorithms, RAG</p>
            <p className="text-[#71717a]">Location: {PERSONAL_INFO.location}</p>
            <p className="text-emerald-400">{PERSONAL_INFO.availability}</p>
          </div>
        );
        break;

      case 'awards':
        output = (
          <div className="space-y-1.5 text-xs text-[#a1a1a6]">
            <p className="text-[#ededed] font-semibold">HONORS &amp; RECOGNITIONS:</p>
            <p className="text-amber-300">★ 1st Place Winner — AI Fusion Challenge Hackathon 2026</p>
            <p className="text-blue-400">★ 4th Place Award — IEEE Winter of Projects 2025 (AI Chess Rival engine)</p>
            <p className="text-emerald-400">★ Academic Excellence — BMSIT AIML (CGPA: 9.13, Batch 2028)</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs">
            {SKILL_CATEGORIES.map((c) => (
              <div key={c.codeKey}>
                <span className="text-[#ededed] font-semibold">{c.title}: </span>
                <span className="text-[#a1a1a6]">{c.skills.map(s => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-1.5 text-xs text-[#a1a1a6]">
            {PROJECTS.map((p) => (
              <div key={p.id} className="pb-1 border-b border-white/[0.06]">
                <span className="text-[#ededed] font-semibold">{p.name}</span>{' '}
                <span className="text-[#71717a]">[{p.category}]</span>
                <p className="text-[#a1a1a6] text-[11px]">{p.tagline}</p>
                <p className="text-[#71717a] text-[11px]">Stack: {p.techSummary}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-[#a1a1a6]">
            <p><span className="text-[#71717a]">Email:</span> {PERSONAL_INFO.email}</p>
            <p><span className="text-[#71717a]">LinkedIn:</span> {PERSONAL_INFO.linkedin}</p>
            <p><span className="text-[#71717a]">GitHub:</span> {PERSONAL_INFO.github}</p>
            <p><span className="text-[#71717a]">Location:</span> {PERSONAL_INFO.location}</p>
          </div>
        );
        break;

      case 'resume':
        onOpenResume();
        output = <p className="text-emerald-400 text-xs">Opening resume modal...</p>;
        break;

      case 'whoami':
        output = (
          <p className="text-xs text-[#a1a1a6]">
            guest@portfolio ~ visiting Jayakeerthy N. J.&apos;s portfolio terminal session.
          </p>
        );
        break;

      case 'clear':
        setLogs([]);
        setInputVal('');
        return;

      default:
        output = (
          <p className="text-rose-400 text-xs">
            command not found: {cmd}. Type <span className="underline font-medium text-white">help</span> for commands.
          </p>
        );
    }

    setLogs(prev => [...prev, { command: inputVal, output }]);
    setInputVal('');
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-150 border-t border-white/[0.08] bg-[#0d0d0e] shadow-2xl font-mono ${
      isExpanded ? 'h-[75vh]' : 'h-72 sm:h-80'
    }`}>
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 h-11 bg-[#161619] border-b border-white/[0.08] text-xs text-[#9ca3af] select-none">
        <div className="flex items-center space-x-2">
          <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-medium text-[#ededed]">bash — jayakeerthy@bmsit: ~</span>
        </div>

        <div className="flex items-center space-x-1">
          <button
            onClick={() => setLogs([])}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:text-[#ededed] text-[#9ca3af] hover:bg-white/[0.06] transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            title="Clear buffer"
            aria-label="Clear terminal buffer"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:text-[#ededed] text-[#9ca3af] hover:bg-white/[0.06] transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            title={isExpanded ? 'Collapse terminal' : 'Expand terminal'}
            aria-label={isExpanded ? 'Collapse terminal' : 'Expand terminal'}
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:text-[#ededed] text-[#9ca3af] hover:bg-white/[0.06] transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            title="Close Terminal"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-[calc(100%-2.75rem)] overflow-y-auto space-y-3 text-xs leading-relaxed">
        {logs.map((log, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center space-x-2 text-[#9ca3af]">
              <span className="text-zinc-400 font-bold">$</span>
              <span className="text-[#ededed] font-medium">{log.command}</span>
            </div>
            <div className="pl-4">{log.output}</div>
          </div>
        ))}

        {/* Input prompt line */}
        <form onSubmit={handleCommand} className="flex items-center space-x-2 pt-1">
          <span className="text-zinc-400 font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' for commands..."
            className="flex-1 bg-transparent border-none outline-none focus-visible:ring-1 focus-visible:ring-emerald-400/50 rounded px-1.5 py-1 text-[#ededed] placeholder:text-zinc-500 font-mono text-xs"
            aria-label="Terminal input prompt"
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
