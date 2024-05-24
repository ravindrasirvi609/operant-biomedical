"use client";
import axios from "axios";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";

interface DataType {
  _id: string;
  title: string;
  price: number;
  description: string;
}

const MembershipPlanDetails = () => {
  const [membershipPlan, setMembershipPlan] = useState<DataType[]>([]);
  useEffect(() => {
    const fetchMembershipList = async () => {
      try {
        const response = await axios.post("/api/membership/membershipList", {
          method: "POST",
        });
        setMembershipPlan(response.data.membershipPlans);
        console.log(response.data); // Handle response data as needed
      } catch (error) {
        console.error(error);
      }
    };

    fetchMembershipList(); // Call the async function
  }, []);
  return (
    <>
      <div className="cs_height_150 cs_height_lg_50"></div>
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">
              Specialization & Working Process
            </h4>
            <button className="btn btn-primary" type="button">
              <Link href={"/membership#cs_work_1"}>Become a member</Link>
            </button>
            <p className="cs_mp0 anim_text">
              There are people and organizations out there who deserve original,
              independent and high-quality Biomedical Research Knowledge in
              their lives. To understand. To stay informed. To get ahead. You
              can join them.
            </p>
            <div className="container">
              <h1 className="mt-5">Membership Benefits</h1>
              <div className="m-5">
                <h6>Networking Opportunities</h6>
                <p>
                  Connect with leading experts, peers, and potential
                  collaborators.
                </p>
              </div>
              <div className="m-5">
                <h6>Access to Resources</h6>
                <p>
                  Exclusive research publications, databases, and cutting-edge
                  tools.
                </p>
              </div>
              <div className="m-5">
                <h6>Professional Development</h6>
                <p>Workshops, conferences, and training sessions.</p>
              </div>
              <div className="m-5">
                <h6>Recognition and Credibility</h6>
                <p>
                  Enhance your profile through awards, certifications, and
                  publications.
                </p>
              </div>
              <div className="m-5">
                <h6>Funding and Grants</h6>
                <p>Increased access to funding opportunities and grants.</p>
              </div>
              <div className="m-5">
                <h6>Advocacy and Influence</h6>
                <p>Contribute to shaping policies and standards.</p>
              </div>
              <div className="m-5">
                <h6>Stay Updated</h6>
                <p>Latest research findings, industry news, and trends.</p>
              </div>
              <div className="m-5">
                <h6>Collaborative Projects</h6>
                <p>
                  Engage in collaborative research projects and initiatives.
                </p>
              </div>
              <div className="m-5">
                <h6>Ethical Guidance</h6>
                <p>
                  Support and guidelines for maintaining high ethical standards.
                </p>
              </div>
              <div className="m-5">
                <h6>Discounted Fees</h6>
                <p>Reduced rates for conferences, seminars, and workshops.</p>
              </div>
              <div className="m-5">
                <h6>Publication Opportunities</h6>
                <p>Increased chances to publish in esteemed journals.</p>
              </div>
              <div className="m-5">
                <h6>Special Interest Groups</h6>
                <p>Join niche groups focusing on specific research areas.</p>
              </div>
              <div className="m-5">
                <h6>Continuing Education Credits</h6>
                <p>Earn credits to maintain professional certifications.</p>
              </div>
              <div className="m-5">
                <h6>Leadership Roles</h6>
                <p>Opportunities to serve on committees and boards.</p>
              </div>
              <div className="m-5">
                <h6>Exclusive Webinars</h6>
                <p>Access to member-only webinars and online training.</p>
              </div>
              <div className="m-5">
                <h6>Awards and Honors</h6>
                <p>Eligibility for prestigious awards and recognitions.</p>
              </div>
              <div className="m-5">
                <h6>Industry Partnerships</h6>
                <p>Connections with industry leaders and organizations.</p>
              </div>
              <div className="m-5">
                <h6>Mentorship Programs</h6>
                <p>Pairing with experienced professionals for guidance.</p>
              </div>
              <div className="m-5">
                <h6>Research Grants</h6>
                <p>Tailored grants and funding for member projects.</p>
              </div>
              <div className="m-5">
                <h6>Global Reach</h6>
                <p>
                  Opportunities for international collaborations and exchanges.
                </p>
              </div>
              <div className="m-5">
                <h6>Policy Impact</h6>
                <p>
                  Influence and participate in policy development and advocacy.
                </p>
              </div>
              <div className="m-5">
                <h6>Resource Sharing</h6>
                <p>Access to shared research tools and resources.</p>
              </div>
              <div className="m-5" id="cs_work_1">
                <h6>Consultation Services</h6>
                <p>Expert advice and consultation from seasoned researchers.</p>
              </div>
            </div>
          </div>
          <div className="cs_height_80 cs_height_lg_40"></div>
          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {membershipPlan.map((item, i) => (
                  <Link href={`/membership/${item._id}`} key={i}>
                    <div className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide">
                      <div className="cs_card cs_style_1">
                        <div className="cs_posagation">
                          <div className="cs_work_style_1"></div>
                          <div className="cs_work_style_2"></div>
                        </div>
                        <div className="cs_stroke_number hover:bg-primary-color hover:text-white">
                          <span>{item.title}</span>
                        </div>
                      </div>

                      <h6 className="cs_work_title">{item.price} ₹/month</h6>
                      <p className="cs_work_subtitle">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MembershipPlanDetails;
