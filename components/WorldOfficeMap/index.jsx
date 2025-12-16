'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import mapImage from '@/assets/images/contact-map.png';
import pinIcon from '@/assets/images/pin.webp';
import activePinIcon from '@/assets/images/active-pin.webp';
import search from '@/assets/images/search.webp';
import { officeLocations } from '@/lib/officeLocations';
import { motion } from "framer-motion";

const DownArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-black"
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

export default function WorldOfficeMap() {
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const regions = officeLocations.map(r => r.region);
  const countries = officeLocations
  .filter(r => (selectedRegion ? r.region === selectedRegion : true)) // Filter by region first
  .flatMap(r => r.offices.map(o => o.country)) // Get countries in those regions
  .filter((v, i, a) => a.indexOf(v) === i); 

  const filteredLocations = officeLocations
    .filter(r => (selectedRegion ? r.region === selectedRegion : true))
    .map(r => ({
      ...r,
      offices: r.offices.filter(o => (selectedCountry ? o.country === selectedCountry : true)),
    }))
    .filter(r => r.offices.length > 0);

 useEffect(() => {
  const isDesktop = window.innerWidth >= 1024; // Tailwind's 'lg'
  if (isDesktop) {
    // Find New York (USA)
    const defaultRegion = officeLocations.find(r =>
      r.offices.some(o => o.country === 'USA' && o.city.includes('New York'))
    );

    if (defaultRegion) {
      const index = defaultRegion.offices.findIndex(
        o => o.country === 'USA' && o.city.includes('New York')
      );
      if (index !== -1) {
        setActive(`${defaultRegion.region}-${index}`);
      }
    }
  }
}, []);   

  return (
    <div className="relative w-full bg-forth pt-32 overflow-hidden h-[600px] md:h-auto">
      <div className="container h-full ">
        <div className="px-0 lg:px-[50px] h-full md:block flex flex-col justify-center items-center">
          <motion.h2 
            className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-white font-myriad mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Contact us
          </motion.h2>

          {/* Dropdowns */}
            <motion.div 
              className="hidden lg:flex flex-row gap-3 justify-center items-center mb-12 sm:mb-48 overflow-x-auto px-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
            {/* Region Dropdown */}
            <div className="relative w-auto min-w-[120px] lg:min-w-[200px]">
                <select
                className="w-full appearance-none pl-5 pr-10 py-2 rounded-full bg-white text-black text-sm shadow border border-gray-200 focus:outline-none"
                value={selectedRegion}
                onChange={(e) => {
                    setSelectedRegion(e.target.value);
                    setSelectedCountry('');
                }}
                >
                <option value="">Select region</option>
                {regions.map(region => (
                    <option key={region} value={region}>
                    {region}
                    </option>
                ))}
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <DownArrowIcon />
                </div>
            </div>

            {/* Country Dropdown */}
            <div className="relative w-auto min-w-[120px] lg:min-w-[200px]">
                <select
                className="w-full appearance-none pl-5 pr-10 py-2 rounded-full bg-white text-black text-sm shadow border border-gray-200 focus:outline-none"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                >
                <option value="">Select country</option>
                {countries.map(country => (
                    <option key={country} value={country}>
                    {country}
                    </option>
                ))}
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <DownArrowIcon />
                </div>
            </div>

            {/* Search Button */}
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#9b7c5b] shadow">
                <Image src={search} alt="Search" width={18} height={18} />
            </button>
            </motion.div>


          {/* Map + Pins */}
          <div className="relative w-full aspect-[1166/430] max-w-[1166px] mx-auto px-4">
            <Image
              src={mapImage}
              alt="World Map"
              fill
              className="object-contain opacity-80"
              priority
            />

            {filteredLocations.map(region =>
            region.offices.map((office, idx) => {
                const key = `${region.region}-${idx}`;
                const isHovered = hovered === key;
                const isActive = active === key;
                const isVisible = isHovered || isActive;

                return (
                <div
                    key={key}
                    className="absolute z-20 cursor-pointer"
                    style={{
                    top: office.coords.top,
                    left: office.coords.left,
                    transform: 'translate(-50%, -100%)',
                    }}
                    onMouseEnter={() => {
                      setHovered(key);
                      setActive(key);
                    }}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setActive(key)}
                >
                    {isVisible && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="hidden lg:block absolute bottom-[36px] left-1/2 flex flex-col items-start z-50 w-[260px]"
                      >
                        <div className="text-white text-xs leading-tight">
                          <p className="text-[#bb9d7b] font-semibold text-2xl font-myriad mb-1">
                            {office.city} ({office.country})
                          </p>
                          <ul className="space-y-3 border-l border-white pl-3 pt-4 pb-24 lg:pb-32">
                            {office.companies.map((c, i) => (
                              <li key={i} className="text-sm text-white">
                                {c.name}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}



                    {/* Marker Pin (exactly at place) */}
                    <Image
                        src={isActive ? activePinIcon : pinIcon}
                        alt="Pin"
                        className={`w-2 md:w-3.5 h-auto transition-transform duration-200 ${isActive ? 'scale-150' : ''}`}
                    />



                </div>
                );
            })
        )}




          </div>
        </div>
      </div>
    </div>
  );
}
