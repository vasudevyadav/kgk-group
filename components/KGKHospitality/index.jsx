'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import img1 from '@/assets/images/hospitality-1.jpg';
import img2 from '@/assets/images/hospitality-2.jpg';
import img3 from '@/assets/images/hospitality-3.jpg';
import img4 from '@/assets/images/hospitality-4.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const KGKHospitality = () => {
  return (
    <section className="relative w-full py-8 lg:pt-16 lg:pb-6">
      {/* Background Split */}
      <div className="absolute inset-0 h-[52%] bg-white z-0" />
      <div className="absolute inset-0 top-[52%] bg-[#fcf5ec] z-0" />

      <div className="container relative">
        <div className="px-0 lg:pl-[50px]">

          {/* Title Section */}
          {/* <motion.div
            className="flex flex-col lg:flex-row items-start gap-x-8 w-full mb-11"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div className="w-full md:w-[30%]" variants={fadeUp}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading whitespace-nowrap mb-4 lg:mb-0 lg:mt-0">
                KGK Hospitality
              </h2>
            </motion.div>

            <motion.div className="w-full md:w-[70%]" variants={fadeUp}>
              <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-black pr-0 lg:pr-20">
                Blending precision, innovation, and tradition to create exceptional dining experiences that redefine luxury and sophistication.
              </p>
            </motion.div>
          </motion.div> */}

          <div className="relative z-10 space-y-8">

            {/* Top Section */}
            <motion.div
              className="flex flex-col md:flex-row gap-8 items-start"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div className="w-full md:w-[30%]" variants={fadeUp}>
                <Image
                  src={img1}
                  alt="KGK Hospitality Entrance"
                  className="rounded-[21px] w-full h-[300px] sm:h-[320px] md:h-[610px] object-cover"
                />
              </motion.div>

              <div className="w-full md:w-[70%] flex flex-col gap-8">
                <motion.div variants={fadeUp}>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-4 max-w-xl">
                    Crafting Exquisite Culinary Experiences
                  </h3>
                  <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-black max-w-4xl lg:pr-24 mb-4">
                    With a legacy rooted in excellence, KGK Group continues its journey of innovation by expanding into the world of hospitality.
                    This evolution is led by Shivika Kothari, a fifth-generation member of the KGK family, who brings a fresh perspective and a
                    passion for creating distinguished culinary experiences. Drawing from the group’s long standing expertise in precision and
                    craftsmanship, KGK Hospitality blends fine dining with impeccable service to offer guests an extraordinary gastronomic journey.
                  </p>
                  <Link
                    href="https://meraakikitchen.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-700 text-sm font-normal text-black tracking-widest uppercase px-6 py-2 rounded-full hover:bg-gray-100 transition"
                  >
                    VISIT MERAAKI KITCHEN
                  </Link>
                </motion.div>

                <motion.div className="flex gap-8" variants={stagger}>
                  <motion.div
                    className="w-[50%] lg:w-[40%] h-[200px] md:h-[290px] lg:h-[305px]"
                    variants={fadeUp}
                  >
                    <Image
                      src={img2}
                      alt="Decor"
                      className="rounded-[21px] object-cover w-full h-full"
                    />
                  </motion.div>

                  <motion.div
                    className="w-[50%] lg:w-[60%]"
                    variants={fadeUp}
                  >
                    <div className="h-[200px] md:h-[290px] lg:h-[305px] lg:-mr-[100px]">
                      <Image
                        src={img3}
                        alt="Dining"
                        className="rounded-[21px] lg:rounded-l-[21px] lg:rounded-r-none object-cover w-full h-full"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Bottom Section */}
            <motion.div
              className="flex flex-col md:flex-row items-center gap-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div className="w-full md:w-[59.5%] space-y-4" variants={fadeUp}>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading">
                  A Vision for Excellence
                </h3>
                <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-black max-w-2xl lg:pr-6">
                  <strong>Shivika Kothari</strong>'s leadership in the hospitality sector is driven by a commitment to quality and a desire
                  to curate exceptional experiences. With a focus on authenticity, innovation, and attention to detail, KGK Hospitality aims to
                  set new benchmarks in the industry. By integrating global culinary influences with a deep respect for tradition, each endeavor
                  under KGK Hospitality delivers an experience that is both refined and memorable.
                </p>
              </motion.div>

              <motion.div className="w-full md:w-[40.5%]" variants={fadeUp}>
                <Image
                  src={img4}
                  alt="Shivika Kothari"
                  className="rounded-[21px] object-cover w-[240px] h-[240px] max-w-xs mx-auto md:mx-0"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KGKHospitality;
