'use client';

import Link from 'next/link';
import { motion } from "framer-motion";

export default function KGKRealty() {
   
  return (
    <div
        className="bg-[#1f355d] relative z-10 bg-[url('/images/real-estate-bg2.jpg')] bg-cover bg-right bg-no-repeat">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block" />

            <div className="text-white px-[15px] lg:px-[50px] lg:pl-16 py-8 lg:py-20 flex items-center">
                <div className="max-w-lg lg:pr-24">
                    <motion.h2 
                        className="text-2xl md:text-3xl lg:text-[36px] lg:leading-[46px] font-normal mb-6"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        Built to Last, Made to Impress
                    </motion.h2>
                    <motion.p 
                        className="ext-sm lg:text-[15px] leading-[25px] tracking-[0px] text-justify mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        By combining visionary planning, advanced technology, and customer-centric practices, KGK Realty continues to expand its footprint, delivering real estate projects that stand as testaments to excellence and sustainability.
                    </motion.p>

                    <Link
                        href="https://kgkrealty.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block bg-white text-black text-xs font-medium tracking-wide uppercase px-4 py-2.5 rounded-full hover:bg-gray-100 transition"
                        >
                        VISIT KGK REALTY
                    </Link>
                    
                </div>
            </div>
        </div>
    </div>
  );
}
