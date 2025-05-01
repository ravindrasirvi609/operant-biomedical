"use client";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const FunFactHomeOne = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const stats = [
    {
      id: 1,
      number: 150,
      suffix: "+",
      title: "Research Projects",
      description: "Active research initiatives across various medical fields",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      number: 50,
      suffix: "+",
      title: "Countries",
      description: "Global reach with international research partnerships",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      number: 1000,
      suffix: "+",
      title: "Researchers",
      description: "Dedicated professionals advancing medical science",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      number: 200,
      suffix: "+",
      title: "Publications",
      description: "Research papers published in top medical journals",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="container">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
          <span className="text-primary-300 text-sm font-medium">
            Our Impact
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Making a Difference in Healthcare
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our commitment to advancing medical research has led to significant
          achievements and global impact.
        </p>
      </div>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${
          inView ? "animate-fade-in" : "opacity-0"
        }`}
      >
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="glass-dark rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-primary-300 mb-6 flex justify-center">
              {stat.icon}
            </div>
            <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              {inView && (
                <CountUp
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={2.5}
                />
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {stat.title}
            </h3>
            <p className="text-gray-600">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunFactHomeOne;
