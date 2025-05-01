"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiAward, FiUsers, FiGlobe, FiTrendingUp } from "react-icons/fi";

const MarqueeAreaHomeOne = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const partners = [
    {
      id: 1,
      name: "Medical Research Institute",
      logo: "/images/partners/partner-1.png",
      description: "Leading medical research institution",
      icon: <FiAward className="w-6 h-6 text-primary-400" />,
    },
    {
      id: 2,
      name: "Healthcare Innovation Center",
      logo: "/images/partners/partner-2.png",
      description: "Pioneering healthcare solutions",
      icon: <FiTrendingUp className="w-6 h-6 text-primary-400" />,
    },
    {
      id: 3,
      name: "Biomedical Research Foundation",
      logo: "/images/partners/partner-3.png",
      description: "Advancing biomedical research",
      icon: <FiUsers className="w-6 h-6 text-primary-400" />,
    },
    {
      id: 4,
      name: "Clinical Research Network",
      logo: "/images/partners/partner-4.png",
      description: "Global clinical research network",
      icon: <FiGlobe className="w-6 h-6 text-primary-400" />,
    },
    {
      id: 5,
      name: "Medical Technology Alliance",
      logo: "/images/partners/partner-5.png",
      description: "Innovative medical technology",
      icon: <FiAward className="w-6 h-6 text-primary-400" />,
    },
  ];

  if (!isMounted) return null;

  return (
    <section
      className="relative py-20 overflow-hidden"
      aria-label="Partners Section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
            <span className="text-primary-300 text-sm font-medium">
              Our Partners
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Trusted by Leading Medical Institutions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We collaborate with prestigious medical institutions and research
            centers worldwide to advance healthcare innovation.
          </p>
        </motion.div>

        <div ref={ref} className="relative overflow-hidden">
          <div className="flex space-x-12 animate-marquee">
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-64 h-32 relative glass-dark rounded-xl p-6 transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 rounded-lg bg-white/10 dark:bg-gray-800/10 p-3 group-hover:bg-primary-500/10 transition-colors duration-300">
                    {partner.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-primary-500 transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            {
              number: "50+",
              label: "Research Partners",
              icon: <FiAward className="w-8 h-8 text-primary-400" />,
            },
            {
              number: "100+",
              label: "Publications",
              icon: <FiTrendingUp className="w-8 h-8 text-primary-400" />,
            },
            {
              number: "25+",
              label: "Countries",
              icon: <FiGlobe className="w-8 h-8 text-primary-400" />,
            },
            {
              number: "1000+",
              label: "Researchers",
              icon: <FiUsers className="w-8 h-8 text-primary-400" />,
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center glass-dark rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2 group-hover:text-primary-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeAreaHomeOne;
