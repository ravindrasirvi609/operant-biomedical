"use client";
import axios from "axios";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import MemberFaqArea from "./membershipFAQ";

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
            <MemberFaqArea />
          </div>
          <div className="cs_height_80 cs_height_lg_40" id="cs_work_1"></div>
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
