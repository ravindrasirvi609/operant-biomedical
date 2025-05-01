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

  const awards = [
    {
      id: 1,
      title: "Excellence in Medical Research",
      organization: "Global Healthcare Awards",
      year: "2023",
      image: "/images/awards/award-1.png",
      description:
        "Recognized for outstanding contributions to medical research and innovation.",
      alt: "Global Healthcare Awards trophy for Excellence in Medical Research",
    },
    {
      id: 2,
      title: "Best Research Institution",
      organization: "International Medical Association",
      year: "2023",
      image: "/images/awards/award-2.png",
      description:
        "Awarded for exceptional research facilities and breakthrough discoveries.",
      alt: "International Medical Association award for Best Research Institution",
    },
    {
      id: 3,
      title: "Innovation in Healthcare",
      organization: "Healthcare Technology Summit",
      year: "2023",
      image: "/images/awards/award-3.png",
      description:
        "Honored for pioneering healthcare solutions and technological advancements.",
      alt: "Healthcare Technology Summit award for Innovation in Healthcare",
    },
  ];

  return (
    <section className="container py-20" aria-label="Awards Section">
      {style_2 && <div className="h-24 md:h-16"></div>}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
          <span className="text-primary-300 text-sm font-medium">
            Recognition
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Awards & Recognition
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          Our commitment to excellence in medical research has been recognized
          by leading healthcare organizations worldwide.
        </p>
      </div>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
          inView ? "animate-fade-in" : "opacity-0"
        }`}
      >
        {awards.map((award) => (
          <div
            key={award.id}
            className="glass-dark rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 group"
          >
            <div className="relative w-24 h-24 mx-auto mb-6">
              <Image
                src={award.image}
                alt={award.alt}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                {award.title}
              </h3>
              <div className="text-primary-300 font-medium mb-2">
                {award.organization}
              </div>
              <div className="text-white/80 mb-4">{award.year}</div>
              <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
                {award.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Achievement Stats */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { number: "50+", label: "Research Awards" },
          { number: "100+", label: "Publications" },
          { number: "25+", label: "Countries" },
          { number: "1000+", label: "Researchers" },
        ].map((stat, index) => (
          <div
            key={index}
            className="text-center glass-dark rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 group"
          >
            <div className="text-3xl md:text-4xl font-bold text-primary-300 mb-2 group-hover:text-primary-400 transition-colors duration-300">
              {stat.number}
            </div>
            <div className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      {style_2 && <div className="h-24 md:h-16"></div>}
    </section>
  );
};

export default AwardsHomeOne;
