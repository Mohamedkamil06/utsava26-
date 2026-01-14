"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = {
  id: number;
  left: number;
  top: number;
};

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute w-1 h-1 rounded-full bg-blue-400 opacity-70"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
