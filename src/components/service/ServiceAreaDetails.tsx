import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiBriefcase, FiPenTool, FiCode, FiCheckCircle } from "react-icons/fi";

interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const service_data: ServiceType[] = [
  {
    id: "one",
    title: "Understand",
    description: `We begin by deeply understanding your research goals, requirements, and challenges to establish a solid foundation for our collaboration.`,
    icon: <FiBriefcase size={24} />,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "two",
    title: "Design",
    description: `Our experts design comprehensive research plans and methodologies tailored to your specific needs and objectives.`,
    icon: <FiPenTool size={24} />,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "three",
    title: "Development",
    description: `We develop and implement innovative research protocols, tools, and frameworks to drive your biomedical research forward.`,
    icon: <FiCode size={24} />,
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: "four",
    title: "Testing",
    description: `Rigorous testing and validation ensure accuracy, reliability, and compliance with industry standards throughout your research process.`,
    icon: <FiCheckCircle size={24} />,
    color: "from-red-500 to-rose-600",
  },
];

// Service benefits
const benefits = [
  "Access to specialized expertise and cutting-edge technology",
  "Collaborative approach with dedicated research teams",
  "Customized solutions tailored to specific research needs",
  "Comprehensive support throughout the research lifecycle",
  "Data-driven insights and evidence-based methodologies",
  "Compliance with regulatory requirements and ethical standards",
];

const ServiceAreaDetails = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-500 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <span className="text-white/90 text-sm font-medium">
                  Expert Biomedical Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Specialized Research Services & Working Process
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Our specialized biomedical research services provide
                comprehensive solutions tailored to meet your specific research
                needs and objectives.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium shadow-lg">
                  Explore Services
                </button>
                <button className="px-8 py-4 bg-transparent text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors duration-300 font-medium">
                  Contact Us
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[400px] w-full">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-300/20 rounded-full"></div>
                  <div className="absolute -left-10 -top-10 w-40 h-40 bg-primary-300/20 rounded-full"></div>
                </div>
                <div className="relative h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                      <FiBriefcase className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Expert Research Teams
                    </h3>
                    <p className="text-white/80">
                      Our specialized teams bring years of experience and
                      expertise to every research project we undertake.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
              <span className="text-primary-500 text-sm font-medium">
                Our Approach
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Working Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure high-quality research
              outcomes and successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service_data.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline connector */}
                {index < service_data.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0">
                    <div className="absolute right-0 -top-1.5 h-3 w-3 rounded-full bg-primary-500"></div>
                  </div>
                )}

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative z-10 border border-gray-100">
                  {/* Step number */}
                  <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white flex items-center justify-center font-bold shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-r ${item.color} text-white flex items-center justify-center mb-6 shadow-md`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
                <span className="text-primary-500 text-sm font-medium">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Benefits of Our Research Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive approach to biomedical research provides
                numerous advantages that help drive innovation and accelerate
                scientific discovery.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center mr-3 mt-1">
                      <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5L4 8L11 1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] hidden lg:block"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-500/5 backdrop-blur-sm"></div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 p-8 h-full relative">
                  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center transform hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center mb-4">
                      <FiBriefcase className="text-primary-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Expert Teams
                    </h3>
                    <p className="text-sm text-gray-600">
                      Specialized researchers with domain expertise
                    </p>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center transform hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center mb-4">
                      <FiPenTool className="text-primary-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Tailored Approach
                    </h3>
                    <p className="text-sm text-gray-600">
                      Customized solutions for unique challenges
                    </p>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center transform hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center mb-4">
                      <FiCode className="text-primary-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Modern Tools
                    </h3>
                    <p className="text-sm text-gray-600">
                      Cutting-edge technologies and methodologies
                    </p>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center transform hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center mb-4">
                      <FiCheckCircle className="text-primary-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Quality Assurance
                    </h3>
                    <p className="text-sm text-gray-600">
                      Rigorous standards and validation processes
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaDetails;
