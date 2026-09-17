import React from 'react';
import { FileCheck, Building2, Calendar } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto border-b border-[#27272a]/60 relative z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 sm:mb-12 border-b border-[#27272a] pb-4 gap-2">
        <div>
          <h2 id="experience-heading" className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#a1a1aa]">
            02 / EXPERIENCE
          </h2>
          <p className="text-xs text-[#71717a] mt-1 font-mono">
            Operational & Data Research Record (1.4+ Years)
          </p>
        </div>
        <span className="font-mono text-[11px] text-[#71717a] uppercase bg-[#121214] border border-[#27272a] px-2.5 py-1 rounded-full self-start sm:self-auto">
          2 Industry Engagements
        </span>
      </div>

      {/* Timeline entries */}
      <div id="experience-timeline" className="space-y-12 sm:space-y-16">
        {EXPERIENCE_DATA.map((item, index) => (
          <article
            key={item.id}
            id={`experience-entry-${item.id}`}
            className="group relative border-l border-[#27272a] pl-4 sm:pl-6 md:pl-10 transition-all hover:border-[#fafafa]"
          >
            {/* Timeline Dot Indicator */}
            <div
              className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#27272a] group-hover:bg-[#fafafa] transition-colors"
              aria-hidden="true"
            />

            {/* Header row: Role, Company, and Tenure */}
            <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-2 mb-5 sm:mb-6">
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="font-mono text-xs text-[#71717a]">
                    ROLE 0{index + 1}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#a1a1aa] bg-[#121214] border border-[#27272a] px-2 py-0.5 rounded-full">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#fafafa]">
                  {item.role}
                </h3>
                <p className="text-sm sm:text-base text-[#a1a1aa] font-medium mt-1 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#71717a] shrink-0" />
                  <span>{item.company}</span>
                </p>
              </div>

              <div className="font-mono text-xs sm:text-sm text-[#71717a] lg:text-right mt-1 lg:mt-0 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#71717a] shrink-0" />
                <span className="text-[#fafafa] font-semibold">{item.tenure}</span>
              </div>
            </div>

            {/* Impact Metric Chips: 1 col on mobile, 3 cols on tablet & desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8 max-w-xl">
              {item.impactMetrics.map((metric, mIdx) => (
                <div
                  key={mIdx}
                  className="p-3 bg-[#121214] border border-[#27272a] rounded-xl flex flex-col"
                >
                  <span className="font-mono text-base sm:text-lg font-bold text-[#fafafa] tracking-tight">
                    {metric.value}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[#71717a] tracking-wider mt-0.5">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Scope & Key Responsibilities */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#71717a] mb-3 sm:mb-4">
                Responsibilities & Execution Highlights
              </h4>
              <ul className="space-y-2.5 max-w-3xl">
                {item.scope.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-base text-[#a1a1aa] leading-relaxed"
                  >
                    <span className="font-mono text-xs text-[#fafafa] mt-0.5 sm:mt-1 select-none shrink-0">
                      —
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Deliverables Handed Off */}
            <div className="pt-5 border-t border-[#27272a]/60">
              <span className="text-xs font-mono uppercase tracking-widest text-[#71717a] block mb-3">
                Core Deliverables Handed Off
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {item.deliverables.map((deliv, dIdx) => (
                  <span
                    key={dIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#fafafa] bg-[#121214] border border-[#27272a] rounded-full"
                  >
                    <FileCheck className="w-3 h-3 text-[#a1a1aa] shrink-0" />
                    <span>{deliv}</span>
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
