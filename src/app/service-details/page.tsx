"use client";

import AboutHomeFour from "@/components/about/AboutHomeFour";
import DetailsBanner from "@/components/details/DetailsBanner";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import ServiceAreaDetails from "@/components/service/ServiceAreaDetails";

import React from "react";

// export const metadata = {
//   title: "Service Details Operant Biomedical Research Federation",
// };

const index = () => {
  return (
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ServiceAreaDetails />
            <DetailsBanner />
            <ServiceDetailsFaq />
            <AboutHomeFour />
          </main>
        </div>
      </div>
    </div>
  );
};

export default index;
