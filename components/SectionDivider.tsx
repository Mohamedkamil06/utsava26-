"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative my-24 flex justify-center">
      <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <motion.div
        className="absolute h-px w-24 bg-blue-500"
        animate={{ x: ["-200%", "200%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
