"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT — LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg font-semibold tracking-widest"
        >
          UTSAVA 2026
        </motion.div>

        {/* RIGHT — REGISTER */}
        <motion.a
          href="https://www.srec-utsava.in/"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm tracking-widest text-blue-300 hover:text-blue-200 transition"
        >
          REGISTER
        </motion.a>

      </div>
    </header>
  );
}
