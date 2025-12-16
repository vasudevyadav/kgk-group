'use client';

import { motion } from "framer-motion";

export default function GemstoneManufacturing({ data = [] }) {
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
      className="bg-[#1f355d] relative z-10 bg-[url('/images/layer-323.jpg')] bg-cover bg-left bg-no-repeat"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block" />

        <div className="text-white px-[50px] lg:pl-0 lg:pr-[125px] py-20 flex items-center">
          <div>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal mb-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Manufacturing <br /> innovation
            </motion.h2>

            <motion.p
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              We process, cut and polish our own gemstones to ensure maximum quality and value.
              For speed and efficiency, our digitally controlled production lines are equipped
              with automated gemstone production technology. To provide optimum access to global
              markets, KGK gemstone manufacturing units are located in:
            </motion.p>

            {data?.length > 0 && (
              <motion.ul
                className="space-y-1 list-disc list-inside text-[18px] leading-[32px] sm:text-[20px] sm:leading-[36px] md:text-[22px] md:leading-[40px] text-white font-bold font-cardo mb-6"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {data.map((location, index) => (
                  <motion.li key={index} variants={listItem}>
                    {location}
                  </motion.li>
                ))}
              </motion.ul>
            )}

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              KGK is unique in the gems and jewellery sector for being amongst the industry’s only few that also mines and produces coloured gemstones.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
