"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/navigation";
import UseSticky from "@/hooks/UseSticky";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo_white from "@/assets/img/Logo_white.png";

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
  const [active, setActive] = useState<Boolean>(false);
  const [navTitle, setNavTitle] = useState("");
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const router = useRouter();

  const handleActive = () => {
    setActive(!active);
  };

  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full z-50 transition-all duration-500 ${
          sticky ? "fixed top-0" : "absolute"
        } ${
          lastScrollTop > 100
            ? "opacity-0 -translate-y-full"
            : "opacity-100 translate-y-0"
        }`}
      >
        <div className="glass-dark backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex items-center">
                <Link
                  href="/"
                  className="block transform hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    className="w-auto h-12"
                    src={Logo_white}
                    alt="Operant Biomedical"
                    width={100}
                    height={50}
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {menu_data.map((item) => (
                  <div key={item.id} className="relative group">
                    <Link
                      href={item.link}
                      className="text-white/90 hover:text-primary-300 font-medium transition-all duration-300 py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-300 after:transition-all after:duration-300 hover:after:w-full"
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
              <div className="flex items-center lg:hidden">
                <button
                  onClick={() => setNavTitle(navTitle === "" ? "active" : "")}
                  className="w-10 h-10 flex items-center justify-center text-white/90 hover:text-primary-300 transition-colors duration-300"
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          active ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={handleActive}
        ></div>
        <div
          className={`absolute top-0 right-0 w-[300px] h-full glass-dark backdrop-blur-md p-6 transform transition-transform duration-500 ${
            active ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <Link href="/" onClick={handleActive}>
              <Image
                src={Logo_white}
                alt="Operant Biomedical"
                width={100}
                height={30}
                className="w-auto h-8"
              />
            </Link>
            <button
              className="w-10 h-10 flex items-center justify-center text-white/90 hover:text-primary-300 transition-colors duration-300"
              onClick={handleActive}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-2">
            {menu_data.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => openMobileMenu(item.title)}
                  className="w-full flex items-center justify-between py-3 px-4 text-white/90 hover:text-primary-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  <span className="font-medium">{item.title}</span>
                  {item.has_dropdown && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        navTitle === item.title ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>
                {item.has_dropdown &&
                  item.sub_menu &&
                  navTitle === item.title && (
                    <div className="mt-2 ml-4 space-y-1">
                      {item.sub_menu.map((subItem) => (
                        <Link
                          key={subItem.id}
                          href={subItem.link}
                          onClick={handleActive}
                          className="block py-2.5 px-4 text-white/80 hover:text-primary-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
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
