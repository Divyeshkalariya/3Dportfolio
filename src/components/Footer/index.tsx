"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-10 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(0,245,255,0.02), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-orbitron font-bold text-xl"
          >
            <span className="gradient-text">DP</span>
            <span className="text-white/30">.</span>
          </motion.div>

          {/* Center text */}
          <div className="font-inter text-xs text-white/30 flex items-center gap-2 flex-wrap justify-center">
            <span>© {currentYear} Divyesh Patel</span>
            <span className="text-white/10">·</span>
            <span className="flex items-center gap-1">
              Built with <FaHeart size={10} className="text-[#ff0080]" /> & Next.js
            </span>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            {[
              { icon: FaGithub, href: "https://github.com/divyeshpatel", label: "GitHub" },
              { icon: FaLinkedin, href: "https://linkedin.com/in/divyeshpatel", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 glass rounded-full flex items-center justify-center text-white/40 hover:text-[#00f5ff] transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,245,255,0.3)]"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-[#00f5ff]/20 to-transparent" />
        <p className="font-orbitron text-[10px] text-center text-white/10 tracking-[4px] uppercase mt-4">
          Futuristic Portfolio v1.0
        </p>
      </div>
    </footer>
  );
}
