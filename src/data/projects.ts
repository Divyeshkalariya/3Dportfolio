export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Tiles Catalogue",
    description:
      "A comprehensive tiles catalogue CRM system built for managing product listings, customer inquiries, and sales pipeline with advanced filtering and real-time updates.",
    tech: ["Next.js", "MUI", "Redux Toolkit", "CRM Integration"],
    github: "https://github.com/divyeshpatel",
    live: "#",
    color: "#00f5ff",
  },
  {
    id: 2,
    title: "SitePace.ai",
    description:
      "AI-powered frontend dashboard for monitoring site performance metrics, real-time analytics, and intelligent recommendations for construction project management.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/divyeshpatel",
    live: "#",
    color: "#bf00ff",
  },
  {
    id: 3,
    title: "SMS Gateway",
    description:
      "Full-featured SMS campaign management platform with bulk messaging, scheduling, delivery tracking, and analytics dashboard for enterprise communication.",
    tech: ["React", "Node.js", "Redux", "Material UI"],
    github: "https://github.com/divyeshpatel",
    live: "#",
    color: "#ff0080",
  },
];
