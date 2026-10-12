"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#E5E7EB] pt-10 pb-4 overflow-hidden bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(37, 99, 235, 0.02), transparent)",
        }}
      />

      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-space text-2xl font-bold tracking-wide"
          >
            <span className="gradient-text">dp</span>
          </motion.div>

          {/* Center text */}
          <div className="font-inter text-xs text-[#9CA3AF] flex items-center gap-2 flex-wrap justify-center">
            <span>© {currentYear} Divyesh Patel</span>
            <span className="text-[#E5E7EB]">·</span>
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
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-[#2563EB] border border-[#E5E7EB] transition-all duration-300 hover:border-[#2563EB]/30 hover:bg-[#EFF6FF]"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/15 to-transparent" />
        <p className="font-space text-[9px] text-center text-[#D1D5DB] tracking-[4px] uppercase mt-4 font-semibold">
          Professional Portfolio v3.0
        </p>
      </div>
    </footer>
  );
}
