import BranchIntro from "@/app/Components/BranchIntro";
import BranchLocation from "@/app/Components/BranchLocation";
import VasaiCard from "@/app/Components/cards/VasaiCard";

import { branches } from "@/app/data/branches";
import CourseCategories from "@/app/Components/CourseCategories";
import CoursesPage from "@/app/Components/CoursesSection";


import CourseSlider from "@/components/CourseSlider";
import BranchCards from "@/app/Components/BranchCards";
import BranchAddress from "@/components/BranchAddress";
import AboutBlock from "@/app/Components/AboutBlock";
import SpecialBlock from "@/app/Components/SpecialBlock";

export default function vasaiCard() {
  const branch = branches.vasai;
  return (
    <>
      <VasaiCard />
      <BranchIntro
        branchName="Vasai"
        description="Join our Vasai branch and explore instruments with expert teachers."
      />
      <CoursesPage />
      <CourseCategories />
      <CourseCategories />

      <BranchLocation branchName={branch.name} mapSrc={branch.mapSrc} />
      <BranchAddress
        branchName="Vasai"
        address="Music Mania School of Music, 2nd Floor, XYZ Building, Near Station Road, Virar West, Mumbai - 401303"
        phone="+91 9876543210"
      />
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
      
      <CourseSlider />
      <BranchCards />

      
    </>
  );
}
