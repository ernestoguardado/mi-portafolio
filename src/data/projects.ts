import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "futbolify",
    title: "Futbolify",
    description: {
      es: "Red social de fútbol con feeds, perfiles de jugador, seguimiento entre usuarios y chat en tiempo real. Activa con entre 1,000 y 10,000 usuarios.",
      en: "Football social network with feeds, player profiles, user following, and real-time chat. Active with 1,000–10,000 users.",
    },
    longDescription: {
      es: "Futbolify conecta a jugadores y aficionados al fútbol en una red social especializada. Los usuarios pueden crear su perfil de jugador, publicar en un feed personalizado, seguir a otros jugadores y ver su actividad en tiempo real. Cuenta con un sistema de chat en vivo para comunicarse directamente, notificaciones de actividad y un explorador de perfiles para descubrir jugadores cercanos. El feed inteligente prioriza contenido relevante según los intereses y conexiones de cada usuario, y el sistema soporta carga de videos e imágenes para compartir momentos del juego.",
      en: "Futbolify connects players and football fans in a specialized social network. Users can create their player profile, post on a personalized feed, follow other players, and see their activity in real time. It features a live chat system for direct communication, activity notifications, and a profile explorer to discover nearby players. The smart feed prioritizes relevant content based on each user's interests and connections, and the system supports video and image uploads to share game moments.",
    },
    cover: "/images/proyectos/futbolify/cover.jpg",
    logo: "/images/proyectos/futbolify/logo.avif",
    video: "/images/proyectos/futbolify/futbolifyVid.mp4",
    images: [
      "/images/proyectos/futbolify/futbolifyTeam.jpg",
      "/images/proyectos/futbolify/486481395_1135500908587922_1584580168185565883_n.jpg",
      "/images/proyectos/futbolify/486526989_1135500991921247_8233200016031249962_n.jpg",
      "/images/proyectos/futbolify/487101137_1139441768193836_4546006382305246019_n.jpg",
      "/images/proyectos/futbolify/Screenshot 2026-06-30 at 10.15.53.png",
      "/images/proyectos/futbolify/Screenshot 2026-06-30 at 10.16.00.png",
      "/images/proyectos/futbolify/Screenshot 2026-06-30 at 10.16.07.png",
      "/images/proyectos/futbolify/Screenshot 2026-06-30 at 10.16.12.png",
      "/images/proyectos/futbolify/Screenshot 2026-06-30 at 10.16.18.png",
    ],
    tags: ["Next.js", "React", "TypeScript", "GraphQL", "Apollo Client", "Tailwind CSS", "Framer Motion", "Jest"],
    role: { es: "Frontend Developer", en: "Frontend Developer" },
    period: "Diciembre 2021 – Enero 2024",
  },
  {
    id: "belezasystem",
    title: "BelezaSystem",
    description: {
      es: "Sistema de punto de venta para negocio de belleza multi-sede que atiende más de 800 clientes semanales. Gestión de ventas, inventario, clientes y reportes en tiempo real.",
      en: "Point of sale system for a multi-location beauty business serving 800+ customers per week. Real-time management of sales, inventory, customers, and reports.",
    },
    longDescription: {
      es: "BelezaSystem digitaliza la operación completa de un negocio de belleza con varias sedes. Desde el punto de venta los empleados registran servicios y productos, aplican descuentos y generan recibos al instante. El sistema centraliza el inventario de cada sede, alertando cuando un producto está por agotarse. Los administradores pueden ver reportes de ventas diarios, semanales y mensuales por sede, exportarlos en PDF y comparar el rendimiento entre sucursales. Incluye gestión de clientes con historial de visitas y consumo, control de acceso por roles para empleados y administradores, y un panel de control con métricas clave del negocio en tiempo real.",
      en: "BelezaSystem digitalizes the complete operation of a multi-location beauty business. From the point of sale, employees register services and products, apply discounts, and generate receipts instantly. The system centralizes inventory per location, alerting when a product is running low. Administrators can view daily, weekly, and monthly sales reports per branch, export them as PDF, and compare performance across locations. It includes customer management with visit and purchase history, role-based access control for employees and administrators, and a real-time dashboard with key business metrics.",
    },
    cover: "/images/proyectos/belezasystem/coverImagen.png",
    logo: "/images/proyectos/belezasystem/favicon.svg",
    video: "/images/proyectos/belezasystem/beleza-systemVideo.mov",
    tags: ["Next.js", "TypeScript", "NestJS", "GraphQL", "Apollo Client", "MongoDB", "ShadCN/UI", "Tailwind CSS", "JWT", "Docker"],
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    period: "2024 – 2025",
  },
];
