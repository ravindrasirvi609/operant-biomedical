"use client";

import MembershipList from "@/components/membership/member-list";
import MembershipPlanDetails from "@/components/membership/membership-plan";
import MemberFaqArea from "@/components/membership/membershipFAQ";
import React from "react";

// export const metadata = {
//   title: "Blog Details Operant Biomedical Research Federation",
// };

const MembershipPage = () => {
  return (
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="mt-5">
            <MembershipPlanDetails />
            <MemberFaqArea />
            <MembershipList />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
