import Link from 'next/link';
import Image from "next/image";
import thumb1 from "@/assets/images/u-event.png";

export default function UpcomingEvents() {
  return (
    <div className=" flex items-center justify-center bg-white py-10 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-[42%_58%] gap-y-4 xl:gap-y-0 items-start">
          {/* Left: Event Image */}
          <div className="relative pt-[48px]">
            <div className="absolute -left-14 top-0 w-2/3 h-[124px] bg-gray-100 rounded-tr-lg rounded-br-lg z-0"></div>

            <div className="relative w-full h-[350px] md:h-[550px] xl:h-[556px] rounded-xl overflow-hidden">
              <Image
                src={thumb1}
                alt="Event Group"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Event Details */}
          <div className=" xl:pl-24 xl:pr-12 pt-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-[42px] font-normal text-heading mb-7">
                Upcoming Events
            </h2>
             <p className="max-w-2xl md:text-lg xl:text-xl mb-5  leading-relaxed">
              Showcasing at global jewellery exhibitions, connecting with trade professionals and consumers alike.
            </p>
            <div className="flex items-center">
              <div className="flex-grow h-0.5 bg-light-gray mr-6"></div>
              <Link href="/events-and-media" className="bg-primary text-white text-sm rounded-full px-5 py-2">
                SEE ALL
              </Link>
            </div>
              
           
           
            <div className="mt-14">
              <h3 className="font-cardo text-xl xl:text-2xl font-normal">
                Celebrating Years of Commitment at <span></span>
              </h3>
              <p className="font-cardo text-xl xl:text-2xl font-normal italic mt-1">
                “Long Service Appreciation Event”, 
              </p>
              <p className="font-cardo text-xl xl:text-2xl font-normal mt-1 mb-6 ">KGK Namibia</p>

              {/* <Link href="/events-and-media" className="border border-gray-700 text-sm font-normal text-black tracking-widest uppercase px-6 py-2 rounded-full hover:bg-gray-100 transition">
                DISCOVER MORE
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
