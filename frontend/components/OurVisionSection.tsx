"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function OurVisionSection() {
  return (
    <section className="relative py-24 px-6 md:px-16 bg-black text-white overflow-hidden">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            Our Vision
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Empowering Every Soul Through Music
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl leading-relaxed text-sm">
            At MusicMania, we believe music is more than sound — it’s expression,
            confidence, and transformation. Our vision is to create a platform
            where passion meets professional guidance, helping every student
            unlock their true potential.
          </p>

          {/* Vision bullets */}
          <div className="mt-12 space-y-8">
            <VisionItem
              title="Learning Made Simple"
              description="Structured lessons, step-by-step guidance, and clear progression paths ensure that beginners and advanced learners grow confidently without confusion."
            />
            <VisionItem
              title="Training Backed by Experts"
              description="Our experienced instructors combine technique, creativity, and real-world performance insights to deliver high-quality music education."
            />
            <VisionItem
              title="Built for Long-Term Growth"
              description="From fundamentals to stage performance, we design our courses to support continuous musical development and lasting confidence."
            />
          </div>
        </div>

        {/* RIGHT IMAGE PANEL */}
       <div className="relative">

  <div className="relative w-full max-w-lg h-[60vh] min-h-[650px] rounded-3xl overflow-hidden border border-primary/30 shadow-[0_0_80px_-10px_#bcee16]">

    <Image
      src="/logo/musiclogo/ggjpg.jpg"
      alt="Music Vision"
      fill
      priority
      className="object-cover"
    />

  </div>

</div>

      </div>
    </section>
  );
}

/* ----------------- SUB COMPONENT ----------------- */

function VisionItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h4 className="font-semibold flex items-center gap-2 text-primary">
        {title}
        <ArrowUpRight className="h-4 w-4 text-primary" />
      </h4>
      <p className="mt-2 text-sm text-gray-400 max-w-md">
        {description}
      </p>
    </div>
  );
}