'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function VisitSection({ data }) {
  const { heading, description, slug, images } = data || {};

  return (
    <div className="relative py-16 lg:px-0 lg:pr-[100px] px-4 sm:px-6">
      {/* Connecting Lines only on large screens */}
      <div className="hidden lg:block absolute top-[13.5%] left-0 w-full h-px bg-gray-300 z-0"></div>
      <div className="hidden lg:block absolute top-[13.5%] left-[28%] h-[55%] w-px bg-gray-300 z-0"></div>

      {/* Flex Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-4">
        {/* Center Text Content */}
        <div className="w-full lg:w-[36.7%] text-center lg:text-left space-y-5 lg:pl-4 lg:pr-4 order-1 lg:order-2">
          <div className="relative z-10 mb-4 lg:mb-8 lg:ml-[-90px]">
            <span className="inline-block bg-primary text-white text-sm font-medium px-4 py-0.5 rounded-full">
              Feature
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-normal text-heading lg:pr-3">
            {heading?.length > 90 ? heading.slice(0, 90) + '...' : heading}
          </h2>
          <div className="lg:ml-[97px] lg:pl-6 px-2">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 lg:mb-11">
              {description?.length > 260 ? description.slice(0, 260) + '...' : description || ''}
            </p>
            <div className="text-center lg:text-left">
              <Link href={`/events-and-media/${slug || '#'}`}>
                <button className="cursor-pointer px-4 py-1.5 text-xs font-medium bg-primary uppercase text-white rounded-full">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Left Side Images */}
        <div className="space-y-8 w-full lg:w-[31.25%] order-2 lg:order-1">
          <div className="w-full max-w-[383px] h-[240px] sm:h-[260px] md:h-[280px] lg:w-[313px] lg:h-[272px] rounded-2xl  lg:rounded-r-2xl lg:rounded-l-none overflow-hidden mx-auto lg:ml-0">
            {images?.[0] && (
              <Image
                src={images[0]}
                alt="Feature Image 1"
                width={313}
                height={272}
                className="w-full h-full object-cover object-top"
                unoptimized
              />
            )}
          </div>
          <div className="w-full max-w-[383px] h-[240px] sm:h-[260px] md:h-[280px] lg:w-[232px] lg:h-[306px] rounded-2xl overflow-hidden mx-auto lg:ml-auto lg:mr-[-97px]">
            {images?.[1] && (
              <Image
                src={images[1]}
                alt="Feature Image 2"
                width={232}
                height={306}
                className="w-full h-full object-cover object-top"
                unoptimized
              />
            )}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full max-w-[383px] h-[240px] sm:h-[260px] md:h-[280px] lg:w-[32.05%] lg:h-[448px] rounded-xl overflow-hidden mx-auto order-3">
          {images?.[2] && (
            <Image
              src={images[2]}
              alt="Feature Image 3"
              width={383}
              height={448}
              className="w-full h-full object-cover object-left-top"
              unoptimized
            />
          )}
        </div>
      </div>
    </div>
  );
}
