"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const PortfolioHomeOne = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "research", name: "Research" },
    { id: "clinical", name: "Clinical Trials" },
    { id: "innovation", name: "Innovation" },
  ];

  const projects = [
    {
      id: 1,
      title: "Advanced Cancer Research",
      category: "research",
      image: "/images/portfolio/project-1.jpg",
      description: "Breakthrough research in cancer treatment methodologies",
      link: "/portfolio/cancer-research",
    },
    {
      id: 2,
      title: "Clinical Trial Management",
      category: "clinical",
      image: "/images/portfolio/project-2.jpg",
      description: "Streamlined clinical trial processes and patient care",
      link: "/portfolio/clinical-trials",
    },
    {
      id: 3,
      title: "Medical Device Innovation",
      category: "innovation",
      image: "/images/portfolio/project-3.jpg",
      description: "Revolutionary medical device development and testing",
      link: "/portfolio/medical-devices",
    },
    {
      id: 4,
      title: "Genomic Research",
      category: "research",
      image: "/images/portfolio/project-4.jpg",
      description: "Cutting-edge genomic research and analysis",
      link: "/portfolio/genomic-research",
    },
    {
      id: 5,
      title: "Patient Care Solutions",
      category: "clinical",
      image: "/images/portfolio/project-5.jpg",
      description: "Innovative patient care and monitoring systems",
      link: "/portfolio/patient-care",
    },
    {
      id: 6,
      title: "Digital Health Platform",
      category: "innovation",
      image: "/images/portfolio/project-6.jpg",
      description: "Next-generation digital health solutions",
      link: "/portfolio/digital-health",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="container">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
          <span className="text-primary-300 text-sm font-medium">
            Our Impact
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Featured Research Projects
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our groundbreaking research projects and innovations that are
          shaping the future of healthcare.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-primary-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
          inView ? "animate-fade-in" : "opacity-0"
        }`}
      >
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            className="group glass-dark rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="relative h-64 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-500 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioHomeOne;
