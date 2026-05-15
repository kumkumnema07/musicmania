"use client";

import AnimatedHeader from "./AnimatedHeader";

export default function CourseCategories() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <AnimatedHeader
            title={
              <>
                <span className="bg-gradient-to-b from-[#bcee16] via-[#a3e635] to-[#84cc16] bg-clip-text text-transparent">
                  Learn Music Your Way
                </span>{" "}
              </>
            }
            subtitle=" Choose from our carefully designed music programs for every age
            and skill level."
          />
          
        </div>

        {/* Category 1 */}
        <div className="border-b border-dashed border-primary/40 pb-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-primary">
                Music For Children
              </h3>

              <p className="text-gray-300 text-lg mt-2">
                Joyful Learning: Music for Kids
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="card">Grow With Music</div>
              <div className="card">Hindustani Music to Children</div>
              <div className="card">Carnatic Vocals For Children</div>
              <div className="card">Mother Tongue Series</div>
              <div className="card">Lost Lullabies</div>
              <div className="card">Rhymes To Swaras</div>
              <div className="card">Garbh Sangeet</div>
              <div className="card">CBSE Music Exam Preparation</div>
              <div className="card">Online Summer Courses</div>
            </div>
          </div>
        </div>

        {/* Category 2 */}
        <div className="border-b border-dashed border-primary/40 pb-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-primary">
                Hobby / Educational
              </h3>

              <p className="text-gray-300 text-lg mt-2">
                Explore Your Passion: Music, Culture, and Creativity
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="card">The Heritage Series</div>
              <div className="card">Language Of Rhythm</div>
              <div className="card">Movie Songs</div>
              <div className="card">Karaoke Songs</div>
              <div className="card">Learn Your Favorite Songs</div>
              <div className="card">Konnakol</div>
              <div className="card">Devotional Songs</div>
            </div>
          </div>
        </div>

        {/* Category 3 */}
        <div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-primary">
                Professional
              </h3>

              <p className="text-gray-300 text-lg mt-2">
                Elevate Your Skills: Training for Aspiring Professionals
              </p>
            </div>

            <div className="flex flex-wrap gap-4 ">
              <div className="card">Voice Gym</div>
              <div className="card">Playback Singing</div>
              <div className="card">Contest Preparation</div>
              <div className="card">Teacher Certification Programs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Style */}
      <style jsx>{`
        .card {
          background: #111;
          border: 1px solid rgba(244, 195, 0, 0.4);
          color: #bcee16;
          padding: 12px 20px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: default;
        }

        .card:hover {
          background: #bcee16;
          color: black;
          box-shadow: 0 0 15px #bcee16;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
