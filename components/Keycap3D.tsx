'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Text, Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

function Keycap() {
  const group = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (group.current) {
      // Smoothly rotate based on mouse position
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        (state.pointer.x * Math.PI) / 6,
        0.05
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        (state.pointer.y * Math.PI) / 6,
        0.05
      );
    }
  });

  return (
    <group ref={group} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Top Keycap */}
        <RoundedBox args={[2.4, 1.2, 2.4]} radius={0.2} smoothness={8} position={[0, 0.6, 0]}>
          <meshPhysicalMaterial
            color="#FF5A1F"
            roughness={0.1}
            metalness={0.1}
            transmission={0.4}
            thickness={2}
            clearcoat={1}
            clearcoatRoughness={0.1}
            ior={1.5}
          />
          <Text
            position={[0, 0.61, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            fontSize={0.45}
            color="white"
            anchorX="center"
            anchorY="middle"
            font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
          >
            Get{'\n'}Started
          </Text>
        </RoundedBox>

        {/* Stem / Switch */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.8, 32]} />
          <meshStandardMaterial color="#333333" roughness={0.8} />
        </mesh>

        {/* Base */}
        <RoundedBox args={[2.2, 0.6, 2.2]} radius={0.1} smoothness={4} position={[0, -0.8, 0]}>
          <meshStandardMaterial color="#111111" roughness={0.9} />
        </RoundedBox>
      </Float>
    </group>
  );
}

export default function Keycap3D() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 4, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#FF5A1F" />
        <Environment preset="city" />
        
        {/* Initial rotation to show the top and side */}
        <group rotation={[Math.PI / 8, -Math.PI / 6, 0]}>
          <Keycap />
        </group>

        <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={15} blur={2.5} far={4} />
      </Canvas>
    </div>
  );
}
