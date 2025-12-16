"use client";
import { useEffect } from "react";

import dynamic from 'next/dynamic';
const LanguageToggleButton = dynamic(() => import('@/components/LanguageToggleButton'), {
  ssr: false,
});
import Link from "next/link";
import Image from "next/image";
import { ChevronUpCircle } from "lucide-react";

// Social icon images
import FacebookIcon from "@/assets/images/facebook.webp";
import TwitterIcon from "@/assets/images/twitter.webp";
import InstagramIcon from "@/assets/images/instagram.webp";
import LinkedinIcon from "@/assets/images/linkedin.webp";
import YoutubeIcon from "@/assets/images/youtube.webp";


export default function Footer() {

  const menuItems = [
    { label: "ABOUT", href: "/about-us" },
    { label: "NEWS", href: "/events-and-media" },
    { label: "FOUNDATION", href: "/kgk-foundation" },
    { label: "ESG", href: "/esg" },
    { label: "CAREERS", href: "/careers" },
    { label: "CONTACT", href: "/contact-us" },
    { label: "BLOGS", href: "/blogs" },
  ];
  
  useEffect(() => {
    const btn = document.getElementById("goTopBtn");
    btn?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, []);

  /*const socialIcons = [
    { src: FacebookIcon, alt: "Facebook", link: "https://www.facebook.com/KGKgroup.officialpage/" },
    { src: TwitterIcon, alt: "Twitter", link: "https://x.com/kgk_group" },
    { src: InstagramIcon, alt: "Instagram", link: "https://www.instagram.com/kgk_group" },
    { src: LinkedinIcon, alt: "LinkedIn", link: "https://www.linkedin.com/company/kgk-group?originalSubdomain=in" },
    { src: YoutubeIcon, alt: "YouTube", link: "https://www.youtube.com/channel/UCnkP8zsk7XYZDLC3O-rvZcQ" },
  ];*/
  

const socialIcons = [
  {
    icon: (
      <svg fill="white" width={20} height={20} viewBox="0 0 1920 1920">
          <path d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z" />
      </svg>
    ),
    alt: "Facebook",
    link: "https://www.facebook.com/KGKgroup.officialpage/",
  },
  {
    icon: (
      <svg width={16} height={16} fill="white" viewBox="0 0 16 16">
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
      </svg>
    ),
    alt: "X",
    link: "https://x.com/kgk_group",
  },
   {
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.6361 7H17.6477" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    alt: "Instagram",
    link: "https://www.instagram.com/kgk_group",
  },
  {
    icon: (
      <svg fill="white" width={18} height={18} viewBox="0 0 45.959 45.959">
      <g>
        <g>
          <path d="M5.392,0.492C2.268,0.492,0,2.647,0,5.614c0,2.966,2.223,5.119,5.284,5.119c1.588,0,2.956-0.515,3.957-1.489
            c0.96-0.935,1.489-2.224,1.488-3.653C10.659,2.589,8.464,0.492,5.392,0.492z M7.847,7.811C7.227,8.414,6.34,8.733,5.284,8.733
            C3.351,8.733,2,7.451,2,5.614c0-1.867,1.363-3.122,3.392-3.122c1.983,0,3.293,1.235,3.338,3.123
            C8.729,6.477,8.416,7.256,7.847,7.811z"/>
          <path d="M0.959,45.467h8.988V12.422H0.959V45.467z M2.959,14.422h4.988v29.044H2.959V14.422z"/>
          <path d="M33.648,12.422c-4.168,0-6.72,1.439-8.198,2.792l-0.281-2.792H15v33.044h9.959V28.099c0-0.748,0.303-2.301,0.493-2.711
            c1.203-2.591,2.826-2.591,5.284-2.591c2.831,0,5.223,2.655,5.223,5.797v16.874h10v-18.67
            C45.959,16.92,39.577,12.422,33.648,12.422z M43.959,43.467h-6V28.593c0-4.227-3.308-7.797-7.223-7.797
            c-2.512,0-5.358,0-7.099,3.75c-0.359,0.775-0.679,2.632-0.679,3.553v15.368H17V14.422h6.36l0.408,4.044h1.639l0.293-0.473
            c0.667-1.074,2.776-3.572,7.948-3.572c4.966,0,10.311,3.872,10.311,12.374V43.467z"/>
        </g>
      </g>
      </svg>
    ),
    alt: "LinkedIn",
    link: "https://www.linkedin.com/company/kgk-group?originalSubdomain=in",
  },
  {
    icon: (
      <svg fill="white" width={20} height={20} viewBox="0 -4 32 32">
        <path d="M30.722,20.579 C30.137,21.894 28.628,23.085 27.211,23.348 C27.066,23.375 23.603,24.000 16.010,24.000 L15.990,24.000 C8.398,24.000 4.932,23.375 4.788,23.349 C3.371,23.085 1.861,21.894 1.275,20.578 C1.223,20.461 0.001,17.647 0.001,12.000 C0.001,6.353 1.223,3.538 1.275,3.421 C1.861,2.105 3.371,0.915 4.788,0.652 C4.932,0.625 8.398,-0.000 15.990,-0.000 C23.603,-0.000 27.066,0.625 27.210,0.651 C28.628,0.915 30.137,2.105 30.723,3.420 C30.775,3.538 32.000,6.353 32.000,12.000 C32.000,17.647 30.775,20.461 30.722,20.579 ZM28.893,4.230 C28.581,3.529 27.603,2.759 26.845,2.618 C26.813,2.612 23.386,2.000 16.010,2.000 C8.615,2.000 5.185,2.612 5.152,2.618 C4.394,2.759 3.417,3.529 3.104,4.234 C3.094,4.255 2.002,6.829 2.002,12.000 C2.002,17.170 3.094,19.744 3.106,19.770 C3.417,20.471 4.394,21.241 5.153,21.382 C5.185,21.388 8.615,22.000 15.990,22.000 L16.010,22.000 C23.386,22.000 26.813,21.388 26.846,21.382 C27.604,21.241 28.581,20.471 28.894,19.766 C28.904,19.744 29.998,17.170 29.998,12.000 C29.998,6.830 28.904,4.255 28.893,4.230 ZM13.541,17.846 C13.379,17.949 13.193,18.000 13.008,18.000 C12.842,18.000 12.676,17.959 12.525,17.875 C12.206,17.699 12.008,17.364 12.008,17.000 L12.008,7.000 C12.008,6.637 12.204,6.303 12.521,6.127 C12.838,5.950 13.227,5.958 13.534,6.149 L21.553,11.105 C21.846,11.286 22.026,11.606 22.027,11.951 C22.028,12.296 21.852,12.618 21.560,12.801 L13.541,17.846 ZM14.009,8.794 L14.009,15.189 L19.137,11.963 L14.009,8.794 Z"/>
    </svg>
    ),
    alt: "YouTube",
    link: "https://www.youtube.com/channel/UCnkP8zsk7XYZDLC3O-rvZcQ",
  },
];

  return (
    <footer className="relative bg-deep-blue text-white text-sm px-4 md:px-0 pt-11 pb-6">
      {/* Go to Top Button */}
      <button
        id="goTopBtn"
        className="absolute -top-3 right-6 bg-primary hover:bg-primary transition-colors p-2 z-50"
        aria-label="Go to top"
      >
        <ChevronUpCircle className="w-6 h-6" strokeWidth={2} />
      </button>

      <div className="max-w-6xl mx-auto text-center">
        {/* Top Navigation Links */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-11">

          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-cardo text-[12.5px] tracking-widest border border-white px-3.5 py-1.5 hover:bg-white hover:text-black transition-colors"
            >
              {item.label}
            </Link>
          ))}
          {/* <LanguageToggleButton /> */}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-3 mb-5">
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[37px] h-[37px] rounded-full border border-white flex items-center justify-center hover:scale-110 transition-transform"
              aria-label={icon.alt}
            >
              {icon.icon}
            </a>
          ))}
        </div>



        {/* Copyright */}
        <p className="text-[13px] tracking-widest text-white">
          Copyright © {new Date().getFullYear()} by KGK Group
        </p>
      </div>
    </footer>
  );
}
