import Image from 'next/image';
import newsletterImg from '@/assets/images/scxzx.jpg';

export default function Newsletter({
  img = newsletterImg,
  showHeading = 'Stay in touch',
  showSubtext = true,
}) {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Left side - Subscription Form */}
      <div className="w-full md:w-1/2 bg-primary flex flex-col justify-center px-5 md:px-20 py-8 lg:py-20 text-white">
        {showHeading && (
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal mb-4">
            {showHeading}
          </h2>
        )}

        {showSubtext && (
          <p className="text-xl font-light mb-8">
            Subscribe to our newsletter!
          </p>
        )}

        <div className="flex flex-col sm:flex-row w-full max-w-md sm:h-[57px] mt-2">
          <input
            type="email"
            placeholder="Enter your E-mail"
            className="w-full sm:flex-1 px-4 text-white border border-mid-gray sm:border-r-0 h-[57px] focus:outline-none placeholder:text-white placeholder:text-[12px] placeholder:leading-[18px] placeholder:font-light"
          />
          <button className="w-full sm:w-auto h-[57px] px-6 border border-mid-gray bg-mid-gray hover:bg-mid-gray text-[18px] leading-[27px] text-primary uppercase font-normal mt-2 sm:mt-0">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Right side - Image */}
      {img && (
        <div className="hidden md:block w-full md:w-1/2 h-[360px]">
          <Image
            src={img}
            alt="Newsletter"
            className="object-cover w-full h-full"
          />
        </div>
      )}
    </div>
  );
}
