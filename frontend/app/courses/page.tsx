import MinimalHero from "@/components/mvpblocks/minimal-hero";
import CoursesSection from "../Components/CoursesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CourseCategories from "../Components/CourseCategories";



export default function courses() {
  return (
    <>
    {/* hero start */}
      <MinimalHero />
      {/* hero end */}
      {/* couse start */}

      <CoursesSection />
      <CourseCategories />
      <WhyChooseUs />
{/* couse end */}

      
    </>
  );
}
