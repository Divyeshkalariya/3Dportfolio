"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaEnvelope
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss
} from "react-icons/si";
import { HiArrowRight } from "react-icons/hi";

const rotatingRoles = [
  "<Frontend Developer/>",
  "<React & Next.js Specialist/>",
  "<UI/UX Craftsman/>",
  "<Web Performance Engineer/>",
];

// Tech badges orbiting the 3D avatar within viewport bounds
const orbitBadges = [
  {
    name: "React",
    icon: FaReact,
    color: "#0284c7",
    bg: "#E0F2FE",
    position: "top-4 -left-2 sm:top-6 sm:-left-4",
    delay: 0,
    duration: 3.2,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#0f172a",
    bg: "#F1F5F9",
    position: "top-1 right-8 sm:top-2 sm:right-12",
    delay: 0.4,
    duration: 3.8,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#2563EB",
    bg: "#EFF6FF",
    position: "top-1/3 -right-3 sm:top-1/3 sm:-right-5",
    delay: 0.8,
    duration: 3.4,
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "#ea580c",
    bg: "#FFEDD5",
    position: "top-1/2 -left-3 sm:top-1/2 sm:-left-5",
    delay: 0.2,
    duration: 3.6,
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "#0284c7",
    bg: "#E0F2FE",
    position: "bottom-14 -left-1 sm:bottom-16 sm:-left-2",
    delay: 0.6,
    duration: 3.0,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#0ea5e9",
    bg: "#E0F2FE",
    position: "bottom-14 -right-1 sm:bottom-16 sm:-right-2",
    delay: 1.0,
    duration: 3.5,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#16a34a",
    bg: "#DCFCE7",
    position: "bottom-1 left-8 sm:bottom-2 sm:left-12",
    delay: 0.5,
    duration: 3.3,
  },
];

export default function Hero({ isReady = true }: { isReady?: boolean }) {
  const [roleIndex, setRoleIndex] = useState(0);

  // Rotate roles dynamically
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-screen flex items-center justify-center pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-0 lg:pb-0 overflow-hidden bg-[#FAFAFA]"
    >
      {/* Subtle radial ambient background glows */}
      <div className="absolute top-1/4 right-10 w-[420px] h-[420px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-50/50 rounded-full blur-[100px] pointer-events-none -z-0" />

      {/* Main 2-Column Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          {/* ──────────────── LEFT COLUMN: Typography & Actions ──────────────── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Status / Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white rounded-full px-3.5 py-1.5 mb-3 border border-[#E5E7EB] shadow-xs"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-space text-xs font-semibold tracking-wider text-[#4B5563] uppercase">
                Available for New Projects
              </span>
            </motion.div>

            {/* Greeting Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 mb-1"
            >
              <span className="font-space text-lg sm:text-2xl font-medium text-[#1A1A2E]">
                Hey, I am
              </span>
              <span className="font-space text-lg sm:text-2xl font-bold text-[#2563EB]">
                Divyesh
              </span>
              <span className="text-xl sm:text-2xl">👋</span>
            </motion.div>

            {/* Big Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-space font-extrabold text-[#1A1A2E] tracking-tight text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.8rem] leading-[1.08] mb-3"
            >
              Web{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#6366F1] bg-clip-text text-transparent">
                Developer
              </span>
            </motion.h1>

            {/* Animated Dynamic Role Subtitle with 3D Flip Animation */}
            <div className="h-8 flex items-center mb-3 overflow-hidden" style={{ perspective: "600px" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ rotateX: 90, opacity: 0, y: 14 }}
                  animate={{ rotateX: 0, opacity: 1, y: 0 }}
                  exit={{ rotateX: -90, opacity: 0, y: -14 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="inline-block font-space text-xs sm:text-sm font-semibold text-[#6366F1] tracking-wide uppercase bg-indigo-50 rounded-md origin-center"
                // className="inline-block font-space text-xs sm:text-sm font-semibold text-[#6366F1] tracking-wide uppercase bg-indigo-50 border border-indigo-100 px-3.5 py-1 rounded-md shadow-xs origin-center"
                >
                  {rotatingRoles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-inter text-[#4B5563] text-sm sm:text-base max-w-xl mb-6 leading-relaxed"
            >
              Passionate engineer building pixel-perfect, high-performance web applications with React, Next.js, and TypeScript. Turning complex logic into seamless, intuitive digital interfaces.
            </motion.p>

            {/* CTA Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              {/* Primary "Hire Me" Pill Button */}
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="btn-neon btn-neon-primary px-7 py-3 text-xs sm:text-sm font-semibold rounded-full shadow-lg shadow-blue-500/25 flex items-center gap-2 cursor-pointer"
              >
                <span>Hire me</span>
                <HiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Circular Email Action Button */}
              <motion.a
                href="mailto:divyeshkalariya26@gmail.com"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.94 }}
                title="Send Email"
                aria-label="Send Email"
                className="w-11 h-11 rounded-full border border-[#D1D5DB] bg-white flex items-center justify-center text-[#4B5563] hover:text-[#2563EB] hover:border-[#2563EB] shadow-xs transition-all duration-300 cursor-pointer"
              >
                <FaEnvelope className="text-base" />
              </motion.a>

              {/* View Projects Pill */}
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="px-5 py-2.5 rounded-full border border-[#D1D5DB] bg-white text-[#1A1A2E] hover:border-[#2563EB] hover:text-[#2563EB] font-space text-xs font-semibold tracking-wider transition-all shadow-xs cursor-pointer"
              >
                View Projects
              </motion.button>
            </motion.div>

          </div>

          {/* ──────────────── RIGHT COLUMN: 3D Character & Orbit Badges ──────────────── */}
          <div className="lg:col-span-5 flex items-center justify-center relative">

            {/* Outer Orbital Ring (dashed circle) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[410px] lg:h-[410px] rounded-full border border-dashed border-[#2563EB]/25 pointer-events-none"
            />

            {/* Inner Orbital Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[330px] lg:h-[330px] rounded-full border border-[#E5E7EB] pointer-events-none"
            />

            {/* Central Radial Backlight behind character */}
            <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-blue-300/25 via-indigo-200/20 to-transparent blur-3xl pointer-events-none" />

            {/* 3D Character Container scaled to fit completely within 100vh */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10 w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-[340px] lg:w-[330px] lg:h-[360px] xl:w-[350px] xl:h-[380px] flex items-center justify-center"
            >
              {/* Soft pedestal glow */}
              <div className="absolute inset-x-8 bottom-3 h-14 rounded-full bg-blue-200/40 blur-xl pointer-events-none" />

              {/* 3D Developer Avatar Image with transparent background */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                <img
                  src="/images/hero-avatar.png"
                  alt="Divyesh Patel - 3D Developer"
                  className="w-full h-full object-contain drop-shadow-[0_16px_30px_rgba(37,99,235,0.18)]"
                />
              </motion.div>

              {/* Floating Orbiting Tech Badges */}
              {orbitBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={badge.name}
                    animate={{ y: [-4, 4, -4] }}
                    transition={{
                      duration: badge.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: badge.delay,
                    }}
                    whileHover={{ scale: 1.15, y: -6 }}
                    className={`absolute ${badge.position} z-20 flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-2xl border border-[#E5E7EB] shadow-[0_6px_18px_rgba(0,0,0,0.07)] hover:shadow-[0_10px_24px_rgba(37,99,235,0.18)] transition-all cursor-pointer group`}
                  >
                    <div
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-6"
                      style={{ backgroundColor: badge.bg, color: badge.color }}
                    >
                      <Icon className="text-xs sm:text-sm" />
                    </div>
                    <span className="font-space text-[11px] sm:text-xs font-bold text-[#1A1A2E] pr-1">
                      {badge.name}
                    </span>
                  </motion.div>
                );
              })}

              {/* Floating Experience Badge (bottom-right accent within container) */}
              <motion.div
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                className="absolute bottom-1 right-2 sm:bottom-2 sm:right-4 z-20 bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl shadow-[0_8px_20px_rgba(37,99,235,0.3)] flex items-center gap-2 border border-white/20"
              >
                <span className="text-sm sm:text-base">⚡</span>
                <div>
                  <p className="font-space text-[11px] sm:text-xs font-bold leading-none">3+ Years</p>
                  <p className="text-[9px] sm:text-[10px] text-blue-100 font-medium">Experience</p>
                </div>
              </motion.div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}