"use client";

import FaqArea from "@/components/faq/FaqArea";
import React from "react";
import { motion } from "framer-motion";

// export const metadata = {
//   title: "Faq Operant Biomedical Research Federation",
// };

const FaqPage = () => {
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
                    Frequently Asked Questions
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                    Find answers to common questions about our federation,
                    research initiatives, and collaborative opportunities.
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
                <FaqArea />
              </motion.div>

              {/* Contact CTA Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-20 bg-gray-50"
              >
                <div className="container mx-auto px-4">
                  <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Still Have Questions?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                      If you couldn't find the answer to your question, please
                      don't hesitate to contact our team. We're here to help and
                      provide the information you need.
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-colors duration-300"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </motion.section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
