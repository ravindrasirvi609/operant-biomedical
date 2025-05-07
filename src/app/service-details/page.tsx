"use client";

import React from "react";
import AboutHomeFour from "@/components/about/AboutHomeFour";
import DetailsBanner from "@/components/details/DetailsBanner";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import ServiceAreaDetails from "@/components/service/ServiceAreaDetails";
import { motion } from "framer-motion";

// export const metadata = {
//   title: "Service Details Operant Biomedical Research Federation",
// };

const ServiceDetailsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="overflow-hidden">
            {/* Service Details Components with Animations */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <ServiceAreaDetails />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative z-10"
            >
              <DetailsBanner />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10"
            >
              <ServiceDetailsFaq />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative z-10"
            >
              <AboutHomeFour />
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
