import React from 'react';
import { BrainCircuit, Cpu, BarChart3, Sparkles, TrendingUp, ArrowUpRight } from 'lucide-react';
import { AREAS_OF_INTEREST } from '../data/portfolioData';
import { TechText } from './TechText';

export const AreasOfInterest: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-purple-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-emerald-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-cyan-400" />;
      default: return <BrainCircuit className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="interests" className="relative border-b border-dashed border-white/[0.08] py-16 md:py-24 bg-[#111113]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 pb-3 border-b border-dashed border-white/[0.08]">
          <div className="flex items-center space-x-2 font-mono text-xs text-[#a1a1a6] mb-2">
            <span className="text-[#ededed] font-medium">// 05. FOCUS DOMAINS</span>
            <span>•</span>
            <span className="text-[#9ca3af]">scope: &quot;Core Technical &amp; Research Horizons&quot;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[#ededed]">
            Areas of <TechText text="Interest" className="italic text-[#a1a1a6]" />
          </h2>
          <p className="text-[#a1a1a6] text-sm font-mono mt-1">
            Core research horizons, machine learning specializations &amp; quantitative interests.
          </p>
        </div>

        {/* 4 Interactive Bento Cards with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AREAS_OF_INTEREST.map((area, index) => (
            <div
              key={area.id}
              className="group relative bg-[#161619] border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.18] transition-all duration-300 shadow-xl flex flex-col justify-between card-3d-hover"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between pb-3 border-b border-dashed border-white/[0.08] mb-4 font-mono text-xs">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-[#111113] border border-white/[0.06] group-hover:border-white/20 transition-colors shadow-inner">
                      {getIcon(area.iconName)}
                    </div>
                    <span className="text-[#9ca3af] font-mono">domain_0{index + 1}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#9ca3af] group-hover:text-[#ededed] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-[#ededed] mb-1.5 group-hover:text-white transition-colors">
                  {area.title}
                </h3>
                <p className="text-xs font-mono text-[#a1a1a6] mb-3">
                  {area.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#a1a1a6] font-sans leading-relaxed mb-6">
                  {area.description}
                </p>
              </div>

              {/* Technologies / Keywords */}
              <div className="pt-4 border-t border-dashed border-white/[0.08] flex flex-wrap gap-2">
                {area.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-[#111113] border border-white/[0.06] font-mono text-xs text-[#a1a1a6]"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
