'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import healthcareImg from '@/assets/images/foundation/healthcare.jpg';
import educationImg from '@/assets/images/foundation/education.jpg';
import skillDevImg from '@/assets/images/foundation/skill-development.jpg';
import artCultureImg from '@/assets/images/foundation/art-culture.jpg';
import heritageImg from '@/assets/images/foundation/heritage.jpg';

const sections = [
  {
    title: 'Healthcare',
    img: healthcareImg,
    overlay: 'bg-[#34baaf]',
    textColor: '#34baaf',
    link: '/kgk-foundation/healthcare',
    content: {
      subtitle: 'Caring for Communities',
      description: 'KGK Foundation ensures access to quality healthcare for underprivileged families through mobile clinics, camps, and partnerships.',
    },
  },
  {
    title: 'Education',
    img: educationImg,
    overlay: 'bg-[#0332b6]',
    textColor: '#0332b6',
    link: '/kgk-foundation/education',
    content: {
      subtitle: 'Shaping the Leaders of Tomorrow',
      description: 'KGK Foundation is dedicated to nurturing young minds and equipping them with the knowledge and confidence to shape the future.',
    },
  },
  {
    title: 'Skill Development',
    img: skillDevImg,
    overlay: 'bg-[#b02930]',
    textColor: '#b02930',
    link: '/kgk-foundation/skill-development',
    content: {
      subtitle: 'Empowering Through Skills',
      description: 'We help individuals gain livelihood by offering vocational training, job-oriented programs, and entrepreneurship workshops.',
    },
  },
  {
    title: 'Art & Culture',
    img: artCultureImg,
    overlay: 'bg-[#efaf1b]',
    textColor: '#efaf1b',
    link: '/kgk-foundation/art-culture',
    content: {
      subtitle: 'Preserving Creative Heritage',
      description: 'We celebrate India’s rich artistic traditions, promoting artists and cultural programs to ensure continued appreciation for the arts.',
    },
  },
  {
    title: 'Heritage Conservation',
    img: heritageImg,
    overlay: 'bg-[#ff852b]',
    textColor: '#ff852b',
    link: '/kgk-foundation/heritage',
    content: {
      subtitle: 'Guardians of the Past',
      description: 'KGK Foundation restores historical sites and spreads awareness of our architectural and spiritual legacy.',
    },
  },
];

const FoundationSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="bg-[#fdf1e5] py-14">
      <div className="container">
        <div className="px-0 lg:px-[50px]">

          <div className="max-w-6xl mx-auto text-center px-0 xl:px-12">
            <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-heading mb-6">
              KGK Foundation is more than a charitable initiative, it is a heartfelt mission dedicated to uplifting
              communities and creating lasting change. Founded on the values of the Kothari family, the foundation
              operates with a deep sense of responsibility toward society.
            </p>
            <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-heading mb-6">
              Guided by five core pillars, Healthcare, Education, Skill Development, Art & Culture, and Heritage
              Conservation, the foundation takes a holistic approach to building a better future. From empowering
              individuals with knowledge and skills to preserving cultural heritage, every effort is made to create
              opportunities, inspire dreams, and make a meaningful impact.
            </p>
            <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-heading mb-10">
              As an integral part of The KGK Group, the foundation draws strength from a legacy of excellence that dates
              back to 1905. With operations in 15 countries and expertise spanning gemstones, diamonds, jewelry, real
              estate, and technology, KGK Group’s success fuels its commitment to giving back.
            </p>
          </div>
          
          {!selectedSection && (
            <div className="mt-10 flex flex-col md:flex-row">
              {sections.map((section, index) => {
                const isActive = index === activeIndex;
                const baseOpacity = index === 0 ? 'opacity-[0.32]' : 'opacity-30';

                return (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    onClick={() => {
                      setSelectedSection(section);
                      setSelectedIndex(index);
                    }}
                    className={`
                      relative cursor-pointer overflow-hidden h-[240px] md:h-[654px]
                      transition-all duration-500 ease-in-out mt-3
                      ${isActive ? 'flex-[1.5]' : activeIndex !== null ? 'flex-[1]' : 'flex-1'}
                      ${isActive ? 'mx-[10px]' : 'mx-[4.5px]'}
                      ${
                        index === 1
                          ? 'md:mt-[54px]'
                          : index === 2
                          ? 'md:mt-[14px]'
                          : index === 3
                          ? 'md:mt-[40px]'
                          : index === 4
                          ? 'md:mt-[6px]'
                          : ''
                      }
                    `}
                  >
                    <div
                      className={`absolute inset-0 ${section.overlay} z-0 transition-opacity duration-500 ${
                        isActive ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                    <div className="relative md:absolute h-[190px] md:h-auto inset-0 z-10 transition-all duration-500">
                      <Image
                        src={section.img}
                        alt={section.title}
                        fill
                        className={`
                          object-cover mix-blend-luminosity transition-all duration-500
                          ${isActive ? 'scale-115 opacity-100' : `scale-100 ${baseOpacity}`}
                        `}
                      />
                    </div>
                    <div
                      className={`absolute inset-0 z-20 flex items-center lg:items-start justify-center px-4 text-center transition-opacity duration-500 ${
                        isActive ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      <h3
                        className={`
                          text-white font-semibold font-cardo
                          text-2xl md:text-lg lg:text-[22px] 
                          ${
                            index === 0
                              ? 'md:pt-[96px]'
                              : index === 1
                              ? 'md:pt-[42px]'
                              : index === 2
                              ? 'md:pt-[82px]'
                              : index === 3
                              ? 'md:pt-[56px]'
                              : index === 4
                              ? 'md:pt-[90px]'
                              : ''
                          }
                        `}
                      >
                        <span className="inline-block [transform:skewX(-10deg)]">
                          {section.title}
                        </span>
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* SHOW DETAIL SECTION if a section is selected */}
          {selectedSection && (
            <div className="mt-10 text-center">
              {/* Top image */}
              <div className="relative w-full h-[654px] mb-[-124px] z-10 overflow-hidden">
                <Image
                  src={selectedSection.img}
                  alt={selectedSection.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Detail card */}
              <div
                className="max-w-[52rem] mx-auto px-6 py-9 text-white relative z-20"
                style={{ backgroundColor: selectedSection.textColor }}
              >
                <h3
                  className={`
                    text-center italic font-cardo font-normal
                    text-[32px] md:text-[40px] lg:text-[52px]
                    ${selectedIndex === 3 ? 'text-black' : 'text-white'}
                  `}
                >
                  {selectedSection.title}
                </h3>

                <h4
                  className={`
                    text-lg sm:text-xl font-semibold mb-2
                    ${selectedIndex === 3 ? 'text-black' : 'text-white'}
                  `}
                >
                  {selectedSection.content.subtitle}
                </h4>

                <p
                  className={`
                    text-sm sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto
                    ${selectedIndex === 3 ? 'text-black' : 'text-white'}
                  `}
                >
                  {selectedSection.content.description}
                </p>


                <div className="flex justify-center gap-4">
                  <Link
                    href={selectedSection.link}
                    className={`
                      px-6 py-2 rounded-full font-semibold text-sm hover:scale-105 transition
                      ${selectedIndex === 3 ? 'bg-black text-white' : 'bg-white text-black'}
                    `}
                  >
                    DISCOVER MORE
                  </Link>

                  <button
                    onClick={() => setSelectedSection(null)}
                    className={`
                      px-6 py-2 border rounded-full font-semibold text-sm transition
                      ${selectedIndex === 3 ? 'border-black text-black hover:bg-black hover:text-white' : 'border-white text-white hover:bg-white hover:text-black'}
                    `}
                  >
                    BACK
                  </button>

                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default FoundationSection;
