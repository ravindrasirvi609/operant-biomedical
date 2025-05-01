"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCalendar, FiUser, FiTag } from "react-icons/fi";

const BlogHomeOne = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const posts = [
    {
      id: 1,
      title: "Advancements in Medical Research",
      excerpt:
        "Exploring the latest breakthroughs in medical research and their impact on healthcare.",
      image: "/images/blog/post-1.jpg",
      date: "March 15, 2024",
      author: "Dr. Sarah Johnson",
      category: "Research",
      slug: "advancements-in-medical-research",
    },
    {
      id: 2,
      title: "Innovative Healthcare Solutions",
      excerpt:
        "Discover how technology is transforming healthcare delivery and patient care.",
      image: "/images/blog/post-2.jpg",
      date: "March 10, 2024",
      author: "Dr. Michael Chen",
      category: "Innovation",
      slug: "innovative-healthcare-solutions",
    },
    {
      id: 3,
      title: "Global Health Initiatives",
      excerpt:
        "Understanding the role of international collaboration in improving global health outcomes.",
      image: "/images/blog/post-3.jpg",
      date: "March 5, 2024",
      author: "Dr. Emily Rodriguez",
      category: "Global Health",
      slug: "global-health-initiatives",
    },
  ];

  return (
    <section
      className="relative py-20 overflow-hidden"
      aria-label="Blog Section"
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
              Latest News
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Insights & Updates
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay informed about the latest developments in medical research and
            healthcare innovation.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#328E6E] text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiUser className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-[#328E6E] transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#328E6E] hover:text-[#67AE6E] transition-colors"
                >
                  Read More
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHomeOne;
