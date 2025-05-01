"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";
import { FiStar } from "react-icons/fi";

const TestimonialHomeOne = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { resolvedTheme } = useTheme();
  const darkMode = resolvedTheme === "dark";

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Research Director",
      organization: "Global Medical Institute",
      image: "/assets/img/testimonial/testimonial-1.jpg",
      quote:
        "The collaborative research environment and state-of-the-art facilities have enabled us to make significant breakthroughs in medical science.",
      rating: 5,
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      role: "Clinical Researcher",
      organization: "Healthcare Innovation Center",
      image: "/assets/img/testimonial/testimonial-2.jpg",
      quote:
        "Working with this team has been transformative. Their commitment to excellence and innovation is truly remarkable.",
      rating: 5,
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Medical Director",
      organization: "International Health Foundation",
      image: "/assets/img/testimonial/testimonial-3.jpg",
      quote:
        "The impact of their research on patient care has been substantial. Their dedication to improving healthcare outcomes is inspiring.",
      rating: 5,
    },
  ];

  return (
    <section
      className="relative py-20 overflow-hidden"
      aria-label="Testimonials Section"
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
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            What Our Partners Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Hear from our partners and collaborators about their experience
            working with us to advance healthcare research and innovation.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${
                darkMode ? "glass-dark" : "glass-light"
              } rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-primary-300 font-medium">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonial.organization}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="w-5 h-5 text-primary-300 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialHomeOne;
