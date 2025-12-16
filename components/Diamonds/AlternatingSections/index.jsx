'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AlternatingSections = ({ sections }) => {
  return (
    <div>
      {sections.map(({ title, description, image, reverse, button }, idx) => (
        <section
          key={idx}
          className={`py-8 ${reverse ? 'bg-[#f9f9f9]' : 'bg-white'}`}
        >
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
                  visible: { transition: { staggerChildren: 0.2 } },
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

                  {button?.link && (
                    <Link
                      href={button.link}
                      target={button.newTab ? '_blank' : '_self'}
                      rel={button.newTab ? 'noopener noreferrer' : undefined}
                      className="border border-gray-700 text-sm font-normal text-black tracking-widest uppercase px-6 py-2 rounded-full hover:bg-gray-100 transition mt-4 inline-block"
                    >
                      {button.text || 'Learn More'}
                    </Link>
                  )}
                </motion.div>

                {/* Image */}
                <motion.div
                  className="w-full md:w-1/2"
                  variants={{
                    hidden: { opacity: 0, x: reverse ? -50 : 50 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, ease: 'easeOut' },
                    },
                  }}
                >
                  <Image
                    src={image}
                    alt={title}
                    className="rounded-xl shadow-md"
                    placeholder="blur"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AlternatingSections;
