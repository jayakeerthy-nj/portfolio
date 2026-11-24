import React, { useState } from 'react';
import { Terminal, Cpu, Database, Code, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const getCategoryIcon = (codeKey: string) => {
    switch (codeKey) {
      case 'LANGUAGES': return <Code className="w-4 h-4 text-amber-400" />;
      case 'INTELLIGENCE': return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'DATA_ENGINEERING': return <Database className="w-4 h-4 text-blue-400" />;
      case 'DEV_ECOSYSTEM': return <Wrench className="w-4 h-4 text-emerald-400" />;
      default: return <Terminal className="w-4 h-4 text-[#a1a1a6]" />;
    }
  };

  const filteredCategories = selectedCategory === 'ALL'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.codeKey === selectedCategory);

  return (
    <section id="skills" className="relative border-b border-dashed border-white/[0.08] py-16 md:py-24 bg-[#111113]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-3 border-b border-dashed border-white/[0.08]">
          <div>
            <div className="flex items-center space-x-2 font-mono text-xs text-[#a1a1a6] mb-2">
              <span className="text-[#ededed] font-medium">// 03. TOOLKIT</span>
              <span>•</span>
              <span className="text-[#9ca3af]">spec: &quot;Production &amp; Research Stack&quot;</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[#ededed]">
              Technical <span className="italic text-[#a1a1a6]">Competencies</span>
            </h2>
            <p className="text-[#a1a1a6] text-sm mt-1 font-mono">
              Practical competencies in AI, Machine Learning, Data Analytics &amp; Software.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div role="tablist" aria-label="Skill categories" className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            <button
              role="tab"
              aria-selected={selectedCategory === 'ALL'}
              onClick={() => setSelectedCategory('ALL')}
              className={`px-3 py-1.5 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                selectedCategory === 'ALL'
                  ? 'bg-[#ededed] text-[#111113] font-medium'
                  : 'bg-[#161619] text-[#a1a1a6] hover:text-[#ededed] border border-white/[0.08]'
              }`}
            >
              ALL
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.codeKey}
                role="tab"
                aria-selected={selectedCategory === cat.codeKey}
                onClick={() => setSelectedCategory(cat.codeKey)}
                className={`px-3 py-1.5 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                  selectedCategory === cat.codeKey
                    ? 'bg-[#ededed] text-[#111113] font-medium'
                    : 'bg-[#161619] text-[#a1a1a6] hover:text-[#ededed] border border-white/[0.08]'
                }`}
              >
                {cat.codeKey}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.codeKey}
              className="bg-[#161619] border border-white/[0.08] rounded-xl p-5 hover:border-white/[0.18] transition-all shadow-md group card-3d-hover"
            >
              <div className="flex items-center justify-between pb-3 border-b border-dashed border-white/[0.08] mb-4 font-mono text-xs">
                <div className="flex items-center space-x-2">
                  {getCategoryIcon(category.codeKey)}
                  <span className="font-semibold text-[#ededed] tracking-wider">
                    {category.title}
                  </span>
                </div>
                <span className="text-[11px] text-[#9ca3af]">
                  cat_id: {category.codeKey.toLowerCase()}
                </span>
              </div>

              <p className="text-xs text-[#a1a1a6] font-mono mb-4">
                {category.description}
              </p>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#111113] border border-white/[0.06] hover:border-white/[0.15] transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                    <span className="text-xs font-mono font-medium text-[#ededed]">
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#212126] text-[#9ca3af]">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quiet terminal note */}
        <div className="mt-8 p-3 rounded-lg bg-[#161619] border border-dashed border-white/[0.08] font-mono text-xs text-[#a1a1a6] flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="text-zinc-400 font-bold">$</span>
            <span>echo &quot;Toolkit verified against verified course competencies &amp; project repos.&quot;</span>
          </div>
          <span className="text-[#9ca3af] text-[11px]">No synthetic or fabricated skills.</span>
        </div>
      </div>
    </section>
  );
};
