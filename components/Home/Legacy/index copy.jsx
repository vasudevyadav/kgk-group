'use client';

import React, { useState } from 'react';
import HoverButton from "@/components/HoverButton";
import YoutubeVideoModal from '@/components/YoutubeVideoModal';

const Legacy = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white  py-4">
        <div className="container flex flex-col lg:flex-row items-center gap-y-4 lg:gap-y-0">
          <div className="relative w-full lg:w-1/2">
            {/* Background Box */}
            <div className="absolute -left-14 bottom-0 w-2/3 h-[124px] bg-gray-100 rounded-tr-lg rounded-br-lg z-0"></div>

            {/* Main Image */}
            <div className="relative pb-[76px] pt-12">
                <div className="relative w-full max-h-[600px] min-h-[400px] h-[70vh] rounded-lg overflow-hidden flex items-center justify-center cursor-pointer group" onClick={() => setModalOpen(true)}>
                  <div className="absolute inset-0 legacy-bg bg-cover bg-left-center grayscale"></div>
                    <div className="absolute overflow-hidden w-[55%] h-[68%] hidden group-hover:block transition-all duration-300">
                      <video
                        width="500"
                        height="500"
                        loop
                        autoPlay
                        muted
                        className="absolute w-full h-full object-cover"
                      >
                        <source src="/videos/v1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <HoverButton type="white" groupHover>WATCH OUR STORY</HoverButton>
                    </div>
                  </div>
              </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-24 lg:pr-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-14">Legacy: From Vision to Global Leadership</h2>
            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <p className="mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <button className="border border-gray-700 text-sm font-normal text-black tracking-widest uppercase px-6 py-2 rounded-full hover:bg-gray-100 transition">
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <YoutubeVideoModal
          youtubeId="xNCqCOu5Q6U"
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
};

export default Legacy;
