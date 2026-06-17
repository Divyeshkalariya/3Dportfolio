"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { HiSparkles, HiCheckCircle } from "react-icons/hi";
import { calculateExperience, formatDateForDisplay } from "@/utils/calculateExperience";

const experiences = [
  {
    role: "Frontend Developer",
    company: "LNX Cloud Technology",
    startDate: "01/01/2024",
    endDate: "Present",
    location: "Rajkot , India",
    type: "Full-Time",
    color: "#0ce6f2",
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
    tech: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Bootstrap", "MUI", "Scss", "Tailwind CSS"],
  },
  {
    role: "Web Designer",
    company: "Techerudite",
    startDate: "01/09/2023",
    endDate: "31/12/2023",
    location: "Ahmedabad , India",
    type: "Full-Time",
    color: "#8b5cf6",
    description:
      "Worked as a Web Designer at Techerudite — a leading software application development company. Contributed to updating and improving the UI of existing client projects, translating design requirements into clean, responsive interfaces.",
    achievements: [
      "Updated and enhanced UI of existing projects using HTML & CSS",
      "Implemented responsive layouts ensuring cross-device compatibility",
      "Integrated UI components using React.js for dynamic interfaces",
      "Collaborated with senior developers to align front-end with back-end APIs",
    ],
    tech: ["HTML5", "CSS3", "React.js", "Responsive Design"],
  },
  {
    role: "Frontend Developer Trainee",
    company: "Tops Technology Pvt. Ltd.",
    startDate: "01/04/2023",
    endDate: "31/08/2023",
    location: "Rajkot , India",
    type: "Full-Time",
    color: "#10b981",
    description:
      "Completed an intensive full-time training program in web design and development at Tops Technology Pvt. Ltd. Gained hands-on experience building modern, responsive web interfaces and understanding industry-standard development workflows.",
    achievements: [
      "Trained in web design fundamentals including HTML5, CSS3, and UI principles",
      "Learned JavaScript and React.js for building interactive web applications",
      "Completed multiple hands-on projects covering responsive design patterns",
      "Explored version control workflows using Git and GitHub",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "React.js", "Git"],
  },
];

export default function Experience() {

  return (
    <section id="experience" className="section-wrapper">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080710] via-[#0b0a1b] to-[#080710]" />

      {/* BG orbs */}
      <div
        className="orb w-96 h-96 top-20 left-10 opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #0ce6f2, transparent)" }}
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
          <p className="section-subtitle font-space font-semibold text-white/40">Where I&apos;ve Worked</p>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-header-divider">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#0ce6f2]/50" />
            <HiSparkles className="text-[#0ce6f2]" size={18} />
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#0ce6f2]/50" />
          </div>
        </motion.div>

        {/* Timeline — left-anchored, full content width */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] timeline-line origin-top"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative pl-16 md:pl-20 mb-10 last:mb-0"
            >
              {/* Timeline node - sleek glass bead */}
              <div
                className="absolute left-6 md:left-8 top-8 w-4 h-4 rounded-full -translate-x-1/2 z-10 glass border border-white/20 flex items-center justify-center"
                style={{
                  boxShadow: `0 0 16px ${exp.color}40`,
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: exp.color }}
                />
              </div>

              {/* Card — full width */}
              <motion.div
                whileHover={{ y: -3, scale: 1.005 }}
                className="glass rounded-3xl p-7 lg:p-9 relative overflow-hidden group border border-white/8 transition-all duration-300"
              >
                {/* Soft colored spotlight backlight on card hover */}
                <div
                  className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-[45px] opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: exp.color,
                  }}
                />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-space text-lg font-bold mb-1.5 text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <FaBriefcase size={12} className="text-white/40" />
                      <span className="font-space text-white/70 font-semibold text-xs tracking-wider uppercase">{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-1.5">
                        <FaCalendarAlt size={11} className="text-white/30" />
                        <span className="font-space text-xs text-white/40">
                          {formatDateForDisplay(exp.startDate)} — {formatDateForDisplay(exp.endDate)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaMapMarkerAlt size={11} className="text-white/30" />
                        <span className="font-space text-xs text-white/40">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col gap-2.5 items-start sm:items-end shrink-0">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 150 }}
                      className="px-3 py-1 rounded-full font-space text-[10px] font-semibold tracking-wider glass"
                      style={{
                        borderColor: `${exp.color}30`,
                        color: exp.color,
                      }}
                    >
                      {calculateExperience(exp.startDate, exp.endDate).formatted}
                    </motion.span>
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: 0.3, type: "spring", stiffness: 150 }}
                      className="px-3 py-1 rounded-full font-space text-[10px] bg-white/2 border border-white/5 text-white/40 font-semibold tracking-wider uppercase"
                    >
                      {exp.type}
                    </motion.span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-inter text-white/50 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {exp.achievements.map((achievement, ai) => (
                    <motion.div
                      key={ai}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: ai * 0.05 }}
                      className="flex items-start gap-2.5"
                    >
                      <HiCheckCircle
                        size={15}
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
                  {exp.tech.map((t, ti) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.3, delay: ti * 0.04, type: "spring", stiffness: 150 }}
                      className="px-3 py-1 rounded-full font-space text-[10px] font-semibold tracking-wider glass"
                      style={{
                        borderColor: `${exp.color}20`,
                        color: exp.color === "#ffffff" ? "rgba(255, 255, 255, 0.7)" : exp.color,
                      }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
