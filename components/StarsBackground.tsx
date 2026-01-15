"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Star = {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: number;
};

export default function StarsBackground({ count = 80 }: { count?: number }) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 1,
      delay: Math.random() * 5,
    }));
    setStars(generated);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-blue-300"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            boxShadow: "0 0 12px rgba(0,180,255,0.9)",
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 3,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
