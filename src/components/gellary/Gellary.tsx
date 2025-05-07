"use client";

import React, { useState, useCallback, useEffect } from "react";
import gellary_img_1 from "@/assets/img/portfolio/Pharmanecia1_E.png";
import gellary_img_2 from "@/assets/img/testimonial/head_testimonial.jpg";
import gellary_img_3 from "@/assets/img/portfolio/1B1A0961.jpg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiMaximize,
  FiFilter,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

interface GalleryImage {
  src: any;
  alt: string;
  category: string;
  title?: string;
  description?: string;
}

// Enhanced gallery data
const gallery_data: GalleryImage[] = [
  {
    src: gellary_img_1,
    alt: "Research laboratory",
    category: "Research",
    title: "Advanced Research Lab",
    description:
      "Cutting-edge research facilities equipped with the latest technology",
  },
  {
    src: gellary_img_2,
    alt: "Team collaboration",
    category: "Collaboration",
    title: "Team Collaboration",
    description:
      "Our experts working together on groundbreaking research projects",
  },
  {
    src: gellary_img_3,
    alt: "Conference presentation",
    category: "Events",
    title: "Research Conference",
    description:
      "Sharing knowledge and insights at international biomedical conferences",
  },
  {
    src: gellary_img_1,
    alt: "Laboratory equipment",
    category: "Research",
    title: "Precision Equipment",
    description: "State-of-the-art equipment for advanced biomedical analysis",
  },
  {
    src: gellary_img_2,
    alt: "Team meeting",
    category: "Collaboration",
    title: "Strategy Meeting",
    description: "Planning and coordinating complex research initiatives",
  },
  {
    src: gellary_img_3,
    alt: "Award ceremony",
    category: "Events",
    title: "Excellence Awards",
    description: "Recognizing outstanding contributions to biomedical research",
  },
];

// Get unique categories for filtering
const categories = [
  "All",
  ...Array.from(new Set(gallery_data.map((item) => item.category))),
];

const Gellary = ({ style_2 }: any) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(
    Array(gallery_data.length).fill(false)
  );

  // Filter gallery items based on selected category
  const filteredGallery =
    activeCategory === "All"
      ? gallery_data
      : gallery_data.filter((item) => item.category === activeCategory);

  // Handle image load state
  const handleImageLoaded = (index: number) => {
    const newLoadedState = [...isLoaded];
    newLoadedState[index] = true;
    setIsLoaded(newLoadedState);
  };

  // Lightbox navigation functions
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? filteredGallery.length - 1 : prevIndex - 1
    );
  }, [filteredGallery.length]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === filteredGallery.length - 1 ? 0 : prevIndex + 1
    );
  }, [filteredGallery.length]);

  // Add keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, goToPrevious, goToNext]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
            <span className="text-primary-500 text-sm font-medium">
              Our Gallery
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Vibrant Gallery of Memorable Moments
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A visual journey through our research facilities, collaborative
            projects, and milestone events
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                ${
                  activeCategory === category
                    ? "bg-primary-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              <FiFilter
                className={`w-4 h-4 ${
                  activeCategory === category ? "text-white" : "text-gray-500"
                }`}
              />
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <div className="relative pt-[75%] bg-gray-100">
                <div className="absolute inset-0">
                  {!isLoaded[index] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <div className="w-10 h-10 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin"></div>
                    </div>
                  )}
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
                      isLoaded[index] ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => handleImageLoaded(index)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-white text-lg font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">{item.description}</p>
                <button
                  onClick={() => openLightbox(index)}
                  className="flex items-center justify-center gap-2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-300"
                >
                  <FiMaximize className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && filteredGallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 z-50 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300"
              onClick={closeLightbox}
            >
              <FiX size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl h-full max-h-[80vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex-grow flex items-center justify-center bg-black/50 rounded-t-xl overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={filteredGallery[currentImageIndex].src}
                    alt={filteredGallery[currentImageIndex].alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>

                {/* Navigation arrows */}
                <button
                  className="absolute left-4 p-3 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                >
                  <FiChevronLeft size={24} />
                </button>
                <button
                  className="absolute right-4 p-3 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                >
                  <FiChevronRight size={24} />
                </button>
              </div>

              {/* Caption */}
              <div className="bg-black/70 backdrop-blur-sm text-white p-6 rounded-b-xl">
                <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full mb-2">
                  {filteredGallery[currentImageIndex].category}
                </span>
                <h3 className="text-xl font-bold mb-2">
                  {filteredGallery[currentImageIndex].title}
                </h3>
                <p className="text-white/80">
                  {filteredGallery[currentImageIndex].description}
                </p>
                <div className="mt-4 text-white/60 text-sm">
                  Image {currentImageIndex + 1} of {filteredGallery.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gellary;
