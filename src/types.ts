export interface ProjectItem {
  id: string;
  name: string;
  filename: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  techSummary: string;
  codeSnippet: string;
  stats: { label: string; value: string }[];
  award?: string;
  previewType: 'vaidya' | 'polaris' | 'chess' | 'finance' | 'health' | 'campushire' | 'churn' | 'policy' | 'aividya';
  image?: string;
  links: {
    github: string;
    demo?: string;
  };
}

export interface SkillCategory {
  title: string;
  codeKey: string;
  description: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface JourneyMilestone {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
  status: 'completed' | 'in_progress' | 'upcoming';
  badge?: string;
}

export interface InterestArea {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  technologies: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  type: string;
  linkText: string;
  status: string;
}
