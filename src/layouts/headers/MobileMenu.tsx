"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

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
    // sub_menu: [
    //   {
    //     id: 1,
    //     title: "Digital Agency",
    //     link: "/",
    //   },
    //   {
    //     id: 2,
    //     title: "Startup Agency",
    //     link: "/startup-agency",
    //   },
    //   {
    //     id: 3,
    //     title: "Design Studio",
    //     link: "/design-studio",
    //   },
    //   {
    //     id: 4,
    //     title: "Creative Protfolio",
    //     link: "/creative-protfolio",
    //   },
    //   {
    //     id: 5,
    //     title: "Marketing Agency",
    //     link: "/marketing-agency",
    //   },
    // ]
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
  // {
  //   id: 6,
  //   title: "Blog",
  //   link: "/blog",
  //   has_dropdown: true,
  //   sub_menu: [
  //     {
  //       id: 1,
  //       title: "Blog",
  //       link: "/blog",
  //     },
  //     {
  //       id: 2,
  //       title: "Blog Details",
  //       link: "/blog-details",
  //     },
  //   ],
  // },
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

interface MobileMenuProps {
  navTitle: string;
  setNavTitle: (title: string) => void;
}

const MobileMenu = ({ navTitle, setNavTitle }: MobileMenuProps) => {
  const [activeDropdown, setActiveDropdown] = useState("");
  const router = useRouter();

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-500 ${
        navTitle === "active" ? "visible" : "invisible"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setNavTitle("")}
      />
      <div
        className={`absolute top-0 right-0 w-[300px] h-full glass-dark backdrop-blur-md p-6 transform transition-transform duration-500 ${
          navTitle === "active" ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="block">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={120}
              height={38}
              className="w-auto h-8"
            />
          </Link>
          <button
            onClick={() => setNavTitle("")}
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="space-y-2">
          {menu_data.map((item) => (
            <div key={item.id}>
              <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === item.title ? "" : item.title
                  )
                }
                className="w-full flex items-center justify-between py-3 px-4 text-white/90 hover:text-primary-300 hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                <span className="font-medium">{item.title}</span>
                {item.has_dropdown && (
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
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
                )}
              </button>
              {item.has_dropdown && activeDropdown === item.title && (
                <div className="mt-2 ml-4 space-y-1">
                  {item.sub_menu?.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={subItem.link}
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
  );
};

export default MobileMenu;
