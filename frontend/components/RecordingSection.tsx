"use client";

import { useRef, useState, useEffect } from "react";

import { Play, Pause, Volume2 } from "lucide-react";
import Image from "next/image";
import AnimatedHeader from "@/app/Components/AnimatedHeader";

type Track = {
  id: number;
  title: string;
  artist: string;
  src: string;
};

const tracks: Track[] = [
  {
    id: 1,
    title: "London Beats",
    artist: "Calvin Norris",
    src: "/audio/london.mp3",
  },
  {
    id: 2,
    title: "Perfect Love",
    artist: "Andreas Thonikya",
    src: "/audio/perfect.mp3",
  },
  {
    id: 3,
    title: "Matt Damicorn",
    artist: "Inception",
    src: "/audio/matt.mp3",
  },
];
export default function RecordingSection() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  const handlePlay = (track: Track) => {
    if (!audioRef.current) return;

    if (playingId === track.id) {
      audioRef.current.pause();
      setPlayingId(null);
    } else {
      audioRef.current.src = track.src;
      audioRef.current.play();
      setPlayingId(track.id);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const updateProgress = () => {
      const percent = (audio.currentTime / audio.duration) * 100;
      setProgress(percent || 0);
    };

    audio.addEventListener("timeupdate", updateProgress);

    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  return (
    <section className="bg-black py-20 relative overflow-hidden">
      {/* MOBILE MIC IMAGE */}

      <div className="lg:hidden flex justify-center mb-10">
        <Image
          src="https://res.cloudinary.com/dr6jf7sdp/image/upload/v1773391923/microphone_no_bg_vlsslz.png"
          alt="mic"
          width={300}
          height={400}
        />
      </div>

      {/* DESKTOP MIC */}

      <div className="hidden lg:block absolute left-1 bottom-0">
        <Image
          src="https://res.cloudinary.com/dr6jf7sdp/image/upload/v1773391923/microphone_no_bg_vlsslz.png"
          alt="mic"
          width={420}
          height={600}
        />
      </div>

      {/* DESKTOP HEADPHONE */}

      <div className="hidden lg:block absolute right-10 bottom-0">
        <Image
          src="https://res.cloudinary.com/dr6jf7sdp/image/upload/v1773396431/headphone_n7dxch.png"
          alt="headphone"
          width={380}
          height={520}
        />
      </div>

      {/* CENTER CONTENT */}

      <div className="max-w-3xl mx-auto text-center relative z-10 px-6">
        <AnimatedHeader
          title="Recent Records"
          subtitle="Visit our branches across Mumbai and start your musical journey."
        ></AnimatedHeader>

        <p className="text-gray-400 mt-4 mb-10">
          Discover our latest music productions and professional recordings.
        </p>

        <div className="space-y-6 text-left">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="flex flex-col md:flex-row md:items-center md:justify-between py-6 border-b border-gray-700 gap-4"
            >
              {/* LEFT */}
              <div>
                <h3 className="text-white font-semibold text-lg">
                  {track.title}
                </h3>
                <p className="text-gray-400 text-sm">{track.artist}</p>
              </div>

              {/* CENTER */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handlePlay(track)}
                  className="bg-primary text-white p-3 rounded-full"
                >
                  {playingId === track.id ? (
                    <Pause size={18} />
                  ) : (
                    <Play size={18} />
                  )}
                </button>

                <span className="text-gray-400 text-sm">00:00</span>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-3">
                <Volume2 className="text-gray-400" size={18} />

                <div className="w-24 h-[2px] bg-gray-600 rounded">
                  <div
                    className="h-[2px] bg-primary rounded transition-all duration-200"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-12 bg-primary text-black px-8 py-3 rounded-full">
          Read More
        </button>
      </div>

      {/* MOBILE HEADPHONE */}

      <div className="lg:hidden flex justify-center mt-16">
        <Image
          src="https://res.cloudinary.com/dr6jf7sdp/image/upload/v1773396431/headphone_n7dxch.png"
          alt="headphone"
          width={250}
          height={300}
        />
      </div>

      <audio ref={audioRef} />
    </section>
  );
}
