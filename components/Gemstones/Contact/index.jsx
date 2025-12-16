
import Image from 'next/image';

import contactBg from '@/assets/images/gemstones/layer-326.jpg';

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row w-full">

      <div className="w-full md:w-1/2 bg-primary flex flex-col justify-center px-5 md:px-20 py-20 text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal mb-8">Contact KGK<br />about Gemstones</h2>
       
        <div className="flex w-full max-w-md h-[57px]">
            <input
                type="email"
                placeholder="Enter your E-mail"
                className="flex-1 px-4 text-white border border-mid-gray border-r-0 h-full focus:outline-none placeholder:text-white placeholder:text-[12px] placeholder:leading-[18px] placeholder:font-light"
            />
            <button
                className="h-full px-6 border border-mid-gray bg-mid-gray hover:bg-mid-gray text-[18px] leading-[27px] text-primary uppercase font-normal"
            >
                Contact
            </button>
        </div>


      </div>

      {/* Right side - Image */}
      <div className="w-full md:w-1/2 h-[360px]">
        <Image
          src={contactBg}
          alt="Contact KGK about Gemstones"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
