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
      es: "Aplicación web fullstack para la administración integral de salones de belleza. POS, inventario, reportes financieros y panel de métricas desde una interfaz moderna.",
      en: "Fullstack web application for comprehensive beauty salon management. POS, inventory, financial reports, and metrics dashboard from a modern interface.",
    },
    longDescription: {
      es: "BelezaSystem centraliza la operación completa de un salón de belleza en una sola plataforma. Cuenta con un catálogo de servicios y productos organizado por categorías (cabello, coloración, uñas, depilación, maquillaje) y un punto de venta que permite procesar pedidos combinando servicios y productos con control de stock en tiempo real. El panel de métricas muestra los totales de ventas del día, semana y mes con barras de progreso hacia metas definidas. Los reportes de ventas ofrecen vistas diaria, semanal y mensual, además de un panel avanzado con análisis por rangos de fechas personalizados, productos más vendidos y estadísticas de ingresos. Todo el sistema cuenta con autenticación segura con JWT y sesiones persistentes.",
      en: "BelezaSystem centralizes the complete operation of a beauty salon in a single platform. It features a service and product catalog organized by categories (hair, coloring, nails, waxing, makeup) and a point of sale that processes orders combining services and products with real-time stock control. The metrics dashboard displays daily, weekly, and monthly sales totals with progress bars toward defined goals. Sales reports offer daily, weekly, and monthly views, plus an advanced panel with custom date range analysis, best-selling products, and revenue statistics. The entire system includes secure JWT authentication with persistent sessions.",
    },
    cover: "/images/proyectos/belezasystem/coverImagen.png",
    logo: "/images/proyectos/belezasystem/favicon.svg",
    video: "/images/proyectos/belezasystem/beleza-systemVideo.mov",
    tags: ["Next.js", "TypeScript", "NestJS", "GraphQL", "Apollo Client", "MongoDB", "ShadCN/UI", "Tailwind CSS", "JWT", "Docker"],
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    period: "2024 – 2025",
  },
];
