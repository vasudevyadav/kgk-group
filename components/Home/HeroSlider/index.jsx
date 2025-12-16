"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion, AnimatePresence } from "framer-motion";

export default function HeroSlider({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full h-screen min-h-[600px] relative bg-black">
      <Swiper
        effect="fade"
        speed={1000}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        modules={[EffectFade, Pagination, Navigation, Autoplay]}
        className="h-full w-full"
        fadeEffect={{ crossFade: true }}
      >
        {data?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6 text-white max-w-2xl pt-4">
                   <div className="text-lg md:text-xl lg:text-3xl tracking-widest uppercase mb-7 mt-16">
                      KGK GROUP
                    </div>
                  <AnimatePresence mode="wait">
                    {activeIndex === index && (
                      <motion.div
                        key={index + "-active"}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{
                          duration: 1.4,
                          ease: [0.42, 0, 0.58, 1], 
                        }}
                      >
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-4 pb-2">
                          {slide.short_description}
                        </h2>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
