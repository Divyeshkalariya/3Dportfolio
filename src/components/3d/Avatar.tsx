"use client";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function AvatarModel() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      {/* Outer Liquid Glass Bubble */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, 3]} />
        <MeshDistortMaterial
          color="#ffffff"
          transmission={0.92}
          thickness={1.5}
          roughness={0.06}
          clearcoat={1.0}
          clearcoatRoughness={0.04}
          distort={0.35}
          speed={1.8}
        />
      </mesh>
      {/* Inner Glowing Core */}
      <mesh>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={2.0} roughness={0.1} />
      </mesh>
    </Float>
  );
}

export default function Avatar() {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#00f5ff" intensity={2} />
        <pointLight position={[-10, -10, -10]} color="#bf00ff" intensity={2} />
        <Suspense fallback={null}>
          <AvatarModel />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}
