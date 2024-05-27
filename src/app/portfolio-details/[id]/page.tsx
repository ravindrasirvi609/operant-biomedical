"use client";

import React, { useEffect, useState } from "react";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import AboutHomeFour from "@/components/about/AboutHomeFour";
import PortfolioDetailsArea from "@/components/details/PortfolioDetailsArea";
import VideoHomeOne from "@/components/video/VideoHomeOne";
import VideoPopup from "@/components/modals/VideoPopup";
import axios from "axios";

export interface Par {
  params: {
    id: string;
  };
}

interface PortfolioDataType {
  id: number;
  title: string;
  client: string;
  services: string;
  date: string;
  des: string;
  images: string[];
  challenges: string[];
  solutions: string[];
  video: string;
}

const Index = ({ params }: Par) => {
  const paramId = params.id;
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [project, setProject] = useState<PortfolioDataType | undefined>();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.post("/api/portfolio/portfolio-details", {
          id: paramId,
        });
        setProject(res.data.portfolio);
      } catch (error) {
        console.error("Failed to fetch project details:", error);
      }
    };
    fetchProject();
  }, [paramId]);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioDetailsArea project={project} />
            <VideoHomeOne setIsVideoOpen={setIsVideoOpen} />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={project?.video}
      />
    </Wrapper>
  );
};

export default Index;
