"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  Pagination,
  Navigation,
  Parallax,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroHomeOne = () => {
  const { resolvedTheme } = useTheme();

  const heroData = [
    {
      id: 1,
      title: "Advancing Medical Research Through Innovation",
      subtitle: "Leading Biomedical Research Federation",
      description:
        "Join our network of medical professionals and researchers dedicated to advancing healthcare through collaborative research, innovative solutions, and professional development.",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
      btn_text: "Explore Research",
      btn_link: "/research",
      alt: "Modern medical research laboratory with advanced equipment",
    },
    {
      id: 2,
      title: "Collaborative Medical Research Excellence",
      subtitle: "Professional Development",
      description:
        "Access cutting-edge research facilities, collaborate with leading medical professionals, and contribute to groundbreaking healthcare innovations.",
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
      btn_text: "Join Our Network",
      btn_link: "/membership",
      alt: "Medical professionals collaborating in a modern research facility",
    },
    {
      id: 3,
      title: "Pioneering Healthcare Solutions",
      subtitle: "Innovation Hub",
      description:
        "Discover breakthrough medical technologies and research methodologies that are shaping the future of healthcare delivery and patient care.",
      img: "https://images.unsplash.com/photo-1581093458791-9d15482442f6?q=80&w=2070&auto=format&fit=crop",
      btn_text: "Learn More",
      btn_link: "/innovation",
      alt: "Advanced medical technology and research equipment",
    },
  ];

  return (
    <section
      className="relative w-full h-screen overflow-hidden transition-all duration-300"
      aria-label="Hero Section"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation, Parallax]}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: function (index, className) {
            return `<span class="${className} bg-white/50 hover:bg-white/80 transition-all duration-300"></span>`;
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        parallax={true}
        className="w-full h-full"
      >
        {heroData.map((item, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div className="w-full h-full relative overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  priority={index === 0}
                  className="object-cover transform transition-all duration-700 hover:scale-105"
                  sizes="100vw"
                  quality={100}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/70 to-transparent dark:from-gray-900/95 dark:via-gray-900/75 dark:to-transparent backdrop-blur-[1px] transition-all duration-300"></div>
            </div>

            <div className="relative z-10 container mx-auto h-full flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="max-w-3xl bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg p-8 md:p-12 rounded-2xl ml-0 md:ml-10 transform transition-all duration-500 hover:shadow-2xl border border-white/20 dark:border-gray-700/20"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-px w-12 bg-primary-300 dark:bg-primary-400 transition-colors duration-300"></div>
                  <span className="text-primary-300 dark:text-primary-400 uppercase tracking-wider text-sm font-medium transition-colors duration-300">
                    {item.subtitle}
                  </span>
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-colors duration-300"
                >
                  {item.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                  className="text-white/90 text-lg md:text-xl mb-10 transition-colors duration-300 max-w-2xl"
                >
                  {item.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    href={item.btn_link}
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary-500/90 dark:bg-primary-600/90 text-white rounded-lg hover:bg-primary-600 dark:hover:bg-primary-700 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 backdrop-blur-sm"
                    aria-label={`${item.btn_text} - ${item.title}`}
                  >
                    {item.btn_text}
                    <svg
                      className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 dark:bg-gray-900/10 text-white rounded-lg hover:bg-white/20 dark:hover:bg-gray-900/20 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-white/50 dark:focus:ring-gray-700/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 backdrop-blur-sm"
                  >
                    Contact Us
                    <svg
                      className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !w-12 !h-12 !bg-white/10 dark:!bg-gray-900/10 !backdrop-blur-lg !rounded-full !text-white hover:!bg-white/20 dark:hover:!bg-gray-900/20 transition-all duration-300 after:!text-2xl"></div>
        <div className="swiper-button-next !w-12 !h-12 !bg-white/10 dark:!bg-gray-900/10 !backdrop-blur-lg !rounded-full !text-white hover:!bg-white/20 dark:hover:!bg-gray-900/20 transition-all duration-300 after:!text-2xl"></div>
      </Swiper>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroHomeOne;
