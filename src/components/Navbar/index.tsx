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
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-40 rounded-full liquid_glass"
      >
        <div className="liquid_glass_filter" />
        <div className="liquid_glass_overlay" />
        <div className="liquid_glass_specular" />
        <div className="liquid_glass_content max-w-7xl mx-auto px-6 flex items-center justify-between py-2.5">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("#home")}
            className="font-space text-2xl font-bold relative group tracking-wide cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="gradient-text">dp</span>
          </motion.button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="relative font-space text-xs font-semibold tracking-wider uppercase transition-all duration-300 group cursor-pointer"
                >
                  <span
                    className={`transition-colors duration-300 ${isActive ? "text-[#0ce6f2]" : "text-white/60 hover:text-white"
                      }`}
                  >
                    {link.label}
                  </span>
                  <div
                    className={`absolute -bottom-1 left-0 h-[1.5px] transition-all duration-300 bg-[#0ce6f2] ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </button>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="/resume.pdf"
              download="Divyesh_Patel_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-neon btn-neon-secondary text-[10px] py-2 px-5 cursor-pointer flex items-center justify-center"
            >
              Resume
            </motion.a>
            <motion.button
              onClick={() => scrollTo("#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-neon btn-neon-primary text-[10px] py-2 px-5 cursor-pointer"
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/80 hover:text-[#0ce6f2] transition-colors cursor-pointer"
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
            className="fixed inset-y-0 right-0 w-72 z-50 bg-[#080710] border-l border-white/10 flex flex-col pt-24 pb-8 px-8 justify-between"
          >
            {/* Close button inside drawer */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white/80 hover:text-[#0ce6f2] transition-colors cursor-pointer"
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
                      className={`transition-colors duration-300 ${isActive ? "text-[#0ce6f2]" : "text-white/60"
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
                href="/resume.pdf"
                download="Divyesh_Patel_Resume.pdf"
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
