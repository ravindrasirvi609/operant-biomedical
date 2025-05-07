"use client";

import AboutHomeFour from "@/components/about/AboutHomeFour";
import Portfolio from "@/components/portfolio/Portfolio";
import { motion } from "framer-motion";
import React from "react";

// export const metadata = {
//   title: "Portfolio Operant Biomedical Research Federation",
// };

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Portfolio />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AboutHomeFour />
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
