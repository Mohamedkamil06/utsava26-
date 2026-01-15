import FireCursor from "@/components/FireCursor";
import StarsBackground from "@/components/StarsBackground";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UTSAVA 2026",
  description:
    "A modern techno-cultural symposium organized by Sri Ramakrishna Engineering College.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased relative overflow-x-hidden">
        
        {/* 🌌 GLOBAL STARS (behind everything) */}
        <StarsBackground />

        {/* 🔥 FIRE CURSOR */}
        <FireCursor />

        {/* CONTENT */}
        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}
