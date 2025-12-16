'use client';

import { useState } from 'react';
import Image from 'next/image';

import { motion } from "framer-motion";

// Outlined
import emeraldOutlined from '@/assets/images/gemstones/emerald-outlined.png';
import rubyOutlined from '@/assets/images/gemstones/ruby-outlined.png';
import saphireOutlined from '@/assets/images/gemstones/saphire-outlined.png';

// Filled
import emeraldFilled from '@/assets/images/gemstones/emerald-filled.png';
import rubyFilled from '@/assets/images/gemstones/ruby-filled.png';
import saphireFilled from '@/assets/images/gemstones/saphire-filled.png';

const gemstones = [
  {
    name: 'Emerald',
    outlined: emeraldOutlined,
    filled: emeraldFilled,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    name: 'Ruby',
    outlined: rubyOutlined,
    filled: rubyFilled,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    name: 'Sapphire',
    outlined: saphireOutlined,
    filled: saphireFilled,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

export default function Precious() {
  const [hovered, setHovered] = useState('Ruby'); 
  
  return (
    <div id="precious" className="py-20 bg-white">
        <div className="container">
            <div className="px-0 lg:px-[50px] flex flex-col lg:flex-row items-center gap-10">
                {/* Left Content */}
                <div className="lg:w-5/12 lg:pr-28">
                    <motion.h2 
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-8"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      >
                        Precious gemstones
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    >
                        The KGK Group’s enduring legacy of trust was first built on precious coloured gemstones
                        over a hundred years ago. Our exceptional range includes stones of every imaginable
                        colour, shape and size:
                    </motion.p>
                </div>

                {/* Right Cards */}
                <div className="lg:w-6/12 lg:px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    {gemstones.map((gem) => {
                        const isActive = hovered === gem.name;
                        const imgSrc = isActive ? gem.filled : gem.outlined;

                        return (
                        <div
                            key={gem.name}
                            className="cursor-pointer text-center transition-all"
                            onMouseEnter={() => setHovered(gem.name)}
                        >
                            <motion.div 
                              className="w-[115px] h-[140px] mx-auto mb-12 flex items-center justify-center"
                              initial={{ scale: 0.95, opacity: 0.8 }}
                              animate={{
                                scale: isActive ? 1.1 : 0.95,
                                opacity: isActive ? 1 : 0.8,
                                rotate: isActive ? 1 : 0,
                              }}
                              transition={{ duration: 0.4, ease: 'easeOut' }}
                            >
                              <Image
                                src={imgSrc}
                                alt={gem.name}
                                className={`transition-transform duration-300 ease-in-out ${
                                  isActive ? 'scale-100' : 'scale-95'
                                }`}
                              />
                            </motion.div>
                            <motion.h3 
                              className="text-lg leading-[21px] font-bold font-cardo"
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, ease: 'easeOut' }}
                              viewport={{ once: true }}
                            >{gem.name}</motion.h3>
                            <motion.p 
                              className="text-base leading-5 font-light mt-1"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                              viewport={{ once: true }}
                            >{gem.description}</motion.p>
                        </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
  );
}
