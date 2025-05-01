"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const MarqueeAreaHomeOne = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const partners = [
    {
      id: 1,
      name: "Medical Research Institute",
      logo: "/images/partners/partner-1.png",
    },
    {
      id: 2,
      name: "Healthcare Innovation Center",
      logo: "/images/partners/partner-2.png",
    },
    {
      id: 3,
      name: "Biomedical Research Foundation",
      logo: "/images/partners/partner-3.png",
    },
    {
      id: 4,
      name: "Clinical Research Network",
      logo: "/images/partners/partner-4.png",
    },
    {
      id: 5,
      name: "Medical Technology Alliance",
      logo: "/images/partners/partner-5.png",
    },
  ];

  if (!isMounted) return null;

  return (
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Trusted by Leading Medical Institutions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We collaborate with prestigious medical institutions and research
          centers worldwide to advance healthcare innovation.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex space-x-12 animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 w-48 h-24 relative glass-dark rounded-xl p-4 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-full h-full">
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
      </div>
    </div>
  );
};

export default MarqueeAreaHomeOne;
