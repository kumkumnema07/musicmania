"use client"

import Image from "next/image"

export default function MusicHero() {

  return (
    <section className="relative min-h-screen flex items-center  bg-black">

      {/* Soft glow background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500 opacity-20 blur-[150px] rounded-full"></div>

      <div className="relative z-10 w-full px-10 lg:px-20 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight">
            Learn Music <br/>
            <span className="text-primary">
              Like a Rockstar
            </span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            Join Music Mania Academy and master Guitar,
            Vocals, Piano and Music Production with professionals.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-primary text-black px-7 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Join Now
            </button>

            <button className="border border-gray-500 text-gray-300 px-7 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Explore Courses
            </button>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div className="flex justify-center relative h-[600px]">

          {/* glow behind image */}
          <div className="absolute w-96 h-96 bg-yellow-400 opacity-20 blur-[120px] rounded-full"></div>

          <Image
            src="/logo/musiclogo/guitar.png"
            alt="Music Owner"
            width={420}
            height={500}
            className="relative z-10 hover:scale-105 transition duration-500"
          />

        </div>

      </div>

    </section>
  )
}