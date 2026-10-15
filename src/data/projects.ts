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
      "A comprehensive multi-industry ERP and Catalogue Management System for Tiles, Marble, Laminates, and Sanitaryware. Features include custom and full catalogue creation, stock and inventory management, customer and order management, export documentation, domestic business workflows, and professional catalogue presentations. Integrated WebSockets for real-time data updates and Firebase Cloud Messaging (FCM) for push notifications, delivering a centralized platform for managing end-to-end business operations.",
    tech: ["Next.js", "Typscript", "MUI", "CSS", "Redux Toolkit", "WebSocket", "FireBase", "Chart.js", "CRM Integration"],
    live: "https://portal.orbatic.com",
    color: "#00f5ff",
  },
  {
    id: 2,
    title: "SitePace.ai",
    description:
      "An AI-powered construction monitoring and project management platform designed to improve site visibility and collaboration. Developed an interactive frontend dashboard featuring 360° virtual site tours, floor plan integration, construction progress tracking, digital annotations, real-time data updates, analytics, and remote team collaboration. Focused on building responsive interfaces, managing complex application state, and presenting project information through intuitive dashboards.",
    tech: ["Next.js", "TypeScript", "CSS", "Tailwind CSS", "Chart.js", "WebSocket", "Redux Toolkit"],
    live: "https://user.sitepace.ai/signin",
    color: "#bf00ff",
  },
  {
    id: 3,
    title: "Catalog Solution",
    description:
      "A comprehensive OOH (Out-of-Home) advertising management platform featuring a multilingual admin dashboard. Includes hoarding management, automated hoarding data extraction and uploads from PowerPoint presentations, PDF catalogue generation, and shareable live catalogue links. Also integrates an HR management module for employee administration, bringing advertising catalogue management and workforce management together in one platform.",
    tech: ["Next.js", "Typscript", "Ant Design", "CSS", "Redux Toolkit", "WebSocket", "FireBase", "Chart.js",],
    live: "https://catalogsolution.com",
    color: "#10b981",
  },
  {
    id: 4,
    title: "SMS Gateway",
    description:
      "Full-featured SMS campaign management platform with bulk messaging, scheduling, delivery tracking, and analytics dashboard for enterprise communication.",
    tech: ["React", "Tailwind CSS", "Redux", "Material UI"],
    live: "",
    color: "#ff0080",
  },
  {
    id: 5,
    title: "Livenza Granito",
    description:
      "Premium tile manufacturer & exporter website for Livenza Granito LLP. Showcases 1,500+ tile designs across 10+ categories, area of applications, and global export information with multilingual contact support for domestic (India) and international (UAE) clients.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO"],
    live: "https://www.livenzagranito.com/",
    color: "#f5a623",
  },
  {
    id: 6,
    title: "Livanto Porcelano",
    description:
      "Modern Next.js-powered website for Livanto Porcelano — a porcelain tile brand specializing in 600×600 and large-format tiles. Features an interactive digital flipbook catalogue, product category pages, and an SEO-optimised structure targeting ceramic, marble, granite, and mosaic tile markets.",
    tech: ["Next.js", "React", "CSS3", "jQuery", "Flipbook.js"],
    live: "https://livantoporcelano.com/",
    color: "#4fc3f7",
  },
];
