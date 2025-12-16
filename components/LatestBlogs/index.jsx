'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export default function LatestBlogs({ data }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const categories = ['All', ...Array.from(new Set(data.map(blog => blog.category)))];

  const filteredList =
    activeCategory === 'All'
      ? data
      : data.filter((blog) => blog.category === activeCategory);

  const selectedBlog = filteredList[selectedIndex] ?? filteredList[0];

  return (
    <div className="pt-7 pb-24 bg-white">
      <motion.h2 
        className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Across Sectors
      </motion.h2>

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
            onClick={() => {
              setActiveCategory(cat);
              setSelectedIndex(0);
            }}
            className={clsx(
              "px-3 pb-1 border-b-2 transition",
              activeCategory === cat
                ? "font-bold border-primary text-primary"
                : "font-medium border-transparent text-heading hover:text-primary"
            )}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <div className="container px-0 lg:px-[50px]">
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          
          {/* Left: Featured Blog */}
          <motion.div 
            className="w-full lg:w-[55%] overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {selectedBlog && (
              <>
                <div className="relative w-full h-[348px]">
                  <Image
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    fill
                    className="object-cover object-top rounded-lg"
                    unoptimized
                  />
                </div>
                <div className="mt-7 max-w-xl">
                  <h3 className="text-lg font-semibold mb-4">{selectedBlog.title}</h3>
                  <p className="text-sm text-heading mb-6">
                    {selectedBlog.description?.length > 180
                      ? selectedBlog.description.slice(0, 177) + '...'
                      : selectedBlog.description}
                  </p>
                  <Link href={`/blogs/${selectedBlog.slug}`} className="inline-block bg-third text-white text-[9px] font-medium tracking-wide uppercase px-4 py-1.5 rounded-full hover:bg-primary transition cursor-pointer">
                    Read More
                  </Link>
                </div>
              </>
            )}
          </motion.div>

          {/* Right: Blog List */}
          <div className="w-full lg:w-[45%] space-y-4 max-h-[520px] overflow-y-auto lg:pr-14 custom-scrollbar">
            {filteredList.map((blog, index) => (
              <motion.div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="border-b pb-4 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                viewport={{ once: true }}
              >
                <p
                  className={clsx(
                    "text-lg font-medium group-hover:text-primary",
                    selectedIndex === index && "text-primary font-semibold"
                  )}
                >
                  {blog.title}
                </p>
              </motion.div>
            ))}
            {filteredList.length === 0 && (
              <p className="text-sm text-gray-500">No blogs in this category.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
