"use client";

import React, { useState } from "react";
import About from "@/components/about/About";
import AwardsHomeOne from "@/components/awards/AwardsHomeOne";
import BannerAbout from "@/components/brand/BannerAbout";
import BrandHomeOne from "@/components/brand/BrandHomeOne";
import FunFactHomeOne from "@/components/funfact/FunFactHomeOne";
import Gellary from "@/components/gellary/Gellary";
import Testimonial from "@/components/testimonial/Testimonial";
import VideoHomeOne from "@/components/video/VideoHomeOne";
import VideoPopup from "@/components/modals/VideoPopup";

// export const metadata = {
//   title: "About Operant Biomedical Research Federation",
// };

const index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="overflow-hidden">
            <BannerAbout />
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 z-10"></div>
              <VideoHomeOne
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
              />
            </div>
            <div className="relative z-20">
              <FunFactHomeOne />
              <About />
              <AwardsHomeOne />
              <Testimonial />
              <Gellary />
              <BrandHomeOne />
            </div>
          </main>
        </div>
      </div>

      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"dTuHXUt1weQ"}
      />
    </div>
  );
};

export default index;
