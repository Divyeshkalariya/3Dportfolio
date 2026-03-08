"use client";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { FaCode, FaRocket, FaBriefcase } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const Avatar = dynamic(() => import("@/components/3d/Avatar"), { ssr: false });

const cards = [
  {
    icon: FaBriefcase,
    title: "2.5+ Years",
    subtitle: "Professional Experience",
    description:
      "Over two and a half years of hands-on frontend development, delivering production-ready applications for real clients across multiple industries.",
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
      "Deep expertise in the React ecosystem — from hooks and context to server components, SSR, ISR, and the latest Next.js App Router patterns.",
    color: "#bf00ff",
    gradient: "from-[#bf00ff]/10 to-[#ff0080]/5",
    border: "border-[#bf00ff]/20",
    glow: "rgba(191,0,255,0.15)",
  },
  {
    icon: FaRocket,
    title: "Dashboards & CRM",
    subtitle: "Domain Expertise",
    description:
      "Built complex, data-driven dashboards and CRM systems with complex state management, real-time updates, and highly interactive data visualizations.",
    color: "#ff0080",
    gradient: "from-[#ff0080]/10 to-[#bf00ff]/5",
    border: "border-[#ff0080]/20",
    glow: "rgba(255,0,128,0.15)",
  },
];

const stats = [
  { value: "2.5+", label: "Years Exp." },
  { value: "15+", label: "Projects" },
  { value: "3+", label: "Industries" },
  { value: "100%", label: "Dedication" },
];

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
    <section id="about" className="relative py-32 grid-bg overflow-hidden">
      {/* Background orbs */}
      <div
        className="orb w-96 h-96 top-20 -left-32 opacity-20"
        style={{ background: "radial-gradient(circle, #00f5ff, transparent)" }}
      />
      <div
        className="orb w-80 h-80 bottom-0 -right-24 opacity-15"
        style={{ background: "radial-gradient(circle, #bf00ff, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Two-Column About Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Avatar / 3D Visual on Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="w-full relative"
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
            
            <p className="text-white/70 font-inter leading-relaxed text-lg mb-6">
              I am a passionate <span className="text-[#00f5ff] font-semibold">Frontend Developer</span> dedicated to pushing the boundaries of web UI/UX.
              With a strong focus on 3D aesthetics, performance, and accessibility, I build digital
              experiences that leave a lasting impression.
            </p>
            <p className="text-white/70 font-inter leading-relaxed text-lg mb-8">
              Whether it's integrating complex systems, working with server components, or designing pixel-perfect 
              <span className="text-[#bf00ff] font-semibold"> Framer Motion</span> animations, I thrive on transforming conceptual ideas into reality using cutting-edge technologies.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative glass rounded-2xl p-8 ${card.border} overflow-hidden group cursor-default`}
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
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `${card.color}15`,
                    border: `1px solid ${card.color}30`,
                    boxShadow: `0 0 20px ${card.color}20`,
                  }}
                >
                  <Icon size={24} style={{ color: card.color }} />
                </div>

                {/* Content */}
                <h3
                  className="font-orbitron text-2xl font-bold mb-1"
                  style={{ color: card.color, textShadow: `0 0 15px ${card.color}50` }}
                >
                  {card.title}
                </h3>
                <p className="font-space text-xs tracking-[2px] text-white/40 uppercase mb-4">
                  {card.subtitle}
                </p>
                <p className="font-inter text-white/60 text-sm leading-relaxed">
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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-6 text-center border border-white/5"
            >
              <div
                className="font-orbitron text-3xl font-bold mb-2"
                style={{
                  background: `linear-gradient(135deg, #00f5ff, #bf00ff)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
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
