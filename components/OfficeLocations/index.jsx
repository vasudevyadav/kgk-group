'use client';

import Masonry from 'react-masonry-css';
import { useState } from 'react';
import { officeLocations } from '@/lib/officeLocations';
import { motion } from "framer-motion";

const DownArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function OfficeLocations() {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const regionOptions = ['All Regions', ...officeLocations.map((r) => r.region)];

  const filteredLocations =
    selectedRegion === 'All Regions'
      ? officeLocations
      : officeLocations.filter((r) => r.region === selectedRegion);

  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
  };

  return (
    <div className="py-10 md:py-16">
      <div className="container">
        <div className="px-0 lg:px-[50px]">
          <div className="relative md:w-56">
            <select
              className="w-full appearance-none pl-5 pr-10 py-2 rounded-full bg-[#8c7459] text-white text-sm border border-[#8c7459] focus:outline-none"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              >
              <option value="">Select region</option>
               {regionOptions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
              <DownArrowIcon />
            </div>
          </div>
          

          {/* Loop Regions */}
          {filteredLocations.map((region) => {
            const countryGroups = {};
            region.offices.forEach((office) => {
              if (!countryGroups[office.country]) {
                countryGroups[office.country] = [];
              }
              countryGroups[office.country].push(office);
            });

            return (
              <div
                key={region.region}
                className="flex flex-col md:flex-row gap-6 md:gap-12 mt-7 border-t border-third pt-7"
              >
                <div className="w-full lg:w-3/12">
                  <motion.h2 
                    className="text-base lg:text-[39px] text-[#8c7459] font-extrabold font-myriad pb-2"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  >
                    {region.region}
                  </motion.h2>
                </div>

                <div className="w-full lg:w-9/12 lg:pr-4">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex gap-6"
                    columnClassName="flex flex-col gap-6"
                  >
                    {Object.entries(countryGroups).map(([country, offices]) => (
                      <div key={country} className="break-inside-avoid">
                        <motion.p 
                          className="lg:text-[27px] text-third font-extrabold mb-2"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                          viewport={{ once: true }}
                        >{country}</motion.p>
                        {offices.map((office, index) => (
                          <div key={index} className="mb-3">
                            <motion.p 
                              className="text-[14px] leading-[19px] text-[#8c7459] font-bold mb-2"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                              viewport={{ once: true }}
                            >{office.city}</motion.p>
                            <div className="space-y-5">
                              {office.companies.map((c, i) => (
                                <div key={i}>
                                  <motion.p 
                                    className="text-[14px] leading-[19px] text-head font-bold"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                  >{c.name}</motion.p>
                                  <motion.p 
                                    className="mt-1 text-[14px] leading-[19px] text-head"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                  >
                                    {c.email}
                                  </motion.p>
                                </div>
                              ))}
                            </div>
                            
                          </div>
                        ))}
                      </div>
                    ))}
                  </Masonry>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
