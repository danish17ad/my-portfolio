export interface CompetencyPillar {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export interface ExperienceRole {
  id: string;
  role: string;
  company: string;
  tenure: string;
  type: string;
  scope: string[];
  deliverables: string[];
  impactMetrics: {
    label: string;
    value: string;
  }[];
}

export interface SkillCluster {
  id: string;
  category: string;
  number: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  description: string;
  keyContributions: string[];
  deliverables?: string[];
  toolsUsed: string[];
  status: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location?: string;
  focus?: string;
  keyCourses?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export interface RaidLogItem {
  id: string;
  type: 'Risk' | 'Assumption' | 'Issue' | 'Dependency';
  description: string;
  impact: 'High' | 'Medium' | 'Low';
  owner: string;
  status: 'Open' | 'Mitigating' | 'Resolved';
  action: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  period: string;
  context: string;
  challenge: string;
  coordinationApproach: string[];
  deliverablesProduced: string[];
  operationalOutcome: string;
}
