"use client";

import { useEffect, useState } from "react";

export default function FireCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* 🔥 Hide default cursor */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* 🔵 Soft glow around cursor ONLY */}
      <div
        className="pointer-events-none fixed inset-0 z-[9998]"
        style={{
          background: `radial-gradient(
            420px at ${pos.x}px ${pos.y}px,
            rgba(0,190,255,0.32),
            rgba(0,140,255,0.18),
            rgba(0,90,255,0.08),
            transparent 75%
          )`,
          transition: "background 0.06s linear",
        }}
      />

      {/* 🔥 Fire GIF Cursor */}
      <img
        src="/cursor/blue-fire.gif"
        alt="fire cursor"
        className="pointer-events-none fixed z-[9999]"
        style={{
          left: pos.x - 18,
          top: pos.y - 28,
          width: "36px",
          height: "48px",
          filter: "drop-shadow(0 0 16px rgba(0,180,255,0.9))",
        }}
      />
    </>
  );
}
