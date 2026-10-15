"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { projects } from "@/data/projects";

// ── Single project card ────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const isLastOdd = index === projects.length - 1 && projects.length % 2 !== 0;
  const color = project.color;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className={`project-card group relative bg-white border border-[#E5E7EB] rounded-3xl overflow-hidden flex flex-col transition-all duration-500 shadow-sm hover:shadow-xl${isLastOdd ? " md:col-span-2 md:max-w-[50%] md:mx-auto md:w-full" : ""}`}
    >
      {/* Accent top bar */}
      <div
        className="h-[3px] w-full flex-shrink-0"
        style={{ background: `linear-gradient(90deg, ${color}66, ${color})` }}
      />

      <div className="p-7 lg:p-9 flex flex-col flex-1 relative">
        {/* Soft spotlight on hover */}
        <div
          className="absolute -bottom-24 -right-24 w-52 h-52 rounded-full blur-[60px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
          style={{ background: color }}
        />

        {/* Number watermark */}
        <div className="absolute top-6 right-7">
          <span
            className="font-space text-8xl font-black select-none leading-none"
            style={{ color: color, opacity: 0.1 }}
          >
            {String(project.id).padStart(2, "0")}
          </span>
        </div>

        {/* Colored dot + title */}
        <div className="flex items-start gap-3 mb-4 pr-10">
          <span
            className="mt-[6px] flex-shrink-0 w-2.5 h-2.5 rounded-full transition-transform duration-300 group-hover:scale-125"
            style={{ backgroundColor: color, boxShadow: `0 0 0 3px ${color}30` }}
          />
          <h3 className="font-space text-lg font-bold text-[#1A1A2E] leading-snug">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="font-inter text-[#6B7280] text-sm leading-relaxed mb-6 flex-1 pl-5">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6 pl-5">
          {project.tech.map((tech, ti) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.2 + ti * 0.05, type: "spring", stiffness: 160 }}
              whileHover={{ scale: 1.06, y: -1 }}
              className="px-3 py-1 rounded-full font-space text-[10px] font-semibold tracking-wider border transition-all duration-300"
              style={{
                color: color === "#ffffff" ? "#6B7280" : color,
                borderColor: `${color}35`,
                backgroundColor: `${color}0D`,
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-[#F3F4F6] mb-5 ml-5" />

        {/* Action row */}
        <div className="flex items-center justify-between pl-5">
          {project.live ? (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-space text-[11px] font-bold tracking-widest uppercase text-white transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${color}CC, ${color})`,
                boxShadow: `0 4px 14px ${color}35`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 6px 20px ${color}55`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 4px 14px ${color}35`;
              }}
            >
              <FaExternalLinkAlt size={9} />
              Live Demo
            </motion.a>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-space text-[11px] font-bold tracking-widest uppercase text-[#9CA3AF] border border-[#E5E7EB] bg-[#F9FAFB] cursor-not-allowed select-none">
              <FaLock size={9} />
              Coming Soon
            </span>
          )}

          {project.live && (
            <span
              className="text-xs font-space font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
              style={{ color: color }}
            >
              View →
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ── Main component ─────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" className="section-wrapper grid-bg">
      {/* BG Orbs */}
      <div
        className="orb w-[500px] h-[500px] -top-20 -right-40 opacity-[0.06]"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.06), transparent)" }}
      />
      <div
        className="orb w-80 h-80 bottom-0 -left-24 opacity-[0.06]"
        style={{ background: "radial-gradient(circle, rgba(239,68,68,0.05), transparent)" }}
      />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <p className="section-subtitle">What I&apos;ve Built</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-header-divider">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#2563EB]/50" />
            <HiSparkles className="text-[#2563EB]" size={18} />
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#2563EB]/50" />
          </div>
        </motion.div>

        {/* 2-column project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
