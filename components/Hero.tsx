"use client";

import { motion } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">

      {/* Background (STATIC) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Slow light sweep (VERY visible) */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        initial={{ x: "-70%" }}
        animate={{ x: "70%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="h-full w-[45%] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-3xl" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-6">

        {/* Glow behind title */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[70%] h-[240px] bg-blue-500/30 blur-[160px]" />
        </div>

        {/* Neon Image (NO SCALE, NO BLUR DAMAGE) */}
        <motion.img
          src="/images/utsava26-neon.png"
          alt="UTSAVA 26"
          className="mx-auto mt-10 md:mt-16 w-[92%] max-w-4xl mix-blend-screen"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            filter: [
              "drop-shadow(0 0 20px rgba(0,180,255,0.6))",
              "drop-shadow(0 0 36px rgba(0,180,255,0.9))",
              "drop-shadow(0 0 20px rgba(0,180,255,0.6))",
            ],
          }}
          transition={{
            opacity: { duration: 1.2 },
            filter: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Subtitle */}
         <motion.p
          className="mt-8 text-lg md:text-xl max-w-2xl mx-auto text-blue-200 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <span className="font-semibold text-blue-300">UTSAVA 2026</span> is a grand
          techno-cultural symposium organized by
          <span className="font-semibold text-blue-300">
            {" "}Sri Ramakrishna Engineering College
          </span>.
        </motion.p>


        {/* CTA */}
        

      </div>
    </section>
  );
}
