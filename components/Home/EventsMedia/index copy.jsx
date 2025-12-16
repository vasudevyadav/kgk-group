"use client";

import { useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function EventsMedia({ data }) {
  const allImages = data ?? [];
  const [mainImage, setMainImage] = useState(allImages[0]);

  const thumbnails = allImages.filter((img) => img.image !== mainImage?.image);

  return (
    <div className="relative bg-[#2F312E] text-white py-10 md:py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-16">
        {/* Left Side - Image */}
        <div className="order-2 md:order-1 space-y-2 md:space-y-4">
          <div className="relative w-full md:min-h-[300px] h-[240px] xl:h-[60vh] rounded-lg overflow-hidden">
            {mainImage?.image && (
              <Image
                src={mainImage.image}
                alt={mainImage?.title || "Main Event"}
                fill
                className="object-cover object-top"
                priority
              />
            )}
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="order-1 md:order-2 text-left space-y-3 md:space-y-6 flex flex-col">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-white">
            Events & Media
          </h2>
          <div>
            <h3 className="text-3xl font-cardo max-w-md mb-2 md:mb-6">
              {mainImage?.title}
            </h3>
            {/* <p className="text-gray-300 max-w-xl">
              {mainImage?.short_description}
            </p> */}
          </div>
          {/* <div>
            <Link href={`/events-and-media/${mainImage.slug || '#'}`} className="bg-white text-black font-medium px-6 py-2 rounded-full hover:bg-gray-300 transition">
              READ MORE
            </Link>
          </div> */}
        </div>
      </div>

      {/* Swiper Thumbnails */}
      <div className="container pt-10 md:mt-16">
        <Swiper
          grabCursor={true}
          loop={true}
          speed={600}
          slidesPerView={5}
          spaceBetween={30}
          scrollbar={{
            el: ".custom-swiper-scrollbar",
            draggable: true,
          }}
          navigation={{
            nextEl: ".event-button-next",
            prevEl: ".event-button-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 2.5,
              spaceBetween: 10, 
            },
            640: {
              slidesPerView: 3.5,
              spaceBetween: 20, 
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation, Scrollbar]}
          className=""
        >
          {allImages.map((item, idx) => {
            const isActive = item.image === mainImage?.image;
            return (
              <SwiperSlide key={idx}>
                <div
                  onClick={() => setMainImage(item)}
                  className="relative w-full h-32 rounded-lg overflow-hidden cursor-pointer border"
                >
                  <Image
                    src={item.image}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className={`object-cover transition-all duration-300 ${
                      isActive ? "grayscale-0" : "grayscale hover:grayscale-0"
                    }`}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Scrollbar + Navigation Buttons in one row */}
        <div className="flex items-center gap-12 mt-10 md:mt-14 md:pr-32">
            <div className="flex-1 h-[5px] pt-[1px] relative overflow-hidden">
              <div className="custom-swiper-scrollbar h-[2px] bg-white/30 rounded-full" />
            </div>
            <div className="flex gap-2">
             <button className="event-button-prev w-10 h-10 border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition">
                <ChevronLeft size={20} />
              </button>
              <button className="event-button-next w-10 h-10 border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        
      </div>
    </div>
  );
}
