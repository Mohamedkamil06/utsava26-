"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode } from "react";

export default function MagneticButton({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.35);
    y.set(offsetY * 0.35);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className="
        inline-block
        px-14 py-4 rounded-xl
        text-sm tracking-[0.3em]
        text-cyan-200
        bg-black/60
        border border-cyan-400/30
        hover:shadow-[0_0_50px_rgba(0,180,255,0.45)]
        transition-shadow
      "
    >
      {children}
    </motion.a>
  );
}
