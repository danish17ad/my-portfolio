import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction & Overview"
      className="relative min-h-[90vh] flex flex-col justify-center pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto border-b border-[#27272a]/60"
    >
      {/* Background subtle radial texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#18181b]/30 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-4xl">
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
          <span
            id="hero-eyebrow-tag"
            className="font-mono text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.2em] text-[#a1a1aa] bg-[#121214] border border-[#27272a] px-3 sm:px-3.5 py-1.5 rounded-full"
          >
            {PERSONAL_INFO.eyebrow}
          </span>
        </div>

        {/* Primary Name Headline */}
        <h1
          id="hero-candidate-name"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#fafafa] leading-[1.1] sm:leading-[1.08] mb-3"
        >
          {PERSONAL_INFO.name}
        </h1>

        {/* Target Roles Subtitle */}
        <h2
          id="hero-target-roles"
          className="font-mono text-sm sm:text-lg md:text-xl lg:text-2xl text-[#a1a1aa] font-medium tracking-wide mb-5 sm:mb-6"
        >
          {PERSONAL_INFO.title}
        </h2>

        {/* Supporting Narrative directly from CV */}
        <p
          id="hero-supporting-narrative"
          className="text-sm sm:text-base md:text-lg text-[#a1a1aa] font-normal leading-relaxed max-w-3xl mb-8 sm:mb-10"
        >
          {PERSONAL_INFO.summary}
        </p>

        {/* CTAs - Responsive across mobile and tablet */}
        <div id="hero-actions-container" className="flex flex-col sm:flex-row sm:items-center gap-3 mb-12 sm:mb-16">
          <a
            id="hero-primary-cta"
            href="#experience"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide text-[#09090b] bg-[#fafafa] hover:bg-white rounded-full transition-all shadow-sm cursor-pointer group min-h-[44px]"
          >
            <span>Review Experience</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#09090b] group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            id="hero-projects-cta"
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium tracking-wide text-[#fafafa] hover:text-white bg-[#121214]/80 hover:bg-[#18181b] border border-[#27272a] hover:border-white/40 rounded-full transition-all cursor-pointer backdrop-blur-sm min-h-[44px]"
          >
            <span>PM Projects & Systems</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#a1a1aa]" />
          </a>

          <a
            id="hero-secondary-cta"
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium tracking-wide text-[#a1a1aa] hover:text-white bg-transparent hover:bg-[#18181b] border border-transparent hover:border-[#27272a] rounded-full transition-all cursor-pointer min-h-[44px]"
          >
            <span>Contact Me</span>
          </a>
        </div>
      </div>

      {/* Metadata Bar: Subtle 3-point status indicator */}
      <div
        id="hero-metadata-bar"
        className="mt-auto pt-6 sm:pt-8 border-t border-[#27272a] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-xs font-mono"
      >
        {/* Point 1: Location */}
        <div id="meta-indicator-location" className="flex flex-col gap-1 sm:gap-1.5">
          <span className="text-[#71717a] uppercase tracking-widest text-[10px]">Location & Mobility</span>
          <div className="flex items-center gap-2 text-[#fafafa]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fafafa]/80 shrink-0" />
            <span className="truncate">{PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Point 2: Status */}
        <div id="meta-indicator-status" className="flex flex-col gap-1 sm:gap-1.5">
          <span className="text-[#71717a] uppercase tracking-widest text-[10px]">Current Status</span>
          <div className="flex items-center gap-2 text-[#fafafa]">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="font-semibold truncate">{PERSONAL_INFO.status}</span>
          </div>
        </div>

        {/* Point 3: Focus */}
        <div id="meta-indicator-focus" className="flex flex-col gap-1 sm:gap-1.5">
          <span className="text-[#71717a] uppercase tracking-widest text-[10px]">Core PM Focus</span>
          <div className="flex items-center gap-2 text-[#fafafa]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fafafa]/80 shrink-0" />
            <span className="truncate">{PERSONAL_INFO.focus}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
