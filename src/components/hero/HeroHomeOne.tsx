"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const HeroHomeOne = () => {
  const heroData = [
    {
      id: 1,
      title: "Advancing Medical Research Through Innovation",
      subtitle: "Leading Biomedical Research Federation",
      description:
        "Join our network of medical professionals and researchers dedicated to advancing healthcare through collaborative research, innovative solutions, and professional development.",
      img: "/images/hero/hero-1.jpg",
      btn_text: "Explore Research",
      btn_link: "/research",
      alt: "Medical research laboratory with advanced equipment",
    },
    {
      id: 2,
      title: "Collaborative Medical Research Excellence",
      subtitle: "Professional Development",
      description:
        "Access cutting-edge research facilities, collaborate with leading medical professionals, and contribute to groundbreaking healthcare innovations.",
      img: "/images/hero/hero-2.jpg",
      btn_text: "Join Our Network",
      btn_link: "/membership",
      alt: "Medical professionals collaborating in a modern research facility",
    },
  ];

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      aria-label="Hero Section"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="w-full h-full"
      >
        {heroData.map((item, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div className="w-full h-full relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url(${item.img})` }}
                role="img"
                aria-label={item.alt}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-secondary-900/90 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 container mx-auto h-full flex items-center">
              <div className="max-w-3xl glass-dark p-8 md:p-10 rounded-2xl ml-0 md:ml-10 transform transition-all duration-500 hover:shadow-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-px w-10 bg-primary-300"></div>
                  <span className="text-primary-300 uppercase tracking-wider text-sm font-medium">
                    {item.subtitle}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  {item.title}
                </h1>
                <p className="text-white/90 text-base md:text-lg mb-8">
                  {item.description}
                </p>
                <Link
                  href={item.btn_link}
                  className="inline-flex items-center px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-black"
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
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroHomeOne;
