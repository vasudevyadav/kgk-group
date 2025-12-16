'use client';

import Link from 'next/link';
import { motion } from "framer-motion";

export default function HalfIntro() {
   
  return (
    <div
        className="bg-[#1f355d] relative z-10 bg-[url('/images/stones-bg2.jpg')] bg-cover bg-right bg-no-repeat">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden md:block" />

            <div className="text-white px-[50px] lg:pl-0 py-20 flex items-center">
                <div className="max-w-screen-xl">
                    <motion.h2 
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-white mb-7 max-w-md lg:pr-6"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        Step Into the Realm of Realty
                    </motion.h2>
                    <motion.p 
                        className="text-sm lg:text-[15px] leading-[25px] tracking-[0px] mb-6 lg:pr-[70px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        As a leader in natural stone sourcing and manufacturing, KGK Stones embodies a legacy of excellence and delivers unmatched quality in every creation. Bringing to everyone the Earth's most exquisite offerings, with every stone telling its own unique tale of origin and transformation.
                    </motion.p>

                     <Link href="" className="mt-3 inline-block bg-white text-black text-xs font-medium tracking-wide uppercase px-4 py-2.5 rounded-full hover:bg-gray-100 transition">
                    VISIT KGK Stones
                    </Link>
                    
                </div>
            </div>
        </div>
    </div>
  );
}
