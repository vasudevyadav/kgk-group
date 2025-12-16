'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import worldImg from '@/assets/images/gemstones/around-world.png';

export default function SourcingWorld({ data = [] }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const xRel = (clientX - left) / width - 0.5;
    const yRel = (clientY - top) / height - 0.5;

    const rotateY = xRel * 25;
    const rotateX = -yRel * 25;
    const rotateZ = xRel * 10;

    setRotation({ x: rotateX, y: rotateY, z: rotateZ });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0, z: 0 });
  };

  // Split data into two balanced columns
  const midIndex = Math.ceil(data.length / 2);
  const col1 = data.slice(0, midIndex);
  const col2 = data.slice(midIndex);

  const listVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="sourcing-world"
      className="bg-[#2b2c28] text-white py-10"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container">
        <div className="px-0 lg:px-[50px] grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-white mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Sourcing around the <br /> world
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              KGK gemmologists and engineers extract a range of highly desirable exotic color gemstones and only partner
              with high-quality ethical sources. We operate our own mines and partner with other reputed miners in:
            </motion.p>

            <motion.div
              className="mt-10 grid grid-cols-2 gap-x-10 gap-y-2 text-[18px] sm:text-[20px] md:text-[22px] text-white font-bold font-cardo"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.ul className="space-y-1 list-disc list-inside" variants={listVariants}>
                {col1.map((country) => (
                  <motion.li key={country} variants={itemVariants}>
                    {country}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.ul className="space-y-1 list-disc list-inside" variants={listVariants}>
                {col2.map((country) => (
                  <motion.li key={country} variants={itemVariants}>
                    {country}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          {/* Right: Rotating Globe Image */}
          <div className="relative flex justify-center lg:justify-end items-center perspective-[1000px]">
            <div
              className="transform-style-3d relative w-[300px] md:w-[400px] lg:w-[500px] -mb-20"
              style={{
                transform: `
                  rotateX(${rotation.x.toFixed(2)}deg)
                  rotateY(${rotation.y.toFixed(2)}deg)
                  rotateZ(${rotation.z.toFixed(2)}deg)
                `,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <Image
                src={worldImg}
                alt="Around the world"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
