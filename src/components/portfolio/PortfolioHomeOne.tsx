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
      alt: "Advanced cancer research laboratory with state-of-the-art equipment",
    },
    {
      id: 2,
      title: "Clinical Trial Management",
      category: "clinical",
      image: "/images/portfolio/project-2.jpg",
      description: "Streamlined clinical trial processes and patient care",
      link: "/portfolio/clinical-trials",
      alt: "Medical professionals conducting clinical trials",
    },
    {
      id: 3,
      title: "Medical Device Innovation",
      category: "innovation",
      image: "/images/portfolio/project-3.jpg",
      description: "Revolutionary medical device development and testing",
      link: "/portfolio/medical-devices",
      alt: "Innovative medical device prototype in development",
    },
    {
      id: 4,
      title: "Genomic Research",
      category: "research",
      image: "/images/portfolio/project-4.jpg",
      description: "Cutting-edge genomic research and analysis",
      link: "/portfolio/genomic-research",
      alt: "Genomic research laboratory with DNA sequencing equipment",
    },
    {
      id: 5,
      title: "Patient Care Solutions",
      category: "clinical",
      image: "/images/portfolio/project-5.jpg",
      description: "Innovative patient care and monitoring systems",
      link: "/portfolio/patient-care",
      alt: "Modern patient care monitoring system in use",
    },
    {
      id: 6,
      title: "Digital Health Platform",
      category: "innovation",
      image: "/images/portfolio/project-6.jpg",
      description: "Next-generation digital health solutions",
      link: "/portfolio/digital-health",
      alt: "Digital health platform interface on multiple devices",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="container py-20" aria-label="Portfolio Section">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
          <span className="text-primary-300 text-sm font-medium">
            Our Impact
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Featured Research Projects
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
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
            className={`px-6 py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-black ${
              activeCategory === category.id
                ? "bg-primary-500 text-white"
                : "bg-white/10 text-white/80 hover:bg-white/20"
            }`}
            aria-label={`Filter projects by ${category.name}`}
            aria-pressed={activeCategory === category.id}
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
            className="group glass-dark rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-black"
            aria-label={`View details about ${project.title}`}
          >
            <div className="relative h-64 w-full">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PortfolioHomeOne;
