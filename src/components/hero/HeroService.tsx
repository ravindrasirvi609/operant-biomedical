import React from "react";
import Link from "next/link";

interface DataType {
  id: number;
  title: string;
  description: string;
}

const banner_data: DataType[] = [
  {
    id: 1,
    title: "International Experience Program (IEP)",
    description:
      "The International Experience Program (IEP) is a comprehensive initiative designed to provide individuals with opportunities to gain valuable cross-cultural exposure and professional development in international settings.",
  },
  {
    id: 2,
    title: "Research Collaboration",
    description:
      "Research Collaboration facilitates the pooling of expertise, resources, and perspectives from diverse institutions and individuals to tackle complex scientific challenges and drive innovation.",
  },
  {
    id: 3,
    title: "Consultation & Expertise, Regulatory Guidance",
    description:
      "Consultation & Expertise, Regulatory Guidance provides tailored support and insights to navigate the intricate landscape of regulations, ensuring compliance and facilitating the development and execution of successful strategies in various research projects.",
  },
  {
    id: 4,
    title: "Conferences, Guest Lectures, Training & Workshop",
    description:
      "Conferences, Guest Lectures, Training & Workshops offer dynamic platforms for knowledge exchange, skill development, and networking, fostering professional growth and innovation in diverse fields.",
  },
  {
    id: 5,
    title: "Research Grant and Funding assistance",
    description:
      "Our Research Grant and Funding Assistance service acts as your strategic partner, unlocking avenues to financial support for your groundbreaking research endeavors. With a blend of expertise and ingenuity, we craft compelling narratives, leveraging your vision to captivate funding bodies. From identifying the perfect funding source to meticulous proposal refinement, we're your allies in securing the resources needed to drive innovation and shape the future of science.",
  },
  {
    id: 6,
    title: "Publication Support",
    description:
      "Publication Support offers customized services to enhance academic publishing endeavors, ranging from refining manuscripts to selecting appropriate journals, with the goal of enhancing research impact on a global scale. Through their innovative strategies, researchers can craft compelling narratives that leave a lasting academic footprint.",
  },
  {
    id: 7,
    title: "Intellectual Property Protection",
    description:
      "Intellectual Property Protection safeguards your innovative ideas and creations through strategic legal measures, preserving their value and ensuring your rightful ownership in the competitive landscape.",
  },
  {
    id: 8,
    title: "Customised Research",
    description:
      "Customized Biomedical Research tailors scientific inquiries to specific needs, leveraging advanced methodologies to address unique challenges and drive transformative advancements in healthcare.",
  },
  {
    id: 9,
    title: "Ethical Review Support",
    description:
      "Ethical Review Support offers comprehensive assistance in navigating ethical considerations, ensuring research protocols align with regulatory standards and uphold the highest ethical principles.",
  },
  {
    id: 10,
    title: "Educational Technology Support",
    description:
      "Educational Technology Support provides tailored solutions and guidance to integrate innovative educational technologies seamlessly into learning environments, enhancing engagement and optimizing learning outcomes.",
  },
  {
    id: 11,
    title: "Co—curricular Activities",
    description:
      "End-to-end Co-curricular Activities orchestrate comprehensive programs, from conceptualization to execution, fostering holistic development and enriching experiences beyond the classroom.",
  },
  {
    id: 12,
    title: "Accreditation Support",
    description:
      "Accreditation Support streamlines the accreditation process, offering expert guidance and resources to ensure compliance with standards, ultimately enhancing credibility and quality assurance.",
  },
  {
    id: 13,
    title: "International Collaboration",
    description:
      "International Collaboration facilitates cross-border partnerships, harnessing diverse expertise and perspectives to drive innovation, expand networks, and tackle global challenges collaboratively.",
  },
];

const HeroService = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section className="position-relative">
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_word_writting">
                Discover Our Comprehensive Range of Professional Services{" "}
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_card_1_list">
            {banner_data.map((item, i) => (
              <div key={i} className="cs_card cs_style_1 anim_div_ShowDowns">
                <div className="cs_card_left">
                  <div
                    className="cs_card_number cs_primary_font"
                    style={{
                      backgroundImage: `url('/assets/img/hero_img_1.jpg')`,
                    }}
                  >
                    0{i + 1}
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title">
                      {/* <Link href="/service-details">{item.title}</Link> */}
                    </h2>
                    <div className="cs_card_subtitle">{item.description}</div>
                  </div>
                </div>
                <div className="cs_card_link_wrap">
                  {/* <Link href="/service-details" className="cs_card_link">
                    <span>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroService;
