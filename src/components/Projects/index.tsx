"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
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
      className="project-card relative glass rounded-3xl overflow-hidden group flex flex-col border border-white/8 transition-all duration-500"
      style={{
        minHeight: "340px",
      }}
    >
      {/* Soft color spotlight backlight on card hover */}
      <div
        className="absolute -bottom-20 -right-20 w-44 h-44 rounded-full blur-[45px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
        style={{
          background: project.color,
        }}
      />

      {/* Project number */}
      <div className="absolute top-5 right-6">
        <span
          className="font-space text-5xl font-black opacity-[0.06] select-none"
          style={{ color: project.color }}
        >
          0{project.id}
        </span>
      </div>

      <div className="p-7 lg:p-9 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-space text-lg font-bold mb-3 text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-inter text-white/50 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, ti) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: ti * 0.04, type: "spring", stiffness: 150 }}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 rounded-full font-space text-[10px] font-semibold tracking-wider glass"
              style={{
                borderColor: `${project.color}25`,
                color: project.color === "#ffffff" ? "rgba(255, 255, 255, 0.7)" : project.color,
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action button */}
        <div className="flex gap-3 mt-auto">
          {project.live ? (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, type: "spring", stiffness: 150 }}
              whileHover={{ scale: 1.03, background: `linear-gradient(135deg, ${project.color}45 0%, rgba(255,255,255,0.06) 100%)`, borderColor: "rgba(255,255,255,0.25)" }}
              className="flex items-center gap-2 px-4.5 py-2 rounded-full font-space text-[10px] font-bold tracking-widest uppercase glass transition-all duration-300 border border-white/10"
              style={{
                background: `linear-gradient(135deg, ${project.color}25 0%, rgba(255,255,255,0.02) 100%)`,
                color: "#ffffff",
              }}
            >
              <FaExternalLinkAlt size={10} className="text-white" />
              Live Demo
            </motion.a>
          ) : (
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, type: "spring", stiffness: 150 }}
              className="flex items-center gap-2 px-4.5 py-2 rounded-full font-space text-[10px] font-bold tracking-widest uppercase text-white/20 border border-white/5 cursor-not-allowed select-none bg-white/2"
            >
              <FaExternalLinkAlt size={10} />
              Coming Soon
            </motion.span>
          )}
        </div>
      </div>
    </div>
  );
}

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
      className="glass"
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        color: "#ffffff",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(255, 255, 255, 0.08)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255, 255, 255, 0.2)";
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(255, 255, 255, 0.02)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255, 255, 255, 0.08)";
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
      }}
    >
      {direction === "prev" ? <FaChevronLeft size={13} /> : <FaChevronRight size={13} />}
    </button>
  );
}

// ── Main component ─────────────────────────────────────────────────────
export default function Projects() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderRef = useRef<any>(null);

  const [sliderConfig, setSliderConfig] = useState({
    slidesToShow: 3,
    isMobile: false,
  });

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setSliderConfig({
        slidesToShow: w < 768 ? 1 : w < 1024 ? 2 : 3,
        isMobile: w < 768,
      });
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: sliderConfig.slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false, // arrows handled externally
  };

  return (
    <section id="projects" className="section-wrapper grid-bg">
      {/* BG Orbs */}
      <div
        className="orb w-[500px] h-[500px] -top-20 -right-40 opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #0ce6f2, transparent)" }}
      />
      <div
        className="orb w-80 h-80 bottom-0 -left-24 opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #f43f5e, transparent)" }}
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
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#0ce6f2]/50" />
            <HiSparkles className="text-[#0ce6f2]" size={18} />
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#0ce6f2]/50" />
          </div>
        </motion.div>

        {/* ── Slider row: [prev] [cards] [next] ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: "flex", alignItems: "center", gap: sliderConfig.isMobile ? 0 : "16px" }}
        >
          {/* Prev arrow — hidden on mobile (1 card shown) */}
          {!sliderConfig.isMobile && (
            <ArrowBtn direction="prev" onClick={() => sliderRef.current?.slickPrev()} />
          )}

          {/* Slider — takes the remaining width */}
          <div className="project-slider-wrapper" style={{ flex: 1, minWidth: 0 }}>
            <Slider key={sliderConfig.slidesToShow} ref={sliderRef} {...sliderSettings}>
              {projects.map((project) => (
                <div key={project.id} className={sliderConfig.isMobile ? "px-1 py-2" : "px-3 py-2"}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </Slider>
          </div>

          {/* Next arrow — hidden on mobile (1 card shown) */}
          {!sliderConfig.isMobile && (
            <ArrowBtn direction="next" onClick={() => sliderRef.current?.slickNext()} />
          )}
        </motion.div>
      </div>

      {/* Slick dot styling */}
      <style>{`
        .project-slider-wrapper .slick-dots { bottom: -36px; }
        .project-slider-wrapper .slick-dots li button:before {
          color: #0ce6f2;
          opacity: 0.3;
          font-size: 8px;
        }
        .project-slider-wrapper .slick-dots li.slick-active button:before {
          color: #0ce6f2;
          opacity: 1;
        }
        /* equal-height slides */
        .project-slider-wrapper .slick-track { display: flex !important; }
        .project-slider-wrapper .slick-slide { height: inherit !important; }
        .project-slider-wrapper .slick-slide > div { height: 100%; }
        /* Mobile: full-width single card, more breathing room for dots */
        @media (max-width: 639px) {
          .project-slider-wrapper { width: 100%; }
          .project-slider-wrapper .slick-dots { bottom: -40px; }
          .project-slider-wrapper .slick-slide > div { padding: 0 4px; }
        }
      `}</style>
    </section>
  );
}
