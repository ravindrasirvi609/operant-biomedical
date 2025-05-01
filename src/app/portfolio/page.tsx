"use client";

import AboutHomeFour from "@/components/about/AboutHomeFour";
import Portfolio from "@/components/portfolio/Portfolio";

import React from "react";

// export const metadata = {
//   title: "Portfolio Operant Biomedical Research Federation",
// };

const index = () => {
  return (
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Portfolio />
            <AboutHomeFour />
          </main>
        </div>
      </div>
    </div>
  );
};

export default index;
