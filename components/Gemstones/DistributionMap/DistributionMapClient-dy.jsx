'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { VectorMap } from '@react-jvectormap/core';
import { mergedWorldWithHK } from './mergedWorldWithHK';

const euroZoneCodes = [
  'FR', 'DE', 'IT', 'ES', 'NL', 'BE', 'AT',
  'FI', 'IE', 'PT', 'GR', 'SK', 'SI',
  'EE', 'LV', 'LT', 'LU', 'MT', 'CY',
];

export default function DistributionMapClient({ data = [] }) {
  const [hovered, setHovered] = useState(null);

  // Transform data into countries array
  const countries = useMemo(() => {
    return data.map((item) => {
      if (item.country.toUpperCase() === 'EUROZONE') {
        return { name: 'EUROZONE', code: euroZoneCodes };
      }
      return {
        name: item.country,
        code: item.country_code,
      };
    });
  }, [data]);

  const regionValues = countries.reduce((acc, country) => {
    const isHovered = hovered === country.name || hovered === country.code;
    const fillValue = isHovered ? 2 : 1;

    const codes = Array.isArray(country.code) ? country.code : [country.code];
    codes.forEach((code) => {
      acc[code] = fillValue;
    });

    return acc;
  }, {});

  return (
    <div id="distribution-map" className="py-16 bg-white">
      <div className="container">
        <div className="px-0 lg:px-[50px]">
          <motion.h2
            className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Efficient distribution network
          </motion.h2>
          <motion.p
            className="text-center max-w-4xl mx-auto mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            The KGK Group’s valuable logistics distribution infrastructure extends around the world.
            The main markets for our coloured gemstones are:
          </motion.p>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="lg:w-4/12">
              <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-[14px] lg:text-[17px] uppercase text-heading font-normal font-cardo">
                {countries.map((c, index) => (
                    <li
                      key={`country-${index}`}
                      onMouseEnter={() => setHovered(c.name)}
                      onMouseLeave={() => setHovered(null)}
                      className={`list-none list-inside cursor-pointer transition ${
                        hovered === c.name || hovered === c.code ? 'text-[#c09e7b] font-semibold' : 'text-[#444]'
                      }`}
                    >
                      {c.name.toUpperCase()}
                      {['CHINA', 'INDIA'].includes(c.name.toUpperCase()) && '*'}
                    </li>
                  ))}

              </ul>
            </div>

            <div className="lg:w-8/12">
              <div className="w-full h-[400px]">
                <VectorMap
                  map={mergedWorldWithHK}
                  backgroundColor="transparent"
                  zoomOnScroll={false}
                  zoomButtons={false}
                  regionStyle={{
                    initial: {
                      fill: '#e7e7e7',
                      'fill-opacity': 1,
                      stroke: '#e7e7e7',
                      'stroke-width': 0.6,
                    },
                    selected: {
                      fill: '#c09e7b',
                    },
                  }}
                  series={{
                    regions: [
                      {
                        values: regionValues,
                        scale: {
                          1: '#d3bea8',
                          2: '#8c745a',
                        },
                        normalizeFunction: 'polynomial',
                        attribute: 'fill',
                      },
                      {
                        values: regionValues,
                        scale: {
                          1: '#e7e7e7',
                          2: '#e7e7e7',
                        },
                        normalizeFunction: 'polynomial',
                        attribute: 'stroke',
                      },
                      {
                        values: regionValues,
                        scale: {
                          1: '0.6',
                          2: '0.8',
                        },
                        normalizeFunction: 'polynomial',
                        attribute: 'stroke-width',
                      },
                    ],
                  }}
                  containerStyle={{
                    width: '100%',
                    height: '100%',
                  }}
                  onRegionTipShow={(e, el, code) => {
                    if (!Object.keys(regionValues).includes(code)) e.preventDefault();
                  }}
                  onRegionOver={(e, code) => {
                    const country = countries.find((c) =>
                      Array.isArray(c.code) ? c.code.includes(code) : c.code === code
                    );
                    if (country) setHovered(country.name);
                  }}
                  onRegionOut={() => setHovered(null)}
                />
              </div>
            </div>
          </div>

          <motion.div
            className="mt-10 text-[14px] md:text-[15px] leading-[25px] tracking-[0px] text-[#010101] font-normal text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            * Domestic manufacturing for tariff-free local distribution
            <br />
            The KGK Group regularly exhibits at many of the world’s leading gemstone and jewellery trade events.
          </motion.div>
        </div>
      </div>
    </div>
  );
}
