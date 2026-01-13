"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="text-lg font-semibold tracking-wide">
          <span className="text-primary">UTSAVA</span>
          <span className="text-muted ml-1">2026</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-muted">
          <a className="hover:text-white transition">Events</a>
          <a className="hover:text-white transition">Workshops</a>
          <a className="hover:text-white transition">Schedule</a>
          <a className="hover:text-white transition">Sponsors</a>
        </div>

        <button className="px-5 py-2 rounded-full bg-primary text-black font-medium hover:scale-105 transition">
          Register
        </button>

      </div>
    </nav>
  );
}
