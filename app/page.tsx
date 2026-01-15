import Footer from "@/components/Footer";
import UtsavaExperience from "@/components/UtsavaExperience";
import Navbar from "@/components/Navbar";
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
          ✨ UTSAVA EXPERIENCE
         ========================= */}
      <UtsavaExperience />

      {/* Divider */}
      <SectionDivider />

      {/* =========================
          FOOTER (FINAL)
         ========================= */}
      <Footer />

    </main>
  );
}
