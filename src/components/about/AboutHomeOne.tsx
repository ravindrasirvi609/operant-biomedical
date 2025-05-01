"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FiAward, FiUsers, FiTrendingUp } from "react-icons/fi";

const AboutHomeOne = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const features = [
    {
      id: 1,
      title: "Research Excellence",
      description:
        "Access state-of-the-art research facilities and collaborate with leading medical professionals.",
      icon: <FiAward className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Professional Network",
      description:
        "Connect with a global network of healthcare professionals and researchers.",
      icon: <FiUsers className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Innovation Hub",
      description:
        "Develop and implement groundbreaking medical solutions through collaborative research.",
      icon: <FiTrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <section
      className="relative py-20 overflow-hidden"
      aria-label="About Section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#328E6E]/5 to-[#67AE6E]/5" />

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden transform transition-transform duration-700 group-hover:scale-[1.02]">
              <Image
                src="/assets/img/testimonial/head_testimonial.jpg"
                alt="Medical Research Laboratory with advanced equipment and researchers"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#328E6E]/50 to-transparent"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-8 -right-8 w-64 h-64 bg-white/90 backdrop-blur-md rounded-2xl p-6 transform rotate-6 transition-all duration-500 hover:rotate-0 hover:shadow-2xl"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-[#328E6E] mb-2">
                  15+
                </div>
                <div className="text-gray-800">
                  Years of Medical Research Excellence
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-[#328E6E]/10 rounded-full">
                <span className="text-[#328E6E] text-sm font-medium">
                  About Our Federation
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Advancing Healthcare Through Collaborative Research
              </h2>
              <p className="text-gray-600 text-lg">
                Our federation brings together leading medical professionals,
                researchers, and healthcare institutions to drive innovation in
                biomedical research. We focus on developing cutting-edge
                solutions that improve patient outcomes and advance medical
                science.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#328E6E]/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-[#67AE6E]/20">
                    <div className="text-[#328E6E] transition-transform duration-300 group-hover:scale-110">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#328E6E] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-[#328E6E] text-white rounded-lg hover:bg-[#67AE6E] transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#328E6E] focus:ring-offset-2"
                aria-label="Learn more about our federation"
              >
                Learn More About Us
                <svg
                  className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHomeOne;
