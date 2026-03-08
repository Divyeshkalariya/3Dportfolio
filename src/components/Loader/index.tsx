"use client";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef as useThreeRef } from "react";

function LoaderParticles() {
  const group = useThreeRef<THREE.Group>(null);
  const torusRef = useThreeRef<THREE.Mesh>(null);
  const innerTorusRef = useThreeRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) group.current.rotation.y = t * 0.5;
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 1.2;
      torusRef.current.rotation.z = t * 0.7;
    }
    if (innerTorusRef.current) {
      innerTorusRef.current.rotation.x = -t * 1.5;
      innerTorusRef.current.rotation.z = t * 1.0;
    }
  });

  return (
    <group ref={group}>
      {/* Outer ring */}
      <mesh ref={torusRef}>
        <torusGeometry args={[1.5, 0.04, 16, 100]} />
        <meshStandardMaterial
          color="#00f5ff"
          emissive="#00f5ff"
          emissiveIntensity={2}
        />
      </mesh>
      {/* Middle ring */}
      <mesh ref={innerTorusRef}>
        <torusGeometry args={[1.0, 0.04, 16, 100]} />
        <meshStandardMaterial
          color="#bf00ff"
          emissive="#bf00ff"
          emissiveIntensity={2}
        />
      </mesh>
      {/* Inner sphere */}
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#ff0080"
          emissive="#ff0080"
          emissiveIntensity={1.5}
          wireframe
        />
      </mesh>
      {/* Point lights */}
      <pointLight position={[3, 3, 3]} color="#00f5ff" intensity={2} />
      <pointLight position={[-3, -3, -3]} color="#bf00ff" intensity={2} />
    </group>
  );
}

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020008]"
        >
          {/* Scan lines overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,245,255,0.02) 2px, rgba(0,245,255,0.02) 4px)",
            }}
          />

          {/* Three.js Loader */}
          <div className="w-48 h-48 relative">
            <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
              <ambientLight intensity={0.1} />
              <LoaderParticles />
            </Canvas>
          </div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="font-orbitron text-xs tracking-[6px] text-[#00f5ff] mb-4 uppercase">
              Initializing
            </p>

            {/* Dots */}
            <div className="flex gap-3 justify-center">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="loader-dot"
                  style={{ animationDelay: `${i * 0.14}s` }}
                />
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-6 w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #00f5ff, #bf00ff, #ff0080)",
                  boxShadow: "0 0 10px #00f5ff",
                }}
              />
            </div>
          </motion.div>

          {/* Corner decorations */}
          {["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"].map(
            (pos, i) => (
              <div key={i} className={`absolute ${pos} w-8 h-8`}>
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00f5ff]/60" />
                <div className="absolute top-0 left-0 h-full w-[2px] bg-[#00f5ff]/60" />
              </div>
            )
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
