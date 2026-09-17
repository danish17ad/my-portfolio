import { CompetencyPillar, ExperienceRole, SkillCluster, EducationItem, ProjectItem } from '../types';

export const PERSONAL_INFO = {
  name: 'A D Mohammed Danish',
  title: 'Project Coordinator | PMO | Associate Project Manager',
  eyebrow: '[ PROJECT COORDINATOR • PMO • ASSOCIATE PROJECT MANAGER ]',
  email: 'ad.danishwork@gmail.com',
  linkedin: 'https://www.linkedin.com/in/danish-profile1736',
  linkedinDisplay: 'linkedin.com/in/danish-profile1736',
  location: 'Bengaluru, Karnataka, India',
  status: 'Actively Interviewing',
  availability: 'Available for Remote, Hybrid & On-site Roles',
  focus: 'Sprint & Task Tracking, Data Validation, Operations & Reporting',
  summary:
    'BBA graduate with 1.4 years of experience as an Operations Executive and experience as a Data Research Analyst Intern, supporting coordination, research, reporting, data validation, and process improvement. Proficient in Advanced Excel, project tracking, documentation, stakeholder communication, and dashboard reporting, with basic knowledge of Agile and Scrum methodologies. Seeking to transition into an entry-level Project Coordinator, PMO, or Associate Project Manager role.',
  languages: ['English', 'Hindi', 'Tamil'],
};

export const COMPETENCY_PILLARS: CompetencyPillar[] = [
  {
    id: 'pillar-coordination',
    tag: '01',
    title: 'Project Coordination & Tracking',
    description:
      'Task & timeline tracking, milestone adherence, project documentation, and risk/issue tracking across cross-functional teams.',
  },
  {
    id: 'pillar-stakeholder',
    tag: '02',
    title: 'Stakeholder Communication',
    description:
      'Facilitating clear handoffs, status alignment, requirement gathering, and proactive problem resolution to eliminate delivery lag.',
  },
  {
    id: 'pillar-analytics',
    tag: '03',
    title: 'Data & Dashboard Reporting',
    description:
      'Data cleaning, validation, quality assurance, advanced Excel lookups, and visual dashboard creation for executive decision-making.',
  },
  {
    id: 'pillar-process',
    tag: '04',
    title: 'Operations & Process Improvement',
    description:
      'Standardizing operational workflows, managing digital assets, multi-channel scheduling, and maintaining audit-ready CRM consistency.',
  },
];

export const EXPERIENCE_DATA: ExperienceRole[] = [
  {
    id: 'role-mins-global',
    role: 'Data Research Analyst (Intern)',
    company: 'MINS Global',
    tenure: 'Feb 2026 – Apr 2026',
    type: 'Internship',
    scope: [
      'Researched and validated 300+ company records using Zauba, GST, LinkedIn, and Zoho CRM while maintaining high data accuracy.',
      'Updated and maintained accurate business records in Zoho CRM, ensuring high standards of data quality and consistency.',
      'Verified company registration details, GST information, incorporation status, industry classification, and organizational information.',
      'Collected, organized, and maintained company profiles and decision-maker information to support business operations.',
      'Collaborated with cross-functional teams to complete assigned tasks efficiently while meeting quality and timeline expectations.',
    ],
    deliverables: [
      '300+ Researched & Validated Company Records',
      'Zoho CRM Record Sanitization & Consistency Logs',
      'Zauba & GST Official Corporate Registration Verifications',
      'Decision-Maker Intelligence & Org Hierarchy Files',
    ],
    impactMetrics: [
      { label: 'Validated Records', value: '300+' },
      { label: 'Verification Tools', value: 'Zauba & GST' },
      { label: 'CRM Platform', value: 'Zoho CRM' },
    ],
  },
  {
    id: 'role-qrts',
    role: 'Operation Executive',
    company: 'QRTS',
    tenure: 'Apr 2024 – Jun 2025',
    type: 'Full-time / Operational Support',
    scope: [
      'Managed company social media accounts by planning, scheduling, and publishing content across multiple platforms.',
      'Created and edited promotional graphics, images, and banners to support digital marketing campaigns and brand visibility.',
      'Published and maintained social media content, ensuring accurate captions, hashtags, and consistent brand guidelines.',
      'Coordinated with cross-functional teams to gather content, implement revisions, and ensure timely content publication.',
      'Organized and maintained digital assets, including images, videos, logos, and marketing materials for efficient content management.',
      'Collaborated with internal teams to support day-to-day business operations and ensure smooth workflow execution.',
      'Completed assigned tasks within established deadlines while maintaining accuracy, quality, and compliance with operational standards.',
    ],
    deliverables: [
      'Cross-Platform Scheduling & Publication Calendars',
      'Centralized Digital Asset Management Repository',
      'Cross-Functional Content Review & Revision Workflows',
      'Day-to-Day Operational Execution & SLA Compliance Reports',
    ],
    impactMetrics: [
      { label: 'Operational Tenure', value: '1.2+ Yrs' },
      { label: 'Execution', value: 'Cross-Functional' },
      { label: 'Compliance', value: '100% SLA' },
    ],
  },
];

export const SKILL_CLUSTERS: SkillCluster[] = [
  {
    id: 'skills-project-management',
    number: '01',
    category: 'Project Management',
    skills: [
      'Project Planning & Coordination',
      'Task & Timeline Tracking',
      'Risk & Issue Tracking',
      'Stakeholder Communication',
      'Project Documentation',
      'Basic Knowledge of Agile & Scrum',
    ],
  },
  {
    id: 'skills-business-analytics',
    number: '02',
    category: 'Business & Analytical Skills',
    skills: [
      'Data Analysis',
      'Data Cleaning & Validation',
      'Data Quality Assurance',
      'Advanced Excel',
      'Dashboard Creation',
      'Power BI (Basic)',
      'Market Research',
      'Internet Research',
      'Data Collection',
      'Company & GST Verification',
      'Data Entry',
    ],
  },
  {
    id: 'skills-tools-software',
    number: '03',
    category: 'Tools & Software',
    skills: [
      'Microsoft Excel',
      'Microsoft PowerPoint',
      'Microsoft Word',
      'Google Sheets',
      'Zoho CRM',
      'Jira',
      'Power BI (Basic)',
      'Figma',
      'GitHub (Basic)',
    ],
  },
  {
    id: 'skills-web-uiux',
    number: '04',
    category: 'Web & UI/UX',
    skills: [
      'HTML & CSS',
      'Bootstrap',
      'Basic Frontend Development',
      'AI-Assisted Web Development',
      'Figma',
      'Basic UI/UX Design',
    ],
  },
  {
    id: 'skills-soft-skills',
    number: '05',
    category: 'Soft Skills & Leadership',
    skills: [
      'Analytical Thinking',
      'Communication',
      'Team Collaboration',
      'Time Management',
      'Attention to Detail',
      'Problem Solving',
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-bba',
    degree: 'Bachelor of Business Administration (BBA)',
    institution: 'HKBK Degree College',
    location: 'Bengaluru',
    period: 'Aug 2023 – July 2026',
    focus: 'Operations Management, Business Reporting & Quantitative Analysis',
  },
  {
    id: 'edu-ceba',
    degree: 'Commerce (CEBA)',
    institution: 'Quwathul Islam Pre-University College',
    location: 'Bengaluru',
    period: 'Jun 2021 – Apr 2023',
    focus: 'Computer Science, Economics, Business Studies & Accountancy',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'pm-project-sprint-tracking',
    title: 'Sprint & Task Tracking Dashboard (Self-Learned)',
    subtitle: 'Agile Task Tracker & Milestone Progress Register',
    role: 'Self-Learned Practice Project',
    period: '2025',
    status: 'Practice Project',
    description:
      'Built a practical task and milestone tracking spreadsheet modeled on Agile Scrum workflows to practice backlog organization, daily task updates, deadline monitoring, and visual sprint completion tracking.',
    keyContributions: [
      'Created a structured task tracker with statuses (To Do, In Progress, Blocked, Done) to practice daily task management.',
      'Set up fields for task owners, target deadlines, priority levels (High/Medium/Low), and blocker notes.',
      'Implemented Excel / Google Sheets conditional formatting to highlight overdue deliverables and completion status.',
      'Designed a simple sprint summary table calculating total completed tasks vs. pending tasks.',
    ],
    toolsUsed: ['Microsoft Excel', 'Google Sheets', 'Jira (Basic)', 'Trello'],
  },
  {
    id: 'pm-project-risk-log',
    title: 'Project Risk & Issue Log (Self-Learned)',
    subtitle: 'Basic RAID Register & Action Item Tracker',
    role: 'Self-Learned Practice Project',
    period: '2025',
    status: 'Practice Project',
    description:
      'Created a self-learned RAID log (Risks, Assumptions, Issues, Dependencies) to understand how project coordinators identify, document, categorize, and follow up on project roadblocks before they cause delivery delays.',
    keyContributions: [
      'Designed an issue intake log capturing description, root cause, impact level, and assigned owner.',
      'Established a simple priority ranking matrix to practice identifying urgent operational blockers.',
      'Tracked resolution target dates and progress notes to simulate weekly stakeholder status reporting.',
      'Built an overview summary card displaying open issues count and resolution status.',
    ],
    toolsUsed: ['Microsoft Excel', 'Google Sheets', 'Project Coordination Basics'],
  },
];

