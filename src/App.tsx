import React, { useState } from 'react';
import { InteractiveBackground } from './components/InteractiveBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div
      id="portfolio-app-root"
      className="relative min-h-screen bg-[#09090b] text-[#fafafa] flex flex-col selection:bg-[#fafafa] selection:text-[#09090b] overflow-x-hidden"
    >
      {/* Interactive Cursor-Responsive Background Canvas */}
      <InteractiveBackground />

      {/* Floating Curved Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Area */}
      <main id="main-content-flow" className="flex-1 w-full relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* 01 / About Section */}
        <About />

        {/* 02 / Experience Section */}
        <Experience />

        {/* 03 / Projects Section */}
        <Projects />

        {/* 04 / Skills & Tools */}
        <Skills />

        {/* 05 / Education */}
        <Education />

        {/* 06 / Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Executive Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
