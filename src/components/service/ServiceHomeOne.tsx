"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiActivity,
  FiUsers,
  FiTrendingUp,
  FiGlobe,
  FiAward,
  FiLayers,
} from "react-icons/fi";

const ServiceHomeOne = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const services = [
    {
      id: 1,
      title: "Research & Development",
      description:
        "Cutting-edge research facilities and collaborative projects in medical science.",
      icon: <FiLayers className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Clinical Trials",
      description:
        "Comprehensive support for clinical research and trial management.",
      icon: <FiActivity className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Professional Training",
      description: "Advanced training programs for healthcare professionals.",
      icon: <FiUsers className="w-8 h-8" />,
    },
    {
      id: 4,
      title: "Innovation Support",
      description:
        "Resources and guidance for medical innovation and technology.",
      icon: <FiTrendingUp className="w-8 h-8" />,
    },
    {
      id: 5,
      title: "Global Collaboration",
      description: "International partnerships and research networks.",
      icon: <FiGlobe className="w-8 h-8" />,
    },
    {
      id: 6,
      title: "Quality Assurance",
      description: "Rigorous standards and certification programs.",
      icon: <FiAward className="w-8 h-8" />,
    },
  ];

  return (
    <section
      className="relative py-20 overflow-hidden"
      aria-label="Services Section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#328E6E]/5 to-[#67AE6E]/5" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#328E6E]/10 rounded-full mb-4">
            <span className="text-[#328E6E] text-sm font-medium">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We provide a wide range of services to support medical research,
            innovation, and professional development.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-[#328E6E]/10 rounded-xl flex items-center justify-center mb-6">
                <div className="text-[#328E6E] transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHomeOne;
