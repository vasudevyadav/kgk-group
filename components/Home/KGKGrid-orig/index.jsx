import Image from "next/image";

import s1 from "@/assets/images/life-at-kgk/slide1/1.jpg";
import s2 from "@/assets/images/life-at-kgk/slide1/2.jpg";
import s3 from "@/assets/images/life-at-kgk/slide1/3.jpg";
import s4 from "@/assets/images/life-at-kgk/slide1/4.jpg";
import s5 from "@/assets/images/life-at-kgk/slide1/5.jpg";
import s6 from "@/assets/images/life-at-kgk/slide1/6.jpg";
import logo from "@/assets/images/kgk-logo-dark.webp";
import text from "@/assets/images/life-at-kgk/slide1/text.png";

import m2 from "@/assets/images/m2.webp";

export default function KGKFiveGrid() {
  return (
    <>
        <div className="hidden md:block relative">
            <div className="grid grid-cols-5 min-h-[88vh] mx-auto h-[500px]">
            
                {/* 1️⃣ Grid 1 - s1 full height */}
                <div className="relative h-full">
                    <Image src={s1} alt="s1" fill className="object-cover" />
                </div>

                {/* 2️⃣ Grid 2 - s2 + logo */}
                <div className="flex flex-col">
                    <div className="relative h-[60%]">
                        <Image src={s2} alt="s2" fill className="object-cover" />
                    </div>
                    <div className="bg-white flex items-center justify-center h-[40%]">
                        <Image src={logo} alt="logo" width={123} height={153} />
                    </div>
                </div>

                {/* 3️⃣ Grid 3 - s3 full height */}
                <div className="relative h-full">
                    <Image src={s3} alt="s3" fill className="object-cover" />
                </div>

                {/* 4️⃣ Grid 4 - s4 + text + s5 */}
                <div className="flex flex-col">
                    <div className="relative h-[33.33%]">
                        <Image src={s4} alt="s4" fill className="object-cover" />
                    </div>
                    <div className="bg-primary text-white flex items-center justify-center h-[33.33%] text-center ">
                       <div className="text-xl sm:text-2xl md:text-2xl lg:text-3xl">Life at KGK</div>
                    </div>
                    <div className="relative h-[33.33%]">
                        <Image src={s5} alt="s5" fill className="object-cover" />
                    </div>
                </div>

                {/* 5️⃣ Grid 5 - s6 full height */}
                <div className="relative h-full">
                    <Image src={s6} alt="s6" fill className="object-cover" />
                </div>
            </div>
        </div>

        <div className="block md:hidden relative">
            <div className="grid grid-cols-3 min-h-[420px] mx-auto h-[74vh] relative">
                
                {/* Column 1 */}
                <div className="flex flex-col relative z-10">
                <div className="relative h-[37%]">
                    <Image src={s2} alt="s2" fill className="object-cover" />
                </div>
                <div className="bg-white flex items-center justify-center h-[29%]">
                    <Image src={logo} alt="logo" width={84} height={100} />
                </div>

                {/* s5 wider and overlaps column 2 */}
                <div className="relative h-[34%] -mr-6 z-20">
                    <div className="absolute inset-0 w-[120%]">
                    <Image src={s5} alt="s5" fill className="object-cover" />
                    </div>
                </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col relative z-0">
                <div className="relative h-[66%]">
                    <Image src={s3} alt="s3" fill className="object-cover" />
                </div>
                {/* Shrink s1 so s5 doesn’t get blocked */}
                <div className="relative h-[34%] px-3">
                    <Image src={s1} alt="s1" fill className="object-cover rounded-md" />
                </div>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col">
                <div className="relative h-[22.33%]">
                    <Image src={s4} alt="s4" fill className="object-cover" />
                </div>
                <div className="bg-primary text-white flex items-center justify-center h-[22.33%] text-center">
                    <div className="text-xl sm:text-2xl md:text-2xl lg:text-3xl">Life at KGK</div>
                </div>
                <div className="relative h-[55.34%]">
                    <Image src={s6} alt="s6" fill className="object-cover" />
                </div>
                </div>

            </div>
            </div>

    </>
  );
}
