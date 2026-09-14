export interface Project {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  techStack: string[];
  achievements: string[];
  image?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  detailedDescription?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  links?: Partial<Record<ProjectLinkKind, string>>;
}

export type ProjectLinkKind = 'homepage' | 'appStore' | 'github' | 'demo' | 'blog';

export interface Career {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}
