import React from 'react';
import { GraduationCap, Code2, Trophy } from 'lucide-react';
import { TechText } from './TechText';

export const AboutProfile: React.FC = () => {
  return (
    <section id="about" className="relative border-b border-dashed border-white/[0.08] py-12 md:py-16 bg-[#111113]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading Tag */}
        <div className="flex items-center space-x-2 font-mono text-xs text-[#a1a1a6] mb-6 pb-2 border-b border-dashed border-white/[0.08]">
          <span className="text-[#ededed] font-medium">// 04. ABOUT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Editorial Summary */}
          <div className="lg:col-span-6 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-[#ededed] leading-snug">
              <TechText text="N J Jayakeerthy" className="text-[#ededed] font-medium" /> —{' '}
              <span className="italic text-[#a1a1a6]">AIML Engineer &amp; Full-Stack Developer</span> in Bengaluru.
            </h2>
            <p className="text-sm text-[#a1a1a6] leading-relaxed">
              Undergraduate in Artificial Intelligence &amp; Machine Learning at BMSIT (CGPA 9.13, Batch 2028), building domain-adapted RAG pipelines, unsupervised learning systems, and full-stack applications.
            </p>
          </div>

          {/* Three Compact Key Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-[#161619] border border-white/[0.08] font-mono">
              <div className="flex items-center space-x-2 text-[#ededed] mb-1.5 text-xs">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold uppercase tracking-wider">Education</span>
              </div>
              <p className="text-xs text-[#ededed] font-medium leading-snug">BMSIT Bengaluru</p>
              <p className="text-[11px] text-emerald-400 mt-0.5">B.E. AIML • 9.13</p>
            </div>

            <div className="p-4 rounded-xl bg-[#161619] border border-white/[0.08] font-mono">
              <div className="flex items-center space-x-2 text-[#ededed] mb-1.5 text-xs">
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-semibold uppercase tracking-wider">Focus</span>
              </div>
              <p className="text-xs text-[#ededed] font-medium leading-snug">AI &amp; Full Stack</p>
              <p className="text-[11px] text-[#9ca3af] mt-0.5">RAG, ML, Web</p>
            </div>

            <div className="p-4 rounded-xl bg-[#161619] border border-white/[0.08] font-mono">
              <div className="flex items-center space-x-2 text-[#ededed] mb-1.5 text-xs">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-semibold uppercase tracking-wider">Honors</span>
              </div>
              <p className="text-xs text-[#ededed] font-medium leading-snug">AI Fusion 1st</p>
              <p className="text-[11px] text-amber-300 mt-0.5">IEEE 4th Place</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
