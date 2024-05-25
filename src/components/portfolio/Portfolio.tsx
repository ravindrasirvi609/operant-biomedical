"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

interface DataType {
  id: string; // Changed to string as MongoDB IDs are strings
  category: string;
  img: string; // Use string for URLs
  title: string;
  des: string;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState<DataType[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const res = await axios.get("/api/portfolio/portfolio-list"); // Corrected API endpoint
        const data = res.data.portfolios;

        const formattedData: DataType[] = data.map((item: any) => ({
          id: item._id,
          category: item.category,
          img: item.images[0],
          title: item.title,
          des: item.des,
        }));

        setItems(formattedData);

        const uniqueCategories: string[] = [
          "All",
          ...new Set(
            formattedData.map((item: { category: any }) => item.category)
          ),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPortfolios();
  }, []);

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
    if (cateItem === "All") {
      return setItems(items); // Show all items
    } else {
      const filteredItems = items.filter((item) => item.category === cateItem);
      setItems(filteredItems);
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
                Showcasing Innovative Projects and Achievements with Pride
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
                      </li>
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
                      <Image
                        src={item.img}
                        className="img-fluid"
                        alt="Thumb"
                        width={500}
                        height={300}
                      />
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
