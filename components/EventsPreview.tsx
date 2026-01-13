"use client";

import { motion } from "framer-motion";

const events = [
  {
    title: "Technical Events",
    desc: "Mind-bending challenges that test logic, speed, and innovation.",
    icon: "⚙️",
  },
  {
    title: "Workshops",
    desc: "Hands-on sessions with industry experts and real tools.",
    icon: "🧠",
  },
  {
    title: "Hackathons",
    desc: "Build. Break. Innovate. Compete with the best minds.",
    icon: "💻",
  },
  {
    title: "Culturals",
    desc: "Music, dance, art & energy beyond technology.",
    icon: "🎭",
  },
];

export default function EventsPreview() {
  return (
    <section className="relative z-10 py-32">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-20 text-center text-3xl font-semibold tracking-widest text-blue-300"
      >
        WHAT AWAITS YOU
      </motion.h2>

      {/* Cards */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:grid-cols-4">
        {events.map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              boxShadow: "0 0 40px rgba(0,120,255,0.35)",
            }}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition"
          >
            {/* Floating Icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
              className="mb-6 text-4xl"
            >
              {event.icon}
            </motion.div>

            <h3 className="mb-3 text-lg font-semibold">
              {event.title}
            </h3>

            <p className="text-sm text-gray-300">
              {event.desc}
            </p>

            {/* Hover Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(0,120,255,0.25), transparent 60%)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
