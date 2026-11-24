import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative border-b border-dashed border-white/[0.08] py-16 md:py-24 bg-[#111113]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 pb-3 border-b border-dashed border-white/[0.08]">
          <div className="flex items-center space-x-2 font-mono text-xs text-[#a1a1a6] mb-2">
            <span className="text-[#ededed] font-medium">// 07. CREDENTIALS</span>
            <span>•</span>
            <span className="text-[#9ca3af]">status: &quot;Learning Never Stops&quot;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[#ededed]">
            Certifications &amp; <span className="italic text-[#a1a1a6]">Achievements</span>
          </h2>
          <p className="text-[#a1a1a6] text-sm font-mono mt-1">
            Verified coursework, workshops, technical events &amp; continuous learning tracks.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="bg-[#161619] border border-white/[0.08] rounded-xl p-5 hover:border-white/[0.18] transition-all shadow-md flex flex-col justify-between card-3d-hover"
            >
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-dashed border-white/[0.08] font-mono text-xs">
                  <span className="text-[#ededed] flex items-center gap-1.5 font-medium">
                    <Award className="w-4 h-4 text-zinc-400" />
                    {cert.type}
                  </span>
                  <span className="text-[#9ca3af]">{cert.year}</span>
                </div>

                <h3 className="text-base font-semibold text-[#ededed] mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-[#a1a1a6] mb-4">
                  Issued by: <span className="text-[#ededed]">{cert.issuer}</span>
                </p>
              </div>

              <div className="pt-3 border-t border-dashed border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <span className="text-[#ededed] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                  {cert.status}
                </span>
                <span className="text-[#9ca3af] text-[11px] truncate max-w-[200px]">
                  {cert.linkText}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet note */}
        <div className="mt-8 p-3.5 bg-[#161619] rounded-xl border border-dashed border-white/[0.08] font-mono text-xs text-[#a1a1a6] flex items-start space-x-2.5">
          <span className="text-zinc-400 font-bold">&gt;&gt;</span>
          <p className="leading-relaxed">
            <span className="text-[#ededed] font-medium">Customization Note:</span> This section is fully modular and easy to update with your exact certification serial IDs, issuing organization certificates, and direct credential verification URLs in <code className="text-[#ededed]">src/data/portfolioData.ts</code>.
          </p>
        </div>
      </div>
    </section>
  );
};
