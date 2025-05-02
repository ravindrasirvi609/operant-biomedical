"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";
import { FiExternalLink } from "react-icons/fi";

const PortfolioHomeOne = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { resolvedTheme } = useTheme();
  const darkMode = resolvedTheme === "dark";

  const projects = [
    {
      id: 1,
      title: "Medical Research Lab",
      category: "Research Facility",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60",
      link: "/portfolio/medical-research-lab",
      description:
        "State-of-the-art research facility dedicated to breakthrough medical discoveries",
    },
    {
      id: 2,
      title: "Healthcare Center",
      category: "Medical Facility",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=60",
      link: "/portfolio/healthcare-center",
      description:
        "Modern healthcare center providing comprehensive medical services",
    },
    {
      id: 3,
      title: "Clinical Trials",
      category: "Research",
      image:
        "https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&auto=format&fit=crop&q=60",
      link: "/portfolio/clinical-trials",
      description:
        "Advanced clinical research facility conducting groundbreaking trials",
    },
    {
      id: 4,
      title: "Medical Training Center",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
      link: "/portfolio/medical-training",
      description: "Cutting-edge training facility for medical professionals",
    },
    {
      id: 5,
      title: "Healthcare Innovation Hub",
      category: "Innovation",
      image:
        "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&auto=format&fit=crop&q=60",
      link: "/portfolio/innovation-hub",
      description:
        "Center for healthcare innovation and technological advancement",
    },
    {
      id: 6,
      title: "Global Health Initiative",
      category: "Global Health",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60",
      link: "/portfolio/global-health",
      description: "International healthcare programs making a global impact",
    },
  ];

  return (
    <section
      className="relative py-20 overflow-hidden"
      aria-label="Portfolio Section"
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
            <span className="text-primary-500 text-sm font-medium">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800  mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our successful projects and initiatives that have made a
            significant impact in the healthcare industry.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-[300px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary-300 text-sm font-medium mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-white hover:text-primary-300 transition-colors duration-300"
                  aria-label={`View ${project.title} project`}
                >
                  View Project
                  <FiExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioHomeOne;
