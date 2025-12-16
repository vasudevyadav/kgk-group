'use client';

import { useState } from 'react';
import Image from 'next/image';

import { motion } from "framer-motion";

import YoutubeVideoModal from '@/components/YoutubeVideoModal';

import play from '@/assets/images/gemstones/play.png';
import defaultThumb from '@/assets/images/gemstones/pink-tourmaline-thumb.jpg';

import pinkTourmaline from '@/assets/images/gemstones/pink-tourmaline.png';
import paraibas from '@/assets/images/gemstones/paraibas.png';
import tanzanites from '@/assets/images/gemstones/tanzanites.png';
import greenTourmalines from '@/assets/images/gemstones/green-tourmalines.png';
import bicolourTourmalines from '@/assets/images/gemstones/bi-colour-tourmalines.png';
import aquamarines from '@/assets/images/gemstones/aquamarines.png';
import rubellites from '@/assets/images/gemstones/rubellites.png';
import tsavorite from '@/assets/images/gemstones/tsavorite.png';

const gemstones = [
  {
    name: 'Pink Tourmaline',
    image: pinkTourmaline,
    preview: defaultThumb,
  },
  {
    name: 'Paraibas',
    image: paraibas,
    preview: defaultThumb,
  },
  {
    name: 'Tanzanites',
    image: tanzanites,
    preview: defaultThumb,
  },
  {
    name: 'Green Tourmalines',
    image: greenTourmalines,
    preview: defaultThumb,
  },
  {
    name: 'Bi-colour Tourmalines',
    image: bicolourTourmalines,
    preview: defaultThumb,
  },
  {
    name: 'Aquamarines',
    image: aquamarines,
    preview: defaultThumb,
  },
  {
    name: 'Rubellites',
    image: rubellites,
    preview: defaultThumb,
  },
  {
    name: 'Tsavorite',
    image: tsavorite,
    preview: defaultThumb,
  },
];

export default function SemiPrecious() {
  const [selectedGem, setSelectedGem] = useState(gemstones[0]);

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
        <div id="semi-precious" className="py-14 bg-light-primary">
            <div className="container">
                <div className="px-0 lg:px-[50px]">
                    <div className="flex flex-col lg:flex-row items-center gap-14">
                        {/* Left Video/Image preview */}
                        <div className="lg:w-6/12 w-full">
                              <motion.div
                                key={selectedGem.name} // trigger animation on change
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="relative w-full h-[332px] overflow-hidden"
                              >
                                <Image
                                    src={selectedGem.preview}
                                    alt="Video preview"
                                    fill
                                    className="object-cover w-full h-full"
                                />
                                {/* Play button */}
                                <div className="absolute inset-0 flex items-center justify-center"  onClick={() => setModalOpen(true)}>
                                    <Image
                                        src={play}
                                        alt="Play"
                                        width={77}
                                        height={77}
                                        className="w-20 h-20 object-contain"
                                    />
                                </div>
                              </motion.div>
                        </div>

                        {/* Right Content */}
                        <div className="lg:w-6/12 w-full lg:pl-20 lg:pr-28">
                            <motion.h2 
                              className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-4"
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, ease: 'easeOut' }}
                              viewport={{ once: true }}
                            >
                                Semi-precious gemstones
                            </motion.h2>
                            <motion.p
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                              viewport={{ once: true }}
                            >
                                KGK Group offers large volumes of semi-precious gemstones at competitive prices.
                                You will appreciate the high quality of KGK stones, our excellent customer service
                                and outstanding overall value. Our huge selection includes:
                            </motion.p>

                        </div>
                    </div>

                    {/* Gemstone Thumbnails */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-6 mt-12">
                        {gemstones.map((gem) => (
                        <div
                            key={gem.name}
                            className={`flex flex-col justify-end items-center cursor-pointer p-3 px-14 lg:p-2.5 border  transition-all duration-300 hover:border-[#cdc7bb] ${
                                selectedGem.name === gem.name ? 'border-[#cdc7bb]' : 'border-transparent'
                            }`}
                            onClick={() => setSelectedGem(gem)}
                            >
                                <motion.div
                                  layout
                                  className="w-full aspect-[3/2] relative mb-2"
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3 }}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <Image
                                    src={gem.image}
                                    alt={gem.name}
                                    fill
                                    className="object-contain"
                                  />
                                </motion.div>
                                <p className="text-[15px] leading-[16px] text-heading font-bold font-cardo text-center min-h-8 mt-2 flex items-end justify-center">
                                {gem.name}
                                </p>

                            </div>

                        ))}
                    </div>
                </div>
            </div>  
        </div>

        {modalOpen && (
            <YoutubeVideoModal
            youtubeId="xNCqCOu5Q6U"
            onClose={() => setModalOpen(false)}
            />
        )}
    </>
  );
}
