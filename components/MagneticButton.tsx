"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";

export default function MagneticButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-20, 20], [6, -6]);
  const rotateY = useTransform(x, [-20, 20], [-6, 6]);

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.9);
    y.set(offsetY * 0.9);

  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y, rotateX, rotateY }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      className="relative rounded-xl bg-blue-600 px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-colors hover:bg-blue-500"
    >
      {children}
    </motion.button>
  );
}
