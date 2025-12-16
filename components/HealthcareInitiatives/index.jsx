'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const HealthcareInitiatives = ({
  heading,
  description,
  highlightLabel = 'Key Healthcare Initiatives:',
  initiatives = [],
}) => {
  return (
    <section className="bg-white py-16 px-4 lg:px-24">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12 xl:px-14">
        {/* Left Section */}
        <motion.div
          className="w-full lg:w-[42%]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-7"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            {heading}
          </motion.h2>

          <motion.div
            className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-heading xl:max-w-sm lg:pr-12 space-y-4"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {description}
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <div className="w-full lg:w-[58%] flex flex-col gap-4">
          {/* Highlight Box */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-full sm:w-[30%] bg-[#d4f1f9] rounded-lg p-8 text-lg lg:text-xl xl:text-2xl font-medium text-heading flex items-center justify-center">
              <div>
                {highlightLabel.split(' ').map((word, index) => (
                  <React.Fragment key={index}>
                    {word}
                    {index !== highlightLabel.split(' ').length - 1 && (
                      <>
                        <span className="hidden lg:inline"><br /></span>
                        <span className="inline lg:hidden"> </span>
                      </>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* First Card */}
            {initiatives[0] && (
              <motion.div
                className="w-full sm:w-[70%] bg-gray-100 rounded-lg p-8"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-sm lg:text-[15px] font-black text-heading mb-2">
                  {initiatives[0].title}
                </h4>
                <p className="text-sm text-gray-700">
                  {initiatives[0].description}
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Rest of the Cards */}
          {initiatives.slice(1).length > 0 && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {initiatives.slice(1).map((item, i) => (
                <motion.div
                  key={i}
                  className="w-full sm:w-1/2 bg-gray-100 rounded-lg p-8"
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h4 className="text-sm lg:text-[15px] font-black text-heading mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HealthcareInitiatives;
