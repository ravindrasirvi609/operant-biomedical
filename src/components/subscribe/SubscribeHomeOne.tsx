"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMail, FiSend } from "react-icons/fi";

const SubscribeHomeOne = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section
      className="relative py-20 overflow-hidden"
      aria-label="Subscribe Section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#328E6E]/5 to-[#67AE6E]/5" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-block px-4 py-2 bg-[#328E6E]/10 rounded-full mb-4">
            <span className="text-[#328E6E] text-sm font-medium">
              Stay Updated
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get the latest updates on medical research, healthcare innovation,
            and upcoming events.
          </p>

          <motion.form
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiMail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#328E6E] focus:border-transparent transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#328E6E] text-white rounded-xl hover:bg-[#67AE6E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#328E6E] focus:ring-offset-2"
            >
              <span>Subscribe</span>
              <FiSend className="ml-2 w-5 h-5" />
            </button>
          </motion.form>

          <p className="text-sm text-gray-500 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscribeHomeOne;
