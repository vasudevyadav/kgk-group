'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import visionImg from '@/assets/images/vision.png';
import missionImg from '@/assets/images/mission.png';

const VisionMission = () => {
  return (
    <section className="relative w-full bg-[#33342f] md:bg-white">
      {/* 2-layer background */}
      <div className="hidden md:block absolute left-0 right-0 top-0 bg-[#33342f] w-full h-48 lg:h-60 z-0" />

      {/* Cards overlapping background transition */}
      <div className="max-w-4xl mx-auto px-4 py-8 lg:py-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 xl:gap-16">
        {[
          { img: visionImg, title: 'Vision', desc: 'To lead a future where diamond materials drive transformative technologies and elevate human progress across industries.' },
          { img: missionImg, title: 'Mission', desc: 'To deliver sustainable, high-performance diamond solutions that enable innovation, improve lives, and support a smarter, tech-driven world.' },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <VisionMissionCard {...card} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const VisionMissionCard = ({ img, title, desc }) => (
  <div className="custom-card1 relative bg-white rounded-[43px] overflow-hidden text-center z-0 p-2.5">
    <div className="relative w-full h-44 rounded-t-[43px] overflow-hidden">
      <Image src={img} alt={title} fill className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <h3 className="text-md md:text-[18px] lg:text-[21px] font-semibold text-heading mb-1">{title}</h3>
      <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-black px-5 mx-auto">{desc}</p>
    </div>
  </div>
);

export default VisionMission;
