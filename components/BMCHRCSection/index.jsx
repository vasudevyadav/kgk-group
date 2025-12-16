'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const BMCHRCSection = ({
  title,
  description,
  logo,
  hospitalImage,
  cards = [],
}) => {
  return (
    <section className="relative lg:pt-10 pb-16 lg:bg-[linear-gradient(180deg,_#fff5e7_50%,_#ffffff_50%)]">
      {/* ✅ Mobile View */}
      <div className="block lg:hidden bg-[#fff5e7] px-4 sm:px-6 pt-10 pb-2 mb-8">
        <div className="grid grid-cols-1 items-center gap-8 mb-10">
          <div>
            <h2 className="text-[22px] text-heading font-myriad mb-4">{title}</h2>
            <div className="text-[13px] leading-[25px] text-heading font-myriad">
              {typeof description === 'string' ? <p>{description}</p> : description}
            </div>
          </div>

          <div className="relative w-full">
            {logo && (
            <div className="w-32 h-32 absolute -top-[60px] -left-[20px]">
              <Image src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            )}
            <div className="h-64 overflow-hidden">
              <Image src={hospitalImage} alt="Hospital" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Desktop View */}
      <div className="hidden lg:block">
        <div className="container">
          <div className="px-0 lg:px-[50px]">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Text */}
              <motion.div className="xl:max-w-xl" variants={fadeInUp} transition={{ duration: 0.8 }}>
                <h2 className="text-[22px] lg:text-[33px] text-heading font-myriad mb-6 xl:pr-24">
                  {title}
                </h2>
                <div className="text-[13px] lg:text-[15px] leading-[25px] tracking-[0px] text-heading font-myriad xl:pr-16">
                  {typeof description === 'string' ? <p>{description}</p> : description}
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                className="relative flex flex-col items-start gap-4"
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {logo && (
                <div className="w-80 h-80 absolute -top-[108px] -left-[28px]">
                  <Image src={logo} alt="Logo" className="w-full h-full object-contain" />
                </div>
                )}
                <div className="w-full h-80 overflow-hidden pl-40">
                  <Image src={hospitalImage} alt="Hospital" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ✅ Cards Section */}
      <div className="container">
        <div className="px-0 lg:px-[50px]">
          <motion.div
            className="grid md:grid-cols-3 gap-8 lg:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className="custom-card1 relative bg-white rounded-[43px] overflow-hidden z-0 p-2.5"
                variants={fadeInUp}
              >
                <div className="relative w-full h-40 rounded-t-[43px] overflow-hidden">
                  <Image src={card.img} alt={card.title} className="w-full h-full object-cover" />
                </div>
                <div className="pt-8 px-4 lg:pr-11 pb-8">
                  <h3 className="text-[16px] lg:text-[21px] font-bold text-heading font-myriad mb-5">
                    {card.title}
                  </h3>
                  <p className="text-[13px] lg:text-[15px] leading-[25px] tracking-[0px] text-heading font-myriad">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BMCHRCSection;
