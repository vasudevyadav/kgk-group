'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function EventsSection({ data = [] }) {
  const [activeCategory, setActiveCategory] = useState('All');

  // Generate unique categories dynamically
  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(data.map((item) => item.category).filter(Boolean)))];
  }, [data]);

  // Filter data based on selected category
  const filteredEvents = useMemo(() => {
    return activeCategory === 'All'
      ? data
      : data.filter((event) => event.category === activeCategory);
  }, [activeCategory, data]);

  return (
    <div className="py-12 bg-light-primary">
      <div>
        {/* Title */}
        <motion.h2
          className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          More from the Events
        </motion.h2>

        {/* Category Tabs */}
        <motion.div
          className="flex justify-center flex-wrap gap-3 md:gap-6 border-b border-primary mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                'px-3 pb-1 border-b-2 transition',
                activeCategory === cat
                  ? 'font-bold border-primary text-primary'
                  : 'font-medium border-transparent text-heading hover:text-primary'
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="container">
          <div className="px-0 lg:px-[50px]">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-7"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={activeCategory}
            >
              {filteredEvents.map((event, index) => (
                <motion.div key={index} variants={cardVariants} className="space-y-2">
                  <div className="overflow-hidden rounded-md">
                    <Link href={`/events-and-media/${event.slug || '#'}`}>
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={280}
                        height={300}
                        className="rounded-lg w-full h-60 lg:h-44 object-cover object-top"
                        unoptimized
                      />
                    </Link>
                  </div>
                  <Link href={`/events-and-media/${event.slug || '#'}`} className="text-base text-third max-w-xs">
                    {event.title.length > 90 ? event.title.slice(0, 90) + '...' : event.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Load More (shown only if more than 6 items) */}
            {filteredEvents.length > 6 && (
              <motion.div
                className="text-center mt-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <button className="cursor-pointer px-4 py-1.5 text-xs font-medium bg-primary uppercase text-white rounded-full">
                  LOAD MORE
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
