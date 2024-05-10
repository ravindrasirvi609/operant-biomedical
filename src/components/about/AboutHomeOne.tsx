"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}
[];

const about_slider: DataType[] = [
  {
    img: "/assets/img/about-img-1.jpg",
    sub_title: "Our Mission",
    title: `Igniting Innovation to Revolutionize Your Institution`,
    des: `Welcome to our Medical Research Federation! We are dedicated to empowering institutions like yours to thrive in the digital era. From pioneering research platforms to strategic digital outreach, we offer tailored solutions to enhance your online impact. Join us as we navigate the evolving landscape of digital innovation in medical research.`,
  },
  {
    img: "/assets/img/medical-workers-discussing-chest-x-ray-2023-11-27-05-09-13-utc.jpg",
    sub_title: "Our Mission",
    title: `Unleashing Ingenuity to Revolutionize Your Institution`,
    des: `Welcome to our Medical Research Federation! At the forefront of digital advancement, we're here to propel institutions like yours to success in the online sphere. Whether it's crafting dynamic research platforms or deploying strategic digital campaigns, we possess the expertise and tools to amplify your online visibility. Let us guide you through the dynamic landscape of digital evolution in medical research.`,
  },
  {
    img: "/assets/img/medical-meeting-and-doctors-with-laptop-for-resea-2024-03-12-21-29-28-utc.jpg",
    sub_title: "Our Mission",
    title: `Unleashing Innovation to Revolutionize Your Institution`,
    des: `Welcome to our Medical Research Federation! Our focus is on empowering institutions like yours to thrive in the digital realm. With our expertise ranging from cutting-edge research platforms to strategic digital campaigns, we're equipped to enhance your online footprint. Let us be your partner in navigating the ever-evolving landscape of digital innovation in medical research`,
  },
];

const AboutHomeOne = () => {
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
                className="cs_about_bg cs_bg"
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
