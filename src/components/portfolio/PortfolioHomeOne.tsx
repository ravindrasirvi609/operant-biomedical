"use client";
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import portfolio_img_1 from "@/assets/img/cryopreservation-expert-freezing-cells-in-cryogeni-2023-11-27-05-06-12-utc.jpg";
import portfolio_img_2 from "@/assets/img/scientist-in-white-protective-uniform-works-with-c-2023-11-27-05-06-25-utc.jpg";
import portfolio_img_3 from "@/assets/img/futuristic-interaction-intern-shares-data-with-hi-2023-11-27-05-15-19-utc.jpg";
import portfolio_img_4 from "@/assets/img/closeup-of-scientific-microscope-data-analysis-in-2023-11-27-04-50-22-utc.jpg";
import portfolio_img_5 from "@/assets/img/scientist-in-white-protective-uniform-works-with-c-2023-11-27-05-06-25-utc.jpg";
import portfolio_img_6 from "@/assets/img/radiologist-setting-mri-scanner-for-patient-2024-03-28-19-40-34-utc.jpg";

interface DataType {
  img: StaticImageData;
  title: string;
  category: string;
}
[];

const portfolio_slider: DataType[] = [
  {
    img: portfolio_img_1,
    title: "Exploring Novel Drug Targets",
    category: "Pharma Research Publications",
  },
  {
    img: portfolio_img_2,
    title: "Clinical Trials Advancements",
    category: "Pharma Research Publications",
  },
  {
    img: portfolio_img_3,
    title: "Precision Medicine Innovations",
    category: "Pharma Research Publications",
  },
  {
    img: portfolio_img_4,
    title: "Drug Repurposing Strategies",
    category: "Pharma Research Publications",
  },
  {
    img: portfolio_img_5,
    title: "Biopharmaceutical Manufacturing Trends",
    category: "Pharma Research Publications",
  },
  {
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
                Some Recent Project We Successfully Done
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
                  href="/portfolio-details"
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
