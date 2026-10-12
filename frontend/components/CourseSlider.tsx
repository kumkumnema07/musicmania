"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/autoplay";

import AnimatedHeader from "@/app/Components/AnimatedHeader";

type Course = {
  id: number;
  title: string;
  description: string;
  image: string | null;
  pdf: string | null;
};

export default function CourseSlider() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/courses");
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="bg-black py-8">
      <div className="py-10 px-6 max-w-6xl mx-auto">
        <AnimatedHeader
          title="Our Courses"
          subtitle="Visit our branches across Mumbai and start your musical journey."
        />

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={24}
          grabCursor={true}
          loop={courses.length > 6}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id} style={{ height: "auto" }}>
              <div
                style={{
                  background: "#111",
                  borderRadius: "24px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  height: "420px",
                }}
              >
                {/* Image — fixed height */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "200px",
                    flexShrink: 0,
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={course.image || "/default.jpg"}
                    alt={course.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    color: "#bcee16",
                    fontSize: "18px",
                    fontWeight: 700,
                    textAlign: "center",
                    marginTop: "16px",
                    marginBottom: "8px",
                    flexShrink: 0,
                  }}
                >
                  {course.title}
                </h3>

                {/* Description — fixed 2 lines */}
                <p
                  style={{
                    color: "#888",
                    fontSize: "13px",
                    textAlign: "center",
                    flex: 1,
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    lineHeight: "1.6",
                  }}
                >
                  {course.description}
                </p>

                {/* Button — always at bottom */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "16px",
                    flexShrink: 0,
                  }}
                >
                  {course.pdf ? (
                    <a
                      href={course.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: "#bcee16",
                        color: "#000",
                        fontWeight: 600,
                        padding: "8px 24px",
                        borderRadius: "999px",
                        textDecoration: "none",
                        fontSize: "14px",
                      }}
                    >
                      Start Now
                    </a>
                  ) : (
                    <button
                      style={{
                        background: "#bcee16",
                        color: "#000",
                        fontWeight: 600,
                        padding: "8px 24px",
                        borderRadius: "999px",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "14px",
                      }}
                    >
                      Enroll Now
                    </button>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
