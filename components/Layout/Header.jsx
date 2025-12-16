"use client";

import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import SearchModal from '@/components/SearchModal';
const LanguageToggle = dynamic(() => import('@/components/LanguageToggle'), {
  ssr: false,
});

import logo from "@/assets/images/kgk-logo.webp";
import search from "@/assets/images/search.webp";

export default function Header() {
  const pathname = usePathname();

  const [hasScrolled, setHasScrolled] = useState(false);

  const [isSearchOpen, setSearchOpen] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null)

 const [openMenu, setOpenMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);

  // Adjust based on your blog detail route
  const isBlogDetailPage = ["/blogs/", "/events-and-media/"].some((path) =>
    pathname.startsWith(path)
  );
  const businessMenu = [
    {
      label: "Gems And Jewellery",
      children: [
        { label: "Gemstones", href: "/our-business/gemstones" },
        { label: "Mining", href: "/our-business/mining" },
        { label: "Diamond", href: "/our-business/diamonds" },
        { label: "Jewellery", href: "/our-business/jewellery" },
      ],
    },
    {
      label: "Real Estate",
      children: [
        { label: "KGK Realty", href: "/our-business/real-estate" },
      ],
    },
    {
      label: "Natural Stone Mining",
      children: [
        { label: "KGK Stones", href: "/our-business/stones" },
      ],
    },
    {
      label: "Hospitality",
      children: [
        { label: "Meraaki Kitchen", href: "/our-business/hospitality" },
      ],
    },
    {
      label: "Technology & Innovations",
      children: [
        { label: "KGK Diamatrix", href: "/diamatrics" },
      ],
    },
  ];

  const mobileMenu = [
    {
      label: "Our Business",
      children: [
        {
          label: "Gems And Jewellery",
          children: [
            { label: "Gemstones", href: "/our-business/gemstones" },
            { label: "Mining", href: "/our-business/mining" },
            { label: "Diamond", href: "/our-business/diamonds" },
            { label: "Jewellery", href: "/our-business/jewellery" },
          ],
        },
        {
          label: "Real Estate",
          children: [
            { label: "KGK Realty", href: "/our-business/real-estate" },
          ],
        },
        {
          label: "Marble Mining",
          children: [
            { label: "KGK Stones", href: "/our-business/stones" },
          ],
        },
        {
          label: "Hospitality",
          children: [
            { label: "Meraaki Kitchen", href: "/our-business/hospitality" },
          ],
        },
        {
          label: "Technology & Innovations",
          children: [
            { label: "KGK Diamatrix", href: "/diamatrics" },
          ],
        },
      ],
    },
  ];

  
  const isBusinessActive = () =>
    [
      "/our-business/gemstones",
      "/our-business/real-estate",
      "/our-business/stones",
      "/our-business/hospitality",
      "/diamatrics"
    ].some((path) => pathname.startsWith(path));

  const headerClasses = isBlogDetailPage
    ? "relative bg-white text-black mb-4"
    : "absolute bg-transparent text-white";

  const logoStyle = !hasScrolled && isBlogDetailPage ? "invert" : "";
  const searchIconStyle = !hasScrolled && isBlogDetailPage ? "invert" : "";
  const textColor = !hasScrolled && isBlogDetailPage ? "text-black" : "text-white";


  const linkClass = (href) => {
    const isActive = pathname === href;

    return `relative pb-1 transition duration-300 border-b ${
      isActive
        ? isBlogDetailPage
          ? "border-black"
          : "border-white"
        : "border-transparent hover:border-white"
    }`;
  };


  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <header
      className={clsx(
        "w-full top-0 left-0 z-[30] transition-all duration-300 ",
        !hasScrolled && isBlogDetailPage ? "relative" : "",
        hasScrolled ? "fixed animate-slide-in-down" : "absolute",
        hasScrolled
          ? "bg-black/80 text-white shadow-md backdrop-blur-lg"
          : "bg-transparent text-white"
      )}
    >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/"
            className={clsx(
              "pl-2 xl:pl-[40px] ",
              hasScrolled ? "py-1.5" : "pt-[22px] pb-1",
            )}
          >
            <Image
              src={logo}
              alt="KGK Group"
              width={120}
              height={40}
              className={clsx(
                "transition-all duration-300 object-contain object-left xl:object-center",
                hasScrolled ? "h-10 xl:h-14" : "h-[68px] xl:h-[100px]",
                logoStyle
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className={`hidden xl:flex lg:space-x-14 items-center font-light xl:text-sm uppercase tracking-widest ${textColor}`}
          >
            <Link href="/" className={linkClass("/")}>Home</Link>
            <Link href="/about-us" className={linkClass("/about-us")}>About Us</Link>

            {/* Businesses Submenu */}
            <div
      className="relative"
      onMouseEnter={() => setOpenMenu(true)}
      onMouseLeave={() => {
        setOpenMenu(false);
        setOpenSubMenu(null);
      }}
    >
      {/* Main button */}
      <button
        className={`flex items-center gap-1 uppercase border-b ${
          isBusinessActive()
            ? isBlogDetailPage
              ? "border-black"
              : "border-white"
            : "border-transparent"
        }`}
      >
        Businesses <ChevronDown size={16} />
      </button>

      {/* First level dropdown */}
      {openMenu && (
        <div className="absolute top-full left-0 bg-white text-black shadow-md min-w-[220px] z-20">
          <ul className="text-xs divide-y divide-gray-200">
            {businessMenu.map((item, idx) => (
              <li
                key={idx}
                className="relative hover:bg-gray-100"
                onMouseEnter={() => setOpenSubMenu(idx)}
                onMouseLeave={() => setOpenSubMenu(null)}
              >
                {/* Submenu label */}
                <span className="block border-b-2 border-mid-gray last:border-b-0 cursor-pointer">
                  <span className="flex items-center gap-2 py-2 px-2">
                    <span className="w-2 h-2 rounded-full border-2 border-primary inline-block shrink-0"></span>
                    {item.label}
                  </span>
                </span>

                {/* Child submenu */}
                {item.children && openSubMenu === idx && (
                  <div className="absolute top-0 left-full bg-white text-black shadow-md min-w-[200px] z-30">
                    <ul className="text-xs divide-y divide-gray-100">
                      {item.children.map((child, childIdx) => (
                        <li key={childIdx}>
                          <Link
                            href={child.href}
                            onClick={() => {
                              setOpenMenu(false);
                              setOpenSubMenu(null);
                            }}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>



            <Link href="/kgk-foundation" className={linkClass("/kgk-foundation")}>Foundation</Link>
            <Link href="/careers" className={linkClass("/careers")}>Career</Link>
            <Link href="/contact-us" className={linkClass("/contact-us")}>Contact Us</Link>

            <div className="flex items-center gap-x-6">
              <Image
                src={search}
                alt="Search Icon"
                width={24}
                height={24}
                className={`cursor-pointer w-[24px] h-[24px] ${searchIconStyle}`}
                onClick={() => setSearchOpen(true)}
              />
              <LanguageToggle />
            </div>
          </nav>

          {/* Hamburger Button */}
          <button onClick={toggleDrawer} className={`${textColor} xl:hidden`}>
            {drawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black z-50 transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 space-y-4 pt-12 relative text-white">
          <button
            onClick={() => {
              setDrawerOpen(false);
              setSubmenuOpen(false);
            }}
            className="absolute top-4 right-4 text-gray-100"
          >
            <X size={24} />
          </button>

          <Link href="/" onClick={() => {
            setDrawerOpen(false);
            setSubmenuOpen(false);
          }} className="block">Home</Link>

          <Link href="/about-us" onClick={() => {
            setDrawerOpen(false);
            setSubmenuOpen(false);
          }} className="block">About Us</Link>

          {mobileMenu.map((menuItem, i) => (
  <div key={i}>
    <button
      onClick={() => setActiveIndex(activeIndex === i ? null : i)}
      className="flex justify-between items-center w-full py-2"
    >
      <span>{menuItem.label}</span>
      <ChevronDown
        className={`w-4 h-4 transform transition-transform ${
          activeIndex === i ? "rotate-180" : ""
        }`}
      />
    </button>

    {activeIndex === i && (
      <div className="ml-4 space-y-2">
        {menuItem.children.map((subItem, j) => (
          <div key={j}>
            <button
              onClick={() =>
                setActiveSubIndex(activeSubIndex === j ? null : j)
              }
              className="flex justify-between items-center w-full py-2 text-sm"
            >
              <span>{subItem.label}</span>
              <ChevronDown
                className={`w-3 h-3 transform transition-transform ${
                  activeSubIndex === j ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeSubIndex === j && (
              <div className="ml-4 space-y-1">
                {subItem.children.map((link, k) => (
                  <a
                    key={k}
                    href={link.href}
                    className="block text-xs text-white hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
))}




          <Link href="/kgk-foundation" onClick={() => {
            setDrawerOpen(false);
            setSubmenuOpen(false);
          }} className="block">Foundation</Link>

          <Link href="/careers" onClick={() => {
            setDrawerOpen(false);
            setSubmenuOpen(false);
          }} className="block">Career</Link>

          <Link href="/contact-us" onClick={() => {
            setDrawerOpen(false);
            setSubmenuOpen(false);
          }} className="block">Contact Us</Link>

          <div className="flex items-center justify-between pt-4 border-t mt-4">
            <Image
              src={search}
              alt="Search Icon"
              width={20}
              height={20}
              className="cursor-pointer"
              onClick={() => setSearchOpen(true)}
            />
            <button className="bg-darkGray text-white w-10 h-10 text-xs flex items-center justify-center">
              EN
            </button>
          </div>
        </div>
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
