'use client';

import Image from 'next/image';

import quantum from '@/assets/images/quantum.png';
import defense from '@/assets/images/defense.png';
import automotive from '@/assets/images/automotive.png';
import aiHardware from '@/assets/images/ai-hardware.png';
import medical from '@/assets/images/medical.png';
import luxury from '@/assets/images/luxury.png';

export default function ApplicationsSection() {
  return (
    <section className="relative bg-[#1A1A1A] bg-[url('/images/diamond-bg.jpg')] bg-no-repeat bg-cover bg-right-bottom lg:bg-center text-white py-8 md:pt-28 lg:pb-10 overflow-hidden ">
        <div className="container">
            <div className="px-0 lg:px-[50px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="max-w-md flex flex-col justify-end h-full md:pb-14">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-white mb-8">
                            Applications <br /> Across Industries
                        </h2>
                        <p className="text-lg italic font-medium mb-2">
                            From Labs to Launchpads—<br />
                            One Diamond, Endless Potential
                        </p>
                        <p className="text-base text-gray-300">
                            Our engineered diamond materials are transforming performance across:
                        </p>
                    </div>

                    {/* Right Columns */}
                    <div className="grid grid-cols-2 gap-x-8 md:gap-x-14 gap-y-10">
                        <ApplicationItem
                        icon={quantum}
                        title="Quantum Computing & Sensing"
                        />
                        <ApplicationItem
                        icon={aiHardware}
                        title="High-Speed Electronics & AI Hardware"
                        />
                        <ApplicationItem
                        icon={defense}
                        title="Aerospace & Defense Systems"
                        />
                        <ApplicationItem
                        icon={medical}
                        title="Medical Devices & Surgical Tools"
                        />
                        <ApplicationItem
                        icon={automotive}
                        title="EVs & Automotive Components"
                        />
                        <ApplicationItem
                        icon={luxury}
                        title="Luxury, Optics & Wearables"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

function ApplicationItem({ icon, title }) {
  return (
    <div className="md:max-w-52 flex flex-col items-start gap-4">
      <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 relative">
        <Image src={icon} alt={title} fill className="object-contain invert" />
      </div>
      <h4 className="text-md md:text-lg font-medium md:font-bold italic leading-snug">{title}</h4>
    </div>
  );
}
