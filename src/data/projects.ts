export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  live: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Orbatic Catalogue",
    description:
      "A Multi-Industry ERP & Catalogue Management System for Tiles, Marble, Laminates, and Sanitaryware, featuring custom and full catalogue creation, customer and order management, stock management, and complete domestic and export documentation workflows.",
    tech: ["Next.js", "Typescript", "MUI", "CSS", "Redux Toolkit", "Web Socket", "Chart.js", "CRM Integration"],
    live: "https://portal.tilescatalogue.com/",
    color: "#00f5ff",
  },
  {
    id: 2,
    title: "SitePace.ai",
    description:
      "An AI-powered construction monitoring platform featuring 360° virtual site tours, floor plan integration, progress tracking, digital annotations, and remote team collaboration. Designed to improve construction visibility, streamline inspections, and centralize project documentation.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Web Socket", "Redux Toolkit"],
    live: "https://user.sitepace.ai/signin",
    color: "#bf00ff",
  },
  {
    id: 3,
    title: "SMS Gateway",
    description:
      "Full-featured SMS campaign management platform with bulk messaging, scheduling, delivery tracking, and analytics dashboard for enterprise communication.",
    tech: ["React", "Node.js", "Redux", "Material UI"],
    live: "",
    color: "#ff0080",
  },
  {
    id: 4,
    title: "Livenza Granito",
    description:
      "Premium tile manufacturer & exporter website for Livenza Granito LLP. Showcases 1,500+ tile designs across 10+ categories, area of applications, and global export information with multilingual contact support for domestic (India) and international (UAE) clients.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO"],
    live: "https://www.livenzagranito.com/",
    color: "#f5a623",
  },
  {
    id: 5,
    title: "Livanto Porcelano",
    description:
      "Modern Next.js-powered website for Livanto Porcelano — a porcelain tile brand specializing in 600×600 and large-format tiles. Features an interactive digital flipbook catalogue, product category pages, and an SEO-optimised structure targeting ceramic, marble, granite, and mosaic tile markets.",
    tech: ["Next.js", "React", "CSS3", "jQuery", "Flipbook.js"],
    live: "https://livantoporcelano.com/",
    color: "#4fc3f7",
  },
];
