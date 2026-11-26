import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { LineNumbers } from './components/LineNumbers';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutProfile } from './components/AboutProfile';
import { JourneyTimeline } from './components/JourneyTimeline';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TerminalDrawer } from './components/TerminalDrawer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section for top IDE tabs with throttled requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const sections = ['hero', 'projects', 'skills', 'about', 'journey', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut Ctrl + ~ to toggle terminal like in VS Code
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === '`' || e.key === '~')) {
        e.preventDefault();
        setTerminalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F4F6F0] text-[#1E2623] flex flex-col selection:bg-[#C0EB6A] selection:text-[#1E2623] font-sans">
      {/* Top IDE Tab Bar / Navbar */}
      <Navbar 
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Container with Left Code-Editor Line Number Rail (Finethought style) */}
      <div className="flex flex-1 pt-20">
        {/* Left gutter with line numbers */}
        <LineNumbers totalLines={200} />

        {/* Core Content Area */}
        <main className="flex-1 min-w-0 overflow-x-hidden">
          <Hero 
            onOpenTerminal={() => setTerminalOpen(true)}
            onOpenResume={() => setResumeOpen(true)}
          />
          <ProjectsSection />
          <SkillsSection />
          <AboutProfile />
          <JourneyTimeline />
          <CertificationsSection />
          <ContactSection />
          <Footer onOpenTerminal={() => setTerminalOpen(true)} />
        </main>
      </div>

      {/* Interactive VS Code style Terminal Drawer */}
      <TerminalDrawer 
        isOpen={terminalOpen} 
        onClose={() => setTerminalOpen(false)}
        onOpenResume={() => {
          setTerminalOpen(false);
          setResumeOpen(true);
        }}
      />

      {/* Resume Viewer / Download Modal */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />
    </div>
  );
};

export default App;
