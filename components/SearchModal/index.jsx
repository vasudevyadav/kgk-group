'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const menuItems = [
  { title: 'Home', slug: '/' },
  { title: 'About Us', slug: '/about-us' },
  { title: 'Gemstones', slug: '/our-business/gemstones' },
  { title: 'Mining', slug: '/our-business/mining' },
  { title: 'Diamonds', slug: '/our-business/diamonds' },
  { title: 'Jewellery', slug: '/our-business/jewellery' },
  { title: 'Real Estate', slug: '/our-business/real-estate' },
  { title: 'Stones', slug: '/our-business/stones' },
  { title: 'Hospitality', slug: '/our-business/hospitality' },
  { title: 'Diamatrics', slug: '/diamatrics' },
  { title: 'KGK Foundation', slug: '/kgk-foundation' },
  { title: 'Careers', slug: '/careers' },
  { title: 'Contact Us', slug: '/contact-us' },
];

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = menuItems.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  useEffect(() => {
    if (!isOpen) {
      // Clear input and results on close
      setQuery('');
      setResults([]);
      setLoading(false);
    }
  }, [isOpen]);

  const handleSelect = async (slug) => {
    setLoading(true);
    try {
      await router.push(slug);
    } catch (err) {
      console.error('Navigation error:', err);
    } finally {
      setLoading(false);
      onClose(); // Close after navigation
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl relative h-[420px] max-h-[85vh]"
          >
            <button
                onClick={onClose}
                className="absolute -top-2 -right-4 w-8 h-8 rounded-full bg-black text-white text-xl flex items-center justify-center hover:bg-gray-800 transition-all duration-200"
                >
                ×
            </button>

            {/* Search Input */}
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              disabled={loading}
              className="w-full px-4 py-3 text-base rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400"
            />

            {/* Results */}
            <div className="mt-5 overflow-y-auto max-h-[320px] pr-1 scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              {loading ? (
                <div className="flex justify-center items-center h-40">
                  <svg className="animate-spin h-6 w-6 text-gray-600" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z" />
                  </svg>
                </div>
              ) : results.length > 0 ? (
                results.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelect(item.slug)}
                    className="cursor-pointer px-4 py-3 rounded-xl hover:bg-gray-100 transition font-medium text-gray-800"
                  >
                    {item.title}
                  </div>
                ))
              ) : (
                query.trim() !== '' && (
                  <div className="px-4 py-3 text-gray-400 text-sm">No results found</div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
