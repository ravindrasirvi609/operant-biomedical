"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const HeroHomeOne = () => {
  const heroData = [
    {
      id: 1,
      title: "Welcome to Operant Biomedical Research",
      subtitle: "Innovative Research Solutions",
      description:
        "We are dedicated to advancing medical research and improving healthcare outcomes through innovative solutions and cutting-edge technology.",
      img: "/images/hero/hero-1.jpg",
      btn_text: "Our Services",
      btn_link: "/service",
    },
    {
      id: 2,
      title: "Expert Research & Development",
      subtitle: "Scientific Excellence",
      description:
        "Our team of experts combines scientific knowledge with practical experience to deliver exceptional research and development services.",
      img: "/images/hero/hero-2.jpg",
      btn_text: "Learn More",
      btn_link: "/about",
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {heroData.map((item, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div className="w-full h-full relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 container mx-auto h-full flex items-center">
              <div className="max-w-3xl glass-dark p-10 rounded-2xl ml-0 md:ml-10 transform transition-all duration-500">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-px w-10 bg-primary-400"></div>
                  <span className="text-primary-300 uppercase tracking-wider text-sm">
                    {item.subtitle}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  {item.title}
                </h1>
                <p className="text-white/80 text-base md:text-lg mb-8">
                  {item.description}
                </p>
                <Link href={item.btn_link} className="btn-primary group">
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
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroHomeOne;
