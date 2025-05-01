"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UseSticky from "@/hooks/UseSticky";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo_white from "@/assets/img/Logo_white.png";

// Add device detection hook
const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsDesktop(width >= 1024);
    };

    // Initial check
    checkDevice();

    // Add event listener
    window.addEventListener("resize", checkDevice);

    // Cleanup
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return { isMobile, isTablet, isDesktop };
};

interface DataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menu?: {
    id: number;
    title: string;
    link: string;
  }[];
}

const menu_data: DataType[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "About",
    link: "/about",
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: "About",
        link: "/about",
      },
      {
        id: 2,
        title: "Team",
        link: "/team",
      },
      {
        id: 5,
        title: "Faq",
        link: "/faq",
      },
    ],
  },
  {
    id: 4,
    title: "Services",
    link: "/service",
    has_dropdown: false,
  },
  {
    id: 5,
    title: "Impact Stories",
    link: "/portfolio",
    has_dropdown: false,
  },
  {
    id: 7,
    title: "Membership",
    link: "/membership",
    has_dropdown: false,
  },
  {
    id: 8,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
];

const HeaderOne = () => {
  const { sticky } = UseSticky();
  const { isMobile, isTablet, isDesktop } = useDeviceDetection();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setLastScrollTop(scrollTop);
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <>
      <header
        className={`w-full z-50 transition-all duration-500 ${
          sticky ? "fixed top-0" : "absolute"
        } ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between ${
              isMobile ? "h-14" : isTablet ? "h-16" : "h-20"
            }`}
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="block transform hover:scale-105 transition-transform duration-300"
              >
                <Image
                  className={`w-auto ${
                    isMobile ? "h-8" : isTablet ? "h-10" : "h-12"
                  }`}
                  src={Logo_white}
                  alt="Operant Biomedical"
                  width={120}
                  height={48}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav
              className={`${
                isDesktop ? "flex" : "hidden"
              } items-center space-x-1 xl:space-x-4`}
            >
              {menu_data.map((item) => (
                <div key={item.id} className="relative group">
                  <Link
                    href={item.link}
                    className="text-white/90 hover:text-primary-300 font-medium transition-all duration-300 py-2 px-3 xl:px-4 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-300 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.title}
                  </Link>
                  {item.has_dropdown && item.sub_menu && (
                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="glass-dark backdrop-blur-md p-2 rounded-xl shadow-glass border border-white/10">
                        {item.sub_menu.map((subItem) => (
                          <Link
                            key={subItem.id}
                            href={subItem.link}
                            className="block py-2.5 px-4 text-white/90 hover:text-primary-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`${
                isDesktop ? "hidden" : "flex"
              } w-10 h-10 items-center justify-center text-white/90 hover:text-primary-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-black rounded-lg`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          isDesktop ? "hidden" : "block"
        } ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={toggleMenu}
        />
        <div
          className={`absolute top-0 right-0 ${
            isMobile ? "w-[280px]" : "w-[320px]"
          } h-full glass-dark backdrop-blur-md p-4 sm:p-6 transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <Link href="/" onClick={toggleMenu}>
              <Image
                src={Logo_white}
                alt="Operant Biomedical"
                width={100}
                height={30}
                className="w-auto h-8"
                priority
              />
            </Link>
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-1">
            {menu_data.map((item) => (
              <div key={item.id}>
                {item.has_dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className="w-full flex items-center justify-between py-3 px-4 text-white/90 hover:text-primary-300 hover:bg-white/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-black"
                    >
                      <span className="font-medium">{item.title}</span>
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-200 ${
                          activeDropdown === item.title ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeDropdown === item.title && item.sub_menu && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.sub_menu.map((subItem) => (
                          <Link
                            key={subItem.id}
                            href={subItem.link}
                            onClick={toggleMenu}
                            className="block py-2.5 px-4 text-white/90 hover:text-primary-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    onClick={toggleMenu}
                    className="block py-3 px-4 text-white/90 hover:text-primary-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <span className="font-medium">{item.title}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default HeaderOne;
