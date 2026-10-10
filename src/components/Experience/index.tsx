"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
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

// ── Per-card scroll-synced animation ───────────────────────────────────
function ExperienceCard({
  exp,
  smoothProgress,
  threshold,
}: {
  exp: (typeof experiences)[0];
  index: number;
  smoothProgress: MotionValue<number>;
  threshold: number;
}) {
  // Card slides from left + fades in when line tip crosses threshold
  const opacity = useTransform(smoothProgress, [threshold - 0.01, threshold + 0.08], [0, 1]);
  const x = useTransform(smoothProgress, [threshold - 0.01, threshold + 0.1], [-50, 0]);

  // Dot scales + glows when line reaches it
  const dotScale = useTransform(smoothProgress, [threshold - 0.02, threshold + 0.05], [0.6, 1]);
  const dotGlow = useTransform(
    smoothProgress,
    [threshold - 0.02, threshold + 0.05],
    [`0 0 0px ${exp.color}00`, `0 0 14px ${exp.color}80`]
  );

  return (
    <motion.div
      style={{ opacity, x }}
      className="relative pl-16 md:pl-20 mb-10 last:mb-0"
    >
      {/* Timeline node */}
      <motion.div
        style={{ scale: dotScale, boxShadow: dotGlow }}
        className="absolute left-6 md:left-8 top-8 w-4 h-4 rounded-full -translate-x-1/2 z-10 bg-white border border-[#E5E7EB] flex items-center justify-center"
      >
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: exp.color }} />
      </motion.div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -3, scale: 1.005 }}
        className="bg-white rounded-3xl border border-[#E5E7EB] p-7 lg:p-9 relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300"
      >
        {/* Soft colored spotlight on hover */}
        <div
          className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-[45px] opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
          style={{ background: exp.color }}
        />

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
          <div>
            <h3 className="font-space text-lg font-bold mb-1.5 text-[#1A1A2E]">{exp.role}</h3>
            <div className="flex items-center gap-2 mb-3">
              <FaBriefcase size={12} className="text-[#9CA3AF]" />
              <span className="font-space text-[#4B5563] font-semibold text-xs tracking-wider uppercase">
                {exp.company}
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-1.5">
                <FaCalendarAlt size={11} className="text-[#9CA3AF]" />
                <span className="font-space text-xs text-[#9CA3AF]">
                  {formatDateForDisplay(exp.startDate)} — {formatDateForDisplay(exp.endDate)}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaMapMarkerAlt size={11} className="text-[#9CA3AF]" />
                <span className="font-space text-xs text-[#9CA3AF]">{exp.location}</span>
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
              style={{ borderColor: `${exp.color}30`, color: exp.color }}
            >
              {calculateExperience(exp.startDate, exp.endDate).formatted}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.3, type: "spring", stiffness: 150 }}
              className="px-3 py-1 rounded-full font-space text-[10px] bg-[#F3F4F6] border border-[#E5E7EB] text-[#6B7280] font-semibold tracking-wider uppercase"
            >
              {exp.type}
            </motion.span>
          </div>
        </div>

        {/* Description */}
        <p className="font-inter text-[#6B7280] text-sm leading-relaxed mb-6">{exp.description}</p>

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
              <HiCheckCircle size={15} className="shrink-0 mt-0.5" style={{ color: exp.color }} />
              <span className="font-inter text-[#6B7280] text-xs leading-relaxed">{achievement}</span>
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
                borderColor: `${exp.color}30`,
                color: exp.color === "#ffffff" ? "#6B7280" : exp.color,
              }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Main component ─────────────────────────────────────────────────────
export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll progress scoped to the timeline container
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 60%"],
  });

  // Spring-smooth the raw progress — drives both line AND cards
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Timeline line scaleY: 0 → 1 as you scroll
  const lineScaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  // Card thresholds: evenly spaced 0.05 → 0.80 so all cards trigger before scroll ends
  const n = experiences.length;
  const cardThresholds = experiences.map((_, i) =>
    n === 1 ? 0.05 : 0.05 + (i / (n - 1)) * 0.75
  );

  return (
    <section id="experience" className="section-wrapper">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-[#F9FAFB] to-[#FAFAFA]" />

      {/* BG orbs */}
      <div
        className="orb w-96 h-96 top-20 left-10 opacity-[0.05]"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.05), transparent)" }}
      />

      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <p className="section-subtitle font-space font-semibold">Where I&apos;ve Worked</p>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-header-divider">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#2563EB]/50" />
            <HiSparkles className="text-[#2563EB]" size={18} />
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#2563EB]/50" />
          </div>
        </motion.div>

        {/* Timeline container */}
        <div ref={sectionRef} className="relative max-w-4xl mx-auto">
          {/* Track (faint grey background line) */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-[#E5E7EB]" />
          {/* Scroll-driven coloured fill line */}
          <motion.div
            style={{ scaleY: lineScaleY, originY: 0 }}
            className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] timeline-line"
          />

          {experiences.map((exp, i) => (
            <ExperienceCard
              key={i}
              exp={exp}
              index={i}
              smoothProgress={smoothProgress}
              threshold={cardThresholds[i]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
