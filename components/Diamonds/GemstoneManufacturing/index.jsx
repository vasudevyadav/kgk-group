'use client';

import { motion } from "framer-motion";

export default function GemstoneManufacturing({
  backgroundImage,
  heading,
  descriptionTop,
  listItems,
  descriptionBottom,
}) {
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="gemstone-manufacturing"
      className="relative z-10 bg-cover bg-bottom md:bg-left bg-no-repeat"
      style={{
        backgroundImage: `url(${typeof backgroundImage === 'string' ? backgroundImage : backgroundImage.src})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 md:hidden z-0" />
      <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 ">
        <div className="hidden md:block" />

        <div className="text-white px-[15px] lg:pl-0 lg:pr-[125px] py-16 flex items-center">
          <div>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal mb-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              dangerouslySetInnerHTML={{ __html: heading }}
            ></motion.h2>

            <motion.p 
              className="mb-8 text-base"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {descriptionTop}
            </motion.p>

            <motion.ul
              className="space-y-1 list-disc list-inside text-sm sm:text-base md:text-lg text-white font-semibold font-cardo"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {(listItems || []).map((item, index) => (
                <motion.li key={index} variants={listItem}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            {descriptionBottom && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="mt-6"
              >
                {descriptionBottom}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
