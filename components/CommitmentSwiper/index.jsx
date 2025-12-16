'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

export default function CommitmentSwiper({ data = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const MIN_ITEMS = 10;
  let extendedData = [...data];
  while (extendedData.length < MIN_ITEMS) {
    extendedData = [...extendedData, ...data];
  }
  extendedData = extendedData.slice(0, Math.max(MIN_ITEMS, extendedData.length));

  return (
    <section className="w-full pt-8 pb-16 bg-white text-center">
      <div className="container">
        <div className="px-0 lg:px-[50px]">
          <h2 className="text-center text-4xl font-normal text-heading mb-12">
            KGK Group’s Commitment to Purpose and Progress
          </h2>

          <div className="relative w-full overflow-hidden">
            <Swiper
              modules={[EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={2.8}
              loop={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              spaceBetween={-100}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false,
              }}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 2.63 },
              }}
              className="max-w-4xl mx-auto overflow-hidden"
            >
              {extendedData.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[480px] md:h-[542px] rounded-3xl overflow-hidden shadow-xl mx-auto transition-all">
                    <Image
                      src={card.image}
                      alt={`commitment-${index}`}
                      fill
                      className={`object-cover transition-all duration-500 ${
                        index === activeIndex ? 'grayscale-0' : 'grayscale'
                      }`}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    <div className="absolute bottom-0 left-0 right-0 z-[2]">
                      <div className="h-full bg-gradient-to-t from-black to-gray/90 backdrop-blur-lg text-white text-sm md:text-base px-6 pt-4 pb-8">
                        {card.text}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
