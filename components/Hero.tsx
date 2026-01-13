"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">

      {/* Background image with subtle breathing effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.03 }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          UTSAVA 2026
        </h1>

        <motion.p
          className="text-lg md:text-xl max-w-xl mx-auto text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          A modern symposium experience where technology meets creativity.
        </motion.p>

        <motion.button
          className="mt-10 px-8 py-3 rounded-full bg-primary text-black font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Explore Events
        </motion.button>
      </motion.div>

    </section>
  );
}
