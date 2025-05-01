"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BrandHomeOne = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const brands = [
    {
      id: 1,
      name: "Medical Research Institute",
      logo: "/images/brands/brand-1.png",
    },
    {
      id: 2,
      name: "Healthcare Innovation Lab",
      logo: "/images/brands/brand-2.png",
    },
    {
      id: 3,
      name: "Global Health Foundation",
      logo: "/images/brands/brand-3.png",
    },
    {
      id: 4,
      name: "Biomedical Solutions",
      logo: "/images/brands/brand-4.png",
    },
    {
      id: 5,
      name: "Clinical Research Center",
      logo: "/images/brands/brand-5.png",
    },
  ];

  return (
    <section
      className="relative py-20 overflow-hidden"
      aria-label="Brands Section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#328E6E]/5 to-[#67AE6E]/5" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#328E6E]/10 rounded-full mb-4">
            <span className="text-[#328E6E] text-sm font-medium">
              Our Partners
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted by Leading Healthcare Organizations
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We collaborate with renowned institutions to advance medical
            research and healthcare innovation.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-md rounded-xl p-6 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={60}
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandHomeOne;
