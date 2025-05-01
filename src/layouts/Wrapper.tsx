"use client";

import { useEffect } from "react";
import ScrollToTop from "@/components/common/ScrollToTop";

const Wrapper = ({ children }: any) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {children}
      <ScrollToTop />
    </div>
  );
};

export default Wrapper;
