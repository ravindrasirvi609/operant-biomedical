"use client";
import React, { use, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import axios from "axios";

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}
[];

const about_slider: DataType[] = [
  {
    img: "/assets/img/subSlider3.jpeg",
    sub_title: "Our Mission",
    title: `Igniting Innovations: Revolutionizing Institutions through Research and Communication`,
    des: `Welcome to our Medical Research Federation! We are dedicated to empowering institutions like yours to thrive in the digital era. From pioneering research platforms to strategic digital outreach, we offer tailored solutions to enhance your online impact. Join us as we navigate the evolving landscape of digital innovation in medical research.`,
  },
  {
    img: "/assets/img/subSlider2.jpeg",
    sub_title: "Our Mission",
    title: `Revolutionizing Institutions with Premier Research and Conferences`,
    des: `Empowering healthcare leaders with premier research and expert presentations. Bridging the gap between research and implementation to drive advancements in medical practice and policy. Join us in revolutionizing institutions and improving patient outcomes worldwide.`,
  },
  {
    img: "/assets/img/subSlider1.jpg",
    sub_title: "Our Mission",
    title: `Expert in Medical Research Publications and Conferences`,
    des: `Elevating research excellence through innovative publishing and impactful presentations. Our expertise ensures your work reaches top-tier journals and resonates with global audiences. By bridging rigorous research with effective dissemination, we transform ideas into real-world solutions, driving progress and improving healthcare outcomes.`,
  },
];

const AboutHomeOne = () => {
  useEffect(() => {
    axios
      .post("/api/membershipPlan/membershipPlanList", { id: 2 })
      .then((response) => {
        console.log(response.data);
      });
  }, []);
  return (
    <>
      <div className="cs_height_130 cs_height_lg_60"></div>
      <Swiper
        loop={true}
        speed={1000}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        }}
        pagination={{
          el: ".cs_pagination",
          clickable: true,
          type: "fraction",

          renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass}"></span> 
             ${" / "}
             <span class="${totalClass}"></span>`;
          },
        }}
        className="cs_slider cs_slider_2"
      >
        {about_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="cs_about cs_style_1">
              <div
                className="cs_about_bg cs_bg cs_z_index"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="container">
                <div className="cs_about_text">
                  <div className="cs_section_heading cs_style_1">
                    <div className="cs_section_heading_text">
                      <div className="cs_section_subtitle">
                        {item.sub_title}
                      </div>
                      <h2 className="cs_section_title">{item.title}</h2>
                    </div>
                  </div>
                  <div className="cs_height_40 cs_height_lg_30"></div>
                  <p className="cs_m0">{item.des}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="container">
          <div className="cs_swiper_controll">
            <div className="cs_pagination cs_style2 cs_primary_font"></div>
            <div className="cs_swiper_navigation_wrap">
              <div
                style={{ cursor: "pointer" }}
                className="cs_swiper_button_prev"
              >
                <svg
                  width="82"
                  height="24"
                  viewBox="0 0 82 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M82 1H2L24 23" stroke="currentColor" />
                </svg>
              </div>
              <div
                style={{ cursor: "pointer" }}
                className="cs_swiper_button_next"
              >
                <svg
                  width="82"
                  height="24"
                  viewBox="0 0 82 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 23H80L58 1" stroke="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default AboutHomeOne;
