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
      {/* Outer Head Shell / Cyber Frame */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, 2]} />
        <MeshDistortMaterial
          color="#00f5ff"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.9}
          roughness={0.2}
          wireframe
          distort={0.4}
          speed={2}
        />
      </mesh>
      {/* Inner Avatar Core */}
      <mesh>
        <octahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial color="#bf00ff" emissive="#bf00ff" emissiveIntensity={2} wireframe />
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
