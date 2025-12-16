'use client';

import { useState } from 'react';
import { milestones } from '@/lib/milestones';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import rulerImage from '@/assets/images/ruler.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel } from 'swiper/modules';


import milestonesTemp from '@/assets/images/milestones-temp.jpg';

export default function MilestoneTimeline({ data = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const getScale = (index) => {
    const distance = Math.abs(index - activeIndex);
    switch (distance) {
      case 0:
        return 'scale-150 opacity-100 z-30';
      case 1:
        return 'scale-125 opacity-80 z-20';
      case 2:
        return 'scale-100 opacity-50 z-10';
      default:
        return 'scale-90 opacity-30';
    }
  };

  const getFont = (index) => {
    const distance = Math.abs(index - activeIndex);
    switch (distance) {
      case 0:
        return 'text-xl lg:text-4xl mt-2 opacity-100 z-30';
      case 1:
        return 'text-lg lg:text-3xl mt-2 opacity-80 z-20';
      case 2:
        return 'text-base lg:text-2xl mt-3 opacity-50 z-10';
      default:
        return 'text-sm lg:text-lg opacity-30';
    }
  };

  if (!data || data.length === 0) return null;

  return (
    <div className="relative w-full bg-white overflow-hidden pt-8 md:py-14">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

        <div className="container">
            <div className=" px-0 lg:px-[50px]">

                <div className="flex flex-col lg:flex-row items-start gap-x-20 w-full mb-4 md:mb-12">
                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading whitespace-nowrap mb-4 lg:mb-0 lg:mt-0"
                    >
                        Milestones
                    </motion.h2>

                    <p className="md:text-lg lg:text-xl leading-relaxed text-black max-w-3xl">
                        From a gemstone trader to a global enterprise in gems, jewellery & real estate — a legacy of innovation, trust & excellence spanning over a century.
                    </p>

                </div>

                <div className="relative hidden md:flex items-center justify-center overflow-hidden">
                    <div className="relative w-5/12 lg:w-4/12 min-h-[640px]">
                        {/* Timeline Ruler */}
                        <div className="absolute left-18 top-1/2 -translate-y-1/2 z-0">
                            <Image
                            src={rulerImage}
                            alt="Ruler"
                            width={46}
                            height={609}
                            className="object-contain"
                            />
                        </div>

                        {/* Swiper Vertical Timeline */}
                        <div className="absolute left-0 top-0 bottom-0 flex items-center z-24 w-[376px]">
                            <Swiper
                                direction={'vertical'}
                                slidesPerView={7}
                                spaceBetween={40}
                                mousewheel={true}
                                centeredSlides={true}
                                loop={true}
                                modules={[Navigation, Mousewheel]}
                                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // 🛠️ Important Fix
                                className="h-full w-full"
                            >
                            {data.map((item, index) => (
                                <SwiperSlide key={item.year}>
                                    <div className="w-full flex items-center justify-center">
                                        <div
                                            className={clsx(
                                            'relative w-[376px] flex items-center justify-start gap-16 transition-all duration-300 transform cursor-pointer ml-4',
                                            
                                            )}
                                        >
                                            <div>
                                                <div
                                                    className={clsx(
                                                        'w-12 h-12 overflow-hidden flex items-center justify-center rounded-full transition-all duration-300',
                                                        getScale(index)
                                                    )}
                                                    >
                                                    <Image
                                                        src={item.image}
                                                        alt={item.year}
                                                        width={40}
                                                        height={40}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <span
                                                className={clsx(
                                                'tracking-[1px] text-[#1f355e] font-normal italic font-cardo transition-all duration-300',
                                                getFont(index)
                                                )}
                                            >
                                                {item.year}
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            </Swiper>
                        </div>
                    </div>

                    {/* Main Display */}
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-7/12 lg:w-8/12"
                    >
                        <div className="relative w-full h-[400px] md:h-[500px] border-2 border-[#7f7f7f]  overflow-hidden">
                            {/* <Image
                                src={milestones[activeIndex].image}
                                alt={milestones[activeIndex].title}
                                fill
                                className="object-cover"
                            /> */}
                            <Image
                                src={data[activeIndex].image}
                                alt={data[activeIndex].title}
                                fill
                                className="object-cover w-full h-full p-1"
                            />
                        </div>
                        <h2 className="mt-6 text-xl sm:text-2xl lg:text-3xl text-secondary italic font-bold font-cardo">
                            {data[activeIndex].title}
                        </h2>
                        <p className="mt-2">
                            {data[activeIndex].short_description}
                        </p>
                    </motion.div>
                </div>

                {/* Mobile View */}
                <div className="md:hidden">
  <Swiper
    slidesPerView={1.3}
    spaceBetween={20}
    loop={true}
    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    modules={[Navigation, Mousewheel]}
    className="w-full"
  >
    {data.map((item, index) => (
      <SwiperSlide key={item.year}>
        <div className="text-center">
          <div className="relative w-full h-56 mb-4">
            <Image
              src={item.image}
              alt={item.year}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw"
            />
          </div>
          <h3 className="text-lg font-bold italic text-[#1f355e]">{item.year}</h3>
          <h4 className="text-xl mt-2 font-semibold">{item.title}</h4>
          <p className="text-gray-600 mt-2">{item.short_description}</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

            </div>
        </div>
    </div>
  );
}