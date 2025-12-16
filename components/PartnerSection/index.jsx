'use client';
import Link from 'next/link';
import Image from 'next/image';

import diamondPartner from '@/assets/images/diamond-partner.png';

export default function PartnerSection() {
  return (
    <section className="bg-[#8b7359] text-white py-12 md:pt-12 md:pb-0">
        <div className="container">
            <div className="px-0 lg:px-[50px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Diamond Image */}
                    <div className="flex justify-center">
                    <Image
                        src={diamondPartner}
                        alt="Diamond on pedestal"
                        width={342}
                        height={307}
                        className="object-contain"
                        priority
                    />
                    </div>

                    {/* Text Content */}
                    <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal mb-4">
                        Connect With Us
                    </h2>
                    <p className="text-base lg:text-lg text-white/90 leading-relaxed mb-4">
                        Whether you're developing breakthrough technologies or seeking materials that elevate performance,
                        <strong className="font-semibold"> KGK Diamatrix </strong>
                        is your partner in engineered diamond solutions.
                        <br className="hidden md:block" />
                        <br />
                        Let’s shape the future—together.
                    </p>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block text-xs font-medium tracking-wide uppercase px-4 py-2.5 rounded-full transition bg-white text-black hover:bg-gray-100`}
                    >
                        VISIT KGK DIAMATRIX
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
