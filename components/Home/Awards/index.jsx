'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

const AwardsSwiper = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const MIN_ITEMS = 10;
  let extendedData = [...data];
  while (extendedData.length < MIN_ITEMS) {
    extendedData = [...extendedData, ...data];
  }
  extendedData = extendedData.slice(0, Math.max(MIN_ITEMS, extendedData.length));

  return (
    <div>
      <div className="
          bg-white 
          relative
          py-12
          container-after
        "
       >
        <div className="text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-white my-6 md:my-12">Awards</h2>
          <Swiper
            modules={[Navigation]}
            loop={true}
            centeredSlides={true}
            spaceBetween={0}
            slidesPerView={5}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            navigation={{
              nextEl: '.award-button-next',
              prevEl: '.award-button-prev',
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
                slidesPerView: 3,
              },
              1280: { // xl
                slidesPerView: 4.2,
              },
            }}
            className="pb-16"
          >
            {extendedData.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <SwiperSlide
                    key={index}
                    className={clsx(
                      'flex justify-center transition-all duration-300 ease-in-out px-4',
                    )}
                  >
                  <div
                    className={clsx(
                      'transition-all duration-300 ease-in-out rounded-xl overflow-hidden',
                      isActive ? 'scale-100 z-20' : 'scale-100 z-10'
                    )}
                  >
                    <div
                      className={clsx(
                        'h-full rounded-xl overflow-hidden',
                        index === activeIndex ? '' : 'pt-12'
                      )}
                    >
                      {/* Outer Background Box */}
                      <div 
                        className={clsx(
                          'rounded-xl',
                          index === activeIndex ? 'relative center-card-after' : 'bg-mid-gray px-2 pt-12'
                        )}
                      >
                        {/* Image Box */}
                        <div 
                          className={clsx(
                            'relative w-full h-[300px] lg:h-[250px] rounded-xl overflow-hidden',
                            index === activeIndex ? 'relative' : '-mt-24'
                          )}
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className={clsx(
                              'transition-transform duration-300 ease-in-out object-cover object-top rounded-xl overflow-hidden',
                              index === activeIndex ? 'mx-auto scale-105' : 'scale-95'
                            )}
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
  
                        {/* Text Box inside dark background */}
                        <div className="px-4 pt-2 pb-2 text-black text-center flex flex-col items-center justify-center">
                          <p className="font-cardo font-bold text-sm md:text-base lg:text-lg">
                            {index === activeIndex
                              ? item.title
                              : item.title.length > 23
                                ? item.title.slice(0, 23) + '...'
                                : item.title}
                          </p>
                          {/* {index === activeIndex && (
                            <Link href={`/events-and-media/${item.slug || '#'}`}>
                              <ChevronRight size={42} strokeWidth={0.5} />
                            </Link>
                          )} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="relative flex justify-center mt-1 gap-4 z-10">
        <button className="award-button-prev border p-2 border-black bg-white flex items-center justify-center w-12 h-12">
          <ChevronLeft size={32} strokeWidth={1} />
        </button>
        <button className="award-button-next border p-2 border-black bg-white flex items-center justify-center w-12 h-12">
          <ChevronRight size={32} strokeWidth={1} />
        </button>
      </div>
    </div>
  );
};

export default AwardsSwiper;
