'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { motion } from 'framer-motion';

import Image from 'next/image';

import technological1 from '@/assets/images/technological/1.png';
import technological2 from '@/assets/images/technological/3.jpg';
import technological3 from '@/assets/images/technological/2.jpg';
import technological4 from '@/assets/images/technological/4.jpg';

const slides = [
  { 
    image: technological1, 
    title: 'Diamond Precision Cutting',
    description: 'Ultra-fine laser technology for flawless shaping and unmatched brilliance.', 
    positionClass: 'object-center'
  },
  { 
    image: technological2, 
    title: '⁠Advanced Diamond R&D Lab',
    description: 'Innovating next-generation gemstones through science and expertise.', 
    positionClass: '[object-position:50%_30%]'
  },
  { 
    image: technological3, 
    title: '⁠Robotic Quality Inspection',
    description: 'AI-driven precision ensuring purity, symmetry, and structural integrity.', 
    positionClass: '[object-position:50%_30%]'
  },
  { 
    image: technological4, 
    title: 'Surface Finishing & Grading',
    description: 'Meticulous texturing and grading for superior luster and durability.', 
    positionClass: '[object-position:50%_10%]'
  },
];


export default function TechnologicalCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section 
       className="
          bg-white 
          relative
          py-12
          container-after-2
        "
    >
      {/* Heading */}
      <div className="relative text-center mb-10 z-10">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-white mb-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
            Technological Excellence
        </motion.h2>

        <motion.p 
          className="text-[20px] leading-[25px] text-white font-medium italic mb-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Precision Tools. Proprietary Processes. Proven Performance.
        </motion.p>

        <motion.p 
          className="text-sm lg:text-[15px] leading-[25px] tracking-[0px] text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Our innovation is powered by advanced, in-house capabilities:
        </motion.p>
      </div>

      {/* Carousel */}
      <div className="relative px-6 md:px-6">

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          grabCursor={true}
          loop={true}
          autoplay={{ delay: 3000 }}
          centeredSlides={true}
          speed={600}
          slidesPerView={1.5}
          spaceBetween={56}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            0: {
              slidesPerView: 1, // mobile
            },
            768: {
              slidesPerView: 1.5, // tablet and up
            },
          }}
          className="real-swiper px-4 overflow-visible h-[300px] md:h-[450px] pointer-events-auto"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative group">
              <div className="overflow-hidden w-full h-full rounded-[20px] relative">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  className={`rounded-[20px] object-cover w-full h-full ${slide.positionClass}`}
                  placeholder="blur"
                />
              </div>

              {index === activeIndex && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-800/70 to-transparent rounded-[20px] z-10"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center z-20">
                    <h3 className="text-lg md:text-xl font-semibold italic">
                      {slide.title}
                    </h3>
                    <p className="text-sm md:text-base mt-1 leading-5">
                      {slide.description}
                    </p>
                  </div>
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Arrows aligned to center image edges */}
        <button
            onClick={() => {
            document.querySelector('.real-swiper')?.swiper?.slidePrev();
            }}
            className="pointer-events-auto absolute top-1/2 left-[2%] md:left-[15.5%] -translate-y-1/2 z-10 bg-white md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full shadow hover:bg-white flex items-center justify-center"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        <button
            onClick={() => {
            document.querySelector('.real-swiper')?.swiper?.slideNext();
            }}
            className="pointer-events-auto absolute top-1/2 right-[2%] md:right-[15.5%] -translate-y-1/2 z-10 bg-white md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full shadow hover:bg-white flex items-center justify-center"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      
      </div>
    </section>
  );
}
