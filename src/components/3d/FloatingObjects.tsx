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
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        wireframe
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

function NeonGrid() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.position.z = (clock.getElapsedTime() * 0.5) % 2;
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[40, 40, "#00f5ff", "#1a003a"]}
      position={[0, -4, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default function FloatingObjects() {
  const objects: FloatingObjectProps[] = [
    { position: [-4, 1, -3], geometry: "torus", color: "#00f5ff", speed: 1.2, scale: 1.2 },
    { position: [4.5, 0.5, -4], geometry: "dodecahedron", color: "#bf00ff", speed: 0.8, scale: 1 },
    { position: [0, 2, -6], geometry: "torusKnot", color: "#ff0080", speed: 0.6, scale: 0.8 },
    { position: [-6, -1.5, -5], geometry: "octahedron", color: "#0080ff", speed: 1.4, scale: 0.9 },
    { position: [6.5, 2, -5], geometry: "icosahedron", color: "#00ff88", speed: 1.0, scale: 0.7 },
    { position: [-2, -2, -4], geometry: "dodecahedron", color: "#ff0080", speed: 0.9, scale: 0.6 },
    { position: [2.5, 3, -3], geometry: "octahedron", color: "#00f5ff", speed: 1.1, scale: 0.65 },
  ];

  return (
    <>
      <NeonGrid />
      {objects.map((obj, i) => (
        <FloatingObject key={i} {...obj} />
      ))}
    </>
  );
}
