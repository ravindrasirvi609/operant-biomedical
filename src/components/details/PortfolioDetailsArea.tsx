"use client";

import React from "react";
import Image from "next/image";
import portfolio_data from "@/data/portfolio_data";

const PortfolioDetailsArea = ({ paramId }: any) => {
  const project = portfolio_data.find((project) => project.id == paramId.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                {project.title}
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_100 cs_height_lg_60"></div>

      <section>
        <div className="container">
          <div className="anim_blog">
            <div className="cs_portfolio_details">
              <div className="row">
                <div className="col-md-4">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Collaborator</p>
                    <h6 className="cs_title_text">{project.client}</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Services</p>
                    <h6 className="cs_title_text">{project.services}</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Date</p>
                    <h6 className="cs_title_text">{project.date}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_75 cs_height_lg_45"></div>

      <section>
        <div className="container">
          <div className="cs_portfolio_details">
            <div className="reveal">
              <Image src={project.images[0]} alt="protfolio_details_1" />
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="anim_div_ShowDowns">
              <div className="cs_img_show_text cs_text_style_1">
                <h4 className="cs_heading_text anim_heading_title">
                  Objectives
                </h4>
                <p className="cs_text_style_body">{project.des}</p>
              </div>
              <div className="cs_ul_ml">
                <ul>
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_75 cs_height_lg_45"></div>

      <div className="container">
        <div className="d-flex gap-2 gap-md-5">
          <div className="reveal">
            <Image src={project.images[1]} alt="portfoliodetails_2" />
          </div>
          <div className="reveal">
            <Image src={project.images[2]} alt="portfoliodetails_1" />
          </div>
        </div>
      </div>
      <div className="cs_height_150 cs_height_lg_60"></div>

      <section>
        <div>
          <div className="container">
            <div className="cs_portfolio_details">
              <div className="cs_solutions_section anim_div_ShowDowns">
                <div>
                  <h4 className="cs_heading_text anim_heading_title">
                    Key Takeaways:{" "}
                  </h4>
                  <p className="cs_text_style_body">{project.solutions[0]}</p>
                  <p className="cs_text_style_body">{project.solutions[1]}</p>
                </div>
                <div className="cs_solutions_section_img_show">
                  <div className="portfolio_solution_1 reveal">
                    <Image src={project.images[3]} alt="portfolio_solution_1" />
                  </div>
                  <div className="portfolio_solution_2 reveal">
                    <Image src={project.images[4]} alt="portfolio_solution_2" />
                  </div>
                  <div className="portfolio_solution_3 reveal">
                    <Image src={project.images[5]} alt="portfolio_solution_3" />
                  </div>
                </div>
                <div className="cs_img_footer_title cs_color_1 anim_text_upanddowns">
                  <p>The End - thank you stay with us!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="cs_portfolio_details">
          <div className="cs_section_next_prv anim_div_ShowZoom">
            <div className="cs_prv_btn">
              <a href="#">Previous</a>
            </div>
            <div>|</div>
            <div className="cs_next">
              <a href="#">Next Project</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsArea;
