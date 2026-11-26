import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, GraduationCap, Github, Linkedin, Mail, FileText, Trophy, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ShapeWaves } from './ShapeWaves';
import { LiquidGlassButton } from './LiquidGlassButton';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
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
      className="relative min-h-[82vh] border-b border-dashed border-[#485550]/15 overflow-hidden flex flex-col justify-between pt-14 md:pt-20 pb-12 bg-[#F4F6F0]"
    >
      {/* Interactive Motion Field */}
      <ShapeWaves />

      {/* Subtle Overlapping Background Typography */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-10 md:top-14 select-none pointer-events-none text-right font-pixel text-[#485550]/[0.05] tracking-tightest leading-[0.82] text-[5.5rem] sm:text-[8rem] md:text-[11rem] lg:text-[13rem] z-0 uppercase overflow-hidden"
      >
        <span className="block translate-x-6 md:translate-x-10">Intelligent</span>
        <span className="block translate-x-3 md:translate-x-6">Systems</span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Metadata Line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#5C6B65] mb-8 pb-2.5 border-b border-dashed border-[#485550]/15"
        >
          <span className="text-[#1E2623] font-medium">// 01. INITIALIZE</span>
          <span className="text-[#485550]/30">•</span>
          <span>const engineer = &quot;N J Jayakeerthy&quot;;</span>
          <span className="text-[#485550]/30 hidden sm:inline">•</span>
          <span className="hidden sm:inline">location: &quot;Bengaluru, IN&quot;</span>
          <span className="ml-auto inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C0EB6A] text-[#1E2623] text-[11px] font-semibold">
            CGPA 9.13 • Batch 2028
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Display Headline: Neue Montreal + NeueBit Pairing */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.35rem] font-sans font-medium tracking-[-0.03em] text-[#111614] leading-[1.06]">
              Crafting intelligent systems through{' '}
              <span className="font-pixel font-normal text-[#111614] tracking-tight underline decoration-[#C0EB6A] decoration-4 underline-offset-4">
                code &amp; machine learning
              </span>
            </h1>

            {/* Dynamic Role Indicator */}
            <div className="flex items-center space-x-2.5 font-mono text-sm md:text-base text-[#5C6B65] h-7">
              <span className="text-[#485550] font-semibold">&gt;</span>
              <span>Focus:</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="text-[#1E2623] font-medium px-2 py-0.5 rounded bg-[#C0EB6A]/45"
                >
                  {PERSONAL_INFO.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Supporting Description */}
            <p className="text-[#485550] text-sm md:text-base max-w-xl font-normal leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Verified Achievements */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#485550]/15 font-mono text-xs text-[#1E2623] shadow-xs">
                <Trophy className="w-3.5 h-3.5 text-[#485550]" />
                <span>1st Place — AI Fusion Hackathon 2026</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#485550]/15 font-mono text-xs text-[#1E2623] shadow-xs">
                <Award className="w-3.5 h-3.5 text-[#485550]" />
                <span>4th Place — IEEE Winter of Projects 2025</span>
              </div>
            </div>

            {/* Action Buttons: 1 Primary, 1 Secondary */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#projects" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#485550] rounded-lg">
                <LiquidGlassButton
                  variant="primary"
                  icon={<ArrowRight className="w-3.5 h-3.5 text-[#C0EB6A]" />}
                >
                  Explore Projects
                </LiquidGlassButton>
              </a>

              <LiquidGlassButton
                variant="secondary"
                onClick={onOpenResume}
                icon={<FileText className="w-3.5 h-3.5" />}
              >
                View Resume
              </LiquidGlassButton>
            </div>
          </motion.div>

          {/* Right Column: Clean White & Slate Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 mt-2 lg:mt-0"
          >
            <div className="bg-[#FFFFFF] border border-[#485550]/15 rounded-2xl p-5 shadow-[0_14px_34px_-14px_rgba(72,85,80,0.16)] card-hover-lift">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#485550]/10 text-xs font-mono text-[#5C6B65]">
                <span className="text-[#1E2623] flex items-center gap-2 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#C0EB6A] ring-1 ring-[#485550]/30" />
                  jayakeerthy.profile
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-[#C0EB6A]/50 text-[#1E2623] font-semibold">
                  CGPA: 9.13
                </span>
              </div>

              {/* Avatar & Specs */}
              <div className="pt-4 space-y-4">
                <div className="flex items-center space-x-3.5">
                  <div className="w-14 h-14 rounded-xl bg-[#485550] flex items-center justify-center font-mono font-semibold text-lg text-[#C0EB6A] shadow-sm">
                    JK
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#1E2623]">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs font-mono text-[#485550] flex items-center gap-1 mt-0.5">
                      <GraduationCap className="w-3.5 h-3.5" />
                      BMSIT Bengaluru (AIML)
                    </p>
                    <p className="text-[11px] font-mono text-[#5C6B65] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      Bengaluru, Karnataka, IN
                    </p>
                  </div>
                </div>

                {/* Specs Table */}
                <div className="bg-[#F4F6F0] rounded-xl border border-[#485550]/10 p-3.5 font-mono text-xs space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-2 border-b border-[#485550]/10">
                    <span className="text-[#5C6B65] flex-none">Degree:</span>
                    <span className="text-[#1E2623] sm:text-right font-medium text-[11px]">
                      BE in Artificial intelligence and machine learning
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-[#485550]/10">
                    <span className="text-[#5C6B65]">CGPA:</span>
                    <span className="text-[#1E2623] font-semibold bg-[#C0EB6A]/60 px-1.5 py-0.5 rounded">
                      9.13 (Batch 2028)
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="text-[#5C6B65] flex-none">Specialization:</span>
                    <span className="text-[#1E2623] sm:text-right font-medium text-[11px]">
                      Unsupervised Learning, ML Algorithms, RAG
                    </span>
                  </div>
                </div>

                {/* Social Connect Bar */}
                <div className="pt-1 flex items-center justify-between gap-2 font-mono text-xs">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center space-x-1.5 py-2 rounded-lg bg-[#F4F6F0] hover:bg-[#485550] border border-[#485550]/15 text-[#485550] hover:text-[#FFFFFF] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center space-x-1.5 py-2 rounded-lg bg-[#F4F6F0] hover:bg-[#485550] border border-[#485550]/15 text-[#485550] hover:text-[#FFFFFF] transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex-1 flex items-center justify-center space-x-1.5 py-2 rounded-lg bg-[#F4F6F0] hover:bg-[#485550] border border-[#485550]/15 text-[#485550] hover:text-[#FFFFFF] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
