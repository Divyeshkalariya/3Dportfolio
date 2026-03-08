"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const Scene = dynamic(() => import("@/components/3d/Scene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#020008]" />,
});

const roles = ["Frontend Developer", "React Specialist", "Next.js Engineer", "UI/UX Craftsman"];

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const roleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger title reveal
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll(".char");
        gsap.from(chars, {
          y: 80,
          opacity: 0,
          rotationX: -90,
          duration: 0.8,
          stagger: 0.04,
          ease: "back.out(1.7)",
          delay: 0.5,
        });
      }

      // Role text rotation
      let currentRole = 0;
      const rotateRole = () => {
        if (!roleRef.current) return;
        gsap.to(roleRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            currentRole = (currentRole + 1) % roles.length;
            if (roleRef.current) roleRef.current.textContent = roles[currentRole];
            gsap.from(roleRef.current, { y: 20, opacity: 0, duration: 0.4, ease: "power2.out" });
          },
        });
      };
      const interval = setInterval(rotateRole, 2800);
      return () => clearInterval(interval);
    });

    return () => ctx.revert();
  }, []);

  const splitChars = (text: string) =>
    text.split("").map((char, i) => (
      <span key={i} className="char inline-block" style={{ whiteSpace: char === " " ? "pre" : "normal" }}>
        {char}
      </span>
    ));

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* Dark gradient overlay removed to show particles clearly */}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 border border-[#00f5ff]/20"
        >
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="font-space text-xs tracking-[3px] text-white/70 uppercase">
            Available for Work
          </span>
        </motion.div>

        {/* Main Title */}
        <div className="overflow-hidden mb-4">
          <h1
            ref={titleRef}
            className="section-title text-white"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            {splitChars("Hi, I'm")}
            <span className="char inline-block">&nbsp;</span>
            <span className="char inline-block gradient-text">Divyesh</span>
            <br />
            <span className="char inline-block gradient-text">Patel</span>
          </h1>
        </div>

        {/* Animated Role */}
        <div className="h-12 flex items-center justify-center mb-6 overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#00f5ff]" />
            <span
              ref={roleRef}
              className="font-space text-xl md:text-2xl text-[#00f5ff] font-medium tracking-wider"
              style={{ textShadow: "0 0 20px rgba(0,245,255,0.5)" }}
            >
              {roles[0]}
            </span>
            <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[#00f5ff]" />
          </div>
        </div>

        {/* Description */}
        <motion.p
          ref={subtitleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-inter text-white/50 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Crafting pixel-perfect, high-performance web experiences with React & Next.js.
          Specializing in dashboards, CRM systems, and futuristic UIs.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="btn-neon btn-neon-primary group"
          >
            View Projects
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="btn-neon btn-neon-secondary"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex gap-4 justify-center"
        >
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
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/50 hover:text-[#00f5ff] hover:border-[#00f5ff]/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30 hover:text-[#00f5ff] transition-colors"
      >
        <span className="font-orbitron text-[10px] tracking-[3px] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaArrowDown size={14} />
        </motion.div>
      </motion.button>

      {/* Corner tech decorations */}
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-[#00f5ff]/10 z-10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-[#bf00ff]/10 z-10" />
    </section>
  );
}
