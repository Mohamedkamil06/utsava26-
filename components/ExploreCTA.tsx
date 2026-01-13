"use client";

import { motion } from "framer-motion";

export default function ExploreCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-cyan-800/20 to-blue-900/30 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <h3 className="mb-6 text-4xl font-semibold tracking-wide">
          Ready to dive deeper?
        </h3>

        <p className="mb-10 text-gray-300">
          Discover detailed events, schedules, rules, and registrations.
        </p>

        <motion.a
          href="#events"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block rounded-full bg-blue-600 px-10 py-4 text-sm font-semibold tracking-widest text-white shadow-[0_0_30px_rgba(0,120,255,0.6)]"
        >
          EXPLORE EVENTS →
        </motion.a>
      </motion.div>
    </section>
  );
}
