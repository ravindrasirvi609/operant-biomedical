"use client";

import MembersForm from "@/components/membership/memberForm";
import React from "react";

// export const metadata = {
//   title: "Blog Details Operant Biomedical Research Federation",
// };

const index = ({ params }: any) => {
  const pramsId = params;

  return (
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <MembersForm pramsId={pramsId} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default index;
