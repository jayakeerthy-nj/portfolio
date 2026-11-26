import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LiquidGlassButton } from './LiquidGlassButton';
import { MotionReveal } from './MotionReveal';

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
    <section id="contact" className="relative border-b border-dashed border-[#485550]/15 py-12 md:py-16 bg-[#F4F6F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="mb-8 pb-3 border-b border-dashed border-[#485550]/15">
            <div className="flex items-center space-x-2 font-mono text-xs text-[#5C6B65] mb-1.5">
              <span className="text-[#1E2623] font-medium">// 07. CONTACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-medium tracking-tight text-[#111614]">
              Get in <span className="font-pixel font-normal text-[#111614] underline decoration-[#C0EB6A] decoration-4 underline-offset-4">Touch</span>
            </h2>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Direct Channels */}
          <MotionReveal delay={0.05} className="lg:col-span-5 space-y-4">
            <div className="bg-[#FFFFFF] border border-[#485550]/15 rounded-2xl p-5 font-mono text-xs space-y-3 shadow-xs">
              <div className="text-xs text-[#485550] pb-2 border-b border-dashed border-[#485550]/12 font-semibold">
                Direct Channels
              </div>

              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#F4F6F0] border border-[#485550]/10 hover:border-[#485550]/30 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#485550]/12 text-[#485550] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-[#5C6B65] uppercase block">Email</span>
                  <span className="text-[#1E2623] font-medium truncate block">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#5C6B65] ml-auto shrink-0 group-hover:text-[#1E2623]" />
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#F4F6F0] border border-[#485550]/10 hover:border-[#485550]/30 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#485550]/12 text-[#485550] shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-[#5C6B65] uppercase block">LinkedIn</span>
                  <span className="text-[#1E2623] font-medium truncate block">
                    linkedin.com/in/jayakeerthy-n-j-37a533334
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#5C6B65] ml-auto shrink-0 group-hover:text-[#1E2623]" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#F4F6F0] border border-[#485550]/10 hover:border-[#485550]/30 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#485550]/12 text-[#485550] shrink-0">
                  <Github className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-[#5C6B65] uppercase block">GitHub</span>
                  <span className="text-[#1E2623] font-medium truncate block">
                    github.com/jayakeerthy-nj
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#5C6B65] ml-auto shrink-0 group-hover:text-[#1E2623]" />
              </a>

              {/* Location */}
              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#F4F6F0] border border-[#485550]/10">
                <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#485550]/12 text-[#485550] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#5C6B65] uppercase block">Location</span>
                  <span className="text-[#1E2623] font-medium block">{PERSONAL_INFO.location}</span>
                  <span className="text-[11px] text-[#5C6B65] block mt-0.5">IST (UTC+05:30)</span>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#485550]/15 font-mono text-xs flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C0EB6A] ring-2 ring-[#485550]/25 shrink-0" />
              <div>
                <span className="text-[#1E2623] font-semibold block">Internship Status</span>
                <span className="text-[#5C6B65] text-[11px]">BMSIT AIML (Batch 2028) • Open to Roles</span>
              </div>
            </div>
          </MotionReveal>

          {/* Right: Contact Form */}
          <MotionReveal delay={0.1} className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#485550]/15 rounded-2xl overflow-hidden shadow-xs">
              <div className="px-4 py-3 bg-[#EAECE4]/60 border-b border-[#485550]/12 font-mono text-xs text-[#5C6B65] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#C0EB6A] ring-1 ring-[#485550]/30" />
                  <span className="text-[#1E2623] font-medium">dispatch-message.sh</span>
                </div>
                <span className="text-[11px]">DIRECT MESSAGE</span>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4" noValidate>
                {formStatus === 'submitted' ? (
                  <div className="p-6 rounded-xl bg-[#C0EB6A]/25 border border-[#485550]/20 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-[#485550] mx-auto" />
                    <h3 className="text-base font-semibold text-[#1E2623]">Message Ready</h3>
                    <p className="text-xs font-mono text-[#485550] max-w-md mx-auto">
                      Routed to <span className="text-[#1E2623] font-semibold">{PERSONAL_INFO.email}</span>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormStatus('idle')}
                      className="mt-3 px-4 py-2 rounded-lg bg-[#485550] text-xs font-mono text-[#FFFFFF] hover:bg-[#38433F] transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <>
                    {formStatus === 'error' && (
                      <div
                        role="alert"
                        className="p-3.5 rounded-lg bg-red-50 border border-red-200 flex items-center space-x-2 text-xs font-mono text-red-700"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5 font-mono text-xs">
                        <label htmlFor="contact-name" className="text-[#485550] block text-[11px] font-medium">
                          Name <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#F4F6F0] border border-[#485550]/15 focus:border-[#485550] focus:outline-none text-[#1E2623] placeholder-[#5C6B65]/60 transition-colors text-xs"
                        />
                      </div>

                      <div className="space-y-1.5 font-mono text-xs">
                        <label htmlFor="contact-email" className="text-[#485550] block text-[11px] font-medium">
                          Email <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@domain.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#F4F6F0] border border-[#485550]/15 focus:border-[#485550] focus:outline-none text-[#1E2623] placeholder-[#5C6B65]/60 transition-colors text-xs"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 font-mono text-xs">
                      <label htmlFor="contact-subject" className="text-[#485550] block text-[11px] font-medium">
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Internship / Collaboration"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F4F6F0] border border-[#485550]/15 focus:border-[#485550] focus:outline-none text-[#1E2623] placeholder-[#5C6B65]/60 transition-colors text-xs"
                      />
                    </div>

                    <div className="space-y-1.5 font-mono text-xs">
                      <label htmlFor="contact-message" className="text-[#485550] block text-[11px] font-medium">
                        Message <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F4F6F0] border border-[#485550]/15 focus:border-[#485550] focus:outline-none text-[#1E2623] placeholder-[#5C6B65]/60 transition-colors resize-none text-xs"
                      />
                    </div>

                    <div className="pt-2 flex justify-end">
                      <LiquidGlassButton
                        variant="primary"
                        type="submit"
                        disabled={formStatus === 'sending'}
                        icon={<Send className="w-3.5 h-3.5 text-[#C0EB6A]" />}
                      >
                        {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                      </LiquidGlassButton>
                    </div>
                  </>
                )}
              </form>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};
