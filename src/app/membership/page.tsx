"use client";

import AboutHomeFour from "@/components/about/AboutHomeFour";
import MembershipList from "@/components/membership/member-list";
import MembershipPlanDetails from "@/components/membership/membership-plan";

import React from "react";

// export const metadata = {
//   title: "Blog Details Operant Biomedical Research Federation",
// };

const index = () => {
  return (
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="mt-5">
            <MembershipPlanDetails />
            <MembershipList />
            <AboutHomeFour />
          </main>
        </div>
      </div>
    </div>
  );
};

export default index;
