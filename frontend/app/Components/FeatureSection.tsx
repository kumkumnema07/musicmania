import { Music, Mic, Award, Sliders, Trophy, TrendingUp } from "lucide-react";
import AnimatedHeader from "./AnimatedHeader";

const features = [
  {
    icon: Music,
    text: "Performance based curriculum designed by music maestros",
  },
  {
    icon: Mic,
    text: "1:1 Live Classes in vocals and instruments by certified teachers",
  },
  {
    icon: Award,
    text: "Exclusive Live masterclasses by industry legends",
  },
  {
    icon: Sliders,
    text: "Practice Studio with digital tools to accelerate learning",
  },
  {
    icon: Trophy,
    text: "Your first gig! Every student gets to perform for an audience",
  },
  {
    icon: TrendingUp,
    text: "Goal based progress ladder to track your musical evolution",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-full mx-auto ">
        <AnimatedHeader
          title="Music Mania Advantage"
          subtitle="Visit our branches across Mumbai and start your musical journey."
        ></AnimatedHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-6"
              >
                {/* Circular Icon Box */}
                <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center bg-[#1a1a1a] hover:shadow-[0_0_25px_#bcee16] transition duration-300">
                  <Icon size={42} className="text-primary" />
                </div>

                {/* Text */}
                <p className="text-gray-300 text-lg leading-relaxed max-w-xs">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
