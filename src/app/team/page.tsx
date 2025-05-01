"use client";
import React from "react";
import TeamArea from "@/components/team/TeamArea";

import AboutHomeFour from "@/components/about/AboutHomeFour";

// export const metadata = {
//   title: "Team Operant Biomedical Research Federation",
// };

const index = () => {
  return (
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <TeamArea />
            <AboutHomeFour />
          </main>
        </div>
      </div>
    </div>
  );
};

export default index;
