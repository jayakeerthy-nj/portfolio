import React from 'react';
import { MapPin } from 'lucide-react';
import { JOURNEY } from '../data/portfolioData';

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="journey" className="relative border-b border-dashed border-white/[0.08] py-12 md:py-16 bg-[#111113]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 pb-3 border-b border-dashed border-white/[0.08]">
          <div className="flex items-center space-x-2 font-mono text-xs text-[#a1a1a6] mb-1.5">
            <span className="text-[#ededed] font-medium">// 05. TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal tracking-tight text-[#ededed]">
            Engineering <span className="italic text-[#a1a1a6]">Milestones</span>
          </h2>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 sm:before:left-5 before:w-0.5 before:border-l before:border-dashed before:border-white/[0.12]">
          {JOURNEY.map((item, index) => {
            const isLatest = index === 0;
            const isUpcoming = item.status === 'upcoming';
            return (
              <div
                key={item.period}
                className="relative pl-8 sm:pl-12 group"
              >
                {/* Node icon */}
                <div className={`absolute left-1.5 sm:left-3.5 top-1.5 w-3.5 h-3.5 rounded-full border bg-[#111113] flex items-center justify-center transition-transform group-hover:scale-110 ${
                  isUpcoming 
                    ? 'border-white/30' 
                    : isLatest 
                      ? 'border-white' 
                      : 'border-white/40'
                }`}>
                  <span className={`w-1 h-1 rounded-full ${
                    isUpcoming 
                      ? 'bg-zinc-400' 
                      : isLatest 
                        ? 'bg-white' 
                        : 'bg-zinc-400'
                  }`} />
                </div>

                {/* Milestone Card */}
                <div className="bg-[#161619] border border-white/[0.08] rounded-xl p-5 hover:border-white/[0.18] transition-all shadow-md card-3d-hover">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-3 border-b border-dashed border-white/[0.08] font-mono text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="text-[#ededed] font-medium">{item.period}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-[#9ca3af] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-zinc-400" />
                        {item.location}
                      </span>
                    </div>

                    {item.badge && (
                      <span className={`px-2 py-0.5 rounded text-[11px] font-mono border ${
                        isUpcoming
                          ? 'bg-white/[0.04] text-[#a1a1a6] border-white/[0.08]'
                          : isLatest
                            ? 'bg-white/[0.08] text-[#ededed] border-white/15'
                            : 'bg-white/[0.04] text-[#a1a1a6] border-white/[0.08]'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-semibold text-[#ededed] mb-0.5">
                    {item.role}
                  </h3>
                  <div className="text-xs font-mono text-[#9ca3af] mb-3">
                    @ {item.organization}
                  </div>

                  <p className="text-xs sm:text-sm text-[#a1a1a6] font-sans leading-relaxed mb-3">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 font-mono text-xs text-[#a1a1a6] pt-2 border-t border-dashed border-white/[0.08]">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <span className="text-[#ededed] mt-0.5">•</span>
                        <span className="text-[#a1a1a6] font-sans text-xs">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
