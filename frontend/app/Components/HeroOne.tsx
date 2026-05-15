"use client";

export default function HeroOne() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/logo/musiclogo/back.png"
          alt="Live Concert"
          className="w-full h-full object-contain md:object-cover object-center"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Side Gradient Blend */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-black/60 to-[#0f172a]/90" />

      {/* Content */}
      <div className="relative z-10 px-4 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white">
          MusicMania
        </h1>

        <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          Learn vocals & instruments from certified maestros.
          Performance based curriculum with 1:1 live sessions.
        </p>

        <button className="mt-8 bg-primary text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-yellow-500/40">
          Start Your Journey
        </button>
      </div>
    </section>
  );
}