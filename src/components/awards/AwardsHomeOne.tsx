"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";
import {
  FiAward,
  FiStar,
  FiAward as FiTrophy,
  FiAward as FiMedal,
} from "react-icons/fi";

const AwardsHomeOne = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { resolvedTheme } = useTheme();
  const darkMode = resolvedTheme === "dark";

  const awards = [
    {
      id: 1,
      title: "Excellence in Research",
      year: "2024",
      organization: "Global Medical Association",
      icon: <FiAward className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Innovation Award",
      year: "2023",
      organization: "Healthcare Innovation Forum",
      icon: <FiStar className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Best Medical Facility",
      year: "2023",
      organization: "International Healthcare Awards",
      icon: <FiTrophy className="w-8 h-8" />,
    },
    {
      id: 4,
      title: "Patient Care Excellence",
      year: "2022",
      organization: "Medical Excellence Society",
      icon: <FiMedal className="w-8 h-8" />,
    },
  ];

  return (
    <section
      className="relative py-20 overflow-hidden"
      aria-label="Awards Section"
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
            <span className="text-primary-700 text-sm font-medium">
              Recognition
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800  mb-4">
            Awards & Recognition
          </h2>
          <p className="text-gray-600 dark:text-gray-800 text-lg max-w-2xl mx-auto">
            Our commitment to excellence in healthcare has been recognized by
            leading organizations in the medical industry.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${
                darkMode ? "glass-dark" : "glass-light"
              } rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <div className="text-primary-800 transition-transform duration-300 group-hover:scale-110">
                  {award.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800  mb-2">
                {award.title}
              </h3>
              <p className="text-primary-700 font-medium mb-2">{award.year}</p>
              <p className="text-gray-600 dark:text-gray-400">
                {award.organization}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsHomeOne;
