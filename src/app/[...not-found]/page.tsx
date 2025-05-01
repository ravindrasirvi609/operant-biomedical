"use client";

import React from "react";
import Error from "@/components/error";

// export const metadata = {
//   title: "404 error || Operant Biomedical Research Federation",
// };

const index = () => {
  return (
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Error />
          </main>
        </div>
      </div>
    </div>
  );
};

export default index;
