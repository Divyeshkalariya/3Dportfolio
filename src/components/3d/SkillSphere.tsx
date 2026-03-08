"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { skills } from "@/data/skills";

interface SkillTagProps {
  position: [number, number, number];
  skill: { name: string; color: string };
}

function SkillTag({ position, skill }: SkillTagProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Make text face the camera
      groupRef.current.lookAt(0, 0, 5);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Text
        fontSize={0.22}
        color={skill.color}
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/orbitron/v25/yMJMMIlzdpvBhQQL_SC3X9yhF25-T1nyKS6BoWgz.woff2"
        outlineWidth={0.005}
        outlineColor="#000000"
      >
        {skill.name}
      </Text>
    </group>
  );
}

export default function SkillSphere() {
  const groupRef = useRef<THREE.Group>(null);

  // Distribute skills evenly on sphere surface using golden ratio
  const skillPositions = useMemo(() => {
    const count = skills.length;
    const radius = 3.5;
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle

    return skills.map((skill, i) => {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;
      return {
        skill,
        position: [
          radius * r * Math.cos(theta),
          radius * y,
          radius * r * Math.sin(theta),
        ] as [number, number, number],
      };
    });
  }, []);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.1;
    }
  });

  return (
    <>
      {/* Wireframe sphere */}
      <mesh>
        <sphereGeometry args={[3.5, 32, 32]} />
        <meshStandardMaterial
          color="#00f5ff"
          wireframe
          transparent
          opacity={0.05}
          emissive="#00f5ff"
          emissiveIntensity={0.2}
        />
      </mesh>
      <group ref={groupRef}>
        {skillPositions.map(({ skill, position }, i) => (
          <SkillTag key={i} position={position} skill={skill} />
        ))}
      </group>
    </>
  );
}
