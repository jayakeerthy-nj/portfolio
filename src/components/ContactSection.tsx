import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LiquidGlassButton } from './LiquidGlassButton';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'submitted' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      setFormStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please provide a valid email address.');
      setFormStatus('error');
      return;
    }

    setFormStatus('sending');

    // Trigger direct email composition with prefilled subject & message
    const mailtoSubject = encodeURIComponent(formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`${formData.message}\n\n---\nFrom: ${formData.name} (${formData.email})`);
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      try {
        window.location.href = mailtoUrl;
      } catch (err) {
        console.error('Mailto trigger:', err);
      }
      setFormStatus('submitted');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 450);
  };

  return (
    <section id="contact" className="relative border-b border-dashed border-white/[0.08] py-16 md:py-24 bg-[#111113] overflow-hidden">
      {/* Background ASCII Pattern */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-15 font-mono text-xs text-zinc-500">
        <div className="absolute top-12 left-1/4">// ==================== DISPATCH / TRANSMISSION ====================</div>
        <div className="absolute bottom-16 right-16">/* [PORT 443 SECURE CHANNEL READY] */</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 pb-3 border-b border-dashed border-white/[0.08]">
          <div className="flex items-center space-x-2 font-mono text-xs text-[#a1a1a6] mb-2">
            <span className="text-[#ededed] font-medium">// 08. DISPATCH</span>
            <span>•</span>
            <span className="text-[#9ca3af]">channel: &quot;Let&apos;s Build Something Together&quot;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[#ededed]">
            Let&apos;s Build Something <span className="italic text-[#a1a1a6]">Together.</span>
          </h2>
          <p className="text-[#a1a1a6] text-sm font-mono mt-1 max-w-2xl leading-relaxed">
            I&apos;m always open to connecting with developers, recruiters, engineering leaders, and AI researchers.
            Whether you have an internship opportunity, project collaboration, or technical inquiry, reach out anytime.
          </p>
        </div>

        {/* Split: Direct Channels (Left) vs Contact Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#161619] border border-white/[0.08] rounded-xl p-5 font-mono text-xs space-y-3 shadow-xl">
              <div className="text-[11px] text-[#9ca3af] uppercase tracking-wider pb-2 border-b border-dashed border-white/[0.08] font-medium">
                // DIRECT COMMUNICATIONS MATRIX
              </div>

              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-start space-x-3 p-3.5 rounded-lg bg-[#111113] border border-white/[0.06] hover:border-white/[0.18] transition-all group focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
              >
                <div className="p-2.5 rounded-md bg-[#161619] border border-white/[0.08] text-[#a1a1a6] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-[#9ca3af] uppercase block">Email Address</span>
                  <span className="text-[#ededed] font-medium group-hover:text-white transition-colors truncate block">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#71717a] ml-auto shrink-0 group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-start space-x-3 p-3.5 rounded-lg bg-[#111113] border border-white/[0.06] hover:border-white/[0.18] transition-all group focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
              >
                <div className="p-2.5 rounded-md bg-[#161619] border border-white/[0.08] text-[#a1a1a6] shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-[#9ca3af] uppercase block">LinkedIn Profile</span>
                  <span className="text-[#ededed] font-medium group-hover:text-white transition-colors truncate block">
                    linkedin.com/in/jayakeerthy-n-j-37a533334
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#71717a] ml-auto shrink-0 group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-start space-x-3 p-3.5 rounded-lg bg-[#111113] border border-white/[0.06] hover:border-white/[0.18] transition-all group focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
              >
                <div className="p-2.5 rounded-md bg-[#161619] border border-white/[0.08] text-[#a1a1a6] shrink-0">
                  <Github className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-[#9ca3af] uppercase block">GitHub Workspace</span>
                  <span className="text-[#ededed] font-medium group-hover:text-white transition-colors truncate block">
                    github.com/jayakeerthy-nj
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#71717a] ml-auto shrink-0 group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* Location */}
              <div className="flex items-start space-x-3 p-3.5 rounded-lg bg-[#111113] border border-white/[0.06]">
                <div className="p-2.5 rounded-md bg-[#161619] border border-white/[0.08] text-[#a1a1a6] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#9ca3af] uppercase block">Physical Coordinates</span>
                  <span className="text-[#ededed] font-medium block">
                    {PERSONAL_INFO.location}
                  </span>
                  <span className="text-[11px] text-[#9ca3af] block mt-0.5">Timezone: IST (UTC+05:30)</span>
                </div>
              </div>
            </div>

            {/* Quick Status Pill */}
            <div className="p-4 rounded-xl bg-[#161619] border border-white/[0.08] font-mono text-xs flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <div>
                <span className="text-[#ededed] font-semibold block">Placement &amp; Internship Status</span>
                <span className="text-[#9ca3af] text-[11px]">BMSIT AIML (Batch 2028) • Open to Engagements</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#161619] border border-white/[0.08] rounded-xl overflow-hidden shadow-xl">
              {/* Form Bar */}
              <div className="px-4 py-3 bg-[#0d0d0e] border-b border-white/[0.08] font-mono text-xs text-[#9ca3af] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-zinc-400"></span>
                  <span className="text-[#ededed] font-medium">dispatch-message.sh</span>
                </div>
                <span className="text-[11px]">DIRECT DISPATCH</span>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4" noValidate>
                {formStatus === 'submitted' ? (
                  <div className="p-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                    <h3 className="text-base font-semibold text-[#ededed]">Message Dispatched</h3>
                    <p className="text-xs font-mono text-[#a1a1a6] max-w-md mx-auto">
                      Your dispatch has been prepared and routed to <span className="text-[#ededed] font-semibold">{PERSONAL_INFO.email}</span>. I will review and reply promptly!
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormStatus('idle')}
                      className="mt-3 px-4 py-2 rounded-lg bg-[#212126] hover:bg-[#28282f] text-xs font-mono text-[#ededed] border border-white/[0.08] focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    {formStatus === 'error' && (
                      <div 
                        role="alert" 
                        className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center space-x-2 text-xs font-mono text-red-400"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5 font-mono text-xs">
                        <label htmlFor="contact-name" className="text-[#a1a1a6] block text-[11px]">
                          YOUR_NAME <span className="text-red-400" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Alex Turing"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#111113] border border-white/[0.08] focus:border-white/30 focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:outline-none text-[#ededed] placeholder-[#71717a] transition-all text-xs"
                        />
                      </div>

                      <div className="space-y-1.5 font-mono text-xs">
                        <label htmlFor="contact-email" className="text-[#a1a1a6] block text-[11px]">
                          YOUR_EMAIL <span className="text-red-400" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@domain.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#111113] border border-white/[0.08] focus:border-white/30 focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:outline-none text-[#ededed] placeholder-[#71717a] transition-all text-xs"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 font-mono text-xs">
                      <label htmlFor="contact-subject" className="text-[#a1a1a6] block text-[11px]">
                        SUBJECT / TOPIC
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. AI/ML Internship Opportunity / Research Collaboration"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#111113] border border-white/[0.08] focus:border-white/30 focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:outline-none text-[#ededed] placeholder-[#71717a] transition-all text-xs"
                      />
                    </div>

                    <div className="space-y-1.5 font-mono text-xs">
                      <label htmlFor="contact-message" className="text-[#a1a1a6] block text-[11px]">
                        MESSAGE_PAYLOAD <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your note, project inquiry, or engagement details..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#111113] border border-white/[0.08] focus:border-white/30 focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:outline-none text-[#ededed] placeholder-[#71717a] transition-all resize-none text-xs"
                      />
                    </div>

                    <div className="pt-2 flex justify-end">
                      <LiquidGlassButton
                        variant="primary"
                        type="submit"
                        disabled={formStatus === 'sending'}
                        icon={<Send className="w-3.5 h-3.5" />}
                      >
                        {formStatus === 'sending' ? 'Transmitting...' : 'Send Message'}
                      </LiquidGlassButton>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
