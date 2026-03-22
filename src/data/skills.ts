export interface Skill {
  name: string;
  color: string;
  level: number;
}

export const skills: Skill[] = [
  { name: "HTML & HTML5", color: "#e34f26", level: 95 },
  { name: "CSS & CSS3", color: "#1572b6", level: 92 },
  { name: "Bootstrap", color: "#7952b3", level: 90 },
  { name: "JavaScript", color: "#f7df1e", level: 90 },
  { name: "TypeScript", color: "#3178c6", level: 85 },
  { name: "React", color: "#61dafb", level: 92 },
  { name: "Next.js", color: "#ffffff", level: 88 },
  { name: "Redux", color: "#764abc", level: 82 },
  { name: "Tailwind", color: "#06b6d4", level: 90 },
  { name: "Material UI", color: "#007fff", level: 85 },
  { name: "Git", color: "#f05032", level: 88 },
  { name: "GitHub", color: "#ffffff", level: 87 },
  { name: "NPM", color: "#cb3837", level: 85 },
  { name: "Vs-Code", color: "#007acc", level: 95 },
  { name: "Cursor", color: "#ffffff", level: 95 },
  { name: "Antigravity", color: "#bf00ff", level: 95 },
];

export const skillCategories = [
  {
    title: "Frontend Core",
    skills: ["HTML & HTML5", "CSS & CSS3", "Bootstrap", "JavaScript", "TypeScript"],
    icon: "🎨",
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js", "Redux"],
    icon: "⚛️",
  },
  {
    title: "UI Libraries & Tools",
    skills: ["Material UI", "Tailwind", "Git", "GitHub", "NPM"],
    icon: "🛠️",
  },
  {
    title: "Coding Tools",
    skills: ["Vs-Code", "Cursor", "Antigravity"],
    icon: "💻",
  },
];
