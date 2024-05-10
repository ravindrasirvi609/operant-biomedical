"use client";

import AboutHomeFour from "@/components/about/AboutHomeFour";
import MembershipList from "@/components/membership/member-list";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";

// export const metadata = {
//   title: "Blog Details Operant Biomedical Research Federation",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
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
