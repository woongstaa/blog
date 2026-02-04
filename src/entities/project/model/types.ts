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
  links?: {
    github?: string;
    demo?: string;
    blog?: string;
    homepage?: string;
    appStore?: string;
  };
}

export interface Career {
  company: string;
  role: string;
  period: string;
  description: string;
  projects: string[];
}
