"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useSpring, useScroll } from "framer-motion";

export default function ScrollUI() {
  const [visible, setVisible] = useState(false);

  // Scroll progress (0 → 1)
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
      let currentSection = activeSection;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 100) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Custom Navigation Sidebar (right edge) ──────────────────────── */}
      <div
        className="hidden md:flex"
        style={{
          position: "fixed",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          zIndex: 9999,
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <motion.button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              // whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              className="group relative flex items-center justify-center cursor-pointer"
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: isActive ? "linear-gradient(180deg, #00f5ff 0%, #bf00ff 100%)" : "rgba(255,255,255,0.15)",
                border: isActive ? "none" : "1px solid rgba(255,255,255,0.3)",
                boxShadow: isActive ? "0 0 12px rgba(0,245,255,0.6)" : "none",
                transition: "all 0.3s ease",
              }}
              aria-label={`Scroll to ${section.label}`}
            >
              <div
                className={`absolute right-7 px-3 py-1.5 rounded-md bg-black/80 backdrop-blur-md text-white/90 text-xs font-space tracking-wider border border-white/10 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg ${isActive ? 'text-[#00f5ff] border-[#00f5ff]/30' : ''}`}
              >
                {section.label}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* ── Scroll-to-top button ─────────────────────────────────────── */}
      <AnimatePresence>
        {visible && (
          <motion.div
            key="scroll-top-wrapper"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            style={{
              position: "fixed",
              bottom: "28px",
              right: "35px",
              zIndex: 9999,
              width: "40px",
              height: "40px",
            }}
          >
            {/* ① Spinning conic-gradient border ring (CSS class) */}
            <span className="scroll-btn-ring" aria-hidden />

            {/* ③ The actual clickable button */}
            <motion.button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(8, 4, 20, 0.9)",
                border: "none",
                cursor: "pointer",
                outline: "none",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Gradient up-chevron */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#chevron-grad)"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ display: "block" }}
              >
                <defs>
                  <linearGradient id="chevron-grad" x1="0" y1="24" x2="0" y2="0">
                    <stop offset="0%" stopColor="#bf00ff" />
                    <stop offset="100%" stopColor="#00f5ff" />
                  </linearGradient>
                </defs>
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}