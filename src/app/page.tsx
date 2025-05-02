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
        <MarqueeAreaHomeOne />

        {/* About Section */}
        <AboutHomeOne />

        {/* Services Section */}
        <ServiceHomeOne />

        {/* Impact Stories Section */}
        <PortfolioHomeOne />

        {/* Awards Section */}
        <AwardsHomeOne />

        {/* Testimonials Section */}
        <Testimonial />

        {/* Statistics Section */}
        <FunFactHomeOne />

        {/* Video Section */}
        <VideoHomeOne
          setIsVideoOpen={setIsVideoOpen}
          isVideoOpen={isVideoOpen}
        />

        {/* Latest Research Section */}
        <BlogHomeOne />

        {/* Newsletter Section */}
        <SubscribeHomeOne />

        {/* Partners Section */}
        <BrandHomeOne />
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
