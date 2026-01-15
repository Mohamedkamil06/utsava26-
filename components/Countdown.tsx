"use client";
import MagneticButton from "@/components/MagneticButton";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingBackground from "@/components/FloatingBackground";

/**
 * TARGET: Jan 30, 2026 — 9:00 AM IST
 * IST = UTC + 5:30 → UTC = 03:30 AM
 */
const TARGET_DATE_UTC = Date.UTC(2026, 0, 30, 3, 30, 0);

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(): TimeLeft {
  const now = Date.now();
  const diff = TARGET_DATE_UTC - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(calculateTimeLeft());

    const interval = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <section className="relative py-32 overflow-hidden">
      {/* 🌌 Floating background */}
      <FloatingBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <p className="text-sm tracking-widest text-cyan-300 mb-2">
              EVENT DATES
            </p>

            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              JAN 30 & 31
            </h2>

            <p className="mt-2 text-blue-200">
              FRIDAY – SATURDAY
            </p>

            <p className="mt-1 text-xs text-blue-300/80">
              Starts at 9:00 AM IST
            </p>
          </div>

          {/* CENTER */}
          <div className="flex flex-col items-center">
            <p className="mb-10 text-sm tracking-widest text-blue-300">
              COUNTDOWN TO UTSAVA 2026
            </p>

            <div className="
  flex flex-wrap justify-center gap-6 md:gap-10
  text-center
">

              <TimeBlock label="DAYS" value={time.days} />
              <TimeBlock label="HOURS" value={time.hours} />
              <AnimatedBlock label="MINUTES" value={time.minutes} />
              <PulseBlock label="SECONDS" value={time.seconds} />
            </div>

            <div className="mt-20">
  <MagneticButton href="https://www.srec-utsava.in/">
    REGISTER NOW
  </MagneticButton>
</div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end">
            <motion.img
              src="/images/all-are-welcome-here-edc.gif"
              className="w-48"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* =========================
   DIGIT COMPONENTS
   ========================= */

function TiltDigit({ value }: { value: number }) {
  return (
    <motion.div
      whileHover={{
        rotateX: 8,
        rotateY: -8,
        scale: 1.06,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="text-6xl font-extrabold
                 bg-gradient-to-b from-white to-cyan-200
                 bg-clip-text text-transparent"
      style={{ transformStyle: "preserve-3d" }}
    >
      {value}
    </motion.div>
  );
}
function LightWave() {
  return (
    <motion.div
      className="
        absolute -bottom-2 left-0 right-0 h-[2px]
        bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent
      "
      animate={{
        x: ["-100%", "100%"],
        opacity: [0.2, 0.6, 0.2],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

function TimeBlock({ label, value }: { label: string; value: number }) {
  return (
    <div className="relative flex flex-col items-center">
      <TiltDigit value={value} />

      {/* Light wave */}
      <LightWave />

      <div className="mt-3 text-xs tracking-widest text-cyan-300">
        {label}
      </div>
    </div>
  );
}


function AnimatedBlock({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <TiltDigit value={value} />
        </motion.div>
      </AnimatePresence>

      <div className="mt-2 text-xs tracking-widest text-cyan-300">
        {label}
      </div>
    </div>
  );
}

function PulseBlock({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <TiltDigit value={value} />
        </motion.div>
      </AnimatePresence>

      <div className="mt-2 text-xs tracking-widest text-cyan-300">
        {label}
      </div>
    </div>
  );
}
