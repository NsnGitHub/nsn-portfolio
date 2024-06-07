import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1.25"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity: opacityProgress, scale: scaleProgress }}
      initial={{ opacity: 0, scale: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
