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
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2.5} color="#0ce6f2" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#8b5cf6" />
      <pointLight position={[0, 5, 5]} intensity={2.0} color="#f43f5e" />
      <Stars
        radius={80}
        depth={25}
        count={250}
        factor={1.5}
        saturation={0}
        fade
        speed={0.1}
      />
      <Suspense fallback={null}>
        <ParticleBackground />
        <FloatingObjects />
      </Suspense>
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.3}
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
      <fog attach="fog" args={["#080710", 20, 60]} />
    </Canvas>
  );
}
