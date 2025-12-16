'use client';

import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Image imports from assets/images
import MartinFlyerBlack from '@/assets/images/martin-flyer-black.png';
import MartinFlyerWhite from '@/assets/images/martin-flyer-white.png';
import EnticeBlack from '@/assets/images/entice-black.png';
import EnticeWhite from '@/assets/images/entice-white.png';
import GreggRuthBlack from '@/assets/images/gregg-ruth-black.png';
import GreggRuthWhite from '@/assets/images/gregg-ruth-white.png';

import BgMartinFlyer from '@/assets/images/bg-martin-flyer.jpg';
import BgEntice from '@/assets/images/bg-entice.jpg';
import BgGreggRuth from '@/assets/images/bg-gregg-ruth.jpg';

const brands = [
  {
    name: 'Martin Flyer',
    logoBlack: MartinFlyerBlack,
    logoWhite: MartinFlyerWhite,
    bgImage: BgMartinFlyer,
    url: 'https://www.kgkgroup.com/jewellery-operations-oem-oed/#martin-flyer',
  },
  {
    name: 'Entice',
    logoBlack: EnticeBlack,
    logoWhite: EnticeWhite,
    bgImage: BgEntice,
    url: 'https://www.kgkgroup.com/retail/',
  },
  {
    name: 'GREGG RUTH',
    logoBlack: GreggRuthBlack,
    logoWhite: GreggRuthWhite,
    bgImage: BgGreggRuth,
    url: 'https://www.kgkgroup.com/jewellery-operations-oem-oed/#gregg-ruth',
  },
];

export default function BrandSlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
   const [mobileIndex, setMobileIndex] = useState(0);

  return (
    <div className="w-full flex items-center justify-center py-12">
      <div className="flex flex-col lg:flex-row w-full lg:min-h-[390px] lg:h-[60vh] bg-light-gray overflow-hidden">
        {/* Left: Title Section */}
        <div className="w-full lg:w-[33%] p-[30px] lg:p-[50px] flex items-center justify-start text-2xl sm:text-3xl lg:text-4xl lg:text-[42px] font-normal text-heading">
          KGK Brands
        </div>

        {/* Right: Brand Grid */}
        <div className="w-full lg:w-[66.98%] hidden lg:grid grid-cols-3">
          {brands.map((brand, i) => {
            const isActive = hoveredIndex === i || (hoveredIndex === null && i === 1);

            return (
              <Link
                key={i}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden cursor-pointer flex items-center justify-center group transition-all duration-500"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Image Slide */}
                <div
                  className={clsx(
                    'absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out z-10',
                    isActive ? 'translate-x-0' : 'translate-x-full'
                  )}
                >
                  <Image
                    src={brand.bgImage}
                    alt={`${brand.name} background`}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  
                </div>

                {/* Brand Logo */}
               <Image
                  src={brand.logoBlack}
                  alt={brand.name}
                  width={400}
                  height={220}
                  priority
                  unoptimized
                  className={clsx(
                    'z-20 w-[280px] h-auto object-contain transition-[filter] duration-500 ease-in-out',
                    isActive && 'invert'
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Swiper (only shown on small screens) */}
        <div className="block lg:hidden px-4 h-[200px] md:h-[300px]">
          <Swiper
            spaceBetween={0}
            grabCursor={true}
            effect="coverflow"
            speed={1000}
            loop={true}
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false, 
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex); 
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 500,
              modifier: 1,
              slideShadows: true,
              scale: 0.5,
            }}
            className="h-full w-full"
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <Link
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full rounded-xl overflow-hidden"
                >
                  <Image
                    src={brand.bgImage}
                    alt={`${brand.name} background`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex justify-center items-center z-20">
                    <Image
                      src={brand.logoWhite}
                      alt={brand.name}
                      width={160}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>



      </div>
    </div>
  );
}
