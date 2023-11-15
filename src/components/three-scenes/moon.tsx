"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { TextureLoader } from "three";
import { Preload } from "@react-three/drei";
import { motion } from "framer-motion-3d";

function MoonScene() {
  const scene = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress);
  const size = useTransform(smooth, [0, 1], [2, 3.2]);

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/assets/color.png",
    "/assets/moon-normal.png",
  ]);

  return (
    <Suspense fallback={null}>
      <Canvas ref={scene}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[1, 0, -0.25]} />
        <motion.mesh scale={size} rotation-y={smooth}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
        </motion.mesh>
        <Preload all />
      </Canvas>
    </Suspense>
  );
}

const Moon = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <MoonScene />
    </div>
  );
};

export default Moon;
