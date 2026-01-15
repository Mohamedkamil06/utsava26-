"use client";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400">
      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold tracking-wide">
              UTSAVA 2026
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              A personal creative exploration inspired by campus culture.
            </p>
          </div>

          {/* CENTER */}
          <div className="text-center text-xs text-gray-500">
            <p>
              This website is an independent creative project.
            </p>
            <p className="mt-1">
              Not affiliated with the official event organizers.
            </p>
          </div>

          {/* RIGHT */}
          <div className="text-center md:text-right">
            <p className="text-sm">
              Designed & developed by{" "}
              <span className="text-blue-400 font-medium">
                Mohamed Kamil
              </span>
            </p>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-10 text-center text-xs text-gray-600">
          © 2026 • Built for learning, creativity & experimentation
        </div>
      </div>
    </footer>
  );
}
