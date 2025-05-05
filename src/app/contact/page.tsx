"use client";

import ContactArea from "@/components/contact/ContactArea";
import React from "react";

// export const metadata = {
//   title: "Contact Operant Biomedical Research Federation",
// };

const index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="overflow-hidden">
            <ContactArea />
          </main>
        </div>
      </div>
    </div>
  );
};

export default index;
