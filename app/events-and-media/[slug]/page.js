'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchFromAPI } from '@/lib/api';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function EventsDetailPage() {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEvent = async () => {
      try {
        const data = await fetchFromAPI(`events/${slug}`);
        console.log("Event data:", data);
        console.log("Event images:", data.images);

        let images = [];
        if (Array.isArray(data.images)) {
          images = data.images
            .map((img) => {
              if (!img) return null;

              // remove extra quotes / brackets
              let cleaned = img.replace(/^\[?"?/, "").replace(/"?\]?$/, "");
              return cleaned.trim();
            })
            .filter(Boolean); // remove null/empty
        }

        setEvent({ ...data, images });
      } catch (error) {
        console.error("Failed to load event:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      getEvent();
    }
  }, [slug]);


  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!event) return <div className="text-center py-10">No data found</div>;

  return (
    <>
      <div className="w-full bg-primary py-10 text-center text-white">
        <div className="container">
          <motion.p
            className="text-sm md:text-base font-semibold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {event.date}
          </motion.p>
          <motion.h1
            className="text-2xl md:text-4xl mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {event.title}
          </motion.h1>
          <motion.p
            className="text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {event.subtitle}
          </motion.p>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container">
          <div className="px-0 lg:px-[100px]">
            {(() => {
                const rows = [];
                const images = event.images || [];

                for (let i = 0; i < images.length; i += 3) {
                  rows.push(images.slice(i, i + 3));
                }

                return rows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className={`mb-4 gap-3 ${
                      row.length === 3
                        ? 'grid grid-cols-1 md:grid-cols-3'
                        : 'flex justify-center flex-wrap'
                    }`}
                  >
                    {row.map((img, i) => (
                      <motion.div
                        key={i}
                        className="rounded-xl overflow-hidden shadow-md"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <Image
                          src={img}
                          alt={`Gallery Image ${rowIndex * 3 + i + 1}`}
                          width={600}
                          height={300}
                          className="w-full h-60 object-cover object-[center_25%]"
                        />
                      </motion.div>
                    ))}
                  </div>
                ));
              })()}


            <motion.h2
              className="text-base md:text-lg lg:text-xl text-center mb-4 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {event.highlight}
            </motion.h2>
            <motion.p
              className="text-xs md:text-sm lg:text-base text-third text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {event.description}
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}
