'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SourcingWorld({ heading, description, list, image }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const xRel = (clientX - left) / width - 0.5;
    const yRel = (clientY - top) / height - 0.5;

    setRotation({
      x: -yRel * 25,
      y: xRel * 25,
      z: xRel * 10,
    });
  };

  const handleMouseLeave = () => setRotation({ x: 0, y: 0, z: 0 });

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

  const middleIndex = Math.ceil(list.length / 2);
  const leftColumn = list.slice(0, middleIndex);
  const rightColumn = list.slice(middleIndex);

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
              dangerouslySetInnerHTML={{ __html: heading }}
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>

            <motion.div
              className="mt-10 grid grid-cols-2 gap-x-10 gap-y-2 text-[18px] sm:text-[20px] md:text-[22px] text-white font-bold font-cardo"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.ul className="space-y-1 list-disc list-inside" variants={listVariants}>
                {leftColumn.map((country) => (
                  <motion.li key={country} variants={itemVariants}>
                    {country}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.ul className="space-y-1 list-disc list-inside" variants={listVariants}>
                {rightColumn.map((country) => (
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
                src={typeof image === 'string' ? image : image.src}
                alt="Sourcing Around the World"
                className="w-full h-auto object-contain"
                priority
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
