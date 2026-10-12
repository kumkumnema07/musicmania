import VirarCard from "@/app/Components/cards/VirarCard";
import { branches } from "@/app/data/branches";

import CourseCategories from "@/app/Components/CourseCategories";
import CoursesPage from "@/app/Components/CoursesSection";

import BranchIntro from "../../Components/BranchIntro";
import BranchLocation from "@/app/Components/BranchLocation";
import AboutBlock from "@/app/Components/AboutBlock";
import SpecialBlock from "@/app/Components/SpecialBlock";
import BranchAddress from "@/components/BranchAddress";

export default function Virar() {
  const branch = branches.virar;
  return (
    <div>
      {/* <Box /> */}
      <VirarCard />

      <BranchIntro
        branchName="Virar"
        description="Music Mania School of Music in Virar is here to help you turn your musical dreams into reality.
        Music Mania School of Music in Virar is here to help you turn your musical dreams into reality
        Music Mania School of Music in Virar is here to help you turn your musical dreams into reality"
      />
      <CoursesPage />
      <CourseCategories />

      <BranchLocation branchName={branch.name} mapSrc={branch.mapSrc} />
      <BranchAddress
        branchName="Virar"
        address="Shop no F 18, Global City, Agarwal Paramount, Rustomjee Global City, Virar West, Mumbai, Maharashtra 401303"
        phone="+91 7415555535"
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
      
      
    </div>
  );
}
