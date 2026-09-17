import React, { useEffect, useState } from 'react';
import { X, Printer, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, SKILL_CLUSTERS, EDUCATION_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlainText = () => {
    const plain = `
A D MOHAMMED DANISH
Project Coordinator | PMO | Associate Project Manager
Bengaluru, Karnataka, India | ad.danishwork@gmail.com | linkedin.com/in/danish-profile1736

SUMMARY
BBA graduate with 1.4 years of experience as an Operations Executive and experience as a Data Research Analyst Intern, supporting coordination, research, reporting, data validation, and process improvement. Proficient in Advanced Excel, project tracking, documentation, stakeholder communication, and dashboard reporting, with basic knowledge of Agile and Scrum methodologies. Seeking to transition into an entry-level Project Coordinator, PMO, or Associate Project Manager role.

EXPERIENCE
Data Research Analyst (Intern) | MINS Global (Feb 2026 – Apr 2026)
- Researched and validated 300+ company records using Zauba, GST, LinkedIn, and Zoho CRM while maintaining high data accuracy.
- Updated and maintained accurate business records in Zoho CRM, ensuring high standards of data quality and consistency.
- Verified company registration details, GST information, incorporation status, industry classification, and organizational information.
- Collected, organized, and maintained company profiles and decision-maker information to support business operations.
- Collaborated with cross-functional teams to complete assigned tasks efficiently while meeting quality and timeline expectations.

Operation Executive | QRTS (Apr 2024 – Jun 2025)
- Managed company social media accounts by planning, scheduling, and publishing content across multiple platforms.
- Created and edited promotional graphics, images, and banners to support digital marketing campaigns and brand visibility.
- Published and maintained social media content, ensuring accurate captions, hashtags, and consistent brand guidelines.
- Coordinated with cross-functional teams to gather content, implement revisions, and ensure timely content publication.
- Organized and maintained digital assets, including images, videos, logos, and marketing materials for efficient content management.
- Collaborated with internal teams to support day-to-day business operations and ensure smooth workflow execution.
- Completed assigned tasks within established deadlines while maintaining accuracy, quality, and compliance with operational standards.

SELF-LEARNED PRACTICE PROJECTS
1. Sprint & Task Tracking Dashboard (Self-Learned, 2025)
   Focus: Agile Task Tracker & Milestone Progress Register
   - Built a practical task and milestone tracking spreadsheet modeled on Agile Scrum workflows to practice backlog organization, daily task updates, deadline monitoring, and visual sprint completion tracking.
   - Tools: Microsoft Excel, Google Sheets, Jira (Basic), Trello.

2. Project Risk & Issue Log (Self-Learned, 2025)
   Focus: Basic RAID Register & Action Item Tracker
   - Created a self-learned RAID log to understand how project coordinators identify, document, categorize, and follow up on project roadblocks before they cause delivery delays.
   - Tools: Microsoft Excel, Google Sheets, Project Coordination Basics.

EDUCATION
- Bachelor of Business Administration (BBA) — HKBK Degree College, Bengaluru (Aug 2023 – July 2026)
- Commerce (CEBA) — Quwathul Islam Pre-University College, Bengaluru (Jun 2021 – Apr 2023)

SKILLS AND TOOLS
- Project Management: Project Planning & Coordination, Task & Timeline Tracking, Risk & Issue Tracking, Stakeholder Communication, Project Documentation, Basic Knowledge of Agile & Scrum
- Business & Analytical: Data Analysis, Data Cleaning & Validation, Data Quality Assurance, Advanced Excel, Dashboard Creation, Power BI (Basic), Market Research, Internet Research, Data Collection, Company & GST Verification, Data Entry
- Web & UI/UX: HTML & CSS, Bootstrap, Basic Frontend Development, AI-Assisted Web Development, Figma, Basic UI/UX Design
- Tools & Software: Microsoft Excel, Microsoft PowerPoint, Microsoft Word, Google Sheets, Zoho CRM, Jira, Power BI (Basic), Figma, GitHub (Basic)
- Soft Skills: Analytical Thinking, Communication, Team Collaboration, Time Management, Attention to Detail, Problem Solving

LANGUAGES
English | Hindi | Tamil
    `.trim();

    navigator.clipboard.writeText(plain);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#09090b] border border-[#27272a] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn"
      >
        {/* Modal Top Control Bar: Responsive */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-[#27272a] bg-[#121214] gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="font-mono text-xs text-[#a1a1aa] uppercase tracking-wider shrink-0">
              [ CV ]
            </span>
            <span className="font-mono text-xs text-[#71717a] truncate">
              {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              id="resume-copy-ats-btn"
              type="button"
              onClick={handleCopyPlainText}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-mono text-[#a1a1aa] hover:text-[#fafafa] bg-[#09090b] border border-[#27272a] hover:border-[#fafafa]/50 rounded-full cursor-pointer transition-colors min-h-[36px]"
              title="Copy plain text format for ATS submission"
            >
              {copiedText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span className="text-white hidden sm:inline">COPIED ATS</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">COPY ATS FORMAT</span>
                </>
              )}
            </button>

            <button
              id="resume-print-btn"
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#09090b] bg-[#fafafa] hover:bg-white rounded-full font-semibold cursor-pointer transition-colors min-h-[36px]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PRINT / PDF</span>
            </button>

            <button
              id="resume-close-modal-btn"
              type="button"
              onClick={onClose}
              className="p-1.5 text-[#a1a1aa] hover:text-[#fafafa] bg-[#09090b] border border-[#27272a] hover:border-[#fafafa]/50 rounded-full cursor-pointer transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center ml-1"
              aria-label="Close Resume Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Body */}
        <div className="p-4 sm:p-6 md:p-10 overflow-y-auto font-sans text-[#fafafa] space-y-6 sm:space-y-8 bg-[#09090b]">
          {/* Header */}
          <div className="border-b border-[#27272a] pb-5 sm:pb-6">
            <h1 id="resume-modal-title" className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-1">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xs sm:text-sm font-mono text-[#a1a1aa] uppercase tracking-wider mb-3">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-4 font-mono text-xs text-[#71717a]">
              <span>Email: <strong className="text-[#fafafa] font-normal">{PERSONAL_INFO.email}</strong></span>
              <span className="hidden sm:inline">•</span>
              <span>Location: <strong className="text-[#fafafa] font-normal">{PERSONAL_INFO.location}</strong></span>
              <span className="hidden sm:inline">•</span>
              <span>LinkedIn: <strong className="text-[#fafafa] font-normal">{PERSONAL_INFO.linkedinDisplay}</strong></span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#71717a] mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#71717a] mb-4">
              Work Experience
            </h2>
            <div className="space-y-5 sm:space-y-6">
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="border-l border-[#27272a] pl-3 sm:pl-4 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-sm sm:text-base font-bold text-[#fafafa]">
                      {exp.role} <span className="text-[#71717a]">|</span> <span className="font-medium text-[#a1a1aa]">{exp.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-[#71717a]">{exp.tenure}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#a1a1aa]">
                    {exp.scope.map((s, idx) => (
                      <li key={idx} className="leading-relaxed flex items-start gap-2">
                        <span className="text-[#fafafa] shrink-0">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects & Frameworks */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#71717a] mb-4">
              Self-Learned Practice Projects
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="p-4 bg-[#121214] border border-[#27272a] rounded-xl space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-xs sm:text-sm font-bold text-[#fafafa]">{proj.title}</h3>
                    <span className="font-mono text-xs text-[#71717a]">{proj.period}</span>
                  </div>
                  <p className="text-xs text-[#a1a1aa]">{proj.description}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.toolsUsed.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 bg-[#09090b] border border-[#27272a] rounded text-[#71717a]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#71717a] mb-4">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#27272a]/50 pb-2 gap-1">
                  <div>
                    <h3 className="text-xs font-bold text-[#fafafa]">{edu.degree}</h3>
                    <p className="text-xs text-[#a1a1aa]">{edu.institution}, {edu.location}</p>
                  </div>
                  <span className="font-mono text-xs text-[#71717a]">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Tools */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#71717a] mb-4">
              Skills & Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {SKILL_CLUSTERS.map((cl) => (
                <div key={cl.id} className="p-3 bg-[#121214] border border-[#27272a] rounded-xl">
                  <h3 className="text-xs font-bold font-mono text-[#fafafa] mb-1.5 uppercase">
                    {cl.category}
                  </h3>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed">
                    {cl.skills.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#71717a] mb-3">
              Languages
            </h2>
            <p className="text-xs text-[#fafafa] font-mono">
              {PERSONAL_INFO.languages.join('  •  ')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
