import React, { useState, useRef } from 'react';
import {
  ExternalLink,
  Github,
  Monitor,
  Award
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { MotionReveal } from './MotionReveal';
import GlassFolder, { ArtRecipe } from './ui/glass-folder-cards';

// Minimal botanical slate & sage folder back-panel recipes
const THEME_ART_GENAI: ArtRecipe = {
  style: "streak",
  colors: ["#F4F6F0", "#EAECE4", "#C0EB6A", "#485550", "#EAECE4"],
  scale: 0.65,
  warp: 1.4,
  angle: -0.45,
  gloss: 0.16,
  veins: 0.08,
};

const THEME_ART_ML: ArtRecipe = {
  style: "streak",
  colors: ["#485550", "#5C6B65", "#8DA199", "#C0EB6A", "#F4F6F0"],
  scale: 0.68,
  warp: 1.5,
  angle: 0.45,
  gloss: 0.18,
  veins: 0.1,
};

const THEME_ART_FULLSTACK: ArtRecipe = {
  style: "streak",
  colors: ["#FFFFFF", "#F4F6F0", "#EAECE4", "#C0EB6A", "#485550"],
  scale: 0.62,
  warp: 1.3,
  angle: -0.3,
  gloss: 0.16,
  veins: 0.06,
};

export const ProjectsSection: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PROJECTS[0].id);

  const consoleRef = useRef<HTMLDivElement>(null);
  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId) || PROJECTS[0];

  const scrollToConsole = (projectId?: string) => {
    if (projectId) {
      setSelectedProjectId(projectId);
    }
    setTimeout(() => {
      consoleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <section id="projects" className="relative border-b border-dashed border-[#485550]/15 py-14 md:py-20 bg-[#F4F6F0] overflow-hidden">
      {/* Subtle Overlapping Background Typography */}
      <div
        aria-hidden="true"
        className="select-none pointer-events-none font-pixel text-[#485550]/[0.05] tracking-tightest leading-none text-7xl sm:text-9xl md:text-[11rem] uppercase max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-[-3rem] sm:mb-[-4.5rem] z-0"
      >
        Projects
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionReveal>
          <div className="mb-8 pb-3 border-b border-dashed border-[#485550]/15">
            <div className="flex items-center space-x-2 font-mono text-xs text-[#52605B] mb-1.5">
              <span className="text-[#111614] font-medium">// 02. PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-medium tracking-tight text-[#111614]">
              <span className="font-pixel font-normal underline decoration-[#C0EB6A] decoration-4 underline-offset-4">
                Projects
              </span>
            </h2>
          </div>
        </MotionReveal>

        {/* Interactive Glass Folders */}
        <MotionReveal delay={0.08}>
          <div className="relative mb-10 rounded-2xl bg-[#FFFFFF] border border-[#485550]/15 p-6 sm:p-8 overflow-hidden shadow-[0_14px_34px_-16px_rgba(72,85,80,0.12)]">
            {/* Subtle Dot Grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 text-[#485550] opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(currentColor 1.2px, transparent 1.4px)",
                backgroundSize: "22px 22px",
              }}
            />

            <div className="relative z-10 flex flex-col items-center mb-6">
              <p className="font-mono text-xs text-[#52605B] text-center">
                Click a folder to open &amp; select a project
              </p>
            </div>

            {/* Folders Desk Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-end justify-items-center">
              <GlassFolder
                key="folder-genai-minimal"
                label="AI & GenAI Lab"
                meta="3 projects · RAG, LLM & Risk"
                tone="light"
                art={THEME_ART_GENAI}
                seed={101}
                width={300}
                action="none"
                files={[
                  { name: "ai-vaidya-rag.py", meta: "RAG · 96.4% Acc" },
                  { name: "ibm-granite-finance.py", meta: "LLM · 98.1% Acc" },
                  { name: "banking-churn-risk.py", meta: "AI · SHAP & ML" },
                ]}
                onFileSelect={(file) => {
                  if (file.name.includes("vaidya")) scrollToConsole("ai-vaidya");
                  else if (file.name.includes("finance")) scrollToConsole("finance-chatbot");
                  else if (file.name.includes("churn")) scrollToConsole("banking-churn-analytics");
                }}
              />

              <GlassFolder
                key="folder-ml-minimal"
                label="ML & Game Theory"
                meta="3 projects · IEEE Award"
                tone="light"
                art={THEME_ART_ML}
                seed={202}
                width={300}
                action="none"
                files={[
                  { name: "polaris-policy-ml.py", meta: "ML · 0.924 F1" },
                  { name: "ai-chess-rival.py", meta: "Minimax · IEEE 4th" },
                  { name: "banking-churn-risk.py", meta: "ML · SHAP" },
                ]}
                onFileSelect={(file) => {
                  if (file.name.includes("polaris")) scrollToConsole("polaris-predictor");
                  else if (file.name.includes("chess")) scrollToConsole("ai-chess-rival");
                  else if (file.name.includes("churn")) scrollToConsole("banking-churn-analytics");
                }}
              />

              <GlassFolder
                key="folder-fullstack-minimal"
                label="Full Stack"
                meta="2 projects · Web Apps"
                tone="light"
                art={THEME_ART_FULLSTACK}
                seed={303}
                width={300}
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
        </MotionReveal>

        {/* Project Summary & Screenshot Preview */}
        <MotionReveal delay={0.12}>
          <div ref={consoleRef} className="pt-2">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 font-mono text-xs text-[#52605B]">
              <div className="flex items-center space-x-2">
                <span className="text-[#111614] font-medium">// SELECTED PROJECT</span>
                <span className="text-[#485550]/30">•</span>
                <span className="px-2 py-0.5 rounded bg-[#C0EB6A] text-[#111614] font-semibold">
                  {selectedProject.name}
                </span>
              </div>

              <span className="text-[11px]">{selectedProject.category}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#FFFFFF] border border-[#485550]/15 rounded-2xl overflow-hidden shadow-[0_14px_34px_-16px_rgba(72,85,80,0.14)] p-4 sm:p-6">
              {/* Left Column: Project Summary & GitHub Link */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                <div className="bg-[#F4F6F0] p-5 rounded-xl border border-[#485550]/10 space-y-4 flex-1">
                  {selectedProject.award && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#C0EB6A] text-[#111614] text-[11px] font-mono font-semibold">
                      <Award className="w-3.5 h-3.5" />
                      <span>{selectedProject.award}</span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold text-[#111614] mb-2 leading-snug">
                      {selectedProject.tagline}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#485550] leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Highlights List */}
                  <div className="space-y-1.5 pt-3 border-t border-dashed border-[#485550]/15">
                    <span className="text-[10px] font-mono text-[#52605B] uppercase tracking-wider block">
                      Key Highlights
                    </span>
                    {selectedProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs font-sans text-[#485550]">
                        <span className="text-[#111614] font-mono mt-0.5">-&gt;</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-3 border-t border-dashed border-[#485550]/15 flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#FFFFFF] border border-[#485550]/15 text-[#111614] font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Repo Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-lg bg-[#485550] hover:bg-[#38433F] text-xs font-mono text-[#FFFFFF] flex items-center justify-center space-x-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#485550]"
                  >
                    <Github className="w-4 h-4 text-[#C0EB6A]" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#F4F6F0]/75" />
                  </a>
                  {selectedProject.links.demo && selectedProject.links.demo !== '#' && (
                    <a
                      href={selectedProject.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-4 rounded-lg bg-[#F4F6F0] hover:bg-[#EAECE4] border border-[#485550]/20 text-xs font-mono text-[#111614] flex items-center justify-center space-x-1.5 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#52605B]" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Visual Monitor / Project Screenshot Preview */}
              <div className="lg:col-span-7">
                <div className="bg-[#F4F6F0] rounded-xl border border-[#485550]/15 overflow-hidden h-full flex flex-col">
                  {/* Frame Header */}
                  <div className="px-4 py-2.5 bg-[#EAECE4]/80 border-b border-[#485550]/12 flex items-center justify-between text-xs font-mono text-[#52605B]">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#485550]/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#485550]/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#C0EB6A]" />
                      </div>
                      <span className="text-[#485550] text-[11px] ml-2 font-mono truncate max-w-[200px] sm:max-w-none">
                        {selectedProject.links.demo && selectedProject.links.demo !== '#'
                          ? selectedProject.links.demo
                          : `~/projects/${selectedProject.id}/preview`}
                      </span>
                    </div>
                    <span className="text-[#485550] text-[10px] font-mono font-semibold uppercase tracking-wider">
                      Project Preview
                    </span>
                  </div>

                  {/* Screenshot Display or Placeholder */}
                  <div className="p-3 sm:p-4 flex-1 flex items-center justify-center">
                    {selectedProject.image ? (
                      <div className="relative group overflow-hidden rounded-lg bg-[#FFFFFF] border border-[#485550]/12 w-full">
                        <img
                          src={selectedProject.image}
                          alt={`${selectedProject.name} Screenshot`}
                          className="w-full h-auto object-cover object-top max-h-[500px] rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center w-full py-24 px-6 text-center rounded-lg bg-[#FFFFFF] border border-dashed border-[#485550]/20">
                        <div className="p-3 rounded-xl bg-[#F4F6F0] border border-[#485550]/12 text-[#485550] mb-3">
                          <Monitor className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono text-[#111614] font-medium block">
                          Project Screenshot Preview
                        </span>
                        <p className="text-[11px] font-mono text-[#52605B] max-w-sm mt-1">
                          Ready for {selectedProject.name} screenshot
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};
