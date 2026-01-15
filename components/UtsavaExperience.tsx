"use client";

import { motion } from "framer-motion";

const items = [
  {
    icon: "🎤",
    title: "Guest Talks",
    desc: "Inspiring sessions with engaging talks and discussions.",
  },
  {
    icon: "🎶",
    title: "Cultural Nights",
    desc: "Music and electrifying performances.",
  },
  {
    icon: "🏆",
    title: "Mega Prizes",
    desc: "Win exciting rewards and recognition at every level.",
  },
  {
    icon: "🤝",
    title: "Networking",
    desc: "Connect with students, professionals and creators.",
  },
];

export default function UtsavaExperience() {
  return (
    <section className="relative py-32 overflow-hidden">
      
      {/* Soft background — DOES NOT BLOCK STARS */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold tracking-wide mb-20"
        >
          <span className="text-blue-400">UTSAVA</span>{" "}
          <span className="text-white">EXPERIENCE</span>
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="
                relative
                rounded-2xl
                p-8
                bg-white/5
                backdrop-blur-md
                border border-white/10
                hover:border-blue-400/40
                transition-all
              "
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 hover:opacity-100 blur-2xl transition pointer-events-none" />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-blue-200 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
