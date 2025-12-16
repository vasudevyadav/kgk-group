'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import stones1 from '@/assets/images/stones-1.jpg';
import stones2 from '@/assets/images/stones-2.png';

const KGKStonesSection = () => {
  return (
    <section className="bg-white py-8 lg:py-24 overflow-x-hidden">
      <div className="flex flex-col md:flex-row items-center md:items-start px-4 md:pl-0 md:pr-7 gap-6">
        {/* Left Image */}
        <motion.div
          className="w-full md:w-[26%]"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Image
            src={stones1}
            alt="KGK Quarry"
            className="rounded-3xl lg:rounded-l-none lg:rounded-r-3xl w-full h-[284px] object-cover"
          />
        </motion.div>

        {/* Center Text */}
        <div className="w-full md:w-[38%]">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Nature’s Treasures, Perfected by KGK Stones
          </motion.h2>
          <motion.p
            className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-black max-w-lg lg:pr-14 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Discover a world where nature’s artistry harmonizes with KGK Group’s legacy of innovation and craftsmanship.
            KGK Stones showcases a collection of marbles, granite, and quartzite, each piece sourced from the quarry’s
            maintained and owned by the brand. Every stone reflects the timeless beauty of Earth’s treasures, brought to
            life from mines to retail through state-of-the-art technology.
          </motion.p>
          <Link
            href="https://kgkstones.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 text-sm font-normal text-black tracking-widest uppercase px-6 py-2 rounded-full hover:bg-gray-100 transition"
          >
            VISIT KGK STONES
          </Link>
        </div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-[36%] flex justify-center md:justify-start h-[200px] lg:h-[300px] lg:pt-6 lg:ml-[-45px]"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src={stones2}
            alt="Stacked Stones"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default KGKStonesSection;
