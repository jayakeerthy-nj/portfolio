import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, MapPin, GraduationCap, Github, Linkedin, Mail, FileText, Trophy, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TechText } from './TechText';
import { ShapeWaves } from './ShapeWaves';
import { LiquidGlassButton } from './LiquidGlassButton';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-[88vh] border-b border-dashed border-white/[0.08] overflow-hidden flex flex-col justify-between pt-16 md:pt-24 pb-12 perspective-1000 bg-[#111113]"
    >
      {/* 3D Motion Geometric Shape Waves (Minimalist Graphite) */}
      <ShapeWaves />

      {/* Background ASCII Grid Comment Patterns (Finethought style) */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-15 font-mono text-xs text-zinc-500 overflow-hidden z-0">
        <div className="absolute top-6 left-12">/* ======================================================== */</div>
        <div className="absolute top-16 right-20">// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++</div>
        <div className="absolute top-44 left-1/3 text-zinc-600">/// [AI_ENGINE_INITIALIZED] - BMSIT AIML NODE ACTIVE</div>
        <div className="absolute bottom-24 right-1/4">/* ****************************************************** */</div>
        <div className="absolute bottom-10 left-20">// --------------------------------------------------------</div>
      </div>

      {/* Massive Overlapping Background Typography (Finethought "Fine / Thought" style with LTC Bodoni 175) */}
      <div 
        aria-hidden="true" 
        className="absolute right-0 top-10 md:top-14 select-none pointer-events-none text-right font-serif text-white/[0.025] tracking-tightest leading-[0.82] text-[5.5rem] sm:text-[8rem] md:text-[11rem] lg:text-[14rem] z-0 uppercase overflow-hidden"
      >
        <span className="block translate-x-8 md:translate-x-12">Intelligent</span>
        <span className="block translate-x-4 md:translate-x-8">Systems</span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Code Editor Header Line */}
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#a1a1a6] mb-6 pb-2 border-b border-dashed border-white/[0.08]">
          <span className="text-[#ededed] font-medium">// 01. INITIALIZE</span>
          <span className="text-zinc-600">•</span>
          <span className="text-[#a1a1a6]">const engineer = &quot;N J Jayakeerthy&quot;;</span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="text-[#9ca3af] hidden sm:inline">location: &quot;Bengaluru, IN&quot;</span>
          <span className="ml-auto text-[11px] text-zinc-400 font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            CGPA: 9.13 • Node active
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Small Introductory Tag with Tech Text */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#161619] border border-white/[0.08] text-xs font-mono text-[#a1a1a6] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="tracking-wider uppercase font-medium">Hello, I&apos;m</span>
              <TechText text="Jayakeerthy" className="text-[#ededed] font-semibold" />
            </div>

            {/* Massive Heading Styled with LTC Bodoni 175 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif font-normal tracking-[-0.02em] text-[#ededed] leading-[1.12]">
              Crafting intelligent systems through{' '}
              <span className="italic text-[#a1a1a6]">code &amp; machine learning.</span>
            </h1>

            {/* Dynamic Role Indicator */}
            <div className="flex items-center space-x-2.5 font-mono text-sm md:text-base text-[#a1a1a6] py-0.5">
              <span className="text-zinc-500">&gt;</span>
              <span className="text-[#9ca3af]">Focus:</span>
              <span className="text-[#ededed] font-medium">
                {PERSONAL_INFO.roles[roleIndex]}
              </span>
              <span className="inline-block w-1.5 h-4 bg-zinc-400 animate-pulse ml-0.5" />
            </div>

            {/* Supporting Description */}
            <p className="text-[#a1a1a6] text-sm md:text-base max-w-2xl font-normal leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Verified Achievements Bar */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#161619] border border-white/[0.08] font-mono text-xs text-[#ededed]">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>1st Place — AI Fusion Hackathon 2026</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#161619] border border-white/[0.08] font-mono text-xs text-[#ededed]">
                <Award className="w-3.5 h-3.5 text-blue-400" />
                <span>4th Place — IEEE Winter of Projects 2025</span>
              </div>
            </div>

            {/* Minimalist Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#projects" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg">
                <LiquidGlassButton 
                  variant="primary" 
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Explore My Projects
                </LiquidGlassButton>
              </a>

              <a href="#contact" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg">
                <LiquidGlassButton variant="secondary">
                  Let&apos;s Connect
                </LiquidGlassButton>
              </a>

              <LiquidGlassButton 
                variant="secondary"
                onClick={onOpenResume}
                icon={<FileText className="w-3.5 h-3.5 text-zinc-400" />}
              >
                Resume (CGPA 9.13)
              </LiquidGlassButton>

              <LiquidGlassButton 
                variant="secondary"
                onClick={onOpenTerminal}
                icon={<Terminal className="w-3.5 h-3.5 text-zinc-400" />}
              >
                Terminal
              </LiquidGlassButton>
            </div>
          </div>

          {/* Right Column: Clean Graphite Profile Card */}
          <div className="lg:col-span-4 mt-4 lg:mt-0">
            <div className="bg-[#161619] border border-white/[0.08] rounded-xl p-5 shadow-xl relative card-3d-hover">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono text-[#9ca3af]">
                <span className="text-[#ededed] flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  jayakeerthy.profile
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold">CGPA: 9.13</span>
              </div>

              {/* Avatar & Fast Specs */}
              <div className="pt-4 space-y-4">
                <div className="flex items-center space-x-3.5">
                  <div className="relative w-14 h-14 rounded-lg bg-[#212126] border border-white/[0.08] flex items-center justify-center font-mono font-medium text-lg text-[#ededed]">
                    <span>JK</span>
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-[#161619] rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#ededed]">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs font-mono text-[#a1a1a6] flex items-center gap-1 mt-0.5">
                      <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
                      BMSIT Bengaluru (AIML)
                    </p>
                    <p className="text-[11px] font-mono text-[#9ca3af] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      Bengaluru, Karnataka, IN
                    </p>
                  </div>
                </div>

                {/* Specs Table */}
                <div className="bg-[#111113] rounded-lg border border-white/[0.06] p-3 font-mono text-xs space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-[#a1a1a6] pb-2 border-b border-white/[0.06]">
                    <span className="text-[#9ca3af] flex-none">Degree:</span>
                    <span className="text-[#ededed] sm:text-right font-medium text-[11px] sm:text-xs">
                      BE in Artificial intelligence and machine learning
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[#a1a1a6] pb-2 border-b border-white/[0.06]">
                    <span className="text-[#9ca3af]">CGPA:</span>
                    <span className="text-emerald-400 font-semibold">9.13 (Batch 2028)</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 text-[#a1a1a6]">
                    <span className="text-[#9ca3af] flex-none">Specialization:</span>
                    <span className="text-[#ededed] sm:text-right font-medium text-[11px] sm:text-xs">
                      Unsupervised Learning, ML Algorithms, RAG
                    </span>
                  </div>
                </div>

                {/* Social Connect Bar */}
                <div className="pt-1 flex items-center justify-between font-mono text-xs">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#212126] hover:bg-[#28282f] border border-white/[0.08] text-[#a1a1a6] hover:text-[#ededed] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#212126] hover:bg-[#28282f] border border-white/[0.08] text-[#a1a1a6] hover:text-[#ededed] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#212126] hover:bg-[#28282f] border border-white/[0.08] text-[#a1a1a6] hover:text-[#ededed] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
