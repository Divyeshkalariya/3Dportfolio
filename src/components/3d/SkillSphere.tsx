"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import * as Si from "react-icons/si";
import { IconType } from "react-icons";
import { sphereTechs } from "@/data/techLogos";

// ── Single glass ball with HTML icon inside ───────────────────────────
interface BallProps {
  position: [number, number, number];
  icon: IconType;
  color: string;
  name: string;
}

function LogoBall({ position, icon: Icon, color, name }: BallProps) {
  const tc = useMemo(() => new THREE.Color(color), [color]);

  return (
    <group position={position}>
      {/* ① Inner glowing core (made lighter & transparent instead of dark) */}
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

      {/* ② Outer glass bubble (more opaque for a lighter glassy feel) */}
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

      {/* ④ Icon rendered as real HTML inside the ball — perfectly scaled to the 3D scene */}
      <Html
        center
        // transform
        sprite // Ensures the HTML always faces the camera (billboarding)
        scale={0.4} // Native 3D scaling (1px = 0.015 scene units) so it perfectly scales with the scene
        style={{ pointerEvents: "none" }}
        occlude={false}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: 'none',
          }}
        >
          <Icon
            size={30} // 36px * 0.015 = 0.54 units diameter (fits perfectly inside 0.88 unit ball)
            color={color}
            style={{
              display: "block",
              // transform: "translate(-15px, -55px)",
              // position: "absolute",
              // left: '0px',
              // top: '0px',
              filter: `drop-shadow(0 0 12px ${color})`,
            }}
          />
        </div>
      </Html>

      {/* ⑤ Equator glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.42, 0.47, 40]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>

      {/* ⑥ Specular highlight dot */}
      {/* <mesh position={[0.14, 0.2, 0.36]}>
        <sphereGeometry args={[0.055, 8, 8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
      </mesh> */}
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

  // Map siKey → actual icon component
  const icons = useMemo<IconType[]>(() => {
    return sphereTechs.map((t) => {
      const icon = (Si as Record<string, IconType>)[t.siKey];
      return icon ?? Si.SiJavascript; // fallback
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
          icon={icons[i]}
          color={tech.color}
          name={tech.name}
        />
      ))}
    </group>
  );
}
