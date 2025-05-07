import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiActivity,
  FiClipboard,
  FiFileText,
  FiTarget,
} from "react-icons/fi";

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
    title: "Requirement Understanding",
    description: `Analyze needs, gather specifications, clarify objectives, ensure comprehension, validate with stakeholders, and document requirements thoroughly.`,
    icon: <FiActivity size={24} />,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "two",
    title: "Memorandum of Understanding (MoU) Signing",
    description: `Memorandum of Understanding (MoU) signing formalizes roles, responsibilities, and objectives between both collaborating parties.`,
    icon: <FiFileText size={24} />,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "three",
    title: "Proposal and Planning Phase",
    description: `Proposal and Planning Phase involves developing detailed plans, allocating resources, setting timelines, and securing stakeholder approval.`,
    icon: <FiClipboard size={24} />,
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: "four",
    title: "Implementation Phase",
    description: `Execute plan, monitor progress, adjust as needed, meet milestones, document outcomes, and ensure quality standards.`,
    icon: <FiTarget size={24} />,
    color: "from-red-500 to-rose-600",
  },
];

// Additional services for the extra section
const additional_services = [
  {
    title: "Research Collaboration",
    description:
      "Partner with leading institutions on cutting-edge biomedical research initiatives.",
    features: [
      "Access to specialized expertise",
      "Shared resources and infrastructure",
      "Joint publication opportunities",
      "Multi-disciplinary research teams",
    ],
  },
  {
    title: "Data Analysis",
    description:
      "Comprehensive data processing and analytical services for biomedical research.",
    features: [
      "Advanced statistical analysis",
      "Machine learning implementation",
      "Visualization of complex datasets",
      "Customized analytical pipelines",
    ],
  },
  {
    title: "Clinical Trials Support",
    description:
      "End-to-end support for planning and executing clinical trials.",
    features: [
      "Protocol development",
      "Regulatory compliance",
      "Patient recruitment strategies",
      "Data collection and management",
    ],
  },
];

const Service = () => {
  return (
    <>
      {/* Process Timeline Section */}
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
                Our Process
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Working Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach to deliver exceptional results through
              collaboration and innovation
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

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative z-10">
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

      {/* Additional Services Section */}
      <section className="py-20 bg-gray-50">
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
                What We Offer
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Specialized Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet the diverse needs of
              biomedical research
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additional_services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                    <FiCheckCircle className="w-8 h-8 text-primary-500 group-hover:text-white transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-primary-500 mr-2 mt-1">
                        <FiCheckCircle className="w-4 h-4" />
                      </span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors duration-300"
                >
                  Learn More <FiArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-500 relative">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Research Journey?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Contact us today to discuss how our services can support your
                biomedical research goals
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Get in Touch
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
