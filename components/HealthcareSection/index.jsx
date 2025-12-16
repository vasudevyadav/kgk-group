'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HealthcareSection = ({
  image,
  title,
  description,
  altText = 'Image',
  reverse = false,
}) => {
  return (
    <section className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center lg:items-stretch bg-forth text-white`}>
      <motion.div 
        className="w-full lg:w-1/2 h-72 lg:h-auto relative"
        initial={{ opacity: 0, x: reverse ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <Image
          src={image}
          alt={altText}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="w-full lg:w-1/2 px-6 py-10 lg:py-[138px] lg:px-12 lg:pr-[100px] flex items-center">
        <div>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-white mb-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
          {description}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareSection;
