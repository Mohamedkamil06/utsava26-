"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const schedules = {
  day1: [
    { time: "09:00 AM", title: "Opening Ceremony", desc: "Inauguration & keynote" },
    { time: "10:30 AM", title: "Technical Events", desc: "Competitions begin" },
    { time: "01:00 PM", title: "Lunch Break", desc: "Networking & refreshments" },
    { time: "02:00 PM", title: "Workshops", desc: "Hands-on expert sessions" },
  ],
  day2: [
    { time: "09:30 AM", title: "Hackathons Resume", desc: "Final rounds begin" },
    { time: "12:30 PM", title: "Project Expo", desc: "Showcase innovations" },
    { time: "03:00 PM", title: "Valedictory", desc: "Awards & closing" },
    { time: "06:00 PM", title: "Culturals Night", desc: "Music & celebrations" },
  ],
};

export default function ScheduleTimeline() {
  const [day, setDay] = useState<"day1" | "day2">("day1");

  return (
    <section className="relative bg-black py-32 text-white overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent blur-2xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-semibold tracking-widest text-blue-300"
        >
          EVENT SCHEDULE
        </motion.h2>

        {/* Day Tabs */}
        <div className="mb-20 flex justify-center gap-6">
          {(["day1", "day2"] as const).map((d) => (
            <button
              key={d}
              onClick={() => setDay(d)}
              className={`rounded-full px-8 py-3 text-sm tracking-widest transition ${
                day === d
                  ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(0,120,255,0.8)]"
                  : "border border-white/20 text-gray-300 hover:text-white"
              }`}
            >
              {d === "day1" ? "DAY 1" : "DAY 2"}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-blue-400/80 via-blue-500/40 to-transparent" />

          {schedules[day].map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`relative mb-24 flex w-full ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Card */}
                <div className="relative w-[46%] rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <p className="text-sm tracking-widest text-blue-400">
                    {item.time}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">
                    {item.desc}
                  </p>
                </div>

                {/* Center Dot */}
                <span className="absolute left-1/2 top-6 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(0,140,255,0.9)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
