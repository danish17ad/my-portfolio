import React from 'react';
import { COMPETENCY_PILLARS, PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About & Core Competencies"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto border-b border-[#27272a]/60 relative z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 sm:mb-12 border-b border-[#27272a] pb-4 gap-2">
        <h2 id="about-heading" className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#a1a1aa]">
          01 / ABOUT & PROFESSIONAL OBJECTIVE
        </h2>
        <span className="font-mono text-[11px] text-[#71717a] uppercase bg-[#121214] border border-[#27272a] px-2.5 py-1 rounded-full self-start sm:self-auto">
          Summary & Strengths
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 sm:mb-16">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-8">
          <p
            id="about-narrative-text"
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#fafafa] font-normal leading-relaxed tracking-tight"
          >
            {PERSONAL_INFO.summary}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs text-[#a1a1aa]">
            <span className="text-[#71717a] w-full sm:w-auto">Target Positions:</span>
            <span className="px-3 py-1 bg-[#121214] border border-[#27272a] text-[#fafafa] rounded-full">
              Project Coordinator
            </span>
            <span className="px-3 py-1 bg-[#121214] border border-[#27272a] text-[#fafafa] rounded-full">
              PMO Specialist
            </span>
            <span className="px-3 py-1 bg-[#121214] border border-[#27272a] text-[#fafafa] rounded-full">
              Associate Project Manager
            </span>
          </div>
        </div>

        {/* Right Column: Key metrics & Coordination Philosophy */}
        <div className="lg:col-span-4 flex flex-col justify-between p-5 sm:p-6 bg-[#121214] border border-[#27272a] rounded-2xl">
          <div className="space-y-3 sm:space-y-4">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#71717a] block">
              Coordination Philosophy
            </span>
            <blockquote className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed italic border-l border-[#fafafa]/40 pl-3">
              "Ensuring deliverables progress smoothly from intake to delivery by maintaining clean data, proactive cross-team communication, and meticulous timeline tracking."
            </blockquote>
          </div>
          <div className="pt-5 mt-5 border-t border-[#27272a]/60 flex items-center justify-between text-xs font-mono text-[#71717a]">
            <span>TOTAL EXP: 1.4+ YRS</span>
            <span className="text-[#fafafa]">BBA GRADUATE</span>
          </div>
        </div>
      </div>

      {/* Core Competency Pillars */}
      <div className="pt-2 sm:pt-4">
        <div className="mb-4 sm:mb-6 flex items-center justify-between">
          <h3 id="competencies-subheading" className="text-xs font-mono uppercase tracking-widest text-[#71717a]">
            Core Competency Pillars
          </h3>
          <span className="text-[11px] font-mono text-[#71717a]">[ 4 Pillars of Execution ]</span>
        </div>

        <div
          id="competency-pillars-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4"
        >
          {COMPETENCY_PILLARS.map((pillar) => (
            <article
              key={pillar.id}
              id={`pillar-${pillar.tag}`}
              className="p-5 sm:p-6 bg-[#121214] border border-[#27272a] hover:border-[#3f3f46] transition-colors rounded-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="font-mono text-xs text-[#71717a] group-hover:text-[#fafafa] transition-colors">
                    {pillar.tag}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27272a] group-hover:bg-[#fafafa] transition-colors" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-[#fafafa] mb-2 tracking-tight">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
