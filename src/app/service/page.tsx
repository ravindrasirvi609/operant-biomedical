"use client";

import React from "react";
import Service from "@/components/service/Service";
import Testimonial from "@/components/testimonial/Testimonial";
import AboutHomeFour from "@/components/about/AboutHomeFour";
import { motion } from "framer-motion";

// export const metadata = {
//   title: "Service Operant Biomedical Research Federation",
// };

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="overflow-hidden">
            {/* Header Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative bg-gradient-to-r from-primary-600 to-primary-500 py-24 md:py-32"
            >
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
              <div className="container mx-auto px-4 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    Our Services
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                    Explore our comprehensive range of biomedical research
                    services designed to advance scientific discovery and
                    innovation.
                  </p>
                </motion.div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Service />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Testimonial />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <AboutHomeFour />
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
