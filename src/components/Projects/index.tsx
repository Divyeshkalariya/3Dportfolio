"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { projects } from "@/data/projects";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="relative py-32 grid-bg overflow-hidden">
      {/* BG Orbs */}
      <div
        className="orb w-[500px] h-[500px] -top-20 -right-40 opacity-10"
        style={{ background: "radial-gradient(circle, #00f5ff, transparent)" }}
      />
      <div
        className="orb w-80 h-80 bottom-0 -left-24 opacity-10"
        style={{ background: "radial-gradient(circle, #ff0080, transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="section-subtitle">What I've Built</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#00f5ff]/50" />
            <HiSparkles className="text-[#00f5ff]" size={18} />
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#00f5ff]/50" />
          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="project-card relative glass rounded-2xl overflow-hidden group"
              style={{
                border: `1px solid ${project.color}20`,
                background: `linear-gradient(135deg, ${project.color}08, rgba(10,6,25,0.9))`,
              }}
            >
              {/* Card glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl pointer-events-none"
                style={{
                  boxShadow: `0 0 40px ${project.color}25, inset 0 0 40px ${project.color}08`,
                  border: `1px solid ${project.color}40`,
                }}
              />

              {/* Top accent bar */}
              <div
                className="h-[3px] w-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                  boxShadow: `0 0 15px ${project.color}80`,
                }}
              />

              {/* Project Number */}
              <div className="absolute top-6 right-6">
                <span
                  className="font-orbitron text-5xl font-black opacity-10 select-none"
                  style={{ color: project.color }}
                >
                  0{project.id}
                </span>
              </div>

              <div className="p-8">
                {/* Title */}
                <h3
                  className="font-orbitron text-xl font-bold mb-3 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    color: project.color,
                    textShadow: `0 0 20px ${project.color}40`,
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-white/50 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full font-space text-[11px] font-medium tracking-wider"
                      style={{
                        background: `${project.color}12`,
                        border: `1px solid ${project.color}25`,
                        color: `${project.color}cc`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-space text-xs font-medium tracking-wider transition-all duration-300"
                    style={{
                      background: `${project.color}15`,
                      border: `1px solid ${project.color}30`,
                      color: project.color,
                    }}
                  >
                    <FaGithub size={14} />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-space text-xs font-medium tracking-wider bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all duration-300"
                  >
                    <FaExternalLinkAlt size={12} />
                    Live Demo
                  </motion.a>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-6 right-6 h-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${project.color}60, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/divyeshpatel"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon btn-neon-secondary inline-flex"
          >
            <FaGithub size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
