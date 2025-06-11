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
import Image from "next/image";
import { motion } from "framer-motion";

const HeroHomeOne = () => {
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
      highlight: "Pioneering Healthcare Solutions",
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
      highlight: "Innovation at Scale",
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
      highlight: "Future of Healthcare",
    },
  ];

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      aria-label="Hero Section"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation, Parallax]}
        effect="fade"
        loop={true}
        speed={1200}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: function (index, className) {
            return `<span class="${className} !bg-white/70 hover:!bg-white !w-3 !h-3 !mx-1 transition-all duration-300 !rounded-full"></span>`;
          },
        }}
        navigation={{
          nextEl: ".hero-button-next",
          prevEl: ".hero-button-prev",
        }}
        parallax={true}
        className="w-full h-full group"
      >
        {heroData.map((item, index) => (
          <SwiperSlide key={item.id} className="relative w-full h-full">
            {/* Background Image with Enhanced Overlay */}
            <div className="absolute inset-0">
              <Image
                src={item.img}
                alt={item.alt}
                fill
                priority={index === 0}
                className="object-cover transition-transform duration-[8000ms] hover:scale-110"
                sizes="100vw"
                quality={95}
              />
              {/* Multi-layered overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content Container with Better Positioning */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-12 gap-8 items-center min-h-[80vh]">
                  {/* Text Content - Better Positioning */}
                  <motion.div
                    initial={{ opacity: 0, x: -50, y: 30 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="col-span-12 lg:col-span-8 xl:col-span-7"
                  >
                    {/* Enhanced Content Card */}
                    <div className="relative">
                      {/* Glowing background effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 blur-2xl opacity-30 rounded-3xl"></div>

                      <div className="relative bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-8 sm:p-12 shadow-2xl">
                        {/* Highlight Badge */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          className="mb-6"
                        >
                          <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/80 to-purple-600/80 text-white font-semibold text-sm rounded-full shadow-lg backdrop-blur-sm border border-white/20">
                            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                            {item.highlight}
                          </span>
                        </motion.div>

                        {/* Subtitle with Enhanced Styling */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                          className="flex items-center mb-6"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="h-px flex-1 bg-gradient-to-r from-blue-400 to-purple-400 max-w-[60px]"></div>
                            <span className="text-blue-300 uppercase tracking-[0.2em] text-sm font-medium">
                              {item.subtitle}
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-r from-purple-400 to-transparent max-w-[20px]"></div>
                          </div>
                        </motion.div>

                        {/* Enhanced Title */}
                        <motion.h1
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1, delay: 0.7 }}
                          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-[1.1]"
                        >
                          <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
                            {item.title}
                          </span>
                        </motion.h1>

                        {/* Enhanced Description */}
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                          className="text-gray-100 text-lg sm:text-xl lg:text-2xl mb-10 leading-relaxed max-w-3xl font-light"
                          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
                        >
                          {item.description}
                        </motion.p>

                        {/* Enhanced Action Buttons */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.9 }}
                          className="flex flex-col sm:flex-row gap-4"
                        >
                          {/* Primary Button */}
                          <Link
                            href={item.btn_link}
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
                          >
                            {/* Button Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                            {/* Button Content */}
                            <span className="relative z-10 flex items-center">
                              {item.btn_text}
                              <svg
                                className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </span>
                          </Link>

                          {/* Secondary Button */}
                          <Link
                            href="/contact"
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-xl border-2 border-white/30 hover:border-white/50 backdrop-blur-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                          >
                            Contact Us
                            <svg
                              className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
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
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Enhanced Custom Navigation */}
        <div className="hero-button-prev absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 cursor-pointer group border border-white/20">
          <svg
            className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        <div className="hero-button-next absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 cursor-pointer group border border-white/20">
          <svg
            className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Swiper>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/70 text-sm font-medium tracking-wide">
            Scroll Down
          </span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-1 h-3 bg-gradient-to-b from-white to-blue-300 rounded-full mt-2"
            ></motion.div>
          </div>
        </div>
      </motion.div>

      {/* Additional Visual Enhancement - Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window?.innerWidth || 1200,
              y: Math.random() * window?.innerHeight || 800,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroHomeOne;
