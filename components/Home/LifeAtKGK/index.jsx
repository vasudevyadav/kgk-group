'use client';
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";

import KGKGrid from "@/components/Home/KGKGrid";
import logo from "@/assets/images/kgk-logo-dark.webp";

import s11 from "@/assets/images/life-at-kgk/slide1/1.jpg";
import s12 from "@/assets/images/life-at-kgk/slide1/2.jpg";
import s13 from "@/assets/images/life-at-kgk/slide1/3.jpg";
import s14 from "@/assets/images/life-at-kgk/slide1/4.jpg";
import s15 from "@/assets/images/life-at-kgk/slide1/5.jpg";
import s16 from "@/assets/images/life-at-kgk/slide1/6.jpg";

import s21 from "@/assets/images/life-at-kgk/slide2/1.webp";
import s22 from "@/assets/images/life-at-kgk/slide2/2.webp";
import s23 from "@/assets/images/life-at-kgk/slide2/3.webp";
import s24 from "@/assets/images/life-at-kgk/slide2/4.webp";
import s25 from "@/assets/images/life-at-kgk/slide2/5.webp";
import s26 from "@/assets/images/life-at-kgk/slide2/6.webp";

import s31 from "@/assets/images/life-at-kgk/slide3/1.webp";
import s32 from "@/assets/images/life-at-kgk/slide3/2.webp";
import s33 from "@/assets/images/life-at-kgk/slide3/3.webp";
import s34 from "@/assets/images/life-at-kgk/slide3/4.webp";
import s35 from "@/assets/images/life-at-kgk/slide3/5.webp";
import s36 from "@/assets/images/life-at-kgk/slide3/6.webp";

import s41 from "@/assets/images/life-at-kgk/slide4/1.webp";
import s42 from "@/assets/images/life-at-kgk/slide4/2.webp";
import s43 from "@/assets/images/life-at-kgk/slide4/3.webp";
import s44 from "@/assets/images/life-at-kgk/slide4/4.webp";
import s45 from "@/assets/images/life-at-kgk/slide4/5.webp";
import s46 from "@/assets/images/life-at-kgk/slide4/6.webp";

export default function LifeSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false, 
      }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      <SwiperSlide>
        <KGKGrid
          images={[s11, s12, s13, s14, s15, s16]}
          logo={logo}
          title="Life at KGK"
          isActive={activeIndex === 0}
        />
      </SwiperSlide>

      <SwiperSlide>
        <KGKGrid
          images={[s41, s42, s43, s44, s45, s46]}
          logo={logo}
          title="EDI"
          subtitle="Promoting equality and inclusivity."
          titleFont="font-cardo"
          isActive={activeIndex === 1}
        />
      </SwiperSlide>

      <SwiperSlide>
        <KGKGrid
          images={[s21, s22, s23, s24, s25, s26]}
          logo={logo}
          title="BPP Compliant"
          subtitle="Ethical sourcing and operations."
          titleFont="font-cardo"
          isActive={activeIndex === 2}
        />
      </SwiperSlide>

      <SwiperSlide>
        <KGKGrid
          images={[s31, s32, s33, s34, s35, s36]}
          logo={logo}
          title="ESG"
          subtitle="Sustainable, ethical, & responsible practices."
          titleFont="font-cardo"
          isActive={activeIndex === 3}
        />
      </SwiperSlide>

      

    </Swiper>
  );
}
