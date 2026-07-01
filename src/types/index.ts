export interface Project {
  id: string;
  title: string;
  description: { es: string; en: string };
  longDescription?: { es: string; en: string };
  image?: string;
  cover?: string;
  logo?: string;
  images?: string[];
  tags: string[];
  github?: string;
  demo?: string;
  role?: { es: string; en: string };
  period?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: { es: string; en: string };
  period: string;
  description: { es: string; en: string };
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'databases' | 'tools';
  level: number;
}

export interface Education {
  id: string;
  institution: string;
  degree: { es: string; en: string };
  period: string;
  description?: { es: string; en: string };
}

export type Language = 'es' | 'en';
export type Theme = 'light' | 'dark';
