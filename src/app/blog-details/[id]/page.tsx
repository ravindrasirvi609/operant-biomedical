"use client";
import AboutHomeFour from "@/components/about/AboutHomeFour";
import BlogDetails from "@/components/details/BlogDetails";

import React from "react";

// export const metadata = {
//   title: "Blog Details Operant Biomedical Research Federation",
// };

const index = ({ params }: any) => {
  const { id } = params;

  return (
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BlogDetails id={id} />
            <AboutHomeFour />
          </main>
        </div>
      </div>
    </div>
  );
};

export default index;
