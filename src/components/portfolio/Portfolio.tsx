"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiFilter, FiExternalLink, FiLoader } from "react-icons/fi";

interface DataType {
  id: string;
  category: string;
  img: string;
  title: string;
  des: string;
}

const Portfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState<DataType[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("/api/portfolio/portfolio-list");
        const data = res.data.portfolios;

        const formattedData: DataType[] = data.map((item: any) => ({
          id: item._id,
          category: item.category,
          img: item.images[0],
          title: item.title,
          des: item.des,
        }));

        setItems(formattedData);

        const uniqueCategories: string[] = [
          "All",
          ...new Set(
            formattedData.map((item: { category: any }) => item.category)
          ),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching portfolios:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
  };

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5" />

      <div className="container relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
            <span className="text-primary-500 text-sm font-medium">
              Our Work
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Showcasing Innovative Projects and Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of groundbreaking research and impactful
            initiatives in the biomedical field.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => filterItems(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                ${
                  activeCategory === category
                    ? "bg-primary-500 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }
              `}
            >
              <FiFilter className="w-4 h-4" />
              {category}
            </button>
          ))}
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <FiLoader className="w-8 h-8 text-primary-500 animate-spin" />
          </div>
        )}

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link href={`/portfolio-details/${item.id}`}>
                  <div className="relative w-full h-[300px]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-primary-300 text-sm font-medium mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                      {item.des}
                    </p>
                    <div className="flex items-center text-white hover:text-primary-300 transition-colors duration-300">
                      View Details
                      <FiExternalLink className="ml-2 w-4 h-4" />
                    </div>
                  </div>

                  {/* Quick Info Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredItem === item.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                  >
                    <div className="text-sm text-gray-600">
                      <p className="font-medium">Category:</p>
                      <p>{item.category}</p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {!isLoading && filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 text-lg">
              No projects found in this category. Please try another filter.
            </p>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button
              className="px-8 py-3 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
              onClick={() => {
                /* Implement load more functionality */
              }}
            >
              Load More Projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
