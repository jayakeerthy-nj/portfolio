import React, { useState } from 'react';
import { ArrowRight, Code2, GraduationCap, MapPin, Target, Eye, Trophy, Award, Users } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FolderFloat } from './FolderFloat';
import { TechText } from './TechText';
import { LiquidGlassButton } from './LiquidGlassButton';

export const AboutProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'code' | 'rendered'>('code');

  return (
    <section id="about" className="relative border-b border-dashed border-white/[0.08] py-16 md:py-24 bg-[#111113] overflow-hidden">
      {/* Background ASCII Comment lines */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-15 font-mono text-xs text-zinc-500">
        <div className="absolute top-8 left-1/4">// ==================== .scope-profile ====================</div>
        <div className="absolute bottom-12 right-12">// ++++++++++++++++++++ TECHNICAL PERSONA ++++++++++++++++++++</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading Tag */}
        <div className="flex items-center space-x-2 font-mono text-xs text-[#a1a1a6] mb-8 pb-2 border-b border-dashed border-white/[0.08]">
          <span className="text-[#ededed] font-medium">// 02. ABOUT &amp; PROFILE</span>
          <span className="text-zinc-600">•</span>
          <span className="text-[#9ca3af]">spec: &quot;BMSIT / AIML Engineer&quot;</span>
        </div>

        {/* Split Layout: Code Pane (Left) vs Persona & Skills (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ================= LEFT SIDE: MOCK CODE EDITOR PANE ================= */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-[#161619] border border-white/[0.08] rounded-xl overflow-hidden shadow-xl card-3d-hover">
              {/* Code Editor Tab Bar */}
              <div className="flex items-center justify-between px-3 h-10 bg-[#0d0d0e] border-b border-white/[0.08] font-mono text-xs">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-[#161619] border-t-2 border-t-zinc-400 text-[#ededed] flex items-center gap-1.5 rounded-t font-medium">
                    <Code2 className="w-3.5 h-3.5 text-zinc-400" />
                    profile.html
                  </span>
                  <button 
                    onClick={() => setActiveTab(activeTab === 'code' ? 'rendered' : 'code')}
                    className="px-2.5 py-1 rounded text-[#9ca3af] hover:text-[#ededed] hover:bg-[#212126] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    {activeTab === 'code' ? 'preview-output' : 'source-code'}
                  </button>
                </div>
                <div className="flex items-center space-x-1.5 text-[#9ca3af] text-[11px]">
                  <span>HTML5</span>
                  <span>•</span>
                  <span>UTF-8</span>
                </div>
              </div>

              {/* Verified Engineering Notice */}
              <div className="p-3 bg-[#1c1c20] border-b border-dashed border-white/[0.08] text-xs font-mono text-[#a1a1a6] flex items-start space-x-2.5">
                <span className="text-emerald-400 font-bold">▲</span>
                <p className="leading-snug">
                  BMSIT AIML Engineering (CGPA 9.13). Actively engineering intelligent AI systems, RAG pipelines, and full-stack software applications.
                </p>
              </div>

              {/* Syntax Highlighted HTML / Monospace Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-[#a1a1a6] bg-[#111113]">
                {activeTab === 'code' ? (
                  <div className="space-y-3">
                    <div className="text-[#9ca3af] italic">&lt;!-- start .scope-profile --&gt;</div>
                    <div>
                      <span className="syntax-tag">&lt;section </span>
                      <span className="syntax-attr">class</span>=
                      <span className="syntax-string">&quot;scope-profile&quot;</span>
                      <span className="syntax-tag">&gt;</span>
                    </div>

                    <div className="pl-4">
                      <span className="syntax-tag">&lt;h3&gt;</span>
                      <span className="text-[#ededed] font-semibold">PROFILE</span>
                      <span className="syntax-tag">&lt;/h3&gt;</span>
                    </div>

                    <div className="pl-4 space-y-3">
                      <div>
                        <span className="syntax-tag">&lt;p&gt;</span>
                        <br />
                        <span className="text-[#ededed] pl-2 block">
                          Hi, I&apos;m N J Jayakeerthy — an Artificial Intelligence &amp; Machine Learning Engineering student at B.M.S. Institute of Technology and Management, Bengaluru (CGPA: 9.13).
                        </span>
                        <span className="syntax-tag">&lt;/p&gt;</span>
                      </div>

                      <div>
                        <span className="syntax-tag">&lt;p&gt;</span>
                        <br />
                        <span className="text-[#ededed] pl-2 block">
                          I specialize in building intelligent systems, domain-adapted RAG architectures, predictive machine learning pipelines, and algorithmic game engines.
                        </span>
                        <span className="syntax-tag">&lt;/p&gt;</span>
                      </div>

                      <div>
                        <span className="syntax-tag">&lt;p&gt;</span>
                        <br />
                        <span className="text-[#ededed] pl-2 block">
                          Honored as 1st Place Winner at AI Fusion Challenge Hackathon 2026 and 4th Place at IEEE Winter of Projects 2025 for my AI Chess Rival engine.
                        </span>
                        <span className="syntax-tag">&lt;/p&gt;</span>
                      </div>

                      <div>
                        <span className="syntax-tag">&lt;p&gt;</span>
                        <br />
                        <span className="text-[#ededed] pl-2 block">
                          As an engineering undergraduate at BMSIT, I combine technical rigor in machine learning algorithms with full-stack web and systems engineering.
                        </span>
                        <span className="syntax-tag">&lt;/p&gt;</span>
                      </div>
                    </div>

                    <div>
                      <span className="syntax-tag">&lt;/section&gt;</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 p-4 bg-[#161619] rounded-lg border border-white/[0.08] text-[#a1a1a6] font-sans">
                    <h4 className="text-xs font-mono text-[#ededed] uppercase tracking-wider font-semibold">Rendered Summary</h4>
                    <p className="text-sm leading-relaxed text-[#ededed]">
                      I&apos;m an Artificial Intelligence &amp; Machine Learning Engineering undergraduate at BMS Institute of Technology and Management, Bengaluru, with a 9.13 CGPA.
                    </p>
                    <p className="text-sm leading-relaxed text-[#a1a1a6]">
                      I design and implement intelligent systems spanning Generative AI, Retrieval-Augmented Generation (RAG), Scikit-Learn predictive modeling, and tree-search heuristic algorithms.
                    </p>
                  </div>
                )}
              </div>

              {/* Lower Preview Drawer */}
              <div className="p-3 bg-[#0d0d0e] border-t border-dashed border-white/[0.08] flex items-center justify-between font-mono text-xs">
                <div className="flex items-center space-x-2 text-[#9ca3af]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>preview-jayakeerthy.tsx</span>
                </div>
                <a
                  href="#projects"
                  className="px-3 py-1 rounded bg-[#212126] hover:bg-[#28282f] text-[#ededed] font-medium text-[11px] transition-colors flex items-center gap-1 border border-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <Eye className="w-3 h-3" />
                  <span>View Projects</span>
                </a>
              </div>
            </div>

            {/* Projects Quick Folder */}
            <div className="p-3.5 pt-7 rounded-xl bg-[#161619] border border-white/[0.08] flex items-center justify-center">
              <FolderFloat label="Projects" sublabel="Verified engineering implementations" />
            </div>
          </div>

          {/* ================= RIGHT SIDE: CONTENT & SKILLS TABLE ================= */}
          <div className="lg:col-span-6 space-y-6">
            {/* Bold Heading with LTC Bodoni 175 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal tracking-tight text-[#ededed] leading-snug">
              The technical persona of <TechText text="N J Jayakeerthy" className="text-[#ededed] font-medium" />, an <span className="italic text-[#a1a1a6]">AI/ML engineer &amp; full-stack developer</span> based in Bengaluru (IN)
            </h2>

            {/* Tactile Liquid Glass Button */}
            <a href="#projects" className="block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-xl">
              <LiquidGlassButton 
                variant="primary" 
                className="w-full py-3.5 text-sm"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Projects &amp; Lab Artifacts
              </LiquidGlassButton>
            </a>

            {/* Three Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-[#161619] border border-white/[0.08] font-mono card-3d-hover">
                <div className="flex items-center space-x-2 text-[#ededed] mb-1 text-xs">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-semibold uppercase tracking-wider">Education</span>
                </div>
                <p className="text-xs text-[#ededed] font-medium leading-snug">
                  BMSIT Bengaluru
                </p>
                <p className="text-[11px] text-emerald-400 mt-0.5">B.E. AIML • 9.13 CGPA</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#161619] border border-white/[0.08] font-mono card-3d-hover">
                <div className="flex items-center space-x-2 text-[#ededed] mb-1 text-xs">
                  <Code2 className="w-3.5 h-3.5 text-blue-400" />
                  <span className="font-semibold uppercase tracking-wider">Engineering</span>
                </div>
                <p className="text-xs text-[#ededed] font-medium leading-snug">
                  Full Stack &amp; Systems
                </p>
                <p className="text-[11px] text-[#9ca3af] mt-0.5">Modern Web &amp; Scalable APIs</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#161619] border border-white/[0.08] font-mono card-3d-hover">
                <div className="flex items-center space-x-2 text-[#ededed] mb-1 text-xs">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-semibold uppercase tracking-wider">Honors</span>
                </div>
                <p className="text-xs text-[#ededed] font-medium leading-snug">
                  AI Fusion 1st Place
                </p>
                <p className="text-[11px] text-amber-300 mt-0.5">IEEE 4th Place</p>
              </div>
            </div>

            {/* Overlapping Brutalist "Skills" Headline in LTC Bodoni 175 */}
            <div className="pt-4">
              <div 
                aria-hidden="true" 
                className="select-none pointer-events-none font-serif text-white/[0.035] tracking-tightest leading-none text-6xl sm:text-7xl uppercase mb-[-1.8rem] z-0"
              >
                Skills
              </div>

              {/* Data Table for Skills (Fine Thought Style) */}
              <div className="bg-[#161619] border border-white/[0.08] rounded-xl overflow-hidden relative z-10 shadow-lg">
                <div className="px-4 py-2.5 bg-[#0d0d0e] border-b border-white/[0.08] font-mono text-xs text-[#9ca3af] flex items-center justify-between">
                  <span className="text-[#ededed] font-medium">// TECHNICAL SKILLS DATA MATRIX</span>
                  <span className="text-[11px]">BMSIT AIML LAB</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-dashed border-white/[0.08] bg-[#111113] text-[#9ca3af] text-[11px]">
                        <th className="py-2.5 px-3 font-medium text-[#ededed]">/ AI &amp; ML</th>
                        <th className="py-2.5 px-3 font-medium text-[#ededed]">/ LANGUAGES</th>
                        <th className="py-2.5 px-3 font-medium text-[#ededed]">/ DATA</th>
                        <th className="py-2.5 px-3 font-medium text-[#ededed]">/ FULL STACK</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-dashed divide-white/[0.06] text-[11.5px]">
                      <tr className="hover:bg-white/[0.03] transition-colors">
                        <td className="py-2 px-3 text-[#ededed]">RAG Systems</td>
                        <td className="py-2 px-3 text-[#ededed]">Python</td>
                        <td className="py-2 px-3 text-[#ededed]">Pandas</td>
                        <td className="py-2 px-3 text-[#ededed]">React / Vite</td>
                      </tr>
                      <tr className="hover:bg-white/[0.03] transition-colors">
                        <td className="py-2 px-3 text-[#a1a1a6]">Deep Learning</td>
                        <td className="py-2 px-3 text-[#a1a1a6]">C Programming</td>
                        <td className="py-2 px-3 text-[#a1a1a6]">NumPy</td>
                        <td className="py-2 px-3 text-[#a1a1a6]">TypeScript</td>
                      </tr>
                      <tr className="hover:bg-white/[0.03] transition-colors">
                        <td className="py-2 px-3 text-[#a1a1a6]">NLP &amp; LLMs</td>
                        <td className="py-2 px-3 text-[#a1a1a6]">Algorithms</td>
                        <td className="py-2 px-3 text-[#a1a1a6]">Matplotlib</td>
                        <td className="py-2 px-3 text-[#a1a1a6]">Tailwind CSS</td>
                      </tr>
                      <tr className="hover:bg-white/[0.03] transition-colors">
                        <td className="py-2 px-3 text-[#9ca3af]">IBM Granite</td>
                        <td className="py-2 px-3 text-[#9ca3af]">Game Theory</td>
                        <td className="py-2 px-3 text-[#9ca3af]">Seaborn</td>
                        <td className="py-2 px-3 text-[#9ca3af]">REST APIs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
