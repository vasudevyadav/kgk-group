'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import kitchenImg from '@/assets/images/kitchen.jpg';
import livingImg from '@/assets/images/living.jpg';

const StonesSemiPrecious = () => {
  return (
    <section className="bg-[#fff5e7] py-8 lg:py-16 px-4 lg:px-24 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-y-8">
        {/* LEFT 60% */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Top Text */}
          <div className="px-0">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              A Testament to Quality <br className="hidden lg:block" />
              and Elegance
            </motion.h2>
            <motion.p 
              className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-black max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Natural stones reflect KGK Group’s unwavering commitment to sustainable sourcing and superior craftsmanship. Through the brand’s collaboration with Lapitec, the renowned Italian producer of sintered stone, KGK Stones brings world-class materials and cutting-edge design to India.
            </motion.p>
          </div>
        </motion.div>

        {/* Kitchen Image */}
        <motion.div
          className="overflow-hidden rounded-tr-[20px] h-[250px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Image
            src={kitchenImg}
            alt="Kitchen"
            className="w-full h-full object-cover rounded-tr-[20px]"
            priority
          />
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-y-8">
        {/* Living Room Image */}
        <motion.div
          className="overflow-hidden rounded-bl-[20px] h-[248px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Image
            src={livingImg}
            alt="Living Room"
            className="w-full h-full object-cover rounded-bl-[20px]"
            priority
          />
        </motion.div>

        {/* Bottom Right Text */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-black max-w-xl lg:px-24">
            Rooted in a legacy of trust and excellence, KGK Stones continues to uphold the Group’s standards, offering materials that elevate spaces with timeless durability, refined elegance, and unmatched sophistication.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StonesSemiPrecious;
