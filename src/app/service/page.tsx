"use client";

import AboutHomeFour from "@/components/about/AboutHomeFour";
import Footer from "@/components/common/Footer";
import Service from "@/components/service/Service";
import Testimonial from "@/components/testimonial/Testimonial";

import React from "react";

// export const metadata = {
//   title: "Service Operant Biomedical Research Federation",
// };

const index = () => {
  return (
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Service />
            <Testimonial />
            <AboutHomeFour />
          </main>
        </div>
      </div>
    </div>
  );
};

export default index;
