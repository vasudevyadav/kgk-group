'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";

export default function Breadcrumb({ heading, subheading, bgImage, subheadingClassName = "", showGradient = false }) {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const formatSegment = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');

  return (
    <div className="relative text-white h-[70vh] md:h-screen min-h-[400px] md:min-h-[600px] px-6 pt-14 pb-6 overflow-hidden bg-black">
      
      {/* Background with One-time Cinematic Zoom Animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${bgImage.src})` }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      />
      
      {showGradient && (
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,0.5)_100%)]"></div>
      )}

      <div className="relative w-full h-full flex flex-col justify-between items-center text-center">
        {/* Centered Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-normal mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {heading}
          </motion.h1>

          {subheading && (
            <motion.p 
              className={`text-xl sm:text-2xl md:text-[26px] lg:text-3xl tracking-[1px] sm:tracking-[2px] md:tracking-[2.5px] lg:tracking-[3px] uppercase text-white font-normal ${subheadingClassName}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {subheading}
            </motion.p>
          )}
        </div>

        {/* Bottom Breadcrumb */}
        <div className="mt-2">
          <div className="flex flex-wrap justify-center items-center gap-1 text-[10px] sm:text-[11px] tracking-[0.5px] sm:tracking-[0.75px] md:tracking-[1px] uppercase text-white font-light uppercase">
            <Link href="/" className="hover:text-white">Home</Link>
            {segments.map((seg, index) => {
              const href = '/' + segments.slice(0, index + 1).join('/');
              const isLast = index === segments.length - 1;
              const isNonLinkSegment = seg === 'our-business';

              return (
                <div key={href} className="flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  {isLast || isNonLinkSegment ? (
                    <span className="text-white">{formatSegment(seg)}</span>
                  ) : (
                    <Link href={href} className="hover:text-white">
                      {formatSegment(seg)}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
