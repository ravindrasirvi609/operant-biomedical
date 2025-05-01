"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
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
    const checkLocalStorage = localStorage.getItem("theme");
    if (!checkLocalStorage) {
      const checkDarkTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(checkDarkTheme ? "dark" : "light");
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
                src="/assets/img/_Logo.png"
                alt="Operant Logo"
                width={100}
                height={100}
                className=" bg-primary-500 rounded-full"
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
                        ? "text-primary-600 dark:text-primary-400"
                        : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                  {item.has_dropdown && item.sub_menu && (
                    <div className="absolute left-0 mt-2 w-48 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-lg shadow-lg py-2 hidden group-hover:block border border-gray-200 dark:border-gray-700">
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

            {/* Theme Toggle and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                aria-label="Toggle theme"
              >
                {mounted && (
                  <motion.div
                    initial={false}
                    animate={{ rotate: resolvedTheme === "dark" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {resolvedTheme === "dark" ? (
                      <FiSun className="w-5 h-5 text-yellow-500" />
                    ) : (
                      <FiMoon className="w-5 h-5 text-gray-700" />
                    )}
                  </motion.div>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <FiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <FiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
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
          className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {menu_data.map((item) => (
                <div key={item.id} className="py-2">
                  <div
                    className="flex justify-between items-center cursor-pointer px-4"
                    onClick={() => item.has_dropdown && toggleDropdown(item.id)}
                  >
                    <Link
                      href={item.link}
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      {item.title}
                    </Link>
                    {item.has_dropdown && (
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-200 ${
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
                    )}
                  </div>
                  {item.has_dropdown && activeDropdown === item.id && (
                    <div className="pl-8 mt-2 space-y-2">
                      {item.sub_menu?.map((subItem) => (
                        <Link
                          key={subItem.id}
                          href={subItem.link}
                          className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
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
        </motion.div>
      )}
    </header>
  );
};

export default Header;
