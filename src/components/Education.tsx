import React from 'react';
import { MapPin } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      aria-label="Academic Background & Credentials"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto border-b border-[#27272a]/60 relative z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 sm:mb-12 border-b border-[#27272a] pb-4 gap-2">
        <div>
          <h2 id="education-heading" className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#a1a1aa]">
            05 / EDUCATION
          </h2>
          <p className="text-xs text-[#71717a] mt-1 font-mono">
            Academic Credentials & Commerce / Business Studies
          </p>
        </div>
        <span className="font-mono text-[11px] text-[#71717a] uppercase bg-[#121214] border border-[#27272a] px-2.5 py-1 rounded-full self-start sm:self-auto">
          Academic Credentials
        </span>
      </div>

      {/* Minimalist chronological list */}
      <div id="education-list" className="space-y-4 sm:space-y-6 max-w-4xl">
        {EDUCATION_DATA.map((item, idx) => (
          <article
            key={item.id}
            id={`education-item-${item.id}`}
            className="p-5 sm:p-6 md:p-8 bg-[#121214] border border-[#27272a] hover:border-[#3f3f46] transition-colors rounded-2xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-3 mb-3 border-b border-[#27272a]/60 pb-4">
              <div>
                <span className="font-mono text-xs text-[#71717a] block mb-1">
                  QUALIFICATION 0{idx + 1}
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#fafafa] tracking-tight">
                  {item.degree}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#a1a1aa] font-medium mt-1 flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span>{item.institution}</span>
                  {item.location && (
                    <>
                      <span className="text-[#71717a]">•</span>
                      <span className="text-xs font-mono text-[#71717a] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#71717a] shrink-0" />
                        {item.location}
                      </span>
                    </>
                  )}
                </p>
              </div>

              <div className="font-mono text-xs text-[#fafafa] bg-[#09090b] border border-[#27272a] px-3 py-1 rounded-full self-start sm:self-auto shrink-0">
                {item.period}
              </div>
            </div>

            {item.focus && (
              <p className="text-xs sm:text-sm text-[#a1a1aa] font-mono leading-relaxed">
                Academic Focus: <span className="text-[#fafafa]">{item.focus}</span>
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
