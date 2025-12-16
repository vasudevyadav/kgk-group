'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

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
              Discover trends, styling tips, and insights from the world of fine jewellery.
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
            modules={[Pagination]}
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
                slidesPerView: 'auto', // only auto at xl and above
              },
            }}
            className="group"
          >
            {data.map((post, index) => {
              const isActive = selectedIndex === index;

              const slideWidth = () => {
                if (typeof window === 'undefined') return 'auto';

                const width = window.innerWidth;

                if (width < 768) {
                  return containerWidth * 0.9;
                } else if (width >= 1280) {
                  return isActive ? containerWidth * 0.385 : containerWidth * 0.285;
                } else {
                  return 'auto'; // For md & lg: let Swiper handle it
                }
              };

              return (
                <SwiperSlide key={post.slug} className="xl:!w-auto overflow-hidden">
                  <motion.div
                      onMouseEnter={() => setSelectedIndex(index)}
                      animate={{
                        width: slideWidth(),
                      }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="h-full rounded-xl overflow-hidden cursor-pointer"
                    >
                    <div className="relative h-[400px] w-full rounded-xl overflow-hidden group">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title || 'Blog Image'}
                          fill
                          className="object-cover transition-transform duration-500 xl:group-hover:scale-105"
                          sizes="(max-width: 768px) 90vw, 38vw"
                          unoptimized
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
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
