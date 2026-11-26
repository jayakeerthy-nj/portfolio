import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { MotionReveal } from './MotionReveal';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative border-b border-dashed border-[#485550]/15 py-12 md:py-16 bg-[#F4F6F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="mb-8 pb-3 border-b border-dashed border-[#485550]/15">
            <div className="flex items-center space-x-2 font-mono text-xs text-[#5C6B65] mb-1.5">
              <span className="text-[#1E2623] font-medium">// 06. CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-medium tracking-tight text-[#111614]">
              Certifications &amp; <span className="font-pixel font-normal text-[#111614] underline decoration-[#C0EB6A] decoration-4 underline-offset-4">Achievements</span>
            </h2>
          </div>
        </MotionReveal>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CERTIFICATIONS.map((cert, index) => (
            <MotionReveal key={cert.title} delay={index * 0.05}>
              <div className="bg-[#FFFFFF] border border-[#485550]/15 rounded-2xl p-5 card-hover-lift flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-dashed border-[#485550]/12 font-mono text-xs">
                    <span className="text-[#1E2623] flex items-center gap-1.5 font-medium">
                      <Award className="w-4 h-4 text-[#485550]" />
                      {cert.type}
                    </span>
                    <span className="text-[#5C6B65]">{cert.year}</span>
                  </div>

                  <h3 className="text-base font-semibold text-[#1E2623] mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-[#5C6B65] mb-4">
                    Issued by: <span className="text-[#1E2623]">{cert.issuer}</span>
                  </p>
                </div>

                <div className="pt-3 border-t border-dashed border-[#485550]/12 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#1E2623] flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#485550]" />
                    <span className="px-1.5 py-0.5 rounded bg-[#C0EB6A]/55 text-[#1E2623] font-medium">
                      {cert.status}
                    </span>
                  </span>
                  <span className="text-[#5C6B65] text-[11px] truncate max-w-[200px]">
                    {cert.linkText}
                  </span>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
