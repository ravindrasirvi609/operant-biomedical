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
import { Metadata } from "next";
import Head from "next/head";

const HomePage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <div>
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
        <meta name="theme-color" content="#F0A8D0" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
        <main className="relative">
          {/* Hero Section */}
          <section className="relative">
            <HeroHomeOne />
          </section>

          {/* Trusted Partners Section */}
          <section className="py-12 bg-white/50 backdrop-blur-sm">
            <MarqueeAreaHomeOne />
          </section>

          {/* About Section */}
          <section className="py-20 bg-gradient-to-b from-white/50 to-primary-50/30">
            <AboutHomeOne />
          </section>

          {/* Services Section */}
          <section className="py-20 bg-white/50 backdrop-blur-sm">
            <ServiceHomeOne />
          </section>

          {/* Impact Stories Section */}
          <section className="py-20 bg-gradient-to-b from-primary-50/30 to-white/50">
            <PortfolioHomeOne />
          </section>

          {/* Awards Section */}
          <section className="py-20 bg-white/50 backdrop-blur-sm">
            <AwardsHomeOne />
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gradient-to-b from-white/50 to-primary-50/30">
            <Testimonial />
          </section>

          {/* Statistics Section */}
          <section className="py-20 bg-white/50 backdrop-blur-sm">
            <FunFactHomeOne />
          </section>

          {/* Video Section */}
          <section className="py-20 bg-gradient-to-b from-primary-50/30 to-white/50">
            <VideoHomeOne setIsVideoOpen={setIsVideoOpen} />
          </section>

          {/* Latest Research Section */}
          <section className="py-20 bg-white/50 backdrop-blur-sm">
            <BlogHomeOne />
          </section>

          {/* Newsletter Section */}
          <section className="py-20 bg-gradient-to-b from-white/50 to-primary-50/30">
            <SubscribeHomeOne />
          </section>

          {/* Partners Section */}
          <section className="py-20 bg-white/50 backdrop-blur-sm">
            <BrandHomeOne style_2={false} />
          </section>
        </main>

        {/* Video Modal */}
        <VideoPopup
          isVideoOpen={isVideoOpen}
          setIsVideoOpen={setIsVideoOpen}
          videoId={"dTuHXUt1weQ"}
        />
      </div>
    </div>
  );
};

export default HomePage;
