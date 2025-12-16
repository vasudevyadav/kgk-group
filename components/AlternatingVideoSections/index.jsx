'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import YoutubeVideoModal from '@/components/YoutubeVideoModal';
import { motion } from 'framer-motion';

const AlternatingVideoSections = ({
  title,
  description,
  image,
  youtubeId,
  reverse = false, // optional so we can flip layout
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-8 bg-white relative z-10">
        <div className="container">
          <div className="px-0 lg:px-[50px]">
            <motion.div
              className={`flex flex-col md:flex-row items-center gap-8 lg:gap-x-16 ${
                reverse ? 'md:flex-row-reverse' : ''
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: { transition: { staggerChildren: 0.25 } },
              }}
            >
              {/* Text */}
              <motion.div
                className="w-full md:w-1/2 space-y-4"
                variants={{
                  hidden: { opacity: 0, x: reverse ? 50 : -50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, ease: 'easeOut' },
                  },
                }}
              >
                <h2 className="text-2xl md:text-3xl text-gray-800">{title}</h2>
                <p className="text-base text-gray-600 leading-relaxed text-justify md:text-left">
                  {description}
                </p>
              </motion.div>

              {/* Image Thumbnail with Play Icon */}
              <motion.div
                className="w-full md:w-1/2 relative overflow-hidden group cursor-pointer"
                onClick={() => setIsOpen(true)}
                variants={{
                  hidden: { opacity: 0, x: reverse ? -50 : 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, ease: 'easeOut' },
                  },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={image}
                  alt={title}
                  className="w-full rounded-xl shadow-lg"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-black/60 rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <PlayCircle
                    size={64}
                    className="text-white drop-shadow-lg group-hover:scale-110 transition-transform"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {isOpen && (
        <YoutubeVideoModal
          youtubeId={youtubeId}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default AlternatingVideoSections;
