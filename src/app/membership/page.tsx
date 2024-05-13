"use client";

import AboutHomeFour from "@/components/about/AboutHomeFour";
import MembershipList from "@/components/membership/member-list";
import MembershipPlanDetails from "@/components/membership/membership-plan";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import axios from "axios";
import React, { useEffect } from "react";

// export const metadata = {
//   title: "Blog Details Operant Biomedical Research Federation",
// };

const index = () => {
  useEffect(() => {
    const getMembershipDetails = async () => {
      try {
        const response = await axios.get(
          "/api/membershipPlan/membershipPlanList"
        );
        console.log(response.data.membershipPlans);
      } catch (error) {
        console.error(error);
      }
    };

    getMembershipDetails();
  }, []);
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <MembershipPlanDetails />
            <MembershipList />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
