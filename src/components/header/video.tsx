"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const HeaderVideo = () => {
  const scrollRef = useRef<any>(null);
  const { scrollYProgress } = useScroll();

  return (
    <motion.section
      className="max-w-5xl border border-muted rounded-md p-2 backdrop-blur-sm my-6 lg:my-20"
      style={{
        opacity: useTransform(scrollYProgress, [0, 1], [1, 0.3]),
        scale: useTransform(scrollYProgress, [0, 1], [1, 0.4]),
      }}
      ref={scrollRef}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/main.mp4" type="video/mp4" />
      </video>
    </motion.section>
  );
};
