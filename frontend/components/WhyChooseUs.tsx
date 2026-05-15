"use client"

import Image from "next/image"

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="text-center space-y-3">
      <div className="text-3xl text-primary">{icon}</div>
      <h4 className="text-xl font-semibold text-white">{title}</h4>
      <p className="text-lg text-gray-400 leading-relaxed">{desc}</p>
    </div>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-24 px-6 flex justify-center">

      <div className="relative bg-[#111] rounded-3xl max-w-6xl w-full p-10 md:p-16 shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Why Choose <span className="text-primary">Music Mania?</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl text-lg mx-auto">
            From structured training to live stage performances,
            we help aspiring artists transform passion into performance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-center ">

          {/* LEFT */}
          <div className="space-y-12">
            <FeatureCard
              icon="🎤"
              title="Certified Mentors"
              desc="Learn from experienced vocalists and instrumentalists with structured curriculum."
            />
            <FeatureCard
              icon="⚡"
              title="Fast Skill Growth"
              desc="Personalized 1:1 live sessions that accelerate your learning journey."
            />
          </div>

          {/* CENTER IMAGE WITH BACK LAYER */}
          <div className="relative flex justify-center">

            {/* Back Offset Layer */}
            <div className="absolute w-[260px] h-[340px] bg-yellow-400/30 shadow-2xl rounded-2xl translate-x-6 translate-y-6 blur-xl"></div>

            <Image
              src="/logo/musiclogo/ggjpg.jpg"
              alt="Music Performance"
              width={300}
              height={400}
              className="relative rounded-2xl shadow-xl object-cover"
            />
          </div>

          {/* RIGHT */}
          <div className="space-y-12">
            <FeatureCard
              icon="🎶"
              title="Real Stage Exposure"
              desc="Perform in live events and masterclasses to build confidence."
            />
            <FeatureCard
              icon="🚀"
              title="Complete Music Ecosystem"
              desc="Practice studio, digital tools, competitions and career guidance."
            />
          </div>

        </div>

        {/* Button */}
        <div className="text-center mt-16">
          <button className="bg-primary text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition shadow-lg shadow-yellow-500/30">
            Join Music Mania Today
          </button>
        </div>

      </div>
    </section>
  )
}