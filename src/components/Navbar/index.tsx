"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navSectionIds = navLinks.map((link) => link.href.substring(1));
      let currentSection = activeSection;

      // Find the section that occupies the most space in the top portion of the viewport
      for (const id of navSectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the element is above the middle of screen, and bottom is below top of screen
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 100) {
            currentSection = id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollTo = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-40 rounded-full bg-white/30 backdrop-blur-md border border-[#E5E7EB] shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
      >
        <div className="max-w-7xl mx-auto py-3 px-4 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("#home")}
            className="font-space text-xl md:text-2xl font-bold tracking-tight text-[#1A1A2E] cursor-pointer flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>divyesh</span>
            <span className="text-[#2563EB] text-2xl font-black">.</span>
          </motion.button>

          {/* Desktop Center Pill Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#F3F4F6] px-3 py-1.5 rounded-full border border-[#E5E7EB]/60">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-1.5 rounded-full font-space text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${isActive
                    ? "text-white bg-[#2563EB] shadow-sm"
                    : "text-[#6B7280] hover:text-[#1A1A2E] hover:bg-white/60"
                    }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <motion.a
              href="/divyesh_kalariya_resume.pdf"
              download="divyesh_kalariya_resume.pdf"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D1D5DB] bg-white text-[#1A1A2E] hover:border-[#2563EB] hover:text-[#2563EB] font-space text-xs font-semibold tracking-wider transition-all shadow-sm cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v12m0 0l-4-4m4 4l4-4M4 18h16" />
              </svg>
              <span>Download Resume</span>
            </motion.a>
            <motion.button
              onClick={() => scrollTo("#contact")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="btn-neon btn-neon-primary text-xs py-2 px-5 cursor-pointer shadow-md"
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#6B7280] hover:text-[#2563EB] transition-colors cursor-pointer p-1"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-72 z-50 bg-white border-l border-[#E5E7EB] shadow-2xl flex flex-col pt-24 pb-8 px-8 justify-between"
          >
            {/* Close button inside drawer */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-[#6B7280] hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              <FaTimes size={20} />
            </button>

            <div className="space-y-6">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => scrollTo(link.href)}
                    className="block w-full text-left font-space text-sm font-semibold tracking-widest uppercase cursor-pointer"
                  >
                    <span
                      className={`transition-colors duration-300 ${isActive ? "text-[#2563EB]" : "text-[#6B7280] hover:text-[#1A1A2E]"
                        }`}
                    >
                      {link.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
            <div className="mt-auto space-y-3">
              <a
                href="/divyesh_kalariya_resume.pdf"
                download="divyesh_kalariya_resume.pdf"
                className="btn-neon btn-neon-secondary w-full text-[10px] py-3.5 cursor-pointer flex items-center justify-center"
              >
                Resume
              </a>
              <button
                onClick={() => scrollTo("#contact")}
                className="btn-neon btn-neon-primary w-full text-[10px] py-3.5 cursor-pointer"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
