"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            Operant Biomedical
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menu_data.map((item) => (
              <div key={item.id} className="relative group">
                <Link
                  href={item.link}
                  className={`text-gray-700 hover:text-primary ${
                    pathname === item.link ? "text-primary" : ""
                  }`}
                >
                  {item.title}
                </Link>
                {item.has_dropdown && item.sub_menu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 hidden group-hover:block">
                    {item.sub_menu.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={subItem.link}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {menu_data.map((item) => (
              <div key={item.id} className="py-2">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => item.has_dropdown && toggleDropdown(item.id)}
                >
                  <Link
                    href={item.link}
                    className="text-gray-700 hover:text-primary"
                  >
                    {item.title}
                  </Link>
                  {item.has_dropdown && (
                    <svg
                      className={`w-4 h-4 transform ${
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
                  <div className="pl-4 mt-2 space-y-2">
                    {item.sub_menu?.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={subItem.link}
                        className="block text-gray-600 hover:text-primary"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
