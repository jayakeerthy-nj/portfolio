import React from 'react';
import {
  SiPython,
  SiC,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiPytorch,
  SiScikitlearn,
  SiLangchain,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiGit,
  SiGithub,
  SiJupyter,
  SiLinux,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { MotionReveal } from './MotionReveal';

interface SkillSymbol {
  name: string;
  icon: React.ReactNode;
}

interface SkillRow {
  label: string;
  items: SkillSymbol[];
}

const SKILL_ROWS: SkillRow[] = [
  {
    label: 'Languages & Web',
    items: [
      { name: 'Python', icon: <SiPython className="w-6 h-6 text-[#3776AB]" /> },
      { name: 'C', icon: <SiC className="w-6 h-6 text-[#485550]" /> },
      { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6 text-[#3178C6]" /> },
      { name: 'React', icon: <SiReact className="w-6 h-6 text-[#087EA4]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-6 h-6 text-[#0284C7]" /> },
    ],
  },
  {
    label: 'AI, ML & Data',
    items: [
      { name: 'PyTorch', icon: <SiPytorch className="w-6 h-6 text-[#EE4C2C]" /> },
      { name: 'TensorFlow', icon: <SiTensorflow className="w-6 h-6 text-[#FF6F00]" /> },
      { name: 'Scikit-Learn', icon: <SiScikitlearn className="w-6 h-6 text-[#F7931E]" /> },
      { name: 'LangChain & RAG', icon: <SiLangchain className="w-6 h-6 text-[#1E2623]" /> },
      { name: 'Pandas', icon: <SiPandas className="w-6 h-6 text-[#150458]" /> },
      { name: 'NumPy', icon: <SiNumpy className="w-6 h-6 text-[#013243]" /> },
    ],
  },
  {
    label: 'Tooling',
    items: [
      { name: 'Git', icon: <SiGit className="w-6 h-6 text-[#F05032]" /> },
      { name: 'GitHub', icon: <SiGithub className="w-6 h-6 text-[#1E2623]" /> },
      { name: 'VS Code', icon: <VscVscode className="w-6 h-6 text-[#007ACC]" /> },
      { name: 'Jupyter', icon: <SiJupyter className="w-6 h-6 text-[#F37626]" /> },
      { name: 'Linux', icon: <SiLinux className="w-6 h-6 text-[#485550]" /> },
    ],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative border-b border-dashed border-[#485550]/15 py-12 md:py-16 bg-[#F4F6F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8 pb-3 border-b border-dashed border-[#485550]/15">
            <div>
              <div className="flex items-center space-x-2 font-mono text-xs text-[#52605B] mb-1.5">
                <span className="text-[#111614] font-medium">// 03. TOOLKIT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-sans font-medium tracking-tight text-[#111614]">
                Technical <span className="font-pixel font-normal text-[#111614] underline decoration-[#C0EB6A] decoration-4 underline-offset-4">Stack</span>
              </h2>
            </div>
            <span className="text-[11px] font-mono text-[#5C6B65]">
              Hover any symbol to inspect
            </span>
          </div>
        </MotionReveal>

        {/* Row-wise Symbol Grid */}
        <div className="space-y-4">
          {SKILL_ROWS.map((row, idx) => (
            <MotionReveal key={row.label} delay={idx * 0.06}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-4 rounded-2xl bg-[#FFFFFF] border border-[#485550]/15 shadow-xs">
                <div className="sm:w-40 shrink-0 font-mono text-xs text-[#485550] font-semibold">
                  {row.label}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {row.items.map((skill) => (
                    <div
                      key={skill.name}
                      tabIndex={0}
                      role="img"
                      aria-label={skill.name}
                      title={skill.name}
                      className="group relative w-12 h-12 rounded-xl bg-[#F4F6F0] border border-[#485550]/12 hover:border-[#485550]/35 hover:bg-[#C0EB6A]/25 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#485550] cursor-default"
                    >
                      {skill.icon}
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-[#485550] text-[10px] font-mono text-[#FFFFFF] whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity shadow-md z-20">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
