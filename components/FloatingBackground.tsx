"use client";

import { motion } from "framer-motion";

const blobs = Array.from({ length: 12 });

export default function FloatingBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {blobs.map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full blur-3xl opacity-30"
          style={{
            width: 220,
            height: 220,
            background:
              i % 2 === 0
                ? "radial-gradient(circle, rgba(0,200,255,0.6), transparent 70%)"
                : "radial-gradient(circle, rgba(0,120,255,0.5), transparent 70%)",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 18 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
