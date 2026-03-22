"use client";
import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { FaCode, FaRocket, FaBriefcase } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { calculateExperience } from "@/utils/calculateExperience";

const Avatar = dynamic(() => import("@/components/3d/Avatar"), { ssr: false });

const cards = [
  {
    icon: FaBriefcase,
    title: calculateExperience("01/09/2023", "Present").formatted,
    subtitle: "Professional Experience",
    description:
      "Over two and a half years building production-ready web applications with React & Next.js, delivering real client projects across multiple industries.",
    color: "#00f5ff",
    gradient: "from-[#00f5ff]/10 to-[#0080ff]/5",
    border: "border-[#00f5ff]/20",
    glow: "rgba(0,245,255,0.15)",
  },
  {
    icon: FaCode,
    title: "React / Next.js",
    subtitle: "Core Specialization",
    description:
      "Expert in building static sites, animated landing pages, and full-featured web apps using React, Next.js App Router, Bootstrap, Material Ui, Tailwind CSS, and Framer Motion.",
    color: "#bf00ff",
    gradient: "from-[#bf00ff]/10 to-[#ff0080]/5",
    border: "border-[#bf00ff]/20",
    glow: "rgba(191,0,255,0.15)",
  },
  {
    icon: FaRocket,
    title: "Dashboards & CRM",
    subtitle: "Admin Panel Expertise",
    description:
      "Experienced in building feature-rich admin dashboards and CRM systems with real-time data, complex state management, and polished interactive UIs.",
    color: "#ff0080",
    gradient: "from-[#ff0080]/10 to-[#bf00ff]/5",
    border: "border-[#ff0080]/20",
    glow: "rgba(255,0,128,0.15)",
  },
];

const stats = [
  { end: calculateExperience("01/09/2023", "Present").yearsAsNumber, decimals: 1, suffix: "+", label: "Years Exp." },
  { end: 15, decimals: 0, suffix: "+", label: "Projects" },
  { end: 3, decimals: 0, suffix: "+", label: "Industries" },
  { end: 100, decimals: 0, suffix: "%", label: "Dedication" },
];

// ── Animated counter ──────────────────────────────────────────────
function CountUp({
  end,
  decimals = 0,
  suffix = "",
  duration = 4000,
  start,
}: {
  end: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const startVal = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((startVal + (end - startVal) * eased).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, end, decimals, duration]);

  return <>{count.toFixed(decimals)}{suffix}</>;
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="section-wrapper grid-bg">
      {/* Background orbs */}
      <div
        className="orb w-96 h-96 top-20 -left-32 opacity-20"
        style={{ background: "radial-gradient(circle, #00f5ff, transparent)" }}
      />
      <div
        className="orb w-80 h-80 bottom-0 -right-24 opacity-15"
        style={{ background: "radial-gradient(circle, #bf00ff, transparent)" }}
      />

      <div className="section-container" ref={ref}>
        {/* Two-Column About Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Avatar / 3D Visual on Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="w-full relative h-[400px] lg:h-[480px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00f5ff]/10 to-[#bf00ff]/10 rounded-full blur-[80px]" />
            <Avatar />
          </motion.div>

          {/* Text Content on Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-left"
          >
            <p className="section-subtitle">Get To Know</p>
            <h2 className="section-title mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-24 bg-gradient-to-r from-[#00f5ff] to-transparent" />
              <HiSparkles className="text-[#00f5ff]" size={20} />
            </div>

            <p className="text-white/70 font-inter leading-relaxed text-base lg:text-lg mb-5">
              I am a passionate <span className="text-[#00f5ff] font-semibold">Frontend Developer</span> specializing
              in <span className="text-[#bf00ff] font-semibold">React</span> and{" "}
              <span className="text-[#bf00ff] font-semibold">Next.js</span>. I build fast, responsive,
              and visually stunning web applications — from sleek static sites to fully animated UIs.
            </p>
            <p className="text-white/70 font-inter leading-relaxed text-base lg:text-lg">
              My core expertise lies in <span className="text-[#00f5ff] font-semibold">Admin Dashboards</span>,{" "}
              <span className="text-[#ff0080] font-semibold">CRM systems</span>, and pixel-perfect animated
              websites. I turn ideas into production-ready products using clean code and modern tooling.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative glass rounded-2xl p-6 lg:p-8 ${card.border} overflow-hidden group cursor-default flex flex-col`}
                style={{
                  background: `linear-gradient(135deg, ${card.glow}, rgba(10,6,25,0.8))`,
                }}
              >
                {/* Glow edge on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 30px ${card.glow}, 0 0 30px ${card.glow}`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${card.color}15`,
                    border: `1px solid ${card.color}30`,
                    boxShadow: `0 0 20px ${card.color}20`,
                  }}
                >
                  <Icon size={22} style={{ color: card.color }} />
                </div>

                {/* Content */}
                <h3
                  className="font-orbitron text-xl font-bold mb-1"
                  style={{ color: card.color, textShadow: `0 0 15px ${card.color}50` }}
                >
                  {card.title}
                </h3>
                <p className="font-space text-xs tracking-[2px] text-white/40 uppercase mb-3">
                  {card.subtitle}
                </p>
                <p className="font-inter text-white/60 text-sm leading-relaxed flex-1">
                  {card.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-60"
                  style={{ background: `linear-gradient(90deg, transparent, ${card.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats with count-up animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 1, scale: 1 }}
              className="glass rounded-xl p-6 text-center border border-white/5 cursor-default"
            >
              <div
                className="font-orbitron text-3xl font-bold mb-2"
                style={{
                  background: `linear-gradient(135deg, #00f5ff, #bf00ff)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <CountUp
                  end={stat.end}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                  duration={1600 + i * 200}
                  start={isInView}
                />
              </div>
              <div className="font-space text-xs text-white/40 tracking-[2px] uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
