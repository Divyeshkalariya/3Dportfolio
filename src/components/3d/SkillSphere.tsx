"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { sphereTechs } from "@/data/techLogos";

// ── Single glass ball with inline-SVG icon inside ───────────────────────
interface BallProps {
  position: [number, number, number];
  svg: string;
  color: string;
  name: string;
}

function LogoBall({ position, svg, color, name }: BallProps) {
  const tc = useMemo(() => new THREE.Color(color), [color]);

  return (
    <group position={position}>
      {/* ① Inner glowing core */}
      <mesh>
        <sphereGeometry args={[0.38, 20, 20]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.15}
          roughness={0.2}
          metalness={0.8}
          emissive={tc}
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* ② Outer glass bubble */}
      <mesh>
        <sphereGeometry args={[0.44, 20, 20]} />
        <meshPhongMaterial
          color={color}
          transparent
          opacity={0.14}
          shininess={280}
          specular={new THREE.Color("#ffffff")}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* ③ Inner glass wall (gives depth) */}
      <mesh>
        <sphereGeometry args={[0.43, 20, 20]} />
        <meshPhongMaterial
          color={color}
          transparent
          opacity={0.1}
          shininess={80}
          side={THREE.BackSide}
        />
      </mesh>

      {/* ④ Inline SVG icon — perfectly centered, always facing camera */}
      <Html
        center
        sprite
        scale={0.4}
        style={{ pointerEvents: "none" }}
        occlude={false}
      >
        <div
          style={{
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: `drop-shadow(0 0 10px ${color})`,
            pointerEvents: "none",
          }}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      </Html>

      {/* ⑤ Equator glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.42, 0.47, 40]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

// ── Main sphere ───────────────────────────────────────────────────────
export default function SkillSphere() {
  const groupRef = useRef<THREE.Group>(null);

  const positions = useMemo<[number, number, number][]>(() => {
    const count = sphereTechs.length;
    const radius = 3.2;
    const phi = Math.PI * (3 - Math.sqrt(5));
    return sphereTechs.map((_, i) => {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;
      return [radius * r * Math.cos(theta), radius * y, radius * r * Math.sin(theta)];
    });
  }, []);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe cage */}
      <mesh>
        <sphereGeometry args={[3.2, 32, 32]} />
        <meshStandardMaterial
          color="#00f5ff"
          wireframe
          transparent
          opacity={0.05}
          emissive="#00f5ff"
          emissiveIntensity={0.2}
        />
      </mesh>

      {sphereTechs.map((tech, i) => (
        <LogoBall
          key={tech.name}
          position={positions[i]}
          svg={tech.svg}
          color={tech.color}
          name={tech.name}
        />
      ))}
    </group>
  );
}
