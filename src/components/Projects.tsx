import React from 'react';
import { FolderKanban, CheckCircle2, Wrench, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      aria-label="Self-Learned PM Practice Projects"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto border-b border-[#27272a]/60 relative z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 sm:mb-12 border-b border-[#27272a] pb-4 gap-2">
        <div>
          <h2 id="projects-heading" className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#a1a1aa]">
            03 / PROJECTS
          </h2>
          <p className="text-xs text-[#71717a] mt-1 font-mono">
            Self-Learned Task Tracking & Operational Practice Frameworks
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-[#71717a] uppercase bg-[#121214] border border-[#27272a] px-2.5 py-1 rounded-full">
            2 Practice Projects
          </span>
        </div>
      </div>

      {/* Projects Grid: 1 col on mobile/tablet portrait, 2 cols on lg desktop */}
      <div id="projects-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <article
            key={project.id}
            id={`project-card-${project.id}`}
            className="group p-5 sm:p-6 md:p-8 bg-[#121214]/90 backdrop-blur-sm border border-[#27272a] hover:border-[#fafafa]/50 rounded-2xl transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/20 hover:shadow-black/40 relative overflow-hidden"
          >
            {/* Top subtle highlight gradient */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            />

            <div>
              {/* Card Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 bg-[#09090b] border border-[#27272a] rounded-lg text-[#fafafa]">
                    <FolderKanban className="w-4 h-4 text-[#fafafa]" />
                  </span>
                  <span className="font-mono text-xs text-[#71717a] font-semibold">
                    PROJECT 0{index + 1}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#fafafa] bg-[#09090b] border border-[#27272a] px-2.5 py-0.5 rounded-full">
                    {project.period}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#a1a1aa] bg-[#18181b] border border-[#27272a] px-2 py-0.5 rounded-full">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#fafafa] mb-1 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-[#a1a1aa] mb-4">
                {project.subtitle}
              </p>

              {/* Role badge */}
              <div className="inline-flex items-center gap-1.5 mb-5 px-2.5 py-1 bg-[#09090b] border border-[#27272a] rounded-md text-xs font-mono text-[#a1a1aa]">
                <Layers className="w-3.5 h-3.5 text-[#71717a]" />
                <span>Focus: <strong className="text-[#fafafa] font-normal">{project.role}</strong></span>
              </div>

              {/* Project Description */}
              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Key Implementation Points Section */}
              <div className="mb-6">
                <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#71717a] mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#a1a1aa]" />
                  <span>Key Features & Implementation</span>
                </h4>
                <ul className="space-y-2.5">
                  {project.keyContributions.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="font-mono text-xs text-[#fafafa] mt-0.5 select-none shrink-0">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tools Used Footer */}
            <div className="pt-4 border-t border-[#27272a]/80 mt-2">
              <div className="flex items-center gap-1.5 mb-2">
                <Wrench className="w-3 h-3 text-[#71717a]" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717a]">
                  Tools Practiced
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.toolsUsed.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-xs font-mono text-[#a1a1aa] bg-[#09090b] border border-[#27272a] rounded-full"
                  >
                    {tool}
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
