'use client';

import Image from 'next/image';

import kgk from '@/assets/images/kgk.png';
import intersect from '@/assets/images/intersect.png';
import devangi from '@/assets/images/devangi.png';

export default function CollaborationSection() {
  return (
    <section className="py-8 lg:py-16 bg-white">
        <div className="container">
            <div className="px-0 lg:px-[50px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Block */}
                    <div className="max-w-md">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal mb-4">
                            Collaboration That <br /> Drives Innovation
                        </h2>
                        <p className="text-base text-gray-700">
                            <strong>KGK Diamatrix</strong> is a joint initiative between the globally integrated <strong>KGK Group</strong> and innovation-led <strong>Devangi Gems</strong>. Together, we combine deep industry expertise with state-of-the-art technology to unlock the full potential of diamond materials.
                        </p>
                    </div>

                    {/* Logos Block */}
                    <div className="flex items-center justify-center gap-6 lg:gap-12 flex-nowrap">
                        <Image
                            src={kgk}
                            alt="KGK Logo"
                            className="object-contain w-[80px] md:w-[154px]"
                        />
                        <Image
                            src={intersect}
                            alt="intersect"
                            className="object-contain w-[80px] md:w-[70px]"
                        />
                        <Image
                            src={devangi}
                            alt="Devangi"
                            className="object-contain w-[80px] md:w-[200px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
