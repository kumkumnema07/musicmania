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
        description="At Music Mania School of Music, we believe in the transformative power of music. Founded with a passion for nurturing musical talent, we provide top-quality music education that inspires, motivates, and brings out the best in every student. Whether you’re dreaming of playing the guitar, perfecting your singing, or mastering the keyboard, our personalized approach helps you achieve your musical goals."
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
