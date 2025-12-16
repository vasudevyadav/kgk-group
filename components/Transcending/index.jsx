'use client';

import { motion } from 'framer-motion';

const ease = [0.25, 0.1, 0.25, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease,
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function Transcending() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="px-0 lg:px-[50px]">
          {/* Header Section */}
          <motion.div
            className="flex flex-col lg:flex-row lg:items-end gap-6 mb-7"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* <motion.div
              className="w-full lg:w-7/12"
              variants={fadeInUp}
              custom={0}
            > */}
            <motion.div
              className="w-full"
              variants={fadeInUp}
              custom={0}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading lg:leading-[57px]">
                At <span className="font-semibold text-primary">KGK Group</span>, we have been
                transcending boundaries 
                through our work and our quality.
              </h2>
            </motion.div>

            {/* <motion.div
              className="w-full lg:w-5/12"
              variants={fadeInUp}
              custom={1}
            >
              <p className="lg:pl-9 text-justify">
                Our legacy is built on a foundation of innovation, trust, and excellence. Over the years, we’ve continuously pushed the limits—transforming challenges into opportunities and redefining standards across the gemstone and jewelry industry. Here’s a glimpse of what sets us apart:
              </p>
            </motion.div> */}
          </motion.div>

          {/* Achievement Cards */}
          <motion.div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9"
  initial="hidden"
  whileInView="visible"
  variants={staggerContainer}
  viewport={{ once: true, amount: 0.5 }}
>
  {[
    {
      title: 'Vertical Integration',
      description:
        'We pioneered vertically integrated operations, managing every step of the gemstone and jewelry value chain. This ensures consistent quality, transparency, and ethical sourcing from mine to market.',
    },
    {
      title: 'Global Expansion',
      description:
        'With a presence in over 20 countries, KGK Group has established a truly global footprint—connecting diverse markets while staying rooted in craftsmanship and authenticity.',
    },
    {
      title: 'Sustainable Innovation',
      description:
        'We embrace advanced technology and eco-friendly practices to drive innovation. From precision cutting to energy-efficient manufacturing, we are committed to sustainability and long-term impact.',
    },
    {
      title: 'People Empowerment',
      description:
        'Our strength lies in our people. With over 12,000 professionals worldwide, we invest in inclusive growth, skill development, and a culture that nurtures talent at every level.',
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      className="bg-neutral-100 rounded-xl px-8 py-7"
      variants={fadeInUp}
      custom={index + 2}
    >
      <h4 className="font-bold text-sm text-heading mb-3">{item.title}</h4>
      <p className="text-sm text-heading leading-relaxed">{item.description}</p>
    </motion.div>
  ))}
</motion.div>

        </div>
      </div>
    </section>
  );
}
