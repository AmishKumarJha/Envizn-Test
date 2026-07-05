import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import testimonials from "../../../data/testimonials";

import TestimonialCard from "./TestimonialCard";

import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const TestimonialsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <>
      <Swiper
        modules={[EffectCoverflow, Navigation]}
        effect="coverflow"
        centeredSlides
        loop
        loopedSlides={testimonials.length}
        initialSlide={1}
        slidesPerView={3}
        spaceBetween={40}
        onSwiper={(swiper) => {
          setTimeout(() => swiper.update(), 100);
        }}
        onSlideChange={(swiper) =>
          setActiveIndex(swiper.realIndex)
        }
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 1,
          scale: 0.88,
        }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={item.id}>
            <TestimonialCard
              testimonial={item}
              active={activeIndex === index}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <div className="relative z-20 mt-10 flex w-full justify-start gap-6">

        <button type="button" className="prev-btn relative z-20 pointer-events-auto w-14 h-14 rounded-full bg-white/10 hover:bg-orange-500 transition">
          <HiArrowLeft className="mx-auto text-2xl" />
        </button>

        <button type="button" className="next-btn relative z-20 pointer-events-auto w-14 h-14 rounded-full bg-white/10 hover:bg-orange-500 transition">
          <HiArrowRight className="mx-auto text-2xl" />
        </button>

      </div>
    </>
  );
};

export default TestimonialsSlider;