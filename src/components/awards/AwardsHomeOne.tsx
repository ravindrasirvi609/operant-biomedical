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

interface DataType {
  id: number;
  ward_img: any;
  img: StaticImageData;
  brand: string;
  title: string;
  des: string;
}
[];

const award_data: DataType[] = [
  {
    id: 1,
    ward_img: award_img_1,
    img: award_thumb_1,
    brand: ``,
    title: `Commitment to Advancing Biomedical Research:`,
    des: `Federation dedicated to advancing biomedical research through collaborative efforts, innovative research, and the dissemination of best practices.`,
  },
  {
    id: 2,
    ward_img: award_img_2,
    img: award_thumb_2,
    brand: ``,
    title: `Excellence in Collaboration`,
    des: `Honoring our commitment to interdisciplinary partnerships, accelerating breakthroughs for improved patient outcomes.`,
  },
  {
    id: 3,
    ward_img: award_img_3,
    img: award_thumb_4,
    brand: ``,
    title: `Innovation and Research Excellence`,
    des: `Federation's support for innovation and research excellence, driving advancements in medical science and technology.`,
  },
  {
    id: 5,
    ward_img: award_img_4,
    img: award_thumb_3,
    brand: ``,
    title: `Community Engagement and Outreach`,
    des: `Federation's efforts to engage with communities, raise awareness about health issues, and promote health literacy.`,
  },
];

const AwardsHomeOne = ({ style_2 }: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleMouseEnter = (index: any) => {
    setActiveTab(index);
  };

  return (
    <>
      {style_2 ? <div className="cs_height_145 cs_height_lg_60"></div> : null}
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1 swiper-slide swiper-slide-active">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Our Excellence
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Recognizing Excellence Our Award Winning Work
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_card_2_list">
            {award_data.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => handleMouseEnter(i)}
                className={`cs_card cs_style_2 cs_hover_tab anim_div_ShowDowns ${
                  activeTab === i ? "active" : ""
                }`}
              >
                <div className="cs_card_left">
                  <div className="cs_card_logo">
                    <Image src={item.ward_img} alt="Award" />
                  </div>
                  <div>
                    <h2 className="cs_card_title">{item.title}</h2>
                    <div className="cs_card_subtitle">{item.des}</div>
                  </div>
                </div>
                <div className="cs_card_right">
                  <h2 className="cs_card_brand">{item.brand}</h2>
                </div>
                <div className="cs_card_hover_img">
                  <Image src={item.img} alt="Thumb" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="cs_height_145 cs_height_lg_60"></div>
    </>
  );
};

export default AwardsHomeOne;
