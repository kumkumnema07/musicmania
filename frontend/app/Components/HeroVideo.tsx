"use client";

import { SparklesText } from "@/components/ui/sparkles-text";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center">

      {/* 🎬 VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/3345545-hd_1920_1080_25fps (1) (1).mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* CONTENT */}
      <div className="relative z-10 px-4">
        <SparklesText className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white">
          MusicMania
        </SparklesText>

        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
          Learn vocals & instruments from certified maestros.
          Performance based curriculum with 1:1 live sessions.
        </p>

        <button className="mt-8 bg-primary text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-yellow-500/30">
          Start Your Journey
        </button>
      </div>
    </section>
  );
}