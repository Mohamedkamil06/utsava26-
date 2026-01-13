import Navbar from "@/components/Navbar";
import ScheduleTimeline from "@/components/ScheduleTimeline";
import EventsPreview from "@/components/EventsPreview";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Divider */}
      <SectionDivider />

      {/* =========================
          COUNTDOWN + EVENTS SECTION
         ========================= */}
      <section className="relative min-h-[120vh] overflow-hidden">
        {/* Ambient Layers */}
        <div className="ambient-beams" />
        <div className="glow-layer" />
        <div className="grid-layer" />

        {/* Foreground Content */}
        <div className="relative z-10">
          <Countdown />
          <EventsPreview />
        </div>
      </section>

      {/* Divider */}
      <SectionDivider />

      {/* =========================
          🔥 SCHEDULE TIMELINE (NEW)
         ========================= */}
      <section className="relative overflow-hidden py-32">
        {/* Strong background to avoid boring look */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061a2f] via-[#071f38] to-black" />

        {/* Subtle motion */}
        <div className="ambient-beams opacity-60" />

        {/* Schedule Content */}
        <div className="relative z-10">
          <ScheduleTimeline />
        </div>
      </section>

      {/* Divider */}
      <SectionDivider />
    </main>
  );
}
