"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingObjectProps {
  position: [number, number, number];
  geometry: "torus" | "dodecahedron" | "octahedron" | "icosahedron" | "torusKnot";
  color: string;
  speed?: number;
  scale?: number;
}

function FloatingObject({ position, geometry, color, speed = 1, scale = 1 }: FloatingObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.3 * speed;
    meshRef.current.rotation.y = t * 0.5 * speed;
    meshRef.current.position.y = initialY + Math.sin(t * 0.5 * speed) * 0.8;
  });

  const renderGeometry = () => {
    switch (geometry) {
      case "torus":
        return <torusGeometry args={[0.6, 0.25, 12, 48]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[0.7, 0]} />;
      case "octahedron":
        return <octahedronGeometry args={[0.8, 0]} />;
      case "icosahedron":
        return <icosahedronGeometry args={[0.75, 0]} />;
      case "torusKnot":
        return <torusKnotGeometry args={[0.5, 0.15, 64, 16]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {renderGeometry()}
      <meshPhysicalMaterial
        color="#ffffff"
        transmission={0.95}
        roughness={0.06}
        metalness={0.05}
        thickness={1.8}
        ior={1.52}
        clearcoat={1.0}
        clearcoatRoughness={0.04}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

export default function FloatingObjects() {
  const objects: FloatingObjectProps[] = [
    { position: [-4, 1, -3], geometry: "torus", color: "#0ce6f2", speed: 0.6, scale: 1.1 },
    { position: [4.5, 0.5, -4], geometry: "dodecahedron", color: "#8b5cf6", speed: 0.4, scale: 0.95 },
    { position: [0, 2, -6], geometry: "torusKnot", color: "#f43f5e", speed: 0.3, scale: 0.75 },
    { position: [-6, -1.5, -5], geometry: "octahedron", color: "#3b82f6", speed: 0.7, scale: 0.85 },
    { position: [6.5, 2, -5], geometry: "icosahedron", color: "#10b981", speed: 0.5, scale: 0.65 },
    { position: [-2, -2, -4], geometry: "dodecahedron", color: "#f43f5e", speed: 0.45, scale: 0.55 },
    { position: [2.5, 3, -3], geometry: "octahedron", color: "#0ce6f2", speed: 0.55, scale: 0.6 },
  ];

  return (
    <>
      {/* {objects.map((obj, i) => (
        <FloatingObject key={i} {...obj} />
      ))} */}
    </>
  );
}
