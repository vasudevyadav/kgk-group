'use client';

import Image from 'next/image';
import cert1 from '@/assets/images/certification-1.jpg';
import cert2 from '@/assets/images/certification-2.jpg';

export default function CertificationBanner() {
  return (
    <section className="py-10 bg-gray-50 text-center">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-4">
          Our Certifications
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          We are proud to be <strong>BPP Compliant</strong> and certified by the <strong>Responsible Jewellery Council</strong>.
        </p>

        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row justify-center items-center gap-6">
          <div className="w-full h-[380px]">
            <Image
              src={cert1}
              alt="BPP Compliance Slide"
              className="object-contain w-full h-full rounded-xl "
            />
          </div>
          <div className="w-full h-[380px]">
            <Image
              src={cert2}
              alt="RJC Certification Slide"
              className="object-contain w-full h-full rounded-xl "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
