'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function FeaturedBlogs({ data = [] }) {
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
    <div className="py-16 bg-white">
      <div className="container">
        <div className="px-0 lg:px-[50px]">
          {/* Heading and description */}
          <div className="flex flex-col xl:flex-row xl:items-center mb-8 xl:mb-16">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-4 xl:mb-0 xl:basis-3/12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Featured Blogs
            </motion.h2>
            <motion.p 
              className="xl:basis-9/12 text-[15px] leading-[25px] tracking-[0px] font-normal text-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Discover our handpicked selection of trending blogs across gemstones, jewellery, and industry news.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-primary text-white text-xs font-medium px-2.5 py-0.5 rounded-full mb-4">
              Featured
            </span>
          </motion.div>

          {/* Swiper */}
          <div ref={containerRef}>
            <Swiper
              loop={true}
              slidesPerView={'auto'}
              spaceBetween={20}
              centeredSlides={false}
              className="group"
            >
              {data.map((post, index) => {
                const isActive = selectedIndex === index;

                const slideWidth = () => {
                  if (typeof window !== 'undefined' && window.innerWidth < 768) {
                    return containerWidth * 0.9;
                  } else {
                    return isActive
                      ? containerWidth * 0.385
                      : containerWidth * 0.285;
                  }
                };

                return (
                  <SwiperSlide key={post.slug} className="!w-auto overflow-hidden">
                    <motion.div
                      onMouseEnter={() => setSelectedIndex(index)}
                      animate={{
                        width: slideWidth(),
                      }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="h-full rounded-xl overflow-hidden cursor-pointer"
                      style={{ minWidth: '250px' }}
                    >
                      <div className="relative h-[320px] md:h-[400px] w-full rounded-xl overflow-hidden group">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 90vw, 38vw"
                          unoptimized
                        />
                        <div className="absolute bottom-0 left-0 w-full px-4 py-6 bg-gradient-to-t from-black/80 to-transparent">
                          <Link
                            href={`/blogs/${post.slug}`}
                            className="text-lg text-white block mb-3 max-w-xs"
                          >
                            {post.title}
                          </Link>
                          <Link
                            href={`/blogs/${post.slug}`}
                            className="mt-3 inline-block bg-white text-black text-[9px] font-medium tracking-wide uppercase px-4 py-1.5 rounded-full hover:bg-gray-100 transition"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
