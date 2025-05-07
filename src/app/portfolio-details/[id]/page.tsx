"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiUser,
  FiTag,
  FiArrowLeft,
  FiExternalLink,
} from "react-icons/fi";
import Link from "next/link";

interface PortfolioDetails {
  _id: string;
  title: string;
  category: string;
  client: string;
  date: string;
  des: string;
  images: string[];
  challenges: string[];
  solutions: string[];
}

const PortfolioDetailsPage = () => {
  const params = useParams();
  const [portfolio, setPortfolio] = useState<PortfolioDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const fetchPortfolioDetails = async () => {
      try {
        setIsLoading(true);
        const res = await axios.post("/api/portfolio/portfolio-details", {
          id: params.id,
        });
        setPortfolio(res.data.portfolio);
      } catch (error) {
        console.error("Error fetching portfolio details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (params.id) {
      fetchPortfolioDetails();
    }
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (!portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Portfolio Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The portfolio you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300"
          >
            <FiArrowLeft className="mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center text-gray-600 hover:text-primary-500 transition-colors duration-300"
          >
            <FiArrowLeft className="mr-2" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
            <span className="text-primary-500 text-sm font-medium">
              {portfolio.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {portfolio.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center">
              <FiCalendar className="mr-2" />
              <span>{new Date(portfolio.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <FiUser className="mr-2" />
              <span>{portfolio.client}</span>
            </div>
            <div className="flex items-center">
              <FiTag className="mr-2" />
              <span>{portfolio.category}</span>
            </div>
          </div>
        </motion.div>

        {/* Main Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={portfolio.images[activeImage]}
              alt={portfolio.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Thumbnail Gallery */}
          {portfolio.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4 mt-4">
              {portfolio.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                    activeImage === index
                      ? "ring-2 ring-primary-500"
                      : "hover:opacity-80"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${portfolio.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>{portfolio.des}</p>
              </div>

              {/* Challenges Section */}
              {portfolio.challenges && portfolio.challenges.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Challenges
                  </h3>
                  <ul className="space-y-4">
                    {portfolio.challenges.map((challenge, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        className="flex items-start"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center mr-3 mt-1">
                          {index + 1}
                        </span>
                        <span className="text-gray-600">{challenge}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Solutions Section */}
              {portfolio.solutions && portfolio.solutions.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Solutions
                  </h3>
                  <ul className="space-y-4">
                    {portfolio.solutions.map((solution, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        className="flex items-start"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center mr-3 mt-1">
                          {index + 1}
                        </span>
                        <span className="text-gray-600">{solution}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Project Details
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">
                    Category
                  </h4>
                  <p className="text-gray-900">{portfolio.category}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">
                    Client
                  </h4>
                  <p className="text-gray-900">{portfolio.client}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">
                    Date
                  </h4>
                  <p className="text-gray-900">
                    {new Date(portfolio.date).toLocaleDateString()}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300"
                  >
                    <FiExternalLink className="mr-2" />
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsPage;
