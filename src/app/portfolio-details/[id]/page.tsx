"use client";

import React, { useEffect, useState } from "react";
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
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioDetailsArea project={project} />
            {/* {project?.video && <VideoHomeOne setIsVideoOpen={setIsVideoOpen} />} */}
            <AboutHomeFour />
          </main>
        </div>
      </div>
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={project?.video}
      />
    </div>
  );
};

export default Index;
