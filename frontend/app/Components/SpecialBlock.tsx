
import Image from "next/image";

type Props = {
  title: string;
  points: string[];
  image: string;
};

export default function SpecialBlock({ title, points, image }: Props) {
  return (
    <section className="bg-black text-white py-16 md:py-20 rounded-t-[40px] md:rounded-t-[60px]">
      
      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* LEFT */}
        <div className="w-full md:flex-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h2>

          <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-3 text-white/90 text-sm sm:text-base">
            {points.map((p, i) => (
              <li key={i}>• {p}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT (RESPONSIVE IMAGE) */}
        <div className="w-full md:flex-1 flex justify-center mt-6 md:mt-0">
          
          <div
            className="
              relative
              w-[200px] h-[260px]
              sm:w-[240px] sm:h-[320px]
              md:w-[280px] md:h-[360px]
              lg:w-[340px] lg:h-[440px]
            "
          >
            <Image
              src={image}
              fill
              alt="special"
              className="object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}