"use client";

import AboutHomeFour from "@/components/about/AboutHomeFour";
import BlogArea from "@/components/blog/BlogArea";

import React from "react";

// export const metadata = {
//   title: "Blog Operant Biomedical Research Federation",
// };

const index = () => {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <BlogArea />
          <AboutHomeFour />
        </main>
      </div>
    </div>
  );
};

export default index;
