import React from "react";
import Image from "next/image";
import team_data from "@/data/team_data";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiLinkedin, FiMail, FiTwitter, FiArrowRight } from "react-icons/fi";

const TeamArea = () => {
  return (
    <section className="py-20">
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
              Meet Our Team
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Dynamic Team Members
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our accomplished team of experts brings diverse skills and
            experience to drive innovation in biomedical research
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {team_data.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.avatar_name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                    <div className="p-4 w-full">
                      <div className="flex justify-center space-x-4 mb-4">
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-500 transition-colors duration-300"
                        >
                          <FiLinkedin />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-500 transition-colors duration-300"
                        >
                          <FiTwitter />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-500 transition-colors duration-300"
                        >
                          <FiMail />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.avatar_name}
                  </h3>
                  <p className="text-primary-500 font-medium mb-4">
                    {member.designation}
                  </p>

                  <Link
                    href={`/team-details/${member.id}`}
                    className="inline-flex items-center text-sm text-gray-600 hover:text-primary-500 transition-colors duration-300"
                  >
                    View Profile <FiArrowRight className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Our Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
                <span className="text-primary-500 text-sm font-medium">
                  Join Our Team
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Want to Join Our Expert Team?
              </h2>
              <p className="text-gray-600 mb-8">
                We're always looking for talented individuals who are passionate
                about biomedical research and innovation. Join us in our mission
                to advance healthcare through collaborative research.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-colors duration-300"
              >
                View Opportunities <FiArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="relative h-64 lg:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-500/5 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                        fill="currentColor"
                        className="text-primary-500"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Join Our Network
                  </h3>
                  <p className="text-gray-600">
                    Collaborate with leading researchers and institutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamArea;
