"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiUsers, FiAward, FiGlobe, FiTrendingUp } from "react-icons/fi";

const FunFactHomeOne = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const facts = [
    {
      id: 1,
      number: "500+",
      title: "Research Projects",
      description: "Successfully completed medical research projects",
      icon: <FiTrendingUp className="w-8 h-8" />,
    },
    {
      id: 2,
      number: "1000+",
      title: "Healthcare Professionals",
      description: "Trained and certified medical experts",
      icon: <FiUsers className="w-8 h-8" />,
    },
    {
      id: 3,
      number: "50+",
      title: "Global Partners",
      description: "International healthcare institutions",
      icon: <FiGlobe className="w-8 h-8" />,
    },
    {
      id: 4,
      number: "25+",
      title: "Awards",
      description: "Recognitions for excellence in healthcare",
      icon: <FiAward className="w-8 h-8" />,
    },
  ];

  return (
    <section
      className="relative py-20 overflow-hidden"
      aria-label="Fun Facts Section"
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
              Our Impact
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Making a Difference in Healthcare
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our commitment to excellence has led to significant achievements in
            medical research and healthcare innovation.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {facts.map((fact, index) => (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-[#328E6E]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <div className="text-[#328E6E] transition-transform duration-300 group-hover:scale-110">
                  {fact.icon}
                </div>
              </div>
              <h3 className="text-4xl font-bold text-[#328E6E] mb-2">
                {fact.number}
              </h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {fact.title}
              </h4>
              <p className="text-gray-600">{fact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactHomeOne;
