import BranchIntro from "@/app/Components/BranchIntro";
import NalasoparaCard from "@/app/Components/cards/NalasoparaCard";
import { branches } from "@/app/data/branches";

import CourseCategories from "@/app/Components/CourseCategories";
import CoursesPage from "@/app/Components/CoursesSection";
import BranchLocation from "@/app/Components/BranchLocation";

import CourseSlider from "@/components/CourseSlider";
import BranchCards from "@/app/Components/BranchCards";
import BranchAddress from "@/components/BranchAddress";
import AboutBlock from "@/app/Components/AboutBlock";
import SpecialBlock from "@/app/Components/SpecialBlock";

export default function Page() {
  const branch = branches.nalasopara;

  return (
    <>
      <NalasoparaCard />

      <BranchIntro
        branchName={branch.name}
        description="Start your music journey in Nalasopara with structured training."
      />

      <CoursesPage />
      <CourseCategories />

      <BranchLocation branchName={branch.name} mapSrc={branch.mapSrc} />
      <BranchAddress
        branchName="Nalasopara"
        address="Music Mania School of Music, 2nd Floor, XYZ Building, Near Station Road, Virar West, Mumbai - 401303"
        phone="+91 9876543210"
      />
      <AboutBlock
        title="About MusicChamps"
        description="MusicChamps is an online platform...Music Mania School of Music in Virar is here to help you turn your musical dreams into reality.
              Music Mania School of Music in Virar is here to help you turn your musical dreams into reality
              Music Mania School of Music in Virar is here to help you turn your musical dreams into reality Music Mania School of Music in Virar is here to help you turn your musical dreams into reality.
              Music Mania School of Music in Virar is here to help you turn your musical dreams into reality
              Music Mania School of Music in Virar is here to help you turn your musical dreams into reality Music Mania School of Music in Virar is here to help you turn your musical dreams into reality.
              Music Mania School of Music in Virar is here to help you turn your musical dreams into reality
              Music Mania School of Music in Virar is here to help you turn your musical dreams into reality"
        image1="/logo/musiclogo/guitar.jpg"
        image2="/logo/musiclogo/guitar.jpg"
      />
      <SpecialBlock
        title="What makes MusicChamps special?"
        points={[
          "Affordable music classes",
          "Expert teachers",
          "Confidence building sessions",
        ]}
        image="/logo/musiclogo/guitar.png"
      />
     
      <CourseSlider />
      <BranchCards />
    </>
  );
}
