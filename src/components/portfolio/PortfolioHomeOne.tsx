"use client";
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import portfolio_img_1 from "@/assets/img/portfolio/Pharmanecia6_E.png";
import portfolio_img_2 from "@/assets/img/testimonial/head_testimonial.jpg";
import portfolio_img_3 from "@/assets/img/portfolio/pharmanecia2_E.png";
import portfolio_img_4 from "@/assets/img/portfolio/Pharmanecia3_E.png";
import portfolio_img_5 from "@/assets/img/portfolio/Pharmanecia4_E.png";
import portfolio_img_6 from "@/assets/img/portfolio/Pharmanecia5_E.png";

interface DataType {
  id: number;
  img: StaticImageData;
  title: string;
  category: string;
}
[];

const portfolio_slider: DataType[] = [
  {
    id: 1,
    img: portfolio_img_1,
    title:
      "Pharmaceutical and Clinical Research in India: Current Scenario, Challenges, Opportunities and Future Perspectives",
    category: "Pharmanecia",
  },
  {
    id: 3,
    img: portfolio_img_2,
    title:
      "The Pharmanecia 3.E International Conference on Emerging Trends in Pharmaceutical Research",
    category: "Pharmanecia",
  },
  {
    id: 3,
    img: portfolio_img_3,
    title: "Precision Medicine Innovations",
    category: "Pharma Research Publications",
  },
  {
    id: 4,
    img: portfolio_img_4,
    title: "Drug Repurposing Strategies",
    category: "Pharma Research Publications",
  },
  {
    id: 5,
    img: portfolio_img_5,
    title: "Biopharmaceutical Manufacturing Trends",
    category: "Pharma Research Publications",
  },
  {
    id: 6,
    img: portfolio_img_6,
    title: "Regulatory Compliance Updates",
    category: "Pharma Research Publications",
  },
];

const PortfolioHomeOne = () => {
  return (
    <>
      <div className="cs_horizontal_scroll_wrap">
        <div className="cs_height_145 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Portfolio
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Some Recent Conferences & Workshops Successfully Done{" "}
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </div>
        <Swiper
          loop={true}
          speed={1000}
          slidesPerView="auto"
          pagination={{
            el: ".cs_pagination",
            clickable: true,
          }}
          className="cs_horizontal_scrolls anim_div_ShowDowns"
        >
          {portfolio_slider.map((item, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div className="cs_horizontal_scroll">
                <Link
                  href={`/portfolio-details/${item.id}`}
                  className="cs_portfolio cs_style_1"
                >
                  <div className="cs_portfolio_img">
                    <Image src={item.img} alt="Thumb" />
                  </div>
                  <div className="cs_portfolio_overlay"></div>
                  <div className="cs_portfolio_info">
                    <h2 className="cs_portfolio_title">{item.title}</h2>
                    <div className="cs_portfolio_subtitle">{item.category}</div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="cs_height_145 cs_height_lg_60"></div>
    </>
  );
};

export default PortfolioHomeOne;
