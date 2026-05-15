import React from "react";
import AnimatedHeader from "@/app/Components/AnimatedHeader";

type Props = {
  branchName: string;
  description: string;
};

export default function BranchIntro({ branchName, description }: Props) {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <AnimatedHeader
          title={
            <>
              Welcome to{" "}
              <span className="bg-gradient-to-b from-[#bcee16] via-[#a3e635] to-[#84cc16] bg-clip-text text-transparent">
                Music Mania – {branchName} Branch
              </span>
            </>
          }
          subtitle="Discover what makes our music learning experience unique and powerful."
        />

        <p className="text-gray-300 text-lg leading-relaxed mt-6">
          {description}
        </p>

      </div>
    </section>
  );
}