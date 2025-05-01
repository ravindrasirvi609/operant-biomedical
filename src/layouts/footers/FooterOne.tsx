import React from "react";
import Link from "next/link";
import Image from "next/image";
import footer_logo from "@/assets/img/_Logo.png";
import { CopyRight, SocialLinks } from "@/components/common/SocialLinks";

interface DataType {
  email: string;
  phone: string;
  location: string;
  footer_info: string;
  links: {
    title: string;
    link: string;
  }[];
}

const footer_data: DataType = {
  email: `admin@opf.org.in.`,
  phone: `+91-94609-71652`,
  location: `17, Mayank Nagar, Naya Gaon Road, Pali, Rajasthan - 306401, India.`,
  footer_info: `Welcome to our BioMedical Research Federation We specialize in helping Students most like yours succeed online.`,
  links: [
    { title: `Terms & Conditions`, link: "/terms" },
    { title: `Privacy Policy`, link: "/privacy" },
    { title: `Refund & Shipping Policy`, link: "/refund" },
    { title: `CONTACT US`, link: "/contact" },
  ],
};
const { footer_info, email, links, location, phone } = footer_data;

const FooterOne = () => {
  return (
    <footer className="bg-gradient-to-b from-primary-900 to-primary-800 text-white py-16 relative">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="container mx-auto relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="glass-dark p-8 rounded-xl h-full">
              <Image
                src={footer_logo}
                alt="Operant Biomedical"
                height={150}
                width={150}
                className="mb-6"
              />
              <p className="text-white/80 mb-6">{footer_info}</p>
              <a
                href={`mailto:${email}`}
                className="text-primary-300 text-lg font-medium hover:text-white transition-colors duration-300 inline-flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>{email}</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="glass-dark p-8 rounded-xl h-full">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <SocialLinks />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-primary-300 mr-3 mt-1">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-white/80">{location}</p>
                </div>

                <div className="flex items-center">
                  <div className="text-primary-300 mr-3">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <a
                    href={`tel:${phone}`}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {phone}
                  </a>
                </div>

                <div className="flex items-center">
                  <div className="text-primary-300 mr-3">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <a
                    href={`mailto:${email}`}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-white/60">
          <CopyRight />
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
