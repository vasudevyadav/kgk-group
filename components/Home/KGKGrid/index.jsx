'use client';

import Image from "next/image";

export default function KGKGrid({ 
    images, 
    logo, 
    title = "Life at KGK", 
    subtitle,
    titleFont = "font-body",
    isActive = false,
}) {
  if (!images || images.length < 6) {
    return <div>Need at least 6 images</div>;
  }

  // Define animation directions for each image
  // You can customize these directions as needed
  const animationDirections = ["up", "left", "down", "right", "up", "left"];

  const getAnimateClass = (direction) => {
    const base = "transition-all duration-700 ease-out";
    const visible = "opacity-100 translate-x-0 translate-y-0";
    const hidden = {
      up: "opacity-0 translate-y-12",
      down: "opacity-0 -translate-y-12",
      left: "opacity-0 -translate-x-12",
      right: "opacity-0 translate-x-12",
    };
    return `${base} ${isActive ? visible : hidden[direction]}`;
  };

  return (
    <div className="relative">
      {/* Desktop */}
      <div className="hidden lg:block relative">
        <div className="grid grid-cols-5  mx-auto xl:min-h-[88vh] h-[500px]">
          <div className={`${getAnimateClass(animationDirections[0])} relative h-full`}>
            <Image src={images[0]} alt="img1" fill className="object-cover" />
          </div>

          <div className="flex flex-col">
            <div className={`${getAnimateClass(animationDirections[1])} relative h-[60%]`}>
              <Image src={images[1]} alt="img2" fill className="object-cover" />
            </div>
            <div className="bg-white flex items-center justify-center h-[40%]">
              <Image src={logo} alt="logo" width={123} height={153} />
            </div>
          </div>

          <div className={`${getAnimateClass(animationDirections[2])} relative h-full`}>
            <Image src={images[2]} alt="img3" fill className="object-cover" />
          </div>

          <div className="flex flex-col">
            <div className={`${getAnimateClass(animationDirections[3])} relative h-[33.33%]`}>
              <Image src={images[3]} alt="img4" fill className="object-cover" />
            </div>
            <div className="bg-primary text-white flex flex-col items-center justify-center h-[33.33%] text-center px-12">
              <div className={`text-xl sm:text-2xl md:text-2xl lg:text-3xl ${titleFont}`}>{title}</div>
              {subtitle && <div className="text-sm md:text-base">{subtitle}</div>}
            </div>
            <div className={`${getAnimateClass(animationDirections[4])} relative h-[33.33%]`}>
              <Image src={images[4]} alt="img5" fill className="object-cover" />
            </div>
          </div>

          <div className={`${getAnimateClass(animationDirections[5])} relative h-full`}>
            <Image src={images[5]} alt="img6" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block lg:hidden relative">
        <div className="grid grid-cols-3 min-h-[320px] mx-auto h-[55vh] relative">
          <div className={`flex flex-col relative z-10 ${getAnimateClass(animationDirections[1])}`}>
            <div className="relative h-[37%]">
              <Image src={images[1]} alt="img2" fill unoptimized className="object-cover" />
            </div>
            <div className="bg-white flex items-center justify-center h-[29%] p-3">
              <Image src={logo} alt="logo" width={84} height={100} className="w-full h-full object-contain" />
            </div>
            <div className={`relative h-[34%] -mr-6 z-20 ${getAnimateClass(animationDirections[4])}`}>
              <div className="absolute inset-0 w-[120%]">
                <Image src={images[4]} alt="img5" fill unoptimized className="object-cover" />
              </div>
            </div>
          </div>

          <div className={`flex flex-col relative z-0 ${getAnimateClass(animationDirections[2])}`}>
            <div className="relative h-[66%]">
              <Image src={images[2]} alt="img3" fill unoptimized className="object-cover" />
            </div>
            <div className="relative h-[34%] px-3">
              <Image src={images[0]} alt="img1" fill unoptimized className="object-cover rounded-md" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className={`relative h-[22.33%] ${getAnimateClass(animationDirections[3])}`}>
              <Image src={images[3]} alt="img4" fill unoptimized className="object-cover" />
            </div>
            <div className="bg-primary text-white flex flex-col items-center justify-center h-[22.33%] text-center px-2">
              <div className="text-sm md:text-2xl lg:text-3xl">{title}</div>
              {subtitle && <div className="text-[11px] md:text-base">{subtitle}</div>}
            </div>
            <div className={`relative h-[55.34%] ${getAnimateClass(animationDirections[5])}`}>
              <Image src={images[5]} alt="img6" fill unoptimized className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
