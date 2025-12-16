'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import p1 from '@/assets/images/20555838084.png';
import p2 from '@/assets/images/84559165646.png';

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      staggerChildren: 0.15, 
      duration: 0.6, 
      ease: 'easeOut' 
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function DiamondProductionSection() {
  return (
    <section className="bg-[#f9f9f9] py-8 lg:py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal mb-4"
            variants={itemVariants}
          >
            Diamond Production Innovation
          </motion.h2>

          <motion.p variants={itemVariants}>
            In pursuit of superior products, KGK continually explores and applies new innovations to our diamond production process, including:
          </motion.p>

          <motion.div className="space-y-6">
            <motion.div variants={itemVariants}>
              <p className="text-lg font-medium text-primary">
                DiaMark<sup>™</sup> laser marking
              </p>
              <p className="text-gray-700">Provenance for every stone.</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg font-medium text-primary">
                Galaxy<sup>™</sup> diamond mapping
              </p>
              <p className="text-gray-700">Advanced inclusion mapping technology for rough diamonds.</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg font-medium text-primary">
                Water jet laser cutting
              </p>
              <p className="text-gray-700">State-of-the-art stone cutting.</p>
            </motion.div>
          </motion.div>

          <motion.p className="text-gray-700" variants={itemVariants}>
            The volumes we process translate into efficiencies of scale that deliver advantages throughout the value cycle.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 grid grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {[p1, p2].map((img, idx) => (
            <motion.div
              key={idx}
              className="w-full aspect-[1/1] rounded-full overflow-hidden shadow-md"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
            >
              <Image
                src={img}
                alt={`Diamond Process ${idx + 1}`}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
