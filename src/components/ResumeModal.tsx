import React, { useState, useEffect } from 'react';
import { X, Download, ExternalLink, FileText, LayoutList } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'pdf' | 'summary'>('pdf');

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-dialog-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl h-[92vh] bg-[#111113] border border-white/[0.12] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex flex-wrap items-center justify-between px-4 py-2.5 min-h-12 bg-[#161619] border-b border-white/[0.08] font-mono text-xs text-[#9ca3af] gap-2 select-none">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span id="resume-dialog-title" className="font-semibold text-[#ededed]">jayakeerthy_resume.pdf</span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span className="text-[#a1a1a6] hidden sm:inline">Official 2-Page Resume • BMSIT AIML</span>
          </div>

          {/* View Mode Toggle & Quick Actions */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center p-0.5 bg-[#0e0e11] border border-white/[0.08] rounded-lg">
              <button
                type="button"
                onClick={() => setViewMode('pdf')}
                className={`flex items-center space-x-1 px-2.5 py-1 rounded text-xs transition-colors ${
                  viewMode === 'pdf'
                    ? 'bg-[#212126] text-[#ededed] font-medium'
                    : 'text-[#9ca3af] hover:text-[#ededed]'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>PDF Document</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('summary')}
                className={`flex items-center space-x-1 px-2.5 py-1 rounded text-xs transition-colors ${
                  viewMode === 'summary'
                    ? 'bg-[#212126] text-[#ededed] font-medium'
                    : 'text-[#9ca3af] hover:text-[#ededed]'
                }`}
              >
                <LayoutList className="w-3.5 h-3.5 text-blue-400" />
                <span>Summary</span>
              </button>
            </div>

            <a
              href="/jayakeerthy_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[#212126] hover:bg-[#28282f] border border-white/[0.08] text-[#ededed] text-xs font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              title="Open full PDF in a new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden sm:inline">Open Tab</span>
            </a>

            <a
              href="/jayakeerthy_resume.pdf"
              download="NJ_Jayakeerthy_Resume.pdf"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#ededed] hover:bg-white text-[#111113] text-xs font-mono font-medium transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              title="Download actual PDF resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:text-[#ededed] text-[#a1a1a6] hover:bg-white/[0.08] transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Main Content */}
        <div className="flex-1 w-full h-full overflow-hidden bg-[#0d0d0e]">
          {viewMode === 'pdf' ? (
            <div className="w-full h-full flex flex-col">
              <object
                data="/jayakeerthy_resume.pdf"
                type="application/pdf"
                className="w-full h-full"
              >
                <iframe
                  src="/jayakeerthy_resume.pdf#view=FitH"
                  className="w-full h-full border-none bg-[#111113]"
                  title="N J Jayakeerthy Official Resume PDF"
                />
                <div className="p-8 text-center font-mono text-sm text-[#a1a1a6] space-y-4">
                  <p>Your browser does not display inline PDFs directly.</p>
                  <a
                    href="/jayakeerthy_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-500 text-black font-semibold rounded-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Click to Open Resume PDF in New Tab</span>
                  </a>
                </div>
              </object>
            </div>
          ) : (
            <div className="h-full overflow-y-auto p-6 sm:p-8 space-y-6 font-sans text-xs sm:text-sm text-[#ededed]">
              {/* Header */}
              <div className="pb-5 border-b border-dashed border-white/[0.08] flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded bg-white/[0.08] font-mono text-[10px] text-[#ededed] border border-white/[0.08]">
                      AIML ENGINEER &amp; FULL STACK DEVELOPER
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/20">
                      CGPA 9.13
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-[#ededed] tracking-tight">{PERSONAL_INFO.name}</h1>
                  <p className="text-[#a1a1a6] font-mono text-xs sm:text-sm mt-0.5">
                    {PERSONAL_INFO.degree} • {PERSONAL_INFO.college}
                  </p>
                  <p className="text-[#9ca3af] text-xs mt-1 max-w-xl">
                    Specializing in AI/ML, RAG pipelines, predictive modeling, and scalable full-stack software solutions.
                  </p>
                </div>

                <div className="font-mono text-xs text-[#a1a1a6] space-y-1.5 bg-[#161619] p-3 rounded-lg border border-white/[0.06] w-full md:w-auto">
                  <div className="flex items-center gap-2">
                    <span className="text-[#9ca3af]">Email:</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#ededed] hover:underline">{PERSONAL_INFO.email}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#9ca3af]">GitHub:</span>
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#ededed] hover:underline">github.com/jayakeerthy-nj</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#9ca3af]">LinkedIn:</span>
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#ededed] hover:underline">linkedin.com/in/jayakeerthy-n-j-37a533334</a>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-wider text-[#a1a1a6] font-medium mb-2.5">
                  Core Technical Competencies
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                  {SKILL_CATEGORIES.map(cat => (
                    <div key={cat.codeKey} className="p-3 rounded-lg bg-[#161619] border border-white/[0.08]">
                      <span className="text-[#9ca3af] font-medium block text-[11px] mb-1">{cat.title}</span>
                      <span className="text-[#ededed] text-xs leading-relaxed">{cat.skills.map(s => s.name).join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-wider text-[#a1a1a6] font-medium mb-2.5">
                  Featured Technical Projects
                </h2>
                <div className="space-y-3 font-sans">
                  {PROJECTS.map(proj => (
                    <div key={proj.id} className="p-3.5 rounded-lg bg-[#161619] border border-white/[0.08] space-y-1">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-[#ededed] text-sm">{proj.name}</span>
                          {proj.award && (
                            <span className="px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-300 font-mono text-[10px] border border-amber-400/20">
                              {proj.award}
                            </span>
                          )}
                        </div>
                        <span className="font-mono text-[11px] text-[#9ca3af]">{proj.techSummary}</span>
                      </div>
                      <p className="text-xs text-[#a1a1a6]">{proj.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
