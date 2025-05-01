"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface BrandHomeOneProps {
  style_2?: boolean;
}

const BrandHomeOne = ({ style_2 }: BrandHomeOneProps) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const partners = [
    {
      id: 1,
      name: "Medical Research Institute",
      logo: "/images/brands/partner-1.png",
    },
    {
      id: 2,
      name: "Healthcare Innovation Lab",
      logo: "/images/brands/partner-2.png",
    },
    {
      id: 3,
      name: "Global Health Foundation",
      logo: "/images/brands/partner-3.png",
    },
    {
      id: 4,
      name: "Biomedical Research Center",
      logo: "/images/brands/partner-4.png",
    },
    {
      id: 5,
      name: "Clinical Trials Network",
      logo: "/images/brands/partner-5.png",
    },
  ];

  return (
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5" />

      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
            <span className="text-primary-300 text-sm font-medium">
              Our Partners
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted by Leading Healthcare Organizations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with renowned institutions and organizations to
            advance medical research and healthcare innovation.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center ${
            inView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="glass-dark rounded-xl p-6 flex items-center justify-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative w-32 h-16">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Join our network of partners and contribute to the future of
            healthcare.
          </p>
          <a
            href="/partners"
            className="inline-flex items-center mt-4 text-primary-500 font-medium hover:text-primary-600 transition-colors duration-300"
          >
            Become a Partner
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandHomeOne;
