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
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4, rootMargin: "-10% 0px -60% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong py-3 shadow-[0_4px_30px_rgba(0,245,255,0.1)]" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("#home")}
            className="font-orbitron font-bold text-lg relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="gradient-text">DP</span>
            <span className="text-white/60">.</span>
            <div className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-[#00f5ff] to-[#bf00ff]" />
          </motion.button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="relative font-space text-sm font-medium tracking-wider uppercase transition-all duration-300 group"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      isActive ? "text-[#00f5ff]" : "text-white/60 hover:text-white"
                    }`}
                    style={
                      isActive
                        ? { textShadow: "0 0 10px #00f5ff, 0 0 20px #00f5ff" }
                        : {}
                    }
                  >
                    {link.label}
                  </span>
                  <div
                    className={`absolute -bottom-1 left-0 h-[1px] transition-all duration-300 bg-[#00f5ff] ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    style={isActive ? { boxShadow: "0 0 8px #00f5ff" } : {}}
                  />
                </button>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              onClick={() => scrollTo("#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-neon btn-neon-primary text-xs py-2.5 px-6"
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/80 hover:text-[#00f5ff] transition-colors"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
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
            className="fixed inset-y-0 right-0 w-72 z-40 glass-strong flex flex-col pt-24 pb-8 px-8"
          >
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
                    className="block w-full text-left font-orbitron text-sm tracking-widest uppercase"
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        isActive ? "text-[#00f5ff]" : "text-white/60"
                      }`}
                      style={isActive ? { textShadow: "0 0 10px #00f5ff" } : {}}
                    >
                      {link.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
            <div className="mt-auto">
              <button
                onClick={() => scrollTo("#contact")}
                className="btn-neon btn-neon-primary w-full text-xs py-3"
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
