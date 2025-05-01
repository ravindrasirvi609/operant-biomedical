"use client";

import React, { useState } from "react";
import About from "@/components/about/About";
import AwardsHomeOne from "@/components/awards/AwardsHomeOne";
import BannerAbout from "@/components/brand/BannerAbout";
import BrandHomeOne from "@/components/brand/BrandHomeOne";
import FunFactHomeOne from "@/components/funfact/FunFactHomeOne";
import Gellary from "@/components/gellary/Gellary";
import TeamHomeTwo from "@/components/team/TeamHomeTwo";
import Testimonial from "@/components/testimonial/Testimonial";
import VideoHomeOne from "@/components/video/VideoHomeOne";
import VideoPopup from "@/components/modals/VideoPopup";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
// export const metadata = {
//   title: "About Operant Biomedical Research Federation",
// };

const index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BannerAbout />
            <VideoHomeOne
              isVideoOpen={isVideoOpen}
              setIsVideoOpen={setIsVideoOpen}
            />
            <FunFactHomeOne />
            <About />
            {/* <TeamHomeTwo style_2={true} style_3={true} /> */}
            <AwardsHomeOne />
            <Testimonial />
            <Gellary />
            <BrandHomeOne />
          </main>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"dTuHXUt1weQ"}
      />
      {/* video modal end */}
    </div>
  );
};

export default index;
