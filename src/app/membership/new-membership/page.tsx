"use client";

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
            <h1 className="cs_height_219 cs_height_lg_120">
              MemberShip Students
            </h1>
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
