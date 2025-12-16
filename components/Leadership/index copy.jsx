'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Leadership({
  title,
  subtitle,
  paragraph,
  backgroundImage,
  imagePosition = 'right',
  zIndex,
}) {
  const TextSection = (
    <div className="w-full md:w-6/12 px-4 lg:px-[50px] flex items-center h-full">
      <div>
        {/* Heading Animation */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        {/* Subtitle Animation */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-[20px] tracking-wide leading-relaxed text-black italic font-medium mb-6 md:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>

        {/* Paragraph Block Animation */}
        <motion.div
          className="text-black space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {paragraph}
        </motion.div>
      </div>
    </div>
  );

  const ImageSection = <div className="hidden md:block w-full md:w-6/12 h-full" />;

  return (
    <>
      <div
        className="hidden md:block w-full h-[89vh] min-h-[600px] sticky top-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: zIndex,
        }}
      >
        <div className="container h-full">
          <div className="flex flex-col md:flex-row items-center gap-2 h-full">
            {imagePosition === 'left' ? (
              <>
                {ImageSection}
                {TextSection}
              </>
            ) : (
              <>
                {TextSection}
                {ImageSection}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative w-full">
        {/* Background Image with Title + Subtitle Overlay */}
        <div
          className="w-full h-[300px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            zIndex: zIndex,
          }}
        >
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black/40 flex flex-col justify-center px-4 ${
              imagePosition === 'right' ? 'items-start text-left' : 'items-end text-right'
            }`}
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-normal text-white mb-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg italic font-medium text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {subtitle}
            </motion.p>
          </div>
        </div>

        {/* Paragraph (always below) */}
        <motion.div
          className="text-black space-y-6 px-4 py-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {paragraph}
        </motion.div>
      </div>

    </>
  );
}
