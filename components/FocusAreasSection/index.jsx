'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useState } from 'react';

import img1 from '@/assets/images/focus-1.jpg';
import img2 from '@/assets/images/focus-2.jpg';
import img3 from '@/assets/images/focus-3.jpg';

const focusItems = [
  {
    image: img1,
    title: 'Quantum Technology',
    description:
      'Engineered NV-center diamonds for cutting-edge sensing, computing, and secure communication.',
  },
  {
    image: img2,
    title: 'Precision Tools',
    description:
      'Ultra-hard, ultra-precise diamond tools used in critical industrial applications.',
  },
  {
    image: img3,
    title: 'Semiconductor Innovation',
    description:
      'Advanced materials and devices for next-generation electronics and photonics.',
  },
  {
    image: img1,
    title: 'Quantum Technology',
    description:
      'Engineered NV-center diamonds for cutting-edge sensing, computing, and secure communication.',
  },
  {
    image: img2,
    title: 'Precision Tools',
    description:
      'Ultra-hard, ultra-precise diamond tools used in critical industrial applications.',
  },
  {
    image: img3,
    title: 'Semiconductor Innovation',
    description:
      'Advanced materials and devices for next-generation electronics and photonics.',
  },
];

export default function FocusAreasSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = focusItems.length;
  const activeRightIndex = (activeIndex + 2) % totalSlides; // Right-most full image

  return (
    <section className="pt-6 pb-16 md:py-16 bg-white">
      <div className="px-[50px] lg:pl-0 lg:pr-[100px] flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
        {/* Swiper Side */}
        <div className="relative w-full lg:w-[70%]">
          <div className="overflow-hidden rounded-[20px] relative left-0 lg:left-[-100px]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView="auto"
            loop
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              0: {
                slidesPerView: 1, 
                spaceBetween: 0
              },
              768: {
                slidesPerView: 'auto', 
              },
            }}
            className="focus-swiper"
          >
            {focusItems.map((item, index) => (
              <SwiperSlide
                key={index}
                className={`transition-all duration-300 ${
                  index === activeRightIndex ? 'lg:!w-[430px]' : 'lg:!w-[230px]'
                }`}
              >
                <div
                  className={`transition-all duration-300 flex items-center justify-center ${
                    index === activeRightIndex ? 'h-full lg:h-[420px]' : 'h-full lg:h-[420px]'
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className={`object-cover rounded-[20px] ${
                      index === activeRightIndex ? 'w-full h-full' : 'h-full lg:h-[232px] w-full'
                    }`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          

          </div>

           <button
            onClick={() =>
              document.querySelector('.focus-swiper')?.swiper?.slideNext()
            }
            className="absolute top-0 bottom-0 my-auto right-[80px] z-10 w-12 h-12 bg-[#9E7B4E] text-white rounded-full  hidden lg:flex items-center justify-center shadow hover:bg-[#b8925e] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Text Side */}
        <div className="w-full lg:w-[30%] flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900 mb-12">
            Our Focus Areas
          </h2>
          <h3 className="text-xl md:text-2xl font-medium mb-2 text-gray-800">
            {focusItems[activeRightIndex].title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {focusItems[activeRightIndex].description}
          </p>

          {/* Arrow Button */}
          <button
            onClick={() =>
              document.querySelector('.focus-swiper')?.swiper?.slideNext()
            }
            className="mt-6 w-12 h-12 bg-[#9E7B4E] text-white rounded-full flex lg:hidden items-center justify-center shadow hover:bg-[#b8925e] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
