import FeaturesSection from "../Components/FeatureSection";

import VideoSection from "../Components/VideoSection";

import Faq4 from "@/components/mvpblocks/faq-4";
import RecordingSection from "@/components/RecordingSection";

import TestimonialsCarousel from "@/components/mvpblocks/testimonials-carousel";

import MusicHero from "../Components/MusicHero";
import BranchCards from "../Components/BranchCards";
import CourseSlider from "@/components/CourseSlider";
import CTA from "@/components/CTA";


export default function Home() {
  return (
    <>
      {/* hero images start */}
      {/* <HeroVideo /> */}
      <MusicHero />

      {/* <HeroPremium /> */}
      <FeaturesSection />
      <VideoSection />

      <RecordingSection />
      <Faq4 />

      <section className="relative w-full py-24 bg-black overflow-hidden">
        {/* red glow background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/30 to-black blur-3xl opacity-40"></div>

        <div className="relative z-10">
          <TestimonialsCarousel />
         

            <BranchCards />
          

          <CourseSlider />
        </div>
      </section>
      <CTA />
    </>
  );
}
