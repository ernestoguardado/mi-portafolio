import { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React.js', category: 'frontend', level: 90 },
  { name: 'Next.js', category: 'frontend', level: 88 },
  { name: 'TypeScript', category: 'frontend', level: 85 },
  { name: 'JavaScript (ES6+)', category: 'frontend', level: 90 },
  { name: 'Tailwind CSS', category: 'frontend', level: 88 },
  { name: 'Redux', category: 'frontend', level: 75 },
  { name: 'Apollo Client', category: 'frontend', level: 80 },
  { name: 'GraphQL', category: 'frontend', level: 80 },

  // Backend
  { name: 'NestJS', category: 'backend', level: 80 },
  { name: 'Node.js', category: 'backend', level: 82 },
  { name: 'Express.js', category: 'backend', level: 78 },
  { name: 'REST APIs', category: 'backend', level: 85 },
  { name: 'JWT Authentication', category: 'backend', level: 80 },

  // Databases
  { name: 'MongoDB', category: 'databases', level: 78 },
  { name: 'Mongoose', category: 'databases', level: 75 },

  // Cloud & DevOps
  { name: 'Docker', category: 'tools', level: 70 },
  { name: 'GitHub Actions', category: 'tools', level: 72 },
  { name: 'Vercel', category: 'tools', level: 85 },
  { name: 'Git', category: 'tools', level: 88 },
  { name: 'Jest', category: 'tools', level: 70 },
];
