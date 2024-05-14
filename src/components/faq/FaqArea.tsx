"use client";
import React, { useState } from "react";

interface DataType {
  id: string;
  question: string;
  ans: string;
}
const faq_data: DataType[] = [
  {
    id: "One",
    question: "What is the focus of Operant Biomedical Research Federation?",
    ans: "Operant Biomedical Research Federation focuses on collaborative biomedical research to drive innovation and advancements in healthcare.",
  },
  {
    id: "Two",
    question:
      "How can I become a member of Operant Biomedical Research Federation?",
    ans: "To become a member, please visit our membership page and follow the registration process. We welcome Academicians, Researchers, Scientists, Clinicians, and Industry Professionals.",
  },
  {
    id: "Three",
    question:
      "What educational initiatives does Operant Biomedical Research Federation offer?",
    ans: "Operant Biomedical Research Federation provides educational initiatives, mentorship programs, and funding opportunities to support future biomedical researchers.",
  },
  {
    id: "Four",
    question:
      "How does Operant Biomedical Research Federation support global health challenges?",
    ans: "We support global health challenges through interdisciplinary collaborations, strategic initiatives, and international partnerships.",
  },
  {
    id: "Five",
    question:
      "Can I contribute to Operant Biomedical Research Federation's research projects?",
    ans: "Yes, we welcome contributions from individuals and organizations. Please contact us to discuss potential collaboration opportunities.",
  },
  {
    id: "Six",
    question:
      "How can I stay updated with Operant Biomedical Research Federation's latest news and events?",
    ans: "You can stay updated by subscribing to our newsletter and following us on social media platforms for the latest news, events, and research updates.",
  },
];

const FaqArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_text">
            <div className="mb-3 anim_text_writting">FAQ</div>
            <h2 className="cs_section_title anim_text_writting">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
      </div>

      <div className="cs_height_100 cs_height_lg_60"></div>

      <div className="container">
        <div className="cs_accordeon anim_div_ShowDowns">
          {faq_data.map((item, i) => (
            <div
              key={i}
              onClick={() => toggleAccordion(i)}
              className={`cs_accordion_item cs_color_1 ${
                i === activeIndex ? "active cs_icon" : ""
              }`}
            >
              <div className="cs_accordion_header">
                <p
                  className="cs_accordion_title cs_m0"
                  id={`heading${item.id}`}
                >
                  {item.question}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  width="30"
                  style={{
                    transform: i === activeIndex ? "rotate(-90deg)" : "none",
                  }}
                >
                  <path
                    style={{ fill: `#ffffff` }}
                    d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                    data-name="Right"
                  />
                </svg>
              </div>

              <div
                className={`cs_accordion_body ${
                  i === activeIndex ? "" : "d-none"
                }`}
              >
                {item.ans}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default FaqArea;
