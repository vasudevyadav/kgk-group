'use client';

import Link from 'next/link';
import { motion } from "framer-motion";

export default function HalfIntro({
  backgroundImage = "/images/stones-bg2.jpg",
  title = "Step Into the Realm of Realty",
  description = (
    <>
      <p>
        As a leader in natural stone sourcing and manufacturing, KGK Stones embodies a legacy of excellence and delivers unmatched quality in every creation. Bringing to everyone the Earth's most exquisite offerings, with every stone telling its own unique tale of origin and transformation.
      </p>
    </>
  ),
  buttonText = "VISIT KGK Stones",
  buttonHref = "#",
  buttonColor = "bg-white text-black hover:bg-gray-100",
  textColor = "text-white",
  headingCustomClass = "lg:pr-6",
  descriptionCustomClass = "lg:pr-[70px]",
  showButton = true,
  paddingLeftClass = "lg:pl-0",
}) {
  return (
    <div
      className={`relative z-10 bg-cover bg-no-repeat bg-right`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden md:block" />
        <div className={`text-white px-4 md:px-[50px] py-8 lg:py-16 flex items-center ${paddingLeftClass}`}>
          <div className="max-w-screen-xl">
            <motion.h2
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal mb-7 max-w-md ${headingCustomClass} ${textColor}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>
            <motion.div
              className={`text-sm lg:text-base leading-[25px] tracking-[0px] mb-6 ${descriptionCustomClass} ${textColor}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {description}
            </motion.div>
            {showButton && (
              <Link
                href={buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-3 inline-block text-xs font-medium tracking-wide uppercase px-4 py-2.5 rounded-full transition ${buttonColor}`}
              >
                {buttonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
