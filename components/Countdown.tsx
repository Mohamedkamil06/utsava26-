"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

const TARGET_DATE = new Date("2026-01-30T09:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();

  return {
    days: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
    hours: Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0),
    minutes: Math.max(Math.floor((diff / (1000 * 60)) % 60), 0),
    seconds: Math.max(Math.floor((diff / 1000) % 60), 0),
  };
}

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // ⛔ Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <section className="relative overflow-hidden bg-black py-32 text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 glow-layer" />
        <div className="absolute inset-0 grid-layer" />
      </div>

      {/* CONTENT GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

          {/* ================= LEFT — EVENT DATE ================= */}
          <div className="text-center md:text-left">
            <p className="text-sm tracking-widest text-blue-400 mb-2">
              EVENT DATES
            </p>

            <h2 className="text-4xl font-bold">
              JAN 30 & 31
            </h2>

            <p className="mt-2 text-blue-300">
              THURSDAY – FRIDAY
            </p>
          </div>

          {/* ================= CENTER — COUNTDOWN ================= */}
          <div className="flex flex-col items-center">
            <p className="mb-10 text-sm tracking-widest text-blue-300">
              COUNTDOWN TO UTSAVA 2026
            </p>

            <div className="flex gap-10 text-center">
              <TimeBlock label="DAYS" value={time.days} />
              <TimeBlock label="HOURS" value={time.hours} />
              <AnimatedBlock label="MINUTES" value={time.minutes} />
              <PulseBlock label="SECONDS" value={time.seconds} />
            </div>

            {/* CTA */}
            <div className="mt-16">
              <MagneticButton>REGISTER NOW</MagneticButton>
            </div>
          </div>

          {/* ================= RIGHT — GIF ================= */}
          <div className="flex justify-center md:justify-end">
            <motion.img
              src="/images/all-are-welcome-here-edc.gif"
              alt="All are welcome"
              className="w-48 opacity-90"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ------------------ SUB COMPONENTS ------------------ */

function TimeBlock({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="text-6xl font-bold tabular-nums">{value}</div>
      <div className="mt-2 text-xs tracking-widest text-blue-400">{label}</div>
    </div>
  );
}

function AnimatedBlock({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="text-6xl font-bold tabular-nums"
        >
          {value}
        </motion.div>
      </AnimatePresence>
      <div className="mt-2 text-xs tracking-widest text-blue-400">{label}</div>
    </div>
  );
}

function PulseBlock({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <motion.div
        key={value}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 0.4 }}
        className="text-6xl font-bold tabular-nums"
      >
        {value}
      </motion.div>
      <div className="mt-2 text-xs tracking-widest text-blue-400">{label}</div>
    </div>
  );
}
