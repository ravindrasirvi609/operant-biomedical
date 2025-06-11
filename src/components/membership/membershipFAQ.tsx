"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

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
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="container">
        <div
          ref={ref}
          className={`text-center mb-12 ${
            inView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
            <span className="text-primary-600 dark:text-primary-300 text-sm font-medium">
              Membership Benefits
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Join Our Community?
          </h2>
          <p className="text-gray-600 dark:text-white/80 text-lg max-w-2xl mx-auto">
            Discover the exclusive benefits and opportunities that come with
            being a member of our research community.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faq_data.map((item, i) => (
            <div
              key={i}
              className={`transform transition-all duration-300 ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                onClick={() => toggleAccordion(i)}
                className={`glass-dark rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  i === activeIndex ? "ring-2 ring-primary-500" : ""
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-primary-600 dark:text-primary-400 transform transition-transform duration-300 ${
                        i === activeIndex ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <div
                    className={`mt-4 text-gray-600 dark:text-white/80 transition-all duration-300 ${
                      i === activeIndex
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {item.ans}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-24 md:h-16"></div>
    </>
  );
};

export default MemberFaqArea;
