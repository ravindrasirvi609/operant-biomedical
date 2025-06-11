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
    title: "International Experience Program (IEP)",
    description:
      "The International Experience Program (IEP) is a comprehensive initiative designed to provide individuals with opportunities to gain valuable cross-cultural exposure and professional development in international settings.",
    features: [
      "Cross-cultural exposure",
      "Professional development",
      "International networking",
      "Global perspective building",
    ],
  },
  {
    title: "Precision Research Collaboration",
    description:
      "Precision Research Collaboration facilitates the pooling of expertise, resources, and perspectives from diverse institutions and individuals to tackle complex scientific challenges and drive innovation.",
    features: [
      "Expertise pooling",
      "Resource sharing",
      "Multi-institutional collaboration",
      "Innovation acceleration",
    ],
  },
  {
    title: "Conferences & Training",
    description:
      "Conferences, Guest Lectures, Training & Workshops offer dynamic platforms for knowledge exchange, skill development, and networking, fostering professional growth and innovation in diverse fields.",
    features: [
      "Knowledge exchange",
      "Skill development",
      "Professional networking",
      "Innovation workshops",
    ],
  },
  {
    title: "Research Grant & Funding",
    description:
      "Our Research Grant and Funding Assistance service acts as your strategic partner, unlocking avenues to financial support for your groundbreaking research endeavors.",
    features: [
      "Funding identification",
      "Proposal development",
      "Strategic planning",
      "Resource optimization",
    ],
  },
  {
    title: "Publication Support",
    description:
      "Publication Support offers customized services to enhance academic publishing endeavors, ranging from refining manuscripts to selecting appropriate journals, with the goal of enhancing research impact on a global scale.",
    features: [
      "Manuscript refinement",
      "Journal selection",
      "Impact optimization",
      "Global reach enhancement",
    ],
  },
  {
    title: "Regulatory Guidance",
    description:
      "Consultation & Expertise, Regulatory Guidance provides tailored support and insights to navigate the intricate landscape of regulations, ensuring compliance and facilitating successful strategies.",
    features: [
      "Compliance assurance",
      "Regulatory navigation",
      "Strategic planning",
      "Expert consultation",
    ],
  },
  {
    title: "Intellectual Property Protection",
    description:
      "Intellectual Property Protection safeguards your innovative ideas and creations through strategic legal measures, preserving their value and ensuring your rightful ownership.",
    features: [
      "IP strategy development",
      "Legal protection",
      "Value preservation",
      "Ownership assurance",
    ],
  },
  {
    title: "Customized Research",
    description:
      "Customized Biomedical Research tailors scientific inquiries to specific needs, leveraging advanced methodologies to address unique challenges and drive transformative advancements in healthcare.",
    features: [
      "Tailored methodologies",
      "Specific solutions",
      "Advanced techniques",
      "Healthcare innovation",
    ],
  },
  {
    title: "Ethical Review Support",
    description:
      "Ethical Review Support offers comprehensive assistance in navigating ethical considerations, ensuring research protocols align with regulatory standards and uphold the highest ethical principles.",
    features: [
      "Ethical compliance",
      "Protocol review",
      "Standards alignment",
      "Best practices guidance",
    ],
  },
  {
    title: "Educational Technology",
    description:
      "Educational Technology Support provides tailored solutions and guidance to integrate innovative educational technologies seamlessly into learning environments, enhancing engagement and optimizing learning outcomes.",
    features: [
      "Tech integration",
      "Learning optimization",
      "Engagement enhancement",
      "Innovative solutions",
    ],
  },
  {
    title: "Co-curricular Activities",
    description:
      "End-to-end Co-curricular Activities orchestrate comprehensive programs, from conceptualization to execution, fostering holistic development and enriching experiences beyond the classroom.",
    features: [
      "Program development",
      "Holistic growth",
      "Experience enrichment",
      "Comprehensive planning",
    ],
  },
  {
    title: "Accreditation Support",
    description:
      "Accreditation Support streamlines the accreditation process, offering expert guidance and resources to ensure compliance with standards, ultimately enhancing credibility and quality assurance.",
    features: [
      "Process streamlining",
      "Standards compliance",
      "Quality assurance",
      "Expert guidance",
    ],
  },
  {
    title: "International Collaboration",
    description:
      "International Collaboration facilitates cross-border partnerships, harnessing diverse expertise and perspectives to drive innovation, expand networks, and tackle global challenges collaboratively.",
    features: [
      "Cross-border partnerships",
      "Global networking",
      "Innovation facilitation",
      "Collaborative solutions",
    ],
  },
  {
    title: "Clinical Trial Optimization",
    description:
      "Accelerate the pace of biomedical discovery with our Clinical Trial Optimization Solutions.",
    features: [
      "Trial acceleration",
      "Process optimization",
      "Efficiency enhancement",
      "Discovery acceleration",
    ],
  },
  {
    title: "Translational Research",
    description:
      "Bridge the gap between bench and bedside with our Translational Research Support Services.",
    features: [
      "Research translation",
      "Clinical application",
      "Implementation support",
      "Innovation bridging",
    ],
  },
  {
    title: "Data Analytics & Biostatistics",
    description:
      "Harness the power of data to drive biomedical innovation with our Data Analytics and Biostatistics Consulting services.",
    features: [
      "Advanced analytics",
      "Statistical consulting",
      "Data-driven insights",
      "Innovation support",
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
