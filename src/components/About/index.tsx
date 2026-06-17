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
    color: "#0ce6f2",
    border: "border-white/10",
  },
  {
    icon: FaCode,
    title: "React / Next.js",
    subtitle: "Core Specialization",
    description:
      "Expert in building static sites, animated landing pages, and full-featured web apps using React, Next.js App Router, Bootstrap, Material UI, Tailwind CSS, and Framer Motion.",
    color: "#8b5cf6",
    border: "border-white/10",
  },
  {
    icon: FaRocket,
    title: "Dashboards & CRM",
    subtitle: "Admin Panel Expertise",
    description:
      "Experienced in building feature-rich admin dashboards and CRM systems with real-time data, complex state management, and polished interactive UIs.",
    color: "#f43f5e",
    border: "border-white/10",
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
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
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
        className="orb w-96 h-96 top-20 -left-32 opacity-[0.08]"
        style={{ background: "radial-gradient(circle, #0ce6f2, transparent)" }}
      />
      <div
        className="orb w-80 h-80 bottom-0 -right-24 opacity-[0.08]"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
      />

      <div className="section-container">
        {/* Two-Column About Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Avatar / 3D Visual on Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="w-full relative h-[400px] lg:h-[480px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0ce6f2]/5 to-[#8b5cf6]/5 rounded-full blur-[80px]" />
            <Avatar />
          </motion.div>

          {/* Text Content on Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-left"
          >
            <p className="section-subtitle font-space font-semibold text-white/40">Get To Know</p>
            <h2 className="section-title mb-6 font-space text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-24 bg-gradient-to-r from-[#0ce6f2] to-transparent" />
              <HiSparkles className="text-[#0ce6f2]" size={18} />
            </div>

            <p className="text-white/60 font-inter leading-relaxed text-base lg:text-lg mb-5">
              I am a passionate <span className="text-[#0ce6f2] font-semibold">Frontend Developer</span> specializing
              in <span className="text-[#8b5cf6] font-semibold">React</span> and{" "}
              <span className="text-[#8b5cf6] font-semibold">Next.js</span>. I build fast, responsive,
              and visually stunning web applications — from sleek static sites to fully animated UIs.
            </p>
            <p className="text-white/60 font-inter leading-relaxed text-base lg:text-lg">
              My core expertise lies in <span className="text-[#0ce6f2] font-semibold">Admin Dashboards</span>,{" "}
              <span className="text-[#f43f5e] font-semibold">CRM systems</span>, and pixel-perfect animated
              websites. I turn ideas into production-ready products using clean code and modern tooling.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative glass rounded-3xl p-7 lg:p-9 overflow-hidden group cursor-default flex flex-col transition-all duration-300"
              >
                {/* Subtle soft colored ambient glow in bottom-right of the card on hover */}
                <div
                  className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-[40px] opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: card.color,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `${card.color}10`,
                    border: `1px solid ${card.color}25`,
                  }}
                >
                  <Icon size={20} style={{ color: card.color }} />
                </div>

                {/* Content */}
                <h3 className="font-space text-lg font-bold mb-1 text-white">
                  {card.title}
                </h3>
                <p className="font-space text-[10px] tracking-[2px] font-semibold uppercase mb-3" style={{ color: card.color }}>
                  {card.subtitle}
                </p>
                <p className="font-inter text-white/50 text-sm leading-relaxed flex-1">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center border border-white/8 cursor-default"
            >
              <div
                className="font-space text-3xl font-bold mb-1"
                style={{
                  background: `linear-gradient(135deg, #0ce6f2, #8b5cf6)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <CountUp
                  end={stat.end}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                  duration={1600 + i * 200}
                  start={statsInView}
                />
              </div>
              <div className="font-space text-[10px] text-white/40 tracking-[2px] uppercase font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
