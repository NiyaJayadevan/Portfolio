export interface PersonalInfo {
  name: string;
  title: string;
  degree: string;
  institution: string;
  batch: string;
  location: string;
  email: string;
  phone: string;
  about: string;
  status: string;
}

export interface SkillItem {
  name: string;
  proficiency: 'Familiar' | 'Intermediate' | 'Proficient';
  iconName?: string;
  tag?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  type: string;
  period?: string;
  summary: string;
  fullDescription: string;
  techStack: string[];
  keyFeatures: string[];
  architectureNotes?: string;
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
  metrics?: { label: string; value: string }[];
}

export interface Achievement {
  id: string;
  title: string;
  award: string;
  organization: string;
  description: string;
  keyTakeaways: string[];
  badgeText: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string[];
}

export interface SoftSkill {
  title: string;
  description: string;
}
