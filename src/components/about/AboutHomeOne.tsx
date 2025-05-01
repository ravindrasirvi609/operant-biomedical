"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const AboutHomeOne = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/images/about/about-1.jpg"
              alt="Medical Research Laboratory"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
          </div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 glass-dark rounded-2xl p-6 transform rotate-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-300 mb-2">
                15+
              </div>
              <div className="text-white/90">
                Years of Medical Research Excellence
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div
          ref={ref}
          className={`${inView ? "animate-fade-in" : "opacity-0"}`}
        >
          <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
            <span className="text-primary-300 text-sm font-medium">
              About Our Federation
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Advancing Healthcare Through Collaborative Research
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Our federation brings together leading medical professionals,
            researchers, and healthcare institutions to drive innovation in
            biomedical research. We focus on developing cutting-edge solutions
            that improve patient outcomes and advance medical science.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 glass-dark rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Research Excellence
                </h3>
                <p className="text-white/80">
                  Access state-of-the-art research facilities and collaborate
                  with leading medical professionals.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 glass-dark rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary-300"
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
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Professional Network
                </h3>
                <p className="text-white/80">
                  Connect with a global network of healthcare professionals and
                  researchers.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 glass-dark rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary-300"
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
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Innovation Hub
                </h3>
                <p className="text-white/80">
                  Develop and implement groundbreaking medical solutions through
                  collaborative research.
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-300 group"
          >
            Learn More About Us
            <svg
              className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
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

export default AboutHomeOne;
