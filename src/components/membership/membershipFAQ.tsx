"use client";
import React, { useState } from "react";

interface DataType {
  id: number;
  question: string;
  ans: string;
}
const faq_data: DataType[] = [
  {
    id: 1,
    question: "Networking Opportunities",
    ans: "Connect with leading experts, peers, and potential collaborators.",
  },
  {
    id: 2,
    question: "Access to Resources",
    ans: "Exclusive research publications, databases, and cutting-edge tools.",
  },
  {
    id: 3,
    question: "Professional Development",
    ans: "Workshops, conferences, and training sessions.",
  },
  {
    id: 4,
    question: "Recognition and Credibility",
    ans: "Enhance your profile through awards, certifications, and publications.",
  },
  {
    id: 5,
    question: "Funding and Grants",
    ans: "Increased access to funding opportunities and grants.",
  },
  {
    id: 6,
    question: "Advocacy and Influence",
    ans: "Contribute to shaping policies and standards.",
  },
  {
    id: 7,
    question: "Stay Updated",
    ans: "Latest research findings, industry news, and trends.",
  },
  {
    id: 8,
    question: "Collaborative Projects",
    ans: "Engage in collaborative research projects and initiatives.",
  },
  {
    id: 9,
    question: "Ethical Guidance",
    ans: "Support and guidelines for maintaining high ethical standards.",
  },
  {
    id: 10,
    question: "Discounted Fees",
    ans: "Reduced rates for conferences, seminars, and workshops.",
  },
  {
    id: 11,
    question: "Publication Opportunities",
    ans: "Increased chances to publish in esteemed journals.",
  },
  {
    id: 12,
    question: "Special Interest Groups",
    ans: "Join niche groups focusing on specific research areas.",
  },
  {
    id: 13,
    question: "Continuing Education Credits",
    ans: "Earn credits to maintain professional certifications.",
  },
  {
    id: 14,
    question: "Leadership Roles",
    ans: "Opportunities to serve on committees and boards.",
  },
  {
    id: 15,
    question: "Exclusive Webinars",
    ans: "Access to member-only webinars and online training.",
  },
  {
    id: 16,
    question: "Awards and Honors",
    ans: "Eligibility for prestigious awards and recognitions.",
  },
  {
    id: 17,
    question: "Industry Partnerships",
    ans: "Connections with industry leaders and organizations.",
  },
  {
    id: 18,
    question: "Mentorship Programs",
    ans: "Pairing with experienced professionals for guidance.",
  },
  {
    id: 19,
    question: "Research Grants",
    ans: "Tailored grants and funding for member projects.",
  },
  {
    id: 20,
    question: "Global Reach",
    ans: "Opportunities for international collaborations and exchanges.",
  },
  {
    id: 21,
    question: "Policy Impact",
    ans: "Influence and participate in policy development and advocacy.",
  },
  {
    id: 22,
    question: "Resource Sharing",
    ans: "Access to shared research tools and resources.",
  },
  {
    id: 23,
    question: "Consultation Services",
    ans: "Expert advice and consultation from seasoned researchers.",
  },
];

const MemberFaqArea = () => {
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
            <div className="mb-1 anim_text_writting">Membership Benefits</div>
          </div>
        </div>
      </div>

      <div className="cs_height_100 cs_height_lg_60"></div>

      <div className="container">
        <div className="cs_accordeon anim_div_ShowDowns">
          <div className="row">
            {faq_data.map((item, i) => (
              <div key={i} className="col-md-6 mb-0">
                <div
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
                        transform:
                          i === activeIndex ? "rotate(-90deg)" : "none",
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
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default MemberFaqArea;
