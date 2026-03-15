export interface SphereTech {
  name: string;
  /** Key from react-icons/si, e.g. "SiReact" */
  siKey: string;
  color: string;
}

export const sphereTechs: SphereTech[] = [
  { name: "HTML", siKey: "SiHtml5", color: "#E34C26" },
  // { name: "HTML5", siKey: "SiHtml5", color: "#F06529" },
  { name: "CSS", siKey: "SiCss", color: "#264de4" },
  // { name: "CSS3", siKey: "SiCss", color: "#1572b6" },
  { name: "JavaScript", siKey: "SiJavascript", color: "#f7df1e" },
  { name: "TypeScript", siKey: "SiTypescript", color: "#3178c6" },
  { name: "React", siKey: "SiReact", color: "#61dafb" },
  { name: "Next.js", siKey: "SiNextdotjs", color: "#e0e0e0" },
  { name: "Redux", siKey: "SiRedux", color: "#764abc" },
  { name: "Bootstrap", siKey: "SiBootstrap", color: "#7952b3" },
  { name: "Tailwind", siKey: "SiTailwindcss", color: "#06b6d4" },
  { name: "MaterialUI", siKey: "SiMui", color: "#007fff" },
  { name: "Git", siKey: "SiGit", color: "#f05032" },
  { name: "GitHub", siKey: "SiGithub", color: "#e0e0e0" },
  { name: "NPM", siKey: "SiNpm", color: "#cb3837" },
];
