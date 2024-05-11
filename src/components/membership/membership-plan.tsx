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
    const getMembershipDetails = async () => {
      try {
        const response = await axios.post(
          "/api/membershipPlan/membershipPlanList"
        );
        setMembershipPlan(response.data.membershipPlans);
        console.log(response.data.membershipPlans);
      } catch (error) {
        console.error(error);
      }
    };

    getMembershipDetails();
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
            <p className="cs_mp0 anim_text">
              Welcome to our digital agency! We specialize in helping businesses
              like yours succeed online. From website design and development to
              digital marketing and advertising, we have the tools and expertise
              to elevate your online presence.
            </p>
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
                        <div className="cs_stroke_number">
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
