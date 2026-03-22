"use client";
import { useRef, Suspense } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { skills, skillCategories } from "@/data/skills";
import { HiSparkles } from "react-icons/hi";

const SkillSphere = dynamic(() => import("@/components/3d/SkillSphere"), { ssr: false });

function SkillBar({ skill, isInView }: { skill: (typeof skills)[0]; isInView: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-space text-sm font-medium text-white/80">{skill.name}</span>
        <span className="font-orbitron text-xs" style={{ color: skill.color }}>
          {skill.level}%
        </span>
      </div>
      <div className="skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="skill-bar-fill"
          style={{
            background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
            boxShadow: `0 0 8px ${skill.color}60`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-wrapper">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020008] via-[#080015] to-[#020008]" />

      <div
        className="orb w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
        style={{ background: "radial-gradient(circle, #bf00ff, transparent)" }}
      />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <p className="section-subtitle">What I Know</p>
          <h2 className="section-title">
            Tech <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-header-divider">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#bf00ff]/50" />
            <HiSparkles className="text-[#bf00ff]" size={18} />
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#bf00ff]/50" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* 3D Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative w-full h-[400px] lg:h-[500px] overflow-visible flex flex-col items-center justify-center mt-0 lg:mt-12"
          >
            <div className="absolute inset-0 w-full h-full overflow-visible">
              <Canvas className="w-full h-full pointer-events-auto" camera={{ position: [0, 0, 10.5], fov: 50 }} style={{ overflow: "visible" }}>
                <ambientLight intensity={0.4} />
                <pointLight position={[5, 5, 5]} color="#00f5ff" intensity={1.5} />
                <pointLight position={[-5, -5, -5]} color="#bf00ff" intensity={1.5} />
                <Suspense fallback={null}>
                  <SkillSphere />
                </Suspense>
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate={false}
                  maxPolarAngle={Math.PI}
                  minPolarAngle={0}
                />
              </Canvas>
            </div>
            {/* Label */}
            <div className="absolute -bottom-6 left-0 right-0 text-center pointer-events-none">
              <span className="font-orbitron text-[10px] tracking-[3px] text-white/30 uppercase">
                Drag to Explore
              </span>
            </div>
          </motion.div>

          {/* Skills List */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2"
          >
            {skillCategories.map((category, ci) => (
              <div key={category.title} className="mb-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">{category.icon}</span>
                  <h3 className="font-orbitron text-sm font-semibold text-white/60 tracking-[2px] uppercase">
                    {category.title}
                  </h3>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent ml-2" />
                </div>
                {skills
                  ?.filter((s) => category.skills.includes(s.name))
                  ?.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: ci * 0.1 + i * 0.08 }}
                    >
                      <SkillBar skill={skill} isInView={isInView} />
                    </motion.div>
                  ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Skill badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 flex flex-wrap gap-3 justify-center"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 1, scale: 1 }}
              className="px-4 py-2 rounded-full font-space text-xs font-medium tracking-wider uppercase cursor-default transition-all duration-300"
              style={{
                background: `${skill.color}12`,
                border: `1px solid ${skill.color}30`,
                color: skill.color,
                boxShadow: `0 0 10px ${skill.color}20`,
              }}
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
