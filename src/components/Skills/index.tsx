"use client";
import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNpm
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiBootstrap,
  SiMui
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  HiSparkles,
  HiOutlineCode,
  HiOutlineLightningBolt,
  HiOutlineCube
} from "react-icons/hi";

const SkillSphere = dynamic(() => import("@/components/3d/SkillSphere"), { ssr: false });

export interface SkillItem {
  id: string;
  name: string;
  category: "core" | "frameworks" | "styling" | "tools";
  categoryLabel: string;
  icon: any;
  color: string;
  bg: string;
  badge: string;
  badgeColor: string;
  description: string;
  featured?: boolean;
}

const skillsData: SkillItem[] = [
  {
    id: "react",
    name: "React",
    category: "frameworks",
    categoryLabel: "Framework",
    icon: FaReact,
    color: "#0284c7",
    bg: "#E0F2FE",
    badge: "Primary Stack",
    badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
    description: "Hooks, Context API, Custom Components & Virtual DOM",
    featured: true,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frameworks",
    categoryLabel: "Full-Stack React",
    icon: SiNextdotjs,
    color: "#0f172a",
    bg: "#F1F5F9",
    badge: "Primary Stack",
    badgeColor: "bg-slate-100 text-slate-800 border-slate-300",
    description: "App Router, SSR, SSG, Server Actions & SEO Optimization",
    featured: true,
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "core",
    categoryLabel: "Language",
    icon: SiTypescript,
    color: "#2563EB",
    bg: "#EFF6FF",
    badge: "Advanced",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    description: "Strict Type Safety, Interfaces, Generics & Scalable Architecture",
    featured: true,
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "core",
    categoryLabel: "Core Language",
    icon: SiJavascript,
    color: "#ca8a04",
    bg: "#FEF9C3",
    badge: "Core",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    description: "ES6+, Asynchronous Programming, Closures & Web APIs",
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: "styling",
    categoryLabel: "Styling",
    icon: SiTailwindcss,
    color: "#0ea5e9",
    bg: "#E0F2FE",
    badge: "Primary Stack",
    badgeColor: "bg-sky-50 text-sky-600 border-sky-200",
    description: "Responsive Layouts, Custom Design Tokens & Micro-Animations",
    featured: true,
  },
  {
    id: "redux",
    name: "Redux Toolkit",
    category: "frameworks",
    categoryLabel: "State Management",
    icon: SiRedux,
    color: "#7c3aed",
    bg: "#F3E8FF",
    badge: "Advanced",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    description: "Global State Management, Slices & Async Thunk Pipelines",
  },
  {
    id: "html5",
    name: "HTML5",
    category: "core",
    categoryLabel: "Markup",
    icon: FaHtml5,
    color: "#ea580c",
    bg: "#FFEDD5",
    badge: "Core",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
    description: "Semantic Architecture, Web Accessibility & Modern SEO Standards",
  },
  {
    id: "css3",
    name: "CSS3",
    category: "styling",
    categoryLabel: "Styling",
    icon: FaCss3Alt,
    color: "#0284c7",
    bg: "#E0F2FE",
    badge: "Core",
    badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
    description: "Flexbox, CSS Grid, Keyframe Animations & Glassmorphism",
  },
  {
    id: "mui",
    name: "Material UI",
    category: "styling",
    categoryLabel: "Component Library",
    icon: SiMui,
    color: "#0284c7",
    bg: "#E0F2FE",
    badge: "Proficient",
    badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
    description: "Enterprise UI Themes, Custom Design Systems & Accessibility",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    category: "styling",
    categoryLabel: "CSS Framework",
    icon: SiBootstrap,
    color: "#7c3aed",
    bg: "#F3E8FF",
    badge: "Proficient",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    description: "Rapid Prototyping, 12-Column Responsive Grids & Utilities",
  },
  {
    id: "git",
    name: "Git",
    category: "tools",
    categoryLabel: "Version Control",
    icon: FaGitAlt,
    color: "#ea580c",
    bg: "#FFEDD5",
    badge: "Daily Driver",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
    description: "Feature Branching, Rebase Workflows & Collaborative Merges",
  },
  {
    id: "github",
    name: "GitHub",
    category: "tools",
    categoryLabel: "Platform",
    icon: FaGithub,
    color: "#1e293b",
    bg: "#F1F5F9",
    badge: "Daily Driver",
    badgeColor: "bg-slate-100 text-slate-800 border-slate-300",
    description: "Repository Management, Pull Requests & Code Reviews",
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    categoryLabel: "Code Editor",
    icon: VscVscode,
    color: "#0284c7",
    bg: "#E0F2FE",
    badge: "Daily Driver",
    badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
    description: "Full-Stack Development, Debugging & Extension Ecosystem",
  },
  {
    id: "npm",
    name: "NPM",
    category: "tools",
    categoryLabel: "Package Manager",
    icon: FaNpm,
    color: "#cb3837",
    bg: "#FEE2E2",
    badge: "Workflow",
    badgeColor: "bg-red-50 text-red-700 border-red-200",
    description: "Dependency Management, Build Scripts & Module Packaging",
  },
  {
    id: "cursor",
    name: "Cursor",
    category: "tools",
    categoryLabel: "Code Editor",
    icon: HiSparkles,
    color: "#2563EB",
    bg: "#EFF6FF",
    badge: "AI Workflow",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    description: "Next-Gen AI-Assisted Rapid Coding & Codebase Navigation",
  },
  {
    id: "antigravity",
    name: "Antigravity",
    category: "tools",
    categoryLabel: "Code Editor",
    icon: HiOutlineLightningBolt,
    color: "#9333ea",
    bg: "#FAF5FF",
    badge: "Autonomous",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    description: "Agentic Coding Workflows, Autonomous Problem Solving & Pair AI",
  },
];

const categories = [
  { id: "all", label: "All Technologies", count: 16 },
  { id: "frameworks", label: "Frameworks & State", count: 3 },
  { id: "core", label: "Core Languages", count: 3 },
  { id: "styling", label: "UI & Styling", count: 4 },
  { id: "tools", label: "Tools & Workflow", count: 6 },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all"
    ? skillsData
    : skillsData?.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative w-full py-24 md:py-32 overflow-hidden bg-[#FAFAFA]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-indigo-100/35 rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] shadow-xs mb-3.5">
            <HiSparkles className="text-[#2563EB] text-sm" />
            <span className="font-space text-xs font-semibold tracking-wider text-[#4B5563] uppercase">
              Skills &amp; Expertise
            </span>
          </div>

          <h2 className="font-space font-extrabold text-[#1A1A2E] text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            Tech{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#6366F1] bg-clip-text text-transparent">
              Stack
            </span>
          </h2>

          <p className="font-inter text-[#6B7280] text-sm sm:text-base leading-relaxed">
            A production-proven technology stack focused on building scalable, pixel-perfect frontend experiences, high-performance web applications, and intuitive user interfaces.
          </p>
        </motion.div>

        {/* Category Filter Pills with Sliding Indicator */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 p-1.5 bg-gray-100/70 border border-gray-200/60 rounded-full max-w-fit mx-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-full font-space text-xs font-semibold tracking-wider transition-colors duration-200 cursor-pointer flex items-center gap-2 z-10 ${isActive
                  ? "text-white"
                  : "text-[#6B7280] hover:text-[#1A1A2E]"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-[#2563EB] rounded-full shadow-md shadow-blue-500/25 -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono transition-colors ${isActive ? "bg-white/20 text-white" : "bg-white text-[#6B7280] border border-gray-200"
                    }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid - Full Width Layout */}
        <div className="w-full mb-2">
          {/* ── Left Column: 3D Interactive Sphere Card (Commented as requested) ──
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 bg-white/90 backdrop-blur-md rounded-3xl border border-[#E5E7EB] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-tr-3xl pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-space text-xs font-bold uppercase tracking-wider text-[#1A1A2E]">
                  3D Interactive Ecosystem
                </span>
              </div>
              <span className="text-[11px] font-space text-[#6B7280] bg-gray-100 px-2.5 py-1 rounded-full border border-gray-200">
                Orbit
              </span>
            </div>

            <div className="relative flex-1 w-full min-h-[380px] lg:min-h-[460px] flex items-center justify-center cursor-grab active:cursor-grabbing my-auto">
              <Canvas
                className="w-full h-full pointer-events-auto"
                camera={{ position: [0, 0, 10.5], fov: 50 }}
              >
                <ambientLight intensity={0.7} />
                <pointLight position={[5, 5, 5]} color="#2563EB" intensity={1.5} />
                <pointLight position={[-5, -5, -5]} color="#6366F1" intensity={1.5} />
                <Suspense fallback={null}>
                  <SkillSphere />
                </Suspense>
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate={true}
                  autoRotateSpeed={0.5}
                  maxPolarAngle={Math.PI}
                  minPolarAngle={0}
                />
              </Canvas>
            </div>

            <div className="relative z-10 text-center pt-2">
              <span className="font-space text-[10px] tracking-[2px] text-[#9CA3AF] uppercase font-semibold">
                Drag to explore ecosystem
              </span>
            </div>
          </motion.div>
          */}

          {/* ── Skills Grid (Full Width) ── */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    layout
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.88, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.88, y: -16 }}
                    transition={{
                      layout: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                      scale: { duration: 0.2 },
                      y: { duration: 0.2 },
                    }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-white rounded-2xl p-4 border border-[#E5E7EB] hover:border-[#2563EB]/40 shadow-xs hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-xs"
                        style={{ backgroundColor: skill.bg, color: skill.color }}
                      >
                        <Icon className="text-xl" />
                      </div>
                      <span
                        className={`text-[10px] font-space font-semibold px-2 py-0.5 rounded-full border ${skill.badgeColor}`}
                      >
                        {skill.badge}
                      </span>
                    </div>

                    {/* Middle: Title & Category */}
                    <div className="mb-2">
                      <h3 className="font-space font-bold text-base text-[#1A1A2E] leading-tight group-hover:text-[#2563EB] transition-colors">
                        {skill.name}
                      </h3>
                      <p className="font-inter text-[11px] text-[#9CA3AF] font-medium">
                        {skill.categoryLabel}
                      </p>
                    </div>

                    {/* Bottom glowing accent bar on hover */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"
                      style={{ backgroundColor: skill.color }}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ── Architecture & Engineering Highlights Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4"
        >
          {/* Pillar 1 */}
          <div className="bg-white rounded-2xl p-5 border border-[#E5E7EB] shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] shrink-0">
              <HiOutlineCode className="text-xl" />
            </div>
            <div>
              <h4 className="font-space text-sm font-bold text-[#1A1A2E] mb-1">
                Component Architecture
              </h4>
              <p className="font-inter text-xs text-[#6B7280] leading-relaxed">
                Atomic, modular React patterns with strict typing, clean separation of concerns, and reusable design systems.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-2xl p-5 border border-[#E5E7EB] shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#6366F1] shrink-0">
              <HiOutlineLightningBolt className="text-xl" />
            </div>
            <div>
              <h4 className="font-space text-sm font-bold text-[#1A1A2E] mb-1">
                Performance First
              </h4>
              <p className="font-inter text-xs text-[#6B7280] leading-relaxed">
                Optimized bundle delivery, Next.js dynamic routing, lazy imports, and Core Web Vitals scoring 90+.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-2xl p-5 border border-[#E5E7EB] shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7] shrink-0">
              <HiOutlineCube className="text-xl" />
            </div>
            <div>
              <h4 className="font-space text-sm font-bold text-[#1A1A2E] mb-1">
                Modern Tooling &amp; AI
              </h4>
              <p className="font-inter text-xs text-[#6B7280] leading-relaxed">
                Pair programming with Cursor &amp; Antigravity for ultra-fast iteration, robust unit testing, and clean git history.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
