'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Blogs({ data = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="bg-light-primary xl:px-12 py-16">
      <div className="container">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-4">
              Our Blogs
            </h2>
            <p className="md:text-lg lg:text-xl leading-relaxed max-w-2xl">
              Discover trends, insights, and stories from the world of our diverse businesses.
            </p>
          </div>
          <Link href="/blogs" className="bg-primary text-white px-5 py-2 rounded-full text-sm">
            SEE ALL
          </Link>
        </div>

        {/* Swiper Slider */}
        <div ref={containerRef}>
          <Swiper
            loop={true}
            spaceBetween={20}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false,
            }}
             breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: { // sm
                slidesPerView: 1,
              },
              768: { // md
                slidesPerView: 1,
              },
              1024: { // lg
                slidesPerView: 2,
              },
              1280: { // xl
                slidesPerView: '3', // only auto at xl and above
              },
            }}
            className=""
          >
            {data.map((post, index) => {
              const isActive = selectedIndex === index;

              return (
                <SwiperSlide key={post.slug}>
                  <div className="h-full rounded-xl overflow-hidden cursor-pointer group">
                    <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title || 'Blog Image'}
                          fill
                          loading="lazy" 
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 90vw, 38vw"
                        />
                      ) : (
                        <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-500">
                          No Image
                        </div>
                      )}
                    </div>
                    <div className="pt-6 px-4 pb-6">
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="text-xl font-normal text-black block mb-2"
                      >
                        {post.title?.replace(/\\'/g, "'")}
                      </Link>
                      <p className="text-sm text-gray-600">
                        {post.description?.length > 136
                          ? post.description.slice(0, 136).trim() + '...'
                          : post.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
