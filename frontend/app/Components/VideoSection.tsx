"use client";

import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import AnimatedHeader from "./AnimatedHeader";

export default function VideoSection() {
  return (
    <section className="bg-black py-20 px-6">
      <AnimatedHeader
        title="Latest Video"
        subtitle="Visit our branches across Mumbai and start your musical journey."
      ></AnimatedHeader>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <HeroVideoDialog
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/ScMzIvxBSi4"
          thumbnailSrc="https://images.unsplash.com/photo-1506157786151-b8491531f063"
          thumbnailAlt="Concert"
        />

        <HeroVideoDialog
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/ysz5S6PUM-U"
          thumbnailSrc="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc"
          thumbnailAlt="Studio"
        />

        <HeroVideoDialog
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
          thumbnailSrc="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
          thumbnailAlt="Music"
        />
      </div>
    </section>
  );
}
