"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "@/data/projects";

// ── Single project card ────────────────────────────────────────────────
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      className="project-card relative glass rounded-2xl overflow-hidden group flex flex-col"
      style={{
        border: `1px solid ${project.color}20`,
        background: `linear-gradient(135deg, ${project.color}08, rgba(10,6,25,0.9))`,
        minHeight: "340px",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl pointer-events-none"
        style={{
          boxShadow: `0 0 40px ${project.color}25, inset 0 0 40px ${project.color}08`,
          border: `1px solid ${project.color}40`,
        }}
      />

      {/* Top accent bar */}
      <div
        className="h-[3px] w-full flex-shrink-0"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
          boxShadow: `0 0 15px ${project.color}80`,
        }}
      />

      {/* Project number */}
      <div className="absolute top-5 right-5">
        <span
          className="font-orbitron text-5xl font-black opacity-10 select-none"
          style={{ color: project.color }}
        >
          0{project.id}
        </span>
      </div>

      <div className="p-6 lg:p-8 flex flex-col flex-1">
        {/* Title */}
        <h3
          className="font-orbitron text-lg font-bold mb-3"
          style={{ color: project.color, textShadow: `0 0 20px ${project.color}40` }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-inter text-white/50 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6">
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

        {/* Action button */}
        <div className="flex gap-3 mt-auto">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-space text-xs font-medium tracking-wider transition-all duration-300 hover:scale-105"
              style={{
                background: `${project.color}18`,
                border: `1px solid ${project.color}40`,
                color: project.color,
              }}
            >
              <FaExternalLinkAlt size={12} />
              Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-space text-xs font-medium tracking-wider text-white/20 border border-white/10 cursor-not-allowed select-none">
              <FaExternalLinkAlt size={12} />
              Coming Soon
            </span>
          )}
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-6 right-6 h-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}60, transparent)` }}
      />
    </div>
  );
}

// ── Arrow button (standalone, outside slider) ──────────────────────────
function ArrowBtn({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous project" : "Next project"}
      style={{
        width: 42,
        height: 42,
        borderRadius: "50%",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,245,255,0.07)",
        border: "1px solid rgba(0,245,255,0.35)",
        color: "#00f5ff",
        cursor: "pointer",
        transition: "background 0.2s, box-shadow 0.2s",
        boxShadow: "0 0 12px rgba(0,245,255,0.15)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,245,255,0.18)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px rgba(0,245,255,0.4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,245,255,0.07)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 12px rgba(0,245,255,0.15)";
      }}
    >
      {direction === "prev" ? <FaChevronLeft size={14} /> : <FaChevronRight size={14} />}
    </button>
  );
}

// ── Main component ─────────────────────────────────────────────────────
export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderRef = useRef<any>(null);

  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false, // arrows handled externally
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="projects" className="section-wrapper grid-bg">
      {/* BG Orbs */}
      <div
        className="orb w-[500px] h-[500px] -top-20 -right-40 opacity-10"
        style={{ background: "radial-gradient(circle, #00f5ff, transparent)" }}
      />
      <div
        className="orb w-80 h-80 bottom-0 -left-24 opacity-10"
        style={{ background: "radial-gradient(circle, #ff0080, transparent)" }}
      />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <p className="section-subtitle">What I&apos;ve Built</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-header-divider">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#00f5ff]/50" />
            <HiSparkles className="text-[#00f5ff]" size={18} />
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#00f5ff]/50" />
          </div>
        </motion.div>

        {/* ── Slider row: [prev] [cards] [next] ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: "flex", alignItems: "center", gap: "16px" }}
        >
          {/* Prev arrow — OUTSIDE slider */}
          <ArrowBtn direction="prev" onClick={() => sliderRef.current?.slickPrev()} />

          {/* Slider — takes the remaining width */}
          <div className="project-slider-wrapper" style={{ flex: 1, minWidth: 0 }}>
            <Slider ref={sliderRef} {...sliderSettings}>
              {projects.map((project) => (
                <div key={project.id} className="px-3 py-2">
                  <ProjectCard project={project} />
                </div>
              ))}
            </Slider>
          </div>

          {/* Next arrow — OUTSIDE slider */}
          <ArrowBtn direction="next" onClick={() => sliderRef.current?.slickNext()} />
        </motion.div>
      </div>

      {/* Slick dot styling */}
      <style>{`
        .project-slider-wrapper .slick-dots { bottom: -36px; }
        .project-slider-wrapper .slick-dots li button:before {
          color: #00f5ff;
          opacity: 0.3;
          font-size: 8px;
        }
        .project-slider-wrapper .slick-dots li.slick-active button:before {
          color: #00f5ff;
          opacity: 1;
        }
        /* equal-height slides */
        .project-slider-wrapper .slick-track { display: flex !important; }
        .project-slider-wrapper .slick-slide { height: inherit !important; }
        .project-slider-wrapper .slick-slide > div { height: 100%; }
      `}</style>
    </section>
  );
}
