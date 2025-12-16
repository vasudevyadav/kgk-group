'use client';

import { useState } from 'react';
import { motion } from "framer-motion";
import { VectorMap } from '@react-jvectormap/core';
import { mergedWorldWithHK } from './mergedWorldWithHK';

export default function DistributionMapClient({
  heading = 'Efficient distribution network',
  subheading = `The KGK Group’s valuable logistics distribution infrastructure extends around the world.
  The main markets for our coloured gemstones are:`,
  footer = (
  <>
    * Domestic manufacturing for tariff-free local distribution
    <br />
    The KGK Group regularly exhibits at many of the world’s leading gemstone and jewellery trade events.
  </>
),
  countries = defaultCountries,
}) {
  const [hovered, setHovered] = useState(null);

  const regionValues = countries.reduce((acc, country) => {
    const isHovered = hovered === country.name || hovered === country.code;
    const fillValue = isHovered ? 2 : 1;

    if (Array.isArray(country.code)) {
      country.code.forEach((code) => {
        acc[code] = fillValue;
      });
    } else {
      acc[country.code] = fillValue;
    }

    return acc;
  }, {});

  return (
    <div id="distribution-map" className=" py-8 lg:py-16 bg-white">
      <div className="container">
        <div className="px-0 lg:px-[50px]">
          <motion.h2 
            className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {heading}
          </motion.h2>

          <motion.p 
            className="text-center max-w-4xl mx-auto mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {subheading}
          </motion.p>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="lg:w-4/12">
              <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-[14px] lg:text-[17px] uppercase text-heading font-normal font-cardo">
                {countries.map((c) => (
                    <li
                      key={c.name}
                      onMouseEnter={() => setHovered(c.name)}
                      onMouseLeave={() => setHovered(null)}
                      className={`cursor-pointer transition ${
                        hovered === c.name || hovered === c.code
                          ? 'text-[#c09e7b] font-semibold'
                          : 'text-[#444]'
                      }`}
                    >
                      {c.name}
                      {['CHINA', 'INDIA'].includes(c.name) && '*'}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="w-full lg:w-8/12">
              <div className="w-full h-[200px] md:h-[400px]">
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
                      fill: '#e7e7e7',
                    },
                  }}
                  series={{
                    regions: [
                      {
                        values: regionValues,
                        scale: {
                          1: '#e7e7e7',
                          2: '#d3bea8',
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
            className="mx-auto max-w-3xl md:mt-10 text-[14px] md:text-[15px] leading-[25px] tracking-[0px] text-[#010101] font-normal text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}      
          >
           {footer}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const euroZoneCodes = [
  'FR', 'DE', 'IT', 'ES', 'NL', 'BE', 'AT',
  'FI', 'IE', 'PT', 'GR', 'SK', 'SI',
  'EE', 'LV', 'LT', 'LU', 'MT', 'CY',
];

const defaultCountries = [
  { name: 'CHINA', code: 'CN' },
  { name: 'USA', code: 'US' },
  { name: 'INDIA', code: 'IN' },
  { name: 'THAILAND', code: 'TH' },
  { name: 'HONG KONG SAR', code: 'HK' },
  { name: 'EUROZONE', code: euroZoneCodes },
  { name: 'SOUTH EAST ASIA', code: ['SG', 'MY', 'PH', 'VN', 'TH', 'ID'] },
  { name: 'CHINESE TAIWAN', code: 'TW' },
  { name: 'MIDDLE EAST', code: ['AE', 'SA', 'OM', 'KW', 'QA', 'BH'] },
  { name: 'JAPAN', code: 'JP' },
];
