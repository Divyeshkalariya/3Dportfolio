"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, PerspectiveCamera } from "@react-three/drei";
import ParticleBackground from "./ParticleBackground";
import FloatingObjects from "./FloatingObjects";

export default function Scene() {
  return (
    <Canvas
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      dpr={1}
      style={{ position: "absolute", inset: 0 }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00f5ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#bf00ff" />
      <pointLight position={[0, 5, 5]} intensity={0.8} color="#ff0080" />
      <Stars
        radius={50}
        depth={20}
        count={800}
        factor={3}
        saturation={0}
        fade
        speed={0.2}
      />
      <Suspense fallback={null}>
        <ParticleBackground />
        <FloatingObjects />
      </Suspense>
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
      <fog attach="fog" args={["#020008", 20, 60]} />
    </Canvas>
  );
}
