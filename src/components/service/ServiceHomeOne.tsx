"use client";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const ServiceHomeOne = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const services = [
    {
      id: 1,
      title: "Research Collaboration",
      description:
        "Connect with leading medical researchers and institutions to collaborate on groundbreaking healthcare projects.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      link: "/services/research-collaboration",
    },
    {
      id: 2,
      title: "Professional Development",
      description:
        "Access advanced training programs and workshops to enhance your medical research expertise.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      link: "/services/professional-development",
    },
    {
      id: 3,
      title: "Publication Support",
      description:
        "Get expert guidance and support for publishing your research in top-tier medical journals.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      ),
      link: "/services/publication-support",
    },
    {
      id: 4,
      title: "Conference Organization",
      description:
        "Host and participate in prestigious medical conferences and symposiums worldwide.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      link: "/services/conferences",
    },
  ];

  return (
    <section className="container py-20" aria-label="Services Section">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
          <span className="text-primary-300 text-sm font-medium">
            Our Services
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Comprehensive Research Support
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          We provide a wide range of services to support medical researchers and
          healthcare professionals in their pursuit of excellence.
        </p>
      </div>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${
          inView ? "animate-fade-in" : "opacity-0"
        }`}
      >
        {services.map((service) => (
          <Link
            key={service.id}
            href={service.link}
            className="group glass-dark rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-black"
            aria-label={`Learn more about ${service.title}`}
          >
            <div className="text-primary-300 mb-6 group-hover:text-primary-400 transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
              {service.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceHomeOne;
