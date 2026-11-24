import React, { useState, useRef } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { TUMBLE_CARDS } from '../data/projectCards';
import { ProjectItem } from '../types';
import { 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Code2, 
  Monitor, 
  Copy, 
  Check,
  FolderOpen,
  Layers,
  TableProperties,
  Award
} from 'lucide-react';
import { TechText } from './TechText';
import { LiquidGlassButton } from './LiquidGlassButton';
import GlassFolder, { ArtRecipe } from './ui/glass-folder-cards';
import TumbleDeckShowcase from './ui/tumble-deck-showcase';

// Custom dark-mode recipes tuned to harmonize with the charcoal/graphite (#111113 / #161619) theme
const THEME_ART_GENAI: ArtRecipe = {
  style: "streak",
  colors: ["#0b0b0f", "#181424", "#281e42", "#1a1330", "#381a5a", "#0f0e15"],
  scale: 0.65,
  warp: 2.0,
  angle: -0.45,
  gloss: 0.28,
  veins: 0.3,
};

const THEME_ART_ML: ArtRecipe = {
  style: "streak",
  colors: ["#080c14", "#0f1a28", "#152a42", "#112236", "#1c3d64", "#0a0e16"],
  scale: 0.7,
  warp: 2.2,
  angle: 0.45,
  gloss: 0.28,
  veins: 0.3,
};

const THEME_ART_FULLSTACK: ArtRecipe = {
  style: "streak",
  colors: ["#080d0a", "#0f1e16", "#163324", "#11261b", "#1c4832", "#0a110c"],
  scale: 0.65,
  warp: 2.2,
  angle: -0.35,
  gloss: 0.28,
  veins: 0.3,
};

export const ProjectsSection: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PROJECTS[0].id);
  const [viewTab, setViewTab] = useState<'folders' | 'deck' | 'table'>('folders');
  const [copiedCode, setCopiedCode] = useState(false);
  const [consoleMode, setConsoleMode] = useState<'preview' | 'code'>('preview');
  
  const consoleRef = useRef<HTMLDivElement>(null);
  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId) || PROJECTS[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(selectedProject.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const scrollToConsole = (projectId?: string) => {
    if (projectId) {
      setSelectedProjectId(projectId);
    }
    setTimeout(() => {
      consoleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <section id="projects" className="relative border-b border-dashed border-white/[0.08] py-16 md:py-24 bg-[#111113] overflow-hidden">
      {/* Background ASCII Pattern */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-15 font-mono text-xs text-zinc-500">
        <div className="absolute top-10 right-1/4">/* ==================== SELECTED_PROJECTS ==================== */</div>
        <div className="absolute bottom-16 left-12">// ++++++++++++++++++++ ARTIFACTS &amp; REPOSITORIES ++++++++++++++++++++</div>
      </div>

      {/* Massive Overlapping "Projects" typography in LTC Bodoni 175 */}
      <div 
        aria-hidden="true" 
        className="select-none pointer-events-none font-serif text-white/[0.025] tracking-tightest leading-none text-7xl sm:text-9xl md:text-[12rem] uppercase max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-[-3.5rem] sm:mb-[-5rem] z-0"
      >
        Projects
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-3 border-b border-dashed border-white/[0.08]">
          <div>
            <div className="flex items-center space-x-2 font-mono text-xs text-[#a1a1a6] mb-1.5">
              <span className="text-[#ededed] font-medium">// 04. PROJECTS &amp; ARTIFACTS</span>
              <span>•</span>
              <span className="text-[#9ca3af]">scope: &quot;Real Engineering Implementations&quot;</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[#ededed]">
              Featured Engineering <TechText text="Projects" className="italic text-[#a1a1a6]" />
            </h2>
            <p className="text-[#a1a1a6] text-sm font-mono mt-1">
              Real code, verified datasets, game theory algorithms &amp; enterprise LLMs.
            </p>
          </div>

          {/* View Mode Tabs (Glass Folders / 3D Tumble Deck / Data Matrix) */}
          <div role="tablist" aria-label="Project views" className="flex items-center space-x-1.5 p-1 bg-[#161619] border border-white/[0.08] rounded-xl font-mono text-xs">
            <button
              role="tab"
              aria-selected={viewTab === 'folders'}
              onClick={() => setViewTab('folders')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                viewTab === 'folders'
                  ? 'bg-[#212126] text-[#ededed] font-semibold border border-white/[0.12] shadow-sm'
                  : 'text-[#9ca3af] hover:text-[#ededed]'
              }`}
            >
              <FolderOpen className="w-3.5 h-3.5 text-purple-400" />
              <span>Glass Folders</span>
            </button>

            <button
              role="tab"
              aria-selected={viewTab === 'deck'}
              onClick={() => setViewTab('deck')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                viewTab === 'deck'
                  ? 'bg-[#212126] text-[#ededed] font-semibold border border-white/[0.12] shadow-sm'
                  : 'text-[#9ca3af] hover:text-[#ededed]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>3D Tumble Deck</span>
            </button>

            <button
              role="tab"
              aria-selected={viewTab === 'table'}
              onClick={() => setViewTab('table')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                viewTab === 'table'
                  ? 'bg-[#212126] text-[#ededed] font-semibold border border-white/[0.12] shadow-sm'
                  : 'text-[#9ca3af] hover:text-[#ededed]'
              }`}
            >
              <TableProperties className="w-3.5 h-3.5 text-emerald-400" />
              <span>Data Matrix</span>
            </button>
          </div>
        </div>

        {/* ================= VIEW 1: 3D INTERACTIVE GLASS FOLDERS ================= */}
        {viewTab === 'folders' && (
          <div className="relative mb-12 rounded-2xl bg-[#0e0e11] border border-white/[0.08] p-6 sm:p-8 overflow-hidden shadow-2xl">
            {/* Dotted Grid Desk Background */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 text-white opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(currentColor 1.2px, transparent 1.4px)",
                backgroundSize: "22px 22px",
              }}
            />

            <div className="relative z-10 flex flex-col items-center mb-6">
              <span className="px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-[10px] font-mono text-[#a1a1a6] uppercase tracking-wider mb-2">
                Physical Object Simulation • Frosted Glass
              </span>
              <p className="font-mono text-xs text-[#9ca3af] text-center max-w-md">
                Hover to lean forward · Click folder to open &amp; fan out files · Click any sheet to inspect code
              </p>
            </div>

            {/* Folders Desk Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-end justify-items-center">
              {/* Folder 1: AI & GenAI Lab */}
              <GlassFolder
                key="folder-genai-v2"
                label="AI & GenAI Lab"
                meta="2 projects · RAG & LLM"
                tone="dark"
                art={THEME_ART_GENAI}
                seed={101}
                width={310}
                action="none"
                files={[
                  { name: "ai-vaidya-rag.py", meta: "RAG · 96.4% Acc" },
                  { name: "ibm-granite-finance.py", meta: "LLM · 98.1% Acc" },
                ]}
                onFileSelect={(file) => {
                  if (file.name.includes("vaidya")) scrollToConsole("ai-vaidya");
                  else if (file.name.includes("finance")) scrollToConsole("finance-chatbot");
                }}
              />

              {/* Folder 2: ML & Game Theory */}
              <GlassFolder
                key="folder-ml-v2"
                label="ML & Game Theory"
                meta="2 projects · IEEE Award"
                tone="dark"
                art={THEME_ART_ML}
                seed={202}
                width={310}
                action="none"
                files={[
                  { name: "polaris-policy-ml.py", meta: "ML · 0.924 F1" },
                  { name: "ai-chess-rival.py", meta: "Minimax · IEEE 4th" },
                ]}
                onFileSelect={(file) => {
                  if (file.name.includes("polaris")) scrollToConsole("polaris-predictor");
                  else if (file.name.includes("chess")) scrollToConsole("ai-chess-rival");
                }}
              />

              {/* Folder 3: Full Stack */}
              <GlassFolder
                key="folder-fullstack-v2"
                label="Full Stack"
                meta="2 projects · Web Apps"
                tone="dark"
                art={THEME_ART_FULLSTACK}
                seed={303}
                width={310}
                action="none"
                files={[
                  { name: "campushire-portal.tsx", meta: "React · TypeScript" },
                  { name: "public-health-bot.tsx", meta: "FastAPI · React" },
                ]}
                onFileSelect={(file) => {
                  if (file.name.includes("campushire")) scrollToConsole("campushire-portal");
                  else if (file.name.includes("health")) scrollToConsole("public-health-bot");
                }}
              />
            </div>
          </div>
        )}

        {/* ================= VIEW 2: 3D TUMBLE DECK SHOWCASE ================= */}
        {viewTab === 'deck' && (
          <div className="relative mb-12 rounded-2xl bg-[#0c0c0e] border border-white/[0.08] overflow-hidden shadow-2xl">
            <div className="p-4 bg-[#141417] border-b border-white/[0.08] font-mono text-xs flex flex-wrap items-center justify-between text-[#9ca3af] gap-2">
              <span className="text-[#ededed] font-medium">// 3D SCROLL-DRIVEN TUMBLE DECK</span>
              <span className="text-[11px]">SCRUB WITH MOUSE WHEEL / DRAG / CLICK TO TUMBLE</span>
            </div>

            <div className="w-full relative">
              <TumbleDeckShowcase
                cards={TUMBLE_CARDS}
                height="clamp(380px, 60vh, 550px)"
                aspect={2.06}
                scrollPerCard={200}
                depth={4}
                background="#0c0c0e"
              />
            </div>
          </div>
        )}

        {/* ================= VIEW 3: DATA MATRIX TABLE ================= */}
        {viewTab === 'table' && (
          <div className="bg-[#161619] border border-white/[0.08] rounded-xl overflow-hidden mb-12 shadow-xl">
            <div className="px-4 py-2.5 bg-[#0d0d0e] border-b border-white/[0.08] font-mono text-xs text-[#9ca3af] flex items-center justify-between">
              <span className="font-medium text-[#ededed]">// SELECTED PROJECTS DATA MATRIX</span>
              <span className="text-[11px] text-[#9ca3af]">TOTAL: {PROJECTS.length} ARTIFACTS</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr className="border-b border-dashed border-white/[0.08] bg-[#111113] text-[#9ca3af] text-[11px]">
                    <th scope="col" className="py-3 px-4 font-medium text-[#ededed]">/ PROJECT REPOSITORY</th>
                    <th scope="col" className="py-3 px-4 font-medium text-[#ededed]">/ TRACK &amp; DOMAIN</th>
                    <th scope="col" className="py-3 px-4 font-medium text-[#ededed]">/ TECH ARCHITECTURE</th>
                    <th scope="col" className="py-3 px-4 font-medium text-[#ededed] text-right">/ ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dashed divide-white/[0.06]">
                  {PROJECTS.map((project) => {
                    const isSelected = project.id === selectedProjectId;
                    return (
                      <tr
                        key={project.id}
                        role="button"
                        tabIndex={0}
                        aria-label={`Inspect ${project.name} in console`}
                        onClick={() => scrollToConsole(project.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            scrollToConsole(project.id);
                          }
                        }}
                        className={`cursor-pointer transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/40 ${
                          isSelected
                            ? 'bg-[#212126] text-white font-medium'
                            : 'hover:bg-white/[0.03] text-[#a1a1a6]'
                        }`}
                      >
                        <td className="py-3 px-4 flex items-center space-x-2">
                          <span className={isSelected ? 'text-[#ededed]' : 'text-zinc-500'}>
                            -&gt;
                          </span>
                          <span className={isSelected ? 'text-[#ededed] font-semibold' : 'text-[#ededed]'}>
                            {project.name}
                          </span>
                          {project.award && (
                            <span className="px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-300 text-[10px] border border-amber-500/20">
                              Award
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-[#a1a1a6] text-[11px]">
                          {project.category}
                        </td>
                        <td className="py-3 px-4 text-[#9ca3af] text-[11px]">
                          {project.techSummary}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span className={`inline-flex items-center text-[11px] ${
                            isSelected ? 'text-[#ededed] underline' : 'text-[#9ca3af]'
                          }`}>
                            Inspect Console -&gt;
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= 2. PROJECT DETAIL & CODE PREVIEW (FINE THOUGHT STYLE) ================= */}
        <div ref={consoleRef} className="pt-4">
          <div className="flex items-center justify-between mb-4 font-mono text-xs text-[#a1a1a6]">
            <div className="flex items-center space-x-2">
              <span className="text-[#ededed] font-medium">// ACTIVE WORKSPACE CONSOLE</span>
              <span className="text-zinc-600">•</span>
              <span className="text-emerald-400 font-semibold">{selectedProject.name}</span>
            </div>

            <div role="tablist" aria-label="Console view modes" className="flex items-center space-x-1.5">
              <button
                role="tab"
                aria-selected={consoleMode === 'preview'}
                onClick={() => setConsoleMode('preview')}
                className={`px-3 py-1 rounded text-xs transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                  consoleMode === 'preview'
                    ? 'bg-[#212126] text-[#ededed] font-medium border border-white/[0.08]'
                    : 'text-[#9ca3af] hover:text-[#ededed]'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Simulated Monitor</span>
              </button>
              <button
                role="tab"
                aria-selected={consoleMode === 'code'}
                onClick={() => setConsoleMode('code')}
                className={`px-3 py-1 rounded text-xs transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                  consoleMode === 'code'
                    ? 'bg-[#212126] text-[#ededed] font-medium border border-white/[0.08]'
                    : 'text-[#9ca3af] hover:text-[#ededed]'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#161619] border border-white/[0.08] rounded-xl overflow-hidden shadow-2xl p-4 sm:p-6">
            {/* Left Column: Code Editor Tab with Status Box */}
            <div className="lg:col-span-5 space-y-4">
              {/* Mock Code Tab Bar */}
              <div className="flex items-center justify-between px-3 h-10 bg-[#0d0d0e] border border-white/[0.08] rounded-lg font-mono text-xs">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-zinc-400"></span>
                  <span className="text-[#ededed] font-medium">{selectedProject.filename}</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  aria-label="Copy source code to clipboard"
                  className="flex items-center space-x-1 text-[#9ca3af] hover:text-[#ededed] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded px-1.5 py-0.5"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status Box */}
              <div className="p-3 bg-[#1c1c20] rounded-lg border border-white/[0.06] text-xs font-mono text-[#a1a1a6] space-y-1">
                <div className="flex items-center space-x-1.5 text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Verified BMSIT AIML Lab Pipeline</span>
                </div>
                <p className="text-[#9ca3af] text-[11px]">
                  Author: N J Jayakeerthy (CGPA 9.13 • BMSIT Batch 2028)
                </p>
                {selectedProject.award && (
                  <div className="text-amber-300 text-[11px] pt-0.5 flex items-center gap-1 font-semibold">
                    <Award className="w-3.5 h-3.5" /> {selectedProject.award}
                  </div>
                )}
              </div>

              {/* Monospace Code Body or Syntax View */}
              <div className="bg-[#111113] p-4 rounded-lg border border-white/[0.06] font-mono text-xs text-[#a1a1a6] max-h-96 overflow-y-auto">
                <pre className="overflow-x-auto leading-relaxed text-[11.5px] font-mono text-[#ededed]">
                  <code>{selectedProject.codeSnippet}</code>
                </pre>
              </div>

              {/* External Repo Links */}
              <div className="pt-2 flex items-center space-x-3">
                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-[#212126] hover:bg-[#28282f] border border-white/[0.08] text-xs font-mono text-[#ededed] flex items-center justify-center space-x-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-[#9ca3af]" />
                </a>
              </div>
            </div>

            {/* Right Column: Visual Monitor / Project Screenshot Preview */}
            <div className="lg:col-span-7 space-y-4">
              {/* Browser / Visual Frame */}
              <div className="bg-[#0d0d0e] rounded-xl border border-white/[0.08] overflow-hidden shadow-inner">
                {/* Frame Header */}
                <div className="px-4 py-2.5 bg-[#161619] border-b border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#9ca3af]">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-600"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-600"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-600"></span>
                    </div>
                    <span className="text-[#a1a1a6] text-[11px] ml-2 font-mono truncate max-w-[200px] sm:max-w-none">
                      {selectedProject.links.demo || `~/projects/${selectedProject.id}/preview`}
                    </span>
                  </div>
                  <span className="text-[#a1a1a6] text-[10px] font-mono font-medium uppercase tracking-wider">PROJECT PREVIEW</span>
                </div>

                {/* Screenshot Display or Upload Ready Placeholder */}
                <div className="p-3 sm:p-4">
                  {selectedProject.image ? (
                    <div className="relative group overflow-hidden rounded-lg bg-[#111113] border border-white/[0.06]">
                      <img
                        src={selectedProject.image}
                        alt={`${selectedProject.name} Screenshot`}
                        className="w-full h-auto object-cover object-top max-h-[480px] rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-20 px-6 text-center rounded-lg bg-[#111113] border border-dashed border-white/[0.08]">
                      <div className="p-3 rounded-xl bg-[#161619] border border-white/[0.08] text-[#71717a] mb-3">
                        <Monitor className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-[#ededed] font-medium block">
                        Project Screenshot Preview
                      </span>
                      <p className="text-[11px] font-mono text-[#71717a] max-w-sm mt-1">
                        Ready for {selectedProject.name} screenshot
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Architectural Specs & Highlights */}
              <div className="bg-[#111113] p-5 rounded-xl border border-white/[0.06] space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-[#ededed] mb-1">
                    {selectedProject.tagline}
                  </h3>
                  <p className="text-xs text-[#a1a1a6] leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-1.5 pt-2 border-t border-dashed border-white/[0.08]">
                  <span className="text-[10px] font-mono text-[#9ca3af] uppercase tracking-wider block">
                    Engineering Milestones &amp; Features:
                  </span>
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs font-sans text-[#a1a1a6]">
                      <span className="text-[#ededed] font-mono mt-0.5">-&gt;</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2 border-t border-dashed border-white/[0.08] flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#161619] border border-white/[0.08] text-[#ededed] font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
