'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import heritageBg from '@/assets/images/heritage.jpg'; // Replace with your actual image path

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const FoundationLegacy = () => {
  return (
    <section className="relative w-full h-[82vh] min-h-[420px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={heritageBg}
        alt="Legacy Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-start h-full px-4 py-12 text-center text-white max-w-4xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal mb-8"
        >
          A Legacy of Impact
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-sm lg:text-[15px] leading-[25px] tracking-wide"
        >
          KGK Foundation remains steadfast in its mission to uplift lives, preserve traditions, and drive sustainable
          progress. Through its five pillars: Healthcare, Education, Skill Development, Art & Culture, and Heritage
          Conservation, the foundation continues to create meaningful change, empowering individuals and strengthening
          communities for a brighter future.
        </motion.p>
      </div>
    </section>
  );
};

export default FoundationLegacy;
