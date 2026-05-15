"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import { courses } from "../data/courses";
import AnimatedHeader from "@/app/Components/AnimatedHeader";

export default function CourseSlider() {
  return (
    <section className="bg-black py-8">
      <div className="py-10 px-6 max-w-6xl mx-auto">

      <AnimatedHeader
        title="Our Courses"
        subtitle="Visit our branches across Mumbai and start your musical journey."
      ></AnimatedHeader>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#111] rounded-3xl p-6 h-full flex flex-col">
              <Image
                src={course.img}
                alt={course.title}
                width={500}
                height={150}
                className="rounded-xl w-full h-[220px] object-cover"
              />

              <h3 className="text-yellow-400 text-xl font-bold text-center mt-4">
                {course.title}
              </h3>

              <p className="text-gray-400 text-center mt-2 text-sm flex-grow">
                {course.desc}
              </p>

              {course.pdf && (
                <div className="mt-4 flex justify-center">
                  <a
                    href={course.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full hover:bg-yellow-300 transition"
                  >
                    Start Now
                  </a>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </section>
  );
}
