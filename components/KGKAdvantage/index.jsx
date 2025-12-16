'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import Icon1 from '@/assets/images/office-1.png';
import Icon2 from '@/assets/images/operation-1.png';
import Icon3 from '@/assets/images/team-1.png';

const iconVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: 'easeOut' },
  }),
};

export default function KGKAdvantage() {
  return (
    <div className="py-10 md:py-16 lg:py-20 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center px-0 lg:px-[50px] gap-2">

          {/* Left Text */}
          <div className="w-full lg:w-5/12 mb-12 lg:mb-0">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              The KGK Advantage
            </motion.h2>
            <motion.p 
              className="text-[15px] leading-[25px] tracking-[0px] font-normal text-black"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              KGK Group’s unparalleled, vertically integrated business spans the entire gems and jewelry value chain, from mining to retail. This seamless integration ensures a strong industry presence, delivering significant competitive advantages at every stage.
            </motion.p>
          </div>

          {/* Right Absolute Icons Layout */}
          <div className="w-full lg:w-7/12 relative h-[380px] scale-80 md:scale-100">

            {/* Icon Block 1 */}
            <motion.div
              className="absolute top-0 left-0 group cursor-pointer"
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-start gap-6">
                <Image src={Icon1} alt="Office" className="w-[153px] h-[130px]" />
                <p className="text-sm md:text-xl text-heading font-bold font-[Cardo] mt-2 md:max-w-60">
                  Global headquarters in Hong Kong
                </p>
              </div>
            </motion.div>

            {/* Icon Block 2 */}
            <motion.div
              className="absolute top-[28%] left-[90px] group cursor-pointer"
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-8">
                <Image src={Icon2} alt="Operation" className="w-[95px] h-[164px]" />
                <p className="text-sm md:text-xl text-heading font-bold font-[Cardo] mt-2 md:max-w-sm">
                  Operations across Asia, North & South 
                  America, Europe, and Africa
                </p>
              </div>
            </motion.div>

            {/* Icon Block 3 */}
            <motion.div
              className="absolute bottom-0 left-0 group cursor-pointer"
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-end gap-6">
                <Image src={Icon3} alt="Team" className="w-[153px] h-[130px]" />
                <p className="text-sm md:text-xl text-heading font-bold font-[Cardo] mt-2 md:max-w-60">
                  A dynamic team of 18,000 professionals
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  );
}
