export default function SplitShowcase() {
  return (
    <div className="bg-black text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <section className="py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/logo/musiclogo/frame.png"
                alt="Our Live Performances"
                className="w-full h-[420px] md:h-[520px] object-cover hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <span className="text-sm uppercase tracking-widest text-primary">
              FIRST BEATS
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
              Our Live Performances
            </h2>

            <p className="mt-6 text-neutral-400 leading-relaxed max-w-lg">
              From classroom practice to stage spotlight, MusicMania provides real
              performance opportunities that help students build confidence and
              professional presence.
            </p>

            <button className="mt-10 bg-primary text-black px-7 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-yellow-500/20">
              Learn More
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}


// "use client";

// import { motion } from "framer-motion";

// export default function SplitShowcase() {
//   return (
//     <div className="bg-black text-white relative overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

//       <SplitSection
//         image="/logo/musiclogo/frame.png"
//         label="FIRST BEATS"
//         title="Our Live Performances"
//         description="From classroom practice to stage spotlight, MusicMania provides real performance opportunities that help students build confidence and professional presence."
//         reverse={false}
//       />

//       <SplitSection
//       image="/logo/musiclogo/frame.png"
//         label="AFTER THAT"
//         title="Band History"
//         description="Our journey began with a simple mission — to make music education practical and performance-driven for aspiring artists."
//         reverse={true}
//       />

//       <SplitSection
//        image="/logo/musiclogo/frame.png"
//         label="NEXT STAGE"
//         title="Studio Recordings"
//         description="Students gain hands-on studio recording experience in professional environments, preparing them for real-world music production."
//         reverse={false}
//       />

//     </div>
//   );
// }


// /* ================= COMPONENT ================= */

// function SplitSection({
//   image,
//   label,
//   title,
//   description,
//   reverse,
// }: {
//   image: string;
//   label: string;
//   title: string;
//   description: string;
//   reverse?: boolean;
// }) {
//   return (
//     <section className="py-16 md:py-8 px-6 md:px-16 relative">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

//         {/* IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, x: reverse ? 80 : -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className={`${reverse ? "lg:order-2" : ""}`}
//         >
//           <div className="relative overflow-hidden rounded-2xl shadow-2xl">
//             <img
//               src={image}
//               alt={title}
//               className="w-full h-[420px] md:h-[520px] object-cover hover:scale-105 transition duration-700"
//             />
//             <div className="absolute inset-0 bg-black/30" />
//           </div>
//         </motion.div>

//         {/* CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: reverse ? -80 : 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className={`${reverse ? "lg:order-1" : ""}`}
//         >

//           <span className="text-sm uppercase tracking-widest text-yellow-400">
//             {label}
//           </span>

//           <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
//             {title}
//           </h2>

//           <p className="mt-6 text-neutral-400 leading-relaxed max-w-lg">
//             {description}
//           </p>

//           <button className="mt-10 bg-yellow-400 text-black px-7 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-yellow-500/20">
//             Learn More
//           </button>

//         </motion.div>

//       </div>
//     </section>
//   );
// }