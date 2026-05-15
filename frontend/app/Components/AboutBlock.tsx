"use client";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image1: string;
  image2: string;
};

export default function AboutBlock({
  title,
  description,
  image1,
  image2,
}: Props) {
  return (
    <section className="bg-black text-white py-16">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* LEFT */}
        <div className="w-full md:flex-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            {title}
          </h2>

          <p className="mt-4 sm:mt-6 text-gray-300 leading-relaxed text-sm sm:text-base">
            {description}
          </p>

          <button className="mt-5 sm:mt-6 bg-primary px-5 py-2 rounded-full text-lg sm:text-lg text-black">
            Contact Us
          </button>
        </div>

        {/* RIGHT */}
        <div className="w-full md:flex-1 flex justify-center gap-4 sm:gap-6 mt-6 md:mt-0">
          {/* IMAGE 1 */}
          <div
            className="relative 
    w-[130px] h-[200px] 
    sm:w-[160px] sm:h-[240px] 
    md:w-[200px] md:h-[280px] 
    lg:w-[260px] lg:h-[360px]"
          >
            <Image
              src={image1}
              fill
              alt="img1"
              className="rounded-xl object-cover"
            />
          </div>

          {/* IMAGE 2 */}
          <div
            className="relative 
    w-[130px] h-[200px] 
    sm:w-[160px] sm:h-[240px] 
    md:w-[200px] md:h-[280px] 
    lg:w-[260px] lg:h-[360px] 
    mt-6 sm:mt-10 md:mt-12"
          >
            <Image
              src={image2}
              fill
              alt="img2"
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
