'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import about2 from '@/assets/images/about-2.jpg';

export default function TheLegacy() {
  return (
    <div className="relative pt-0 pb-10 md:pb-16 lg:pb-20 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center px-0 lg:pl-[32px] lg:pr-[50px]">

          {/* Left Animated Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative w-full lg:w-[45%] mb-12 lg:mb-0 z-10"
          >
            <Image src={about2} alt="about" className="w-full h-[360px] object-cover" />
          </motion.div>

          {/* Right Animated Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-[55%] pl-0 lg:pl-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-4">
              The Legacy
            </h2>

            <div className="w-full h-px bg-[#79869e] absolute left-0 right-0 z-0"></div>

            <p className="leading-7 mb-8 mt-6">
              The KGK Group’s journey began in 1905 when Shri Keshrimalji Kothari started trading Burmese colored gemstones in Jaipur, India. His values of integrity and dedication continue to shape the business today. Building on his father’s vision, Shri Ghisilalji Kothari fostered a culture of innovation and diversity, driving the group’s early growth and expansion.
            </p>

            <p className="leading-7">
              Under the leadership of the third generation, the KGK Group evolved into a leading multinational corporation. Guided by the founding principles of faith, respect, and integrity, the brand remains committed to upholding this legacy.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
