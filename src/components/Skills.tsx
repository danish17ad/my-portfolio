import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { SKILL_CLUSTERS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [copiedSkill, setCopiedSkill] = useState<string | null>(null);

  const handleCopySkill = (skill: string) => {
    navigator.clipboard.writeText(skill);
    setCopiedSkill(skill);
    setTimeout(() => {
      setCopiedSkill(null);
    }, 1800);
  };

  return (
    <section
      id="skills"
      aria-label="Skills and Capabilities"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto border-b border-[#27272a]/60 relative z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 sm:mb-12 border-b border-[#27272a] pb-4 gap-2">
        <div>
          <h2 id="skills-heading" className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#a1a1aa]">
            04 / SKILLS & TOOLS
          </h2>
          <p className="text-xs text-[#71717a] mt-1 font-mono">
            Core Methodologies, Tools, and Technical Proficiencies
          </p>
        </div>
        <span className="font-mono text-[11px] text-[#71717a] uppercase bg-[#121214] border border-[#27272a] px-2.5 py-1 rounded-full self-start sm:self-auto">
          5 Skill Clusters
        </span>
      </div>

      {/* Grid of Clusters: Responsive across mobile, tablet, and desktop */}
      <div id="skills-clusters-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {SKILL_CLUSTERS.map((cluster) => (
          <div
            key={cluster.id}
            id={`cluster-${cluster.id}`}
            className="p-5 sm:p-6 bg-[#121214] border border-[#27272a] rounded-xl flex flex-col justify-between hover:border-[#3f3f46] transition-colors"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-[#27272a] pb-3 mb-4 sm:mb-5">
                <div>
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#71717a] block mb-0.5">
                    CLUSTER {cluster.number}
                  </span>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#fafafa] tracking-tight">
                    {cluster.category}
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#71717a] bg-[#09090b] border border-[#27272a] px-2 py-0.5 rounded">
                  {cluster.skills.length}
                </span>
              </div>

              {/* Skills List as typographic tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {cluster.skills.map((skill, sIdx) => {
                  const isCopied = copiedSkill === skill;
                  return (
                    <button
                      key={sIdx}
                      type="button"
                      onClick={() => handleCopySkill(skill)}
                      title="Click to copy skill name"
                      className="group inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-[#a1a1aa] hover:text-[#fafafa] bg-[#09090b] hover:bg-[#18181b] border border-[#27272a] hover:border-[#fafafa]/50 rounded-md transition-all cursor-pointer text-left min-h-[34px]"
                    >
                      <span className="font-medium">{skill}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                        {isCopied ? (
                          <Check className="w-3 h-3 text-[#fafafa]" />
                        ) : (
                          <Copy className="w-3 h-3 text-[#71717a]" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
