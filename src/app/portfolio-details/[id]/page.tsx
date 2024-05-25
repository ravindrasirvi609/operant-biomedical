"use client";

import React from "react";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import AboutHomeFour from "@/components/about/AboutHomeFour";
import PortfolioDetailsArea from "@/components/details/PortfolioDetailsArea";

// export const metadata = {
//   title: "Portfolio Details Operant Biomedical Research Federation",
// };
interface Par {
  params: string;
}

const index = ({ params }: Par) => {
  const paramId = params;
  console.log("paramss", paramId);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioDetailsArea paramId={paramId as string} />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
