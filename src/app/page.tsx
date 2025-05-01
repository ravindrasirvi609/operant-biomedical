"use client";

import React, { useState } from "react";
import HeroHomeOne from "@/components/hero/HeroHomeOne";
import AboutHomeOne from "@/components/about/AboutHomeOne";
import ServiceHomeOne from "@/components/service/ServiceHomeOne";
import MarqueeAreaHomeOne from "@/components/brand/MarqueeAreaHomeOne";
import PortfolioHomeOne from "@/components/portfolio/PortfolioHomeOne";
import AwardsHomeOne from "@/components/awards/AwardsHomeOne";
import Testimonial from "@/components/testimonial/Testimonial";
import FunFactHomeOne from "@/components/funfact/FunFactHomeOne";
import VideoHomeOne from "@/components/video/VideoHomeOne";
import BlogHomeOne from "@/components/blog/BlogHomeOne";
import SubscribeHomeOne from "@/components/subscribe/SubscribeHomeOne";
import BrandHomeOne from "@/components/brand/BrandHomeOne";
import VideoPopup from "@/components/modals/VideoPopup";
import Head from "next/head";

const HomePage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E1EEBC] to-white">
      <Head>
        <title>
          Operant Biomedical Research Federation | Advancing Medical Research
        </title>
        <meta
          name="description"
          content="Leading biomedical research federation dedicated to advancing medical science through collaborative research, innovation, and professional development for healthcare professionals."
        />
        <meta
          name="keywords"
          content="biomedical research, medical research, healthcare professionals, medical innovation, research federation"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#328E6E" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <main className="relative">
        {/* Hero Section */}
        <section className="relative">
          <HeroHomeOne />
        </section>

        {/* Trusted Partners Section */}
        <section className="py-12 bg-white/80 backdrop-blur-md border-y border-[#67AE6E]/20">
          <MarqueeAreaHomeOne />
        </section>

        {/* About Section */}
        <section className="py-20 bg-gradient-to-b from-[#E1EEBC] to-white">
          <AboutHomeOne />
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white/80 backdrop-blur-md border-y border-[#67AE6E]/20">
          <ServiceHomeOne />
        </section>

        {/* Impact Stories Section */}
        <section className="py-20 bg-gradient-to-b from-[#E1EEBC] to-white">
          <PortfolioHomeOne />
        </section>

        {/* Awards Section */}
        <section className="py-20 bg-white/80 backdrop-blur-md border-y border-[#67AE6E]/20">
          <AwardsHomeOne />
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-[#E1EEBC] to-white">
          <Testimonial />
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-white/80 backdrop-blur-md border-y border-[#67AE6E]/20">
          <FunFactHomeOne />
        </section>

        {/* Video Section */}
        <section className="py-20 bg-gradient-to-b from-[#E1EEBC] to-white">
          <VideoHomeOne
            setIsVideoOpen={setIsVideoOpen}
            isVideoOpen={isVideoOpen}
          />
        </section>

        {/* Latest Research Section */}
        <section className="py-20 bg-white/80 backdrop-blur-md border-y border-[#67AE6E]/20">
          <BlogHomeOne />
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-b from-[#E1EEBC] to-white">
          <SubscribeHomeOne />
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-white/80 backdrop-blur-md border-y border-[#67AE6E]/20">
          <BrandHomeOne />
        </section>
      </main>

      {/* Video Modal */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"dTuHXUt1weQ"}
      />
    </div>
  );
};

export default HomePage;
