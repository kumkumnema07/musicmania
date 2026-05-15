import AnimatedHeader from "../AnimatedHeader";

export default function VirarIntro() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <AnimatedHeader
          title={
            <>
              Welcome to {" "}
              <span className="bg-gradient-to-b from-[#bcee16] via-[#a3e635] to-[#84cc16] bg-clip-text text-transparent">
                Music Mania– Virar Branch!
              </span>
            </>
          }
          subtitle="Discover what makes our music learning experience unique and powerful."
        />

        <p className="text-gray-300 text-lg leading-relaxed">
          Are you passionate about music and ready to explore your talents?
          Whether you are looking to strum your first chords, hit the perfect
          note, or master the keyboard,{" "}
          <span className="text-primary font-semibold">
            Music Mania School of Music in Virar{" "}
          </span>
          is here to help you turn your musical dreams into reality. Are you
          passionate about music and ready to explore your talents? Whether you
          are looking to strum your first chords, hit the perfect note, or
          master the keyboard,{" "}
          <span className="text-primary font-semibold">
            Music Mania School of Music in Virar{" "}
          </span>
          is here to help you turn your musical dreams into reality.
        </p>
      </div>
    </section>
  );
}
