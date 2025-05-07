"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus, FiSearch } from "react-icons/fi";

interface FAQItem {
  id: string;
  question: string;
  ans: string;
  category?: string;
}

const faq_data: FAQItem[] = [
  {
    id: "One",
    question: "What is the focus of Operant Biomedical Research Federation?",
    ans: "Operant Biomedical Research Federation focuses on collaborative biomedical research to drive innovation and advancements in healthcare.",
    category: "General",
  },
  {
    id: "Two",
    question:
      "How can I become a member of Operant Biomedical Research Federation?",
    ans: "To become a member, please visit our membership page and follow the registration process. We welcome Academicians, Researchers, Scientists, Clinicians, and Industry Professionals.",
    category: "Membership",
  },
  {
    id: "Three",
    question:
      "What educational initiatives does Operant Biomedical Research Federation offer?",
    ans: "Operant Biomedical Research Federation provides educational initiatives, mentorship programs, and funding opportunities to support future biomedical researchers.",
    category: "Education",
  },
  {
    id: "Four",
    question:
      "How does Operant Biomedical Research Federation support global health challenges?",
    ans: "We support global health challenges through interdisciplinary collaborations, strategic initiatives, and international partnerships.",
    category: "Research",
  },
  {
    id: "Five",
    question:
      "Can I contribute to Operant Biomedical Research Federation's research projects?",
    ans: "Yes, we welcome contributions from individuals and organizations. Please contact us to discuss potential collaboration opportunities.",
    category: "Collaboration",
  },
  {
    id: "Six",
    question:
      "How can I stay updated with Operant Biomedical Research Federation's latest news and events?",
    ans: "You can stay updated by subscribing to our newsletter and following us on social media platforms for the latest news, events, and research updates.",
    category: "General",
  },
];

// Categories for filtering
const categories = [
  "All",
  ...Array.from(new Set(faq_data.map((item) => item.category || "General"))),
];

const FaqArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Filter FAQs based on search and category
  const filteredFaqs = faq_data.filter((faq) => {
    const matchesSearch =
      searchTerm === "" ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.ans.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Search & Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-5 py-4 pl-12 text-gray-700 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all duration-300"
                  />
                  <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full px-5 py-4 text-gray-700 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all duration-300 appearance-none"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                    backgroundPosition: "right 1rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                    paddingRight: "2.5rem",
                  }}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Accordions */}
        <div className="grid grid-cols-1 gap-4">
          {filteredFaqs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiSearch className="w-6 h-6 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No FAQs Found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or category filter to find what you're
                looking for.
              </p>
            </motion.div>
          ) : (
            filteredFaqs.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div
                  onClick={() => toggleAccordion(i)}
                  className={`px-6 py-5 flex justify-between items-center cursor-pointer transition-colors duration-300 ${
                    i === activeIndex ? "bg-primary-50" : "hover:bg-gray-50"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {item.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 rounded-full ${
                      i === activeIndex
                        ? "bg-primary-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    } p-2 transition-colors duration-300`}
                  >
                    {i === activeIndex ? (
                      <FiMinus size={18} />
                    ) : (
                      <FiPlus size={18} />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {i === activeIndex && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 border-t border-gray-100 bg-white">
                        <p className="text-gray-600 leading-relaxed">
                          {item.ans}
                        </p>

                        {item.category && (
                          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
                            <span className="text-sm text-gray-500 mr-2">
                              Category:
                            </span>
                            <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-sm font-medium rounded-full">
                              {item.category}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FaqArea;
