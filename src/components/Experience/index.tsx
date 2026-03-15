"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { HiSparkles, HiCheckCircle } from "react-icons/hi";

const experiences = [
  {
    role: "Frontend Developer",
    company: "LNX Cloud Technology",
    duration: "2022 — Present",
    period: "2.5+ Years",
    location: "India",
    type: "Full-Time",
    color: "#00f5ff",
    description:
      "Leading frontend development for enterprise-grade web applications including CRM systems, admin dashboards, and client-facing portals. Working closely with design and backend teams to deliver performant, accessible, and visually compelling UI/UX.",
    achievements: [
      "Built a comprehensive Tiles Catalogue CRM system from scratch",
      "Developed the SitePace.ai frontend dashboard with real-time analytics",
      "Created SMS Gateway campaign management UI for bulk messaging",
      "Implemented complex state management with Redux Toolkit",
      "Migrated legacy codebases to Next.js App Router architecture",
      "Improved page load performance by 40% through code splitting and lazy loading",
    ],
    tech: ["React", "Next.js", "TypeScript", "Redux Toolkit", "MUI", "Tailwind CSS"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-wrapper">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020008] via-[#06000f] to-[#020008]" />

      {/* BG orbs */}
      <div
        className="orb w-96 h-96 top-20 left-10 opacity-[0.08]"
        style={{ background: "radial-gradient(circle, #00f5ff, transparent)" }}
      />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <p className="section-subtitle">Where I&apos;ve Worked</p>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-header-divider">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#00f5ff]/50" />
            <HiSparkles className="text-[#00f5ff]" size={18} />
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#00f5ff]/50" />
          </div>
        </motion.div>

        {/* Timeline — left-anchored, full content width */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] timeline-line origin-top"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }}
              className="relative pl-16 md:pl-20 mb-10 last:mb-0"
            >
              {/* Timeline node */}
              <div
                className="absolute left-6 md:left-8 top-8 w-4 h-4 rounded-full -translate-x-1/2 z-10"
                style={{
                  background: exp.color,
                  boxShadow: `0 0 0 4px ${exp.color}30, 0 0 20px ${exp.color}60`,
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full"
                  style={{ background: exp.color, opacity: 0.4 }}
                />
              </div>

              {/* Card — full width */}
              <motion.div
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 lg:p-8 relative overflow-hidden group"
                style={{
                  border: `1px solid ${exp.color}20`,
                  background: `linear-gradient(135deg, ${exp.color}08, rgba(10,6,25,0.9))`,
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{ boxShadow: `0 0 40px ${exp.color}15, inset 0 0 40px ${exp.color}05` }}
                />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3
                      className="font-orbitron text-xl font-bold mb-1"
                      style={{ color: exp.color, textShadow: `0 0 15px ${exp.color}40` }}
                    >
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <FaBriefcase size={12} className="text-white/40" />
                      <span className="font-space text-white/70 font-medium">{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-1.5">
                        <FaCalendarAlt size={11} className="text-white/30" />
                        <span className="font-space text-xs text-white/40">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaMapMarkerAlt size={11} className="text-white/30" />
                        <span className="font-space text-xs text-white/40">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col gap-2 items-start sm:items-end shrink-0">
                    <span
                      className="px-3 py-1 rounded-full font-orbitron text-xs font-bold"
                      style={{
                        background: `${exp.color}15`,
                        border: `1px solid ${exp.color}30`,
                        color: exp.color,
                      }}
                    >
                      {exp.period}
                    </span>
                    <span className="px-3 py-1 rounded-full font-space text-xs bg-white/5 border border-white/10 text-white/40">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-inter text-white/50 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {exp.achievements.map((achievement, ai) => (
                    <motion.div
                      key={ai}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + ai * 0.06 }}
                      className="flex items-start gap-3"
                    >
                      <HiCheckCircle
                        size={16}
                        className="shrink-0 mt-0.5"
                        style={{ color: exp.color }}
                      />
                      <span className="font-inter text-white/50 text-xs leading-relaxed">
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full font-space text-[11px] tracking-wider"
                      style={{
                        background: `${exp.color}10`,
                        border: `1px solid ${exp.color}20`,
                        color: `${exp.color}aa`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bottom bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${exp.color}60, transparent)` }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
