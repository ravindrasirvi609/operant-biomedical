"use client";
import React, { useState } from "react";
import award_img_1 from "@/assets/img/awards1.png";
import award_img_2 from "@/assets/img/awards2.png";
import award_img_3 from "@/assets/img/awards3.png";
import award_img_4 from "@/assets/img/awards4.png";

import award_thumb_2 from "@/assets/img/portfolio/1B1A0823.jpg";
import award_thumb_3 from "@/assets/img/portfolio/1B1A0823.jpg";
import award_thumb_4 from "@/assets/img/portfolio/1B1A0823.jpg";
import award_thumb_1 from "@/assets/img/portfolio/1B1A0823.jpg";

import Image, { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";

interface DataType {
  id: number;
  ward_img: any;
  img: StaticImageData;
  brand: string;
  title: string;
  des: string;
}

const award_data: DataType[] = [
  {
    id: 1,
    ward_img: award_img_4,
    img: award_thumb_1,
    brand: ``,
    title: `Commitment to Advancing Biomedical Research:`,
    des: `Federation dedicated to advancing biomedical research through collaborative efforts, innovative research, and the dissemination of best practices.`,
  },
  {
    id: 2,
    ward_img: award_img_3,
    img: award_thumb_2,
    brand: ``,
    title: `Excellence in Collaboration`,
    des: `Honoring our commitment to interdisciplinary partnerships, accelerating breakthroughs for improved patient outcomes.`,
  },
  {
    id: 3,
    ward_img: award_img_2,
    img: award_thumb_4,
    brand: ``,
    title: `Innovation and Research Excellence`,
    des: `Federation's support for innovation and research excellence, driving advancements in medical science and technology.`,
  },
  {
    id: 5,
    ward_img: award_img_1,
    img: award_thumb_3,
    brand: ``,
    title: `Community Engagement and Outreach`,
    des: `Federation's efforts to engage with communities, raise awareness about health issues, and promote health literacy.`,
  },
];

interface AwardsHomeOneProps {
  style_2?: boolean;
}

const AwardsHomeOne = ({ style_2 }: AwardsHomeOneProps) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <>
      {style_2 && <div className="h-24 md:h-16"></div>}
      <div className="container">
        <div
          ref={ref}
          className={`text-center mb-12 ${
            inView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
            <span className="text-primary-300 text-sm font-medium">
              Our Achievements
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Awards & Recognition
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {award_data.map((item, index) => (
            <div
              key={item.id}
              className={`glass-dark p-6 rounded-xl transform transition-all duration-500 hover:scale-105 ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={item.ward_img}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 mb-4">{item.des}</p>
                  <div className="text-primary-300 font-medium">
                    {item.brand}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {style_2 && <div className="h-24 md:h-16"></div>}
    </>
  );
};

export default AwardsHomeOne;
