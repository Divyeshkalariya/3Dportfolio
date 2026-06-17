"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 pt-10 pb-4 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(12, 230, 242, 0.01), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-space text-2xl font-bold tracking-wide"
          >
            <span className="gradient-text">dp</span>
          </motion.div>

          {/* Center text */}
          <div className="font-inter text-xs text-white/30 flex items-center gap-2 flex-wrap justify-center">
            <span>© {currentYear} Divyesh Patel</span>
            <span className="text-white/10">·</span>
            <span className="flex items-center gap-1">
              Built with <FaHeart size={10} className="text-[#f43f5e]" /> & Next.js
            </span>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            {[
              { icon: FaGithub, href: "https://github.com/Divyeshkalariya?tab=repositories", label: "GitHub" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/divyesh-kalariya-579a16257", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 glass rounded-full flex items-center justify-center text-white/40 hover:text-[#0ce6f2] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-[#0ce6f2]/10 to-transparent" />
        <p className="font-space text-[9px] text-center text-white/10 tracking-[4px] uppercase mt-4 font-semibold">
          Liquid Glass Portfolio v2.0
        </p>
      </div>
    </footer>
  );
}
