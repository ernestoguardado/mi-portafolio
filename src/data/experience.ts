import { Experience } from '@/types';

export const experience: Experience[] = [
  {
    id: 'exp-2',
    company: 'Reservation Management Platform',
    role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    period: 'Marzo 2024 – Octubre 2025',
    description: {
      es: 'Desarrollé una plataforma de gestión de reservaciones para un negocio multi-sede con más de 800 clientes por semana. Construí interfaces con React/TypeScript y servicios backend con NestJS y MongoDB. Implementé esquemas GraphQL, autenticación JWT y pipelines de CI/CD en Vercel.',
      en: 'Developed a reservation management platform for a multi-location business serving 800+ customers per week. Built scalable UIs with React/TypeScript and backend services using NestJS and MongoDB. Implemented GraphQL schemas, JWT-based authentication, and CI/CD pipelines on Vercel.',
    },
  },
  {
    id: 'exp-1',
    company: 'Futbolify',
    role: { es: 'Desarrollador Frontend', en: 'Frontend Developer' },
    period: 'Diciembre 2021 – Enero 2024',
    description: {
      es: 'Desarrollé y mantuve interfaces responsive con React, TypeScript, Tailwind CSS, Apollo Client y GraphQL para una plataforma de 1,000–10,000 usuarios. Colaboré en equipos Agile Scrum para entregar funcionalidades como feeds sociales, perfiles y chat. Optimicé el rendimiento mejorando la carga de video e implementando estrategias de caché.',
      en: 'Developed and maintained responsive UIs using React, TypeScript, Tailwind CSS, Apollo Client, and GraphQL for a platform serving 1,000–10,000 users. Collaborated in Agile Scrum teams to deliver social feeds, profiles, and chat. Optimized performance by improving video loading and implementing caching strategies.',
    },
  },
];
