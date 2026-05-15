import CourseSlider from "@/components/CourseSlider";
import BentoGrid1 from "@/components/mvpblocks/bento-grid-1";
import WaitlistPage from "@/components/mvpblocks/waitlist";
import OurVisionSection from "@/components/OurVisionSection";
import SplitShowcase from "@/components/SplitShowcase";
import BranchCards from "../Components/BranchCards";
import AboutBlock from "../Components/AboutBlock";
import SpecialBlock from "../Components/SpecialBlock";

export default function about() {
  return (
    <>
      {/* hero section */}

      <WaitlistPage />
      <OurVisionSection />
      <SplitShowcase />

      <BentoGrid1 />
      <CourseSlider />
      <AboutBlock
        title="About Music Champs"
        description="MusicChamps is an online platform...Music Mania School of Music in Virar is here to help you turn your musical dreams into reality.
                Music Mania School of Music in Virar is here to help you turn your musical dreams into reality
                Music Mania School of Music in Virar is here to help you turn your musical dreams into realityMusic Mania School of Music in Virar is here to help you turn your musical dreams into reality.
                Music Mania School of Music in Virar is here to help you turn your musical dreams into reality
                Music Mania School of Music in Virar is here to help you turn your musical dreams into realityMusic Mania School of Music in Virar is here to help you turn your musical dreams into reality.
                Music Mania School of Music in Virar is here to help you turn your musical dreams into reality
                Music Mania School of Music in Virar is here to help you turn your musical dreams into reality"
        image1="/logo/musiclogo/guitar.jpg"
        image2="/logo/musiclogo/guitar.jpg"
      />
      <SpecialBlock
        title="What makes Music Champs special?"
        points={[
          "Affordable music classes",
          "Expert teachers",
          "Confidence building sessions",
        ]}
        image="/logo/musiclogo/guitar.png"
      />
      <BranchCards />
    </>
  );
}
