"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";

interface SubMenuItem {
  id: number;
  title: string;
  link: string;
}

interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menu?: SubMenuItem[];
}

const menu_data: MenuItem[] = [
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

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const checkLocalStorage = localStorage.getItem("theme");
      if (!checkLocalStorage) {
        const checkDarkTheme = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setTheme(checkDarkTheme ? "dark" : "light");
      }
    }
  }, [setTheme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/assets/img/OBRF Logo.png"
                alt="Operant Logo"
                width={60}
                height={60}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menu_data.map((item) => (
                <div key={item.id} className="relative group">
                  <Link
                    href={item.link}
                    className={`text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 ${
                      pathname === item.link
                        ? "text-primary-600 dark:text-primary-400 font-semibold"
                        : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                  {item.has_dropdown && item.sub_menu && (
                    <div className="absolute left-0 mt-2 w-48 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-lg shadow-lg py-2 hidden group-hover:block border border-gray-200 dark:border-gray-700">
                      {item.sub_menu.map((subItem) => (
                        <Link
                          key={subItem.id}
                          href={subItem.link}
                          className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Controls Right Container */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646"
                    />
                  </svg>
                )}
              </button>

              {/* Upcoming Programs Button (Desktop) */}
              <Link
                href="/events"
                className="hidden md:inline-block px-6 py-2 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors duration-300 shadow"
              >
                Upcoming Programs
              </Link>

              {/* Hamburger Button (Mobile) */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? (
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
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
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="flex flex-col space-y-2">
              {menu_data.map((item) => (
                <div key={item.id} className="border-b border-gray-100 dark:border-gray-800/50 last:border-none pb-2 last:pb-0">
                  <div className="flex justify-between items-center py-2 px-2">
                    <Link
                      href={item.link}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 font-medium flex-grow ${
                        pathname === item.link
                          ? "text-primary-600 dark:text-primary-400 font-bold"
                          : ""
                      }`}
                    >
                      {item.title}
                    </Link>
                    {item.has_dropdown && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          toggleDropdown(item.id);
                        }}
                        className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
                        aria-label={`Toggle ${item.title} submenu`}
                      >
                        <svg
                          className={`w-5 h-5 transform transition-transform duration-200 ${
                            activeDropdown === item.id ? "rotate-180" : ""
                          }`}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {item.has_dropdown && activeDropdown === item.id && (
                    <div className="pl-6 mt-1 space-y-1 border-l-2 border-primary-100 dark:border-primary-900 ml-4 mb-2">
                      {item.sub_menu?.map((subItem) => (
                        <Link
                          key={subItem.id}
                          href={subItem.link}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block py-1.5 px-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 ${
                            pathname === subItem.link
                              ? "text-primary-600 dark:text-primary-400 font-semibold"
                              : ""
                          }`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA Button */}
              <div className="pt-4 px-2">
                <Link
                  href="/events"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center py-2.5 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors duration-300 shadow"
                >
                  Upcoming Programs
                </Link>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
