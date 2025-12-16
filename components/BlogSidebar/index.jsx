'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogSidebar({ popularPosts = [], categories = [], tags = [] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    try {
      const res = await fetch(`https://reinventmedia.in/kgkgroup-backend/wp-json/custom/v1/blogs/search?query=${encodeURIComponent(searchQuery)}`);
      const data = await res.json();
      setSearchResults(data.results || []);
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  return (
    <aside className="space-y-10 font-myriad">
      {/* Search */}
      <motion.div
        className="max-w-[14rem] mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center w-full border border-[#cfcfcf] rounded-full overflow-hidden px-4 py-2 bg-white">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 border-none focus:outline-none bg-transparent text-xs placeholder-[#868686]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <div className="h-5 w-px bg-[#cfcfcf] mx-3"></div>
          <button className="text-[#868686]" onClick={handleSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <span className="inline-block bg-primary text-white text-xs font-medium px-2.5 py-0.5 mb-4">
              Search Results
            </span>
          </div>
          <div className="space-y-4">
            {searchResults.map((post, index) => (
              <PopularPost
                key={index}
                title={post.title}
                image={post.image}
                slug={post.slug}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Popular Posts */}
      {popularPosts.length > 0 && (
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <span className="inline-block bg-primary text-white text-xs font-medium px-2.5 py-0.5 mb-4">
              Popular Posts
            </span>
          </div>
          <div className="space-y-4">
            {popularPosts.map((post, index) => (
              <PopularPost key={index} title={post.title} image={post.image} slug={post.slug} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Categories */}
      {categories.length > 0 && (
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <span className="inline-block bg-primary text-white text-xs font-medium px-2.5 py-0.5 mb-4">
              Categories
            </span>
          </div>
          <ul className="text-third text-lg space-y-2.5">
            {categories.map((category, index) => (
              <li key={index}>
                <Link href={`/category/${encodeURIComponent(category.toLowerCase())}`} className="hover:text-primary transition-colors duration-200">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <span className="inline-block bg-primary text-white text-xs font-medium px-2.5 py-0.5 mb-4">
              Tags
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-[#ececec] text-base text-third px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </aside>
  );
}

function PopularPost({ title, image, slug }) {
  return (
    <div className="flex gap-3 items-center">
      <Image
        src={image || '/placeholder.jpg'}
        alt={title}
        width={60}
        height={60}
        className="w-20 h-20 object-cover rounded"
      />
      <div>
        <p className="text-sm line-clamp-3">{title}</p>
        <Link
          href={`/blogs/${slug}`}
          className="inline-block bg-third text-white text-[7px] font-medium tracking-wide uppercase px-2 py-1 rounded-full hover:bg-primary transition cursor-pointer mt-1"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
