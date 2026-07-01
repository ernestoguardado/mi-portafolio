import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "futbolify",
    title: "Futbolify",
    description: {
      es: "Plataforma social de fútbol con feeds, perfiles y chat en tiempo real. Desarrollada con React, TypeScript, Apollo Client y GraphQL, sirviendo entre 1,000 y 10,000 usuarios activos.",
      en: "Football social platform with feeds, profiles, and real-time chat. Built with React, TypeScript, Apollo Client, and GraphQL, serving 1,000–10,000 active users.",
    },
    longDescription: {
      es: "Futbolify es una plataforma social enfocada en el fútbol donde los usuarios pueden seguir a otros jugadores, publicar en feeds, crear perfiles personalizados y comunicarse en tiempo real mediante chat. Participé como Frontend Developer colaborando en equipos Agile Scrum, entregando funcionalidades core como feeds sociales, perfiles y chat. También optimicé el rendimiento mejorando la carga de video e implementando estrategias de caché.",
      en: "Futbolify is a football-focused social platform where users can follow other players, post on feeds, create personalized profiles, and communicate in real time through chat. I worked as a Frontend Developer collaborating in Agile Scrum teams, delivering core features like social feeds, profiles, and chat. I also optimized performance by improving video loading and implementing caching strategies.",
    },
    cover: "/images/proyectos/futbolify/cover.jpg",
    logo: "/images/proyectos/futbolify/logo.avif",
    images: [
      "/images/proyectos/futbolify/486481395_1135500908587922_1584580168185565883_n.jpg",
      "/images/proyectos/futbolify/486526989_1135500991921247_8233200016031249962_n.jpg",
      "/images/proyectos/futbolify/487101137_1139441768193836_4546006382305246019_n.jpg",
      "/images/proyectos/futbolify/Screenshot 2026-06-30 at 10.15.53.png",
      "/images/proyectos/futbolify/Screenshot 2026-06-30 at 10.16.00.png",
      "/images/proyectos/futbolify/Screenshot 2026-06-30 at 10.16.07.png",
      "/images/proyectos/futbolify/Screenshot 2026-06-30 at 10.16.12.png",
      "/images/proyectos/futbolify/Screenshot 2026-06-30 at 10.16.18.png",
    ],
    tags: ["React", "TypeScript", "GraphQL", "Apollo Client", "Tailwind CSS"],
    github: "https://github.com/ernestoguardado",
    role: { es: "Frontend Developer", en: "Frontend Developer" },
    period: "Diciembre 2021 – Enero 2024",
  },
  {
    id: "reservation-platform",
    title: "Reservation Management Platform",
    description: {
      es: "Plataforma de gestión de reservaciones para negocio multi-sede con 800+ clientes semanales. Stack completo con React, NestJS, MongoDB, autenticación JWT y CI/CD en Vercel.",
      en: "Reservation management platform for a multi-location business serving 800+ customers per week. Full stack with React, NestJS, MongoDB, JWT authentication, and CI/CD on Vercel.",
    },
    tags: ["React", "NestJS", "MongoDB", "GraphQL", "JWT", "Vercel", "Docker"],
    github: "https://github.com/ernestoguardado",
  },
];
