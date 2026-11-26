import React from 'react';
import { MapPin } from 'lucide-react';
import { JOURNEY } from '../data/portfolioData';
import { MotionReveal } from './MotionReveal';

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="journey" className="relative border-b border-dashed border-[#485550]/15 py-12 md:py-16 bg-[#F4F6F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="mb-8 pb-3 border-b border-dashed border-[#485550]/15">
            <div className="flex items-center space-x-2 font-mono text-xs text-[#5C6B65] mb-1.5">
              <span className="text-[#1E2623] font-medium">// 05. TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-medium tracking-tight text-[#111614]">
              Engineering <span className="font-pixel font-normal text-[#111614] underline decoration-[#C0EB6A] decoration-4 underline-offset-4">Milestones</span>
            </h2>
          </div>
        </MotionReveal>

        {/* Timeline Stack */}
        <div className="space-y-5 relative before:absolute before:inset-0 before:left-3 sm:before:left-5 before:w-0.5 before:border-l before:border-dashed before:border-[#485550]/20">
          {JOURNEY.map((item, index) => {
            const isLatest = index === 0;
            return (
              <MotionReveal key={item.period} delay={index * 0.06}>
                <div className="relative pl-8 sm:pl-12 group">
                  {/* Node icon */}
                  <div
                    className={`absolute left-1.5 sm:left-3.5 top-2 w-3.5 h-3.5 rounded-full border bg-[#FFFFFF] flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isLatest ? 'border-[#485550]' : 'border-[#485550]/40'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isLatest ? 'bg-[#C0EB6A]' : 'bg-[#485550]/40'
                      }`}
                    />
                  </div>

                  {/* Milestone Card */}
                  <div className="bg-[#FFFFFF] border border-[#485550]/15 rounded-2xl p-5 card-hover-lift">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-3 border-b border-dashed border-[#485550]/12 font-mono text-xs">
                      <div className="flex items-center space-x-2">
                        <span className="text-[#1E2623] font-medium">{item.period}</span>
                        <span className="text-[#485550]/30">•</span>
                        <span className="text-[#5C6B65] flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#485550]" />
                          {item.location}
                        </span>
                      </div>

                      {item.badge && (
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#C0EB6A]/55 text-[#1E2623] font-semibold">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-semibold text-[#1E2623] mb-0.5">
                      {item.role}
                    </h3>
                    <div className="text-xs font-mono text-[#5C6B65] mb-3">
                      @ {item.organization}
                    </div>

                    <p className="text-xs sm:text-sm text-[#485550] font-sans leading-relaxed mb-3">
                      {item.description}
                    </p>

                    <div className="space-y-1.5 font-mono text-xs text-[#485550] pt-2 border-t border-dashed border-[#485550]/12">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <span className="text-[#1E2623] mt-0.5">•</span>
                          <span className="font-sans text-xs">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
