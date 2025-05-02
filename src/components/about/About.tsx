import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import agency_story_1 from "@/assets/img/portfolio/Pharmanecia3_E.png";
import agency_story_2 from "@/assets/img/portfolio/SAI_5165.jpg";
import agency_story_4 from "@/assets/img/portfolio/SAI_5321.jpg";
import agency_story_3 from "@/assets/img/portfolio/PVR_7715.jpg";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const about_content = {
    subtitle: `About Operant Biomedical Research Federation`,
    title: `Discover how Operant Biomedical Research Federation is leading the way in collaborative innovation.`,
    des: `Operant Biomedical Research Federation is a leading organization in the field, uniting a diverse community of Academicians, Researchers, Scientists, Clinicians, and Industry Professionals. Together, we collaborate on biomedical research to push the boundaries of knowledge and technology in healthcare.`,
    des_2: `Join us in our journey to shape the future of biomedicine. Together, we can unlock new frontiers, transform healthcare, and make a meaningful impact on human health and well-being. Operant Biomedical Research Federation: Where collaboration drives innovation, and discovery beyond boundaries.`,
  };

  const mission = {
    title: "Our Mission",
    description:
      "Our mission at Operant Biomedical Research Federation is to foster a vibrant community of biomedical professionals dedicated to scientific discovery, innovation, and collaboration. Through interdisciplinary partnerships and strategic initiatives, we aim to accelerate the pace of biomedical research, translating scientific insights into tangible solutions that address the most pressing health challenges facing society. Together, we strive to drive positive change, empower researchers, and improve patient outcomes worldwide.",
  };

  const vision = {
    title: "Our Vision",
    description:
      "At Operant Biomedical Research Federation, we envision a future where ground breaking biomedical research and collaboration lead to transformative advances in healthcare, improve patient outcomes and shaping the future of medicine.",
  };

  const objectives = [
    "Create an inclusive environment that celebrates diversity and promotes equitable participation in biomedical research.",
    "Bridge the gap between basic science discoveries and clinical applications through targeted translational research initiatives.",
    "Provide resources and support to enhance the quality, reproducibility, and impact of biomedical research.",
    "Facilitate cross-disciplinary partnerships to leverage diverse expertise and perspectives in addressing complex biomedical challenges.",
    "Offer mentorship, training, and educational programs to cultivate the next generation of biomedical leaders.",
    "Uphold ethical standards and transparency in biomedical research, considering societal and regulatory implications.",
    "Foster international collaboration to address global health issues and promote health equity.",
    "Utilize advanced data analytics and artificial intelligence to extract meaningful insights from complex biomedical datasets.",
    "Engage with the public and stakeholders to increase awareness and understanding of biomedical research.",
    "Advocate for evidence-based policies and funding initiatives to support biomedical innovation and healthcare improvement.",
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {about_content.subtitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {about_content.title}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600">{about_content.des}</p>
            <p className="text-lg text-gray-600">{about_content.des_2}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <Image
                src={agency_story_1}
                alt="Research Lab"
                className="rounded-lg shadow-lg"
              />
              <Image
                src={agency_story_2}
                alt="Team Collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 mt-8">
              <Image
                src={agency_story_4}
                alt="Innovation"
                className="rounded-lg shadow-lg"
              />
              <Image
                src={agency_story_3}
                alt="Healthcare"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-[#328E6E]/5 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#328E6E] mb-4">
              {mission.title}
            </h3>
            <p className="text-gray-600">{mission.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-[#67AE6E]/5 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#67AE6E] mb-4">
              {vision.title}
            </h3>
            <p className="text-gray-600">{vision.description}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Our Objectives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#328E6E] flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-600">{objective}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
