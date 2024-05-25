"use client";

import React, { useState } from "react";
// import portfolio_data from '@/data/portfolio_data';
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import portfolio_img_6 from "@/assets/img/pharmanecia2_E.png";

import portfolio_img_8 from "@/assets/img/portfolio_3.jpg";
import portfolio_img_9 from "@/assets/img/pharmanecia2_E.png";
import pharmanecia3_E from "@/assets/img/testimonial/head_testimonial.jpg";

interface DataType {
  id: number;
  category: string;
  img: StaticImageData;
  title: string;
  des: string;
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    category: "Pharmanecia",
    img: portfolio_img_6,
    title: "Pharmanecia 1.E",
    des: "V. V. Institute of Pharmaceutical Sciences, Gudlavalleru, in collaboration with Operant Pharmacy Federation (OPF) organized a two day International Conference Pharmanecia'18 on 25 & 26 September, 2018.",
  },
  {
    id: 2,
    category: "Pharmanecia",
    img: portfolio_img_6,
    title: "Pharmanecia 2.E",
    des: "The conference Organised by Dr. D. Y. Patil Medical College, Hospital & Research Center, Pune & Dr. D. Y. Patil Institute of Pharmaceutical Sciences & Research Pune,",
  },
  {
    id: 3,
    category: "Pharmanecia",
    img: pharmanecia3_E,
    title: "Pharmanecia 3.E",
    des: "The conference Organised by Dr. D. Y. Patil Medical College, Hospital & Research Center, Pune & Dr. D. Y. Patil Institute of Pharmaceutical Sciences & Research Pune,",
  },
  {
    id: 3,
    category: "Biomedical Research Publications",
    img: portfolio_img_6,
    title: "Pharmanecia 3.E",
    des: "The conference Organised by Dr. D. Y. Patil Medical College, Hospital & Research Center, Pune & Dr. D. Y. Patil Institute of Pharmaceutical Sciences & Research Pune,",
  },
  {
    id: 2,
    category: "Pharma Reserch Publications",
    img: portfolio_img_6,
    title: "Project Task Management",
    des: "pharmacy research and ",
  },
  {
    id: 4,
    category: "PharmaNEST",
    img: portfolio_img_8,
    title: "PharmaNEST 1",
    des: "Digital Services / App Design",
  },
  {
    id: 4,
    category: "PharmaNEST",
    img: portfolio_img_8,
    title: "PharmaNEST 2.E",
    des: "Digital Services / App Design",
  },
  {
    id: 4,
    category: "PharmaNEST",
    img: portfolio_img_8,
    title: "PharmaNEST 3.E",
    des: "Two days International Conference PharmaNEST 3’E, on “Professional Development and Advanced Training in Artificial Intelligence driven Drug Design, Discovery and Development” was Organized on 14th and 15th October 2022 at Department of Pharmaceutical chemistry, JSS College of Pharmacy, Ooty in association with Operant Pharmacy Federation.",
  },
  {
    id: 5,
    category: "PharMAIR",
    img: portfolio_img_9,
    title: "Project Task Management",
    des: "Digital Services / App Design",
  },
];

// data
const categories = [
  "All",
  ...new Set(portfolio_data.map((item) => item.category)),
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(portfolio_data);

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
    if (cateItem === "All") {
      return setItems(portfolio_data);
    } else {
      const findItems = portfolio_data.filter((findItem) => {
        return findItem.category == cateItem;
      });
      setItems(findItems);
    }
  };

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                Showcasing Innovative Projects and Achievements with Pride{" "}
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_50 cs_height_lg_25"></div>
      <section className="cs_ui_design">
        <div className="container">
          <div>
            <div className="row">
              <div className="cs_isotop_item_menu col-md-12">
                <ul className="anim_div_ShowZoom style_active">
                  {categories.map((cate, i) => (
                    <React.Fragment key={i}>
                      <li
                        onClick={() => filterItems(cate)}
                        className={`${cate === activeCategory ? "active" : ""}`}
                      >
                        {cate}
                      </li>{" "}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
            <div className="cs_isotop_items_details row">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="col-md-4 cs_item cs_ui_design cs_development"
                >
                  <Link
                    href={`/portfolio-details/${item.id}`}
                    className="cs_portfolio cs_style_1"
                  >
                    <div className="cs_portfolio_img">
                      <Image src={item.img} className="img-fluid" alt="Thumb" />
                    </div>
                    <div className="cs_portfolio_overlay"></div>
                    <div className="cs_portfolio_info">
                      <h2 className="cs_portfolio_title">{item.title}</h2>
                      <div className="cs_portfolio_subtitle">{item.des}</div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="cs_height_70 cs_height_lg_30"></div>
          <div>
            <div className="cs_hero_btn_wrap text-center">
              <div className="cs_round_btn_wrap">
                <a href="#" className="cs_hero_btn cs_round_btn btn-item">
                  <span></span> Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
