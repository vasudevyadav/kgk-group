'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { motion } from "framer-motion";

import defaultThumb from '@/assets/images/gemstones/pink-tourmaline-thumb.jpg';
import YoutubeVideoModal from '@/components/YoutubeVideoModal';
import play from '@/assets/images/gemstones/play.png';

export default function SemiPrecious({ data, staticYoutubeId }) {
  const [selectedGem, setSelectedGem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedGem(data[0]); // just for slider highlight
    }
  }, [data]);

  if (!selectedGem) return null;

  return (
    <>
      <div id="semi-precious" className="py-14 bg-light-primary overflow-hidden">
        <div className="container">
          <div className="px-0 lg:px-[50px]">
            <div className="flex flex-col lg:flex-row items-center gap-14">
              {/* Left Video/Image preview - STATIC */}
              <div className="lg:w-6/12 w-full">
                <motion.div
                  key="static-thumb"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-[332px] overflow-hidden"
                >
                  <Image
                    src={defaultThumb}
                    alt="Video preview"
                    fill
                    className="object-cover w-full h-full"
                  />
                  {/* Play button */}
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={() => setModalOpen(true)}
                  >
                    <Image
                      src={play}
                      alt="Play"
                      width={77}
                      height={77}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Right Content */}
              <div className="lg:w-6/12 w-full lg:pl-20 lg:pr-28">
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  Semi-precious gemstones
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  KGK Group offers large volumes of semi-precious gemstones at competitive prices.
                  You will appreciate the high quality of KGK stones, our excellent customer service
                  and outstanding overall value. Our huge selection includes:
                </motion.p>
              </div>
            </div>

            {/* Gemstone Thumbnails Slider */}
            <div className="mt-12">
              <Swiper
                loop={true}
                spaceBetween={20}
                slidesPerView={2}
                breakpoints={{
                  640: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  1024: { slidesPerView: 6 },
                  1280: { slidesPerView: 8 },
                }}
                className="!overflow-visible"
              >
                {data.map((gem, index) => (
                  <SwiperSlide key={gem.title}>
                    <motion.div
                      className={`
                        relative
                        group
                        flex flex-col items-center justify-end
                        rounded-xl border border-[#d6d6d6]
                        overflow-hidden
                        backdrop-blur-md
                        transition-all duration-300 ease-in-out
                        hover:border-black/25 hover:scale-[1.025]
                        active:scale-[0.98]
                        px-4 py-3
                        cursor-pointer
                        ${selectedGem.title === gem.title ? 'border-black/30' : ''}
                      `}
                      onClick={() => setSelectedGem(gem)} // only highlight
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      {/* Blurred BG */}
                      <div className="absolute inset-0 z-0">
                        <Image
                          src={gem.image}
                          alt="bg"
                          fill
                          className="object-cover opacity-30 blur-md scale-110"
                        />
                        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
                      </div>

                      {/* Optional overlay for active */}
                      {selectedGem.title === gem.title && (
                        <div className="absolute inset-0 z-10 rounded-xl border-2 border-[#007aff]/20 pointer-events-none" />
                      )}

                      {/* Foreground Content */}
                      <motion.div
                        layout
                        className="w-full aspect-[3/2] relative mb-3 z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Image
                          src={gem.image}
                          alt={gem.title}
                          fill
                          className="object-contain rounded-lg"
                        />
                      </motion.div>
                      <motion.p
                        className="text-sm leading-[16px] text-heading font-medium text-center min-h-8 mt-2 flex items-end justify-center z-10"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.12, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        {gem.title}
                      </motion.p>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>  
      </div>

      {/* Static video modal */}
      {modalOpen && staticYoutubeId && (
        <YoutubeVideoModal
          youtubeId={staticYoutubeId}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
