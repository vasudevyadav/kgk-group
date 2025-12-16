'use client';

import { motion } from "framer-motion";

export default function Intro({ heading, paragraphs, pProps }) {
  return (
    <section className="bg-white py-8">
      <div className="container">
        <div className="px-0 lg:px-[50px]">
          <motion.div
            className="max-w-5xl mx-auto md:text-center space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15, // Paragraphs staggered
                },
              },
            }}
          >
            {heading && (
              <motion.h2
                className="text-base font-bold leading-tight"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
              >
                {heading}
              </motion.h2>
            )}

            {paragraphs.map((para, index) => (
              <motion.p
                key={index}
                {...pProps}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
              >
                {para}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
