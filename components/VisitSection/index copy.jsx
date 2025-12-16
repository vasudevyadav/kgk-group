'use client';

import Image from 'next/image';
import visit1 from '@/assets/images/visit1.jpg'; // w: 313, h: 259
import visit2 from '@/assets/images/visit2.jpg'; // w: 215, h: 289
import visit3 from '@/assets/images/visit3.jpg'; // w: 383, h: 448

export default function VisitSection() {
  return (
    <div className="relative py-16 lg:px-0 lg:pr-[100px] px-4 sm:px-6">
      {/* Connecting Lines only for lg+ */}
      <div className="hidden lg:block absolute top-[13.5%] left-0 w-full h-px bg-gray-300 z-0"></div>
      <div className="hidden lg:block absolute top-[13.5%] left-[28%] h-[55%] w-px bg-gray-300 z-0"></div>

      {/* Flex Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-4">
        {/* Center Content */}
        <div className="w-full lg:w-[36.7%] text-center lg:text-left space-y-5 lg:pl-4 lg:pr-8 order-1 lg:order-2">
          <div className="relative z-10 mb-4 lg:mb-8 lg:ml-[-90px]">
            <span className="inline-block bg-primary text-white text-sm font-medium px-4 py-0.5 rounded-full">
              Feature
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-normal text-heading">
            Vietnam delegation
            visit at Jaipur factory
            in Sitapura
          </h2>
          <div className="lg:ml-[97px] lg:pl-6 px-2">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 lg:mb-11">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="text-center lg:text-left">
              <button className="cursor-pointer px-4 py-1.5 text-xs font-medium bg-primary uppercase text-white rounded-full">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Left Images */}
        <div className="space-y-8 w-full lg:w-[31.25%] order-2 lg:order-1">
          <div className="max-w-[383px] w-full lg:w-[313px] h-[200px] sm:h-[250px] lg:h-[272px] rounded-r-xl overflow-hidden mx-auto lg:ml-0">
            <Image
              src={visit1}
              alt="Group"
              width={313}
              height={272}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="max-w-[383px] w-full lg:w-[232px] h-[250px] sm:h-[280px] lg:h-[306px] rounded-2xl overflow-hidden mx-auto lg:ml-auto lg:mr-[-97px]">
            <Image
              src={visit2}
              alt="Reviewing Stones"
              width={232}
              height={306}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[32.05%] max-w-[383px] h-[300px] sm:h-[350px] lg:h-[448px] rounded-xl overflow-hidden mx-auto order-3">
          <Image
            src={visit3}
            alt="Microscope"
            width={383}
            height={448}
            className="w-full h-full object-cover object-left-top"
          />
        </div>
      </div>
    </div>
  );
}
