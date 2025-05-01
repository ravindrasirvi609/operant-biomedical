"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

const BlogHomeOne = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const blogPosts = [
    {
      id: 1,
      title: "Breakthrough in Cancer Research",
      excerpt:
        "New study reveals promising results in targeted therapy approaches.",
      image: "/images/blog/post-1.jpg",
      date: "March 15, 2024",
      category: "Research",
      author: {
        name: "Dr. Sarah Johnson",
        avatar: "/images/team/author-1.jpg",
      },
    },
    {
      id: 2,
      title: "The Future of Medical AI",
      excerpt:
        "How artificial intelligence is transforming healthcare delivery.",
      image: "/images/blog/post-2.jpg",
      date: "March 10, 2024",
      category: "Technology",
      author: {
        name: "Prof. Michael Chen",
        avatar: "/images/team/author-2.jpg",
      },
    },
    {
      id: 3,
      title: "Global Health Initiatives",
      excerpt: "Collaborative efforts to improve healthcare access worldwide.",
      image: "/images/blog/post-3.jpg",
      date: "March 5, 2024",
      category: "Global Health",
      author: {
        name: "Dr. Emily Rodriguez",
        avatar: "/images/team/author-3.jpg",
      },
    },
  ];

  return (
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5" />

      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
            <span className="text-primary-300 text-sm font-medium">
              Latest Updates
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Medical Research Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest developments in medical research and
            healthcare innovation.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            inView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="glass-dark rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <Link href={`/blog/${post.id}`} className="block">
                <div className="relative aspect-w-16 aspect-h-9">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-500 text-white text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{post.date}</p>
                      <p className="text-sm font-medium text-gray-800">
                        {post.author.name}
                      </p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-primary-500 font-medium">
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
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300"
          >
            View All Articles
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogHomeOne;
