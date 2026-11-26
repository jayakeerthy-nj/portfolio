import React from 'react';
import { GraduationCap, Code2, Trophy } from 'lucide-react';
import { TechText } from './TechText';
import { MotionReveal } from './MotionReveal';

export const AboutProfile: React.FC = () => {
  return (
    <section id="about" className="relative border-b border-dashed border-[#485550]/15 py-12 md:py-16 bg-[#F4F6F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="flex items-center space-x-2 font-mono text-xs text-[#5C6B65] mb-6 pb-2 border-b border-dashed border-[#485550]/15">
            <span className="text-[#1E2623] font-medium">// 04. ABOUT</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Editorial Summary */}
            <div className="lg:col-span-6 space-y-3">
              <h2 className="text-2xl sm:text-3xl font-sans font-medium tracking-tight text-[#111614] leading-snug">
                <TechText text="N J Jayakeerthy" className="text-[#111614] font-semibold" /> —{' '}
                <span className="font-pixel font-normal text-[#111614] underline decoration-[#C0EB6A] decoration-4 underline-offset-4">
                  AIML Engineer &amp; Full-Stack Developer
                </span>{' '}
                in Bengaluru.
              </h2>
              <p className="text-sm text-[#485550] leading-relaxed">
                Undergraduate in Artificial Intelligence &amp; Machine Learning at BMSIT (CGPA 9.13, Batch 2028), building domain-adapted RAG pipelines, unsupervised learning systems, and full-stack applications.
              </p>
            </div>

            {/* Three Compact Key Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#485550]/15 font-mono card-hover-lift">
                <div className="flex items-center space-x-2 text-[#1E2623] mb-1.5 text-xs">
                  <GraduationCap className="w-3.5 h-3.5 text-[#485550]" />
                  <span className="font-semibold uppercase tracking-wider">Education</span>
                </div>
                <p className="text-xs text-[#1E2623] font-medium leading-snug">BMSIT Bengaluru</p>
                <p className="text-[11px] text-[#485550] mt-0.5 font-semibold">B.E. AIML • 9.13</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#485550]/15 font-mono card-hover-lift">
                <div className="flex items-center space-x-2 text-[#1E2623] mb-1.5 text-xs">
                  <Code2 className="w-3.5 h-3.5 text-[#485550]" />
                  <span className="font-semibold uppercase tracking-wider">Focus</span>
                </div>
                <p className="text-xs text-[#1E2623] font-medium leading-snug">AI &amp; Full Stack</p>
                <p className="text-[11px] text-[#5C6B65] mt-0.5">RAG, ML, Web</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#485550]/15 font-mono card-hover-lift">
                <div className="flex items-center space-x-2 text-[#1E2623] mb-1.5 text-xs">
                  <Trophy className="w-3.5 h-3.5 text-[#485550]" />
                  <span className="font-semibold uppercase tracking-wider">Honors</span>
                </div>
                <p className="text-xs text-[#1E2623] font-medium leading-snug">AI Fusion 1st</p>
                <p className="text-[11px] text-[#485550] mt-0.5 font-semibold">IEEE 4th Place</p>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};
