'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import about2 from '@/assets/images/diamatric-1.jpg';

export default function DiamatricsSection() {
  return (
    <div className="relative pt-10 pb-6 md:pt-12 bg-white">
      <div className="container">
        <div className="px-0 lg:px-[50px] flex flex-col lg:flex-row items-center gap-y-6">

          {/* Left Animated Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative w-full lg:w-[50%] lg:mb-0 z-10 xl:pl-[50px]"
          >
            <Image src={about2} alt="about" className="w-full h-[240px]  md:h-[360px] object-cover rounded-2xl" />
          </motion.div>

          {/* Right Animated Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-[50%] pl-0 lg:pl-20 md:pb-14 pr-0 xl:pr-14"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Crafting Innovation
            </h2>
            <h6 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">The Power of Lab-Grown Diamonds</h6>
            <p className="text-justify text-[15px] leading-[25px] mb-4 md:mt-6">
              KGK Diamatrix blends advanced science and precision to create high-performance lab-grown diamonds that power innovation across industries. Backed by the global legacy of the KGK Group and in collaboration with Devangi Gems, we’re expanding the role of diamonds from luxury to cutting-edge technology.
            </p>

            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 text-sm font-normal text-black tracking-widest uppercase px-6 py-2 rounded-full hover:bg-gray-100 transition"
            >
              VISIT KGK DIAMATRIX
            </Link>
          </motion.div>

        </div>
        
      </div>
      <div className="hidden md:block relative w-full h-px bg-[#79869e] bottom-8 z-0"></div>
    </div>
  );
}
