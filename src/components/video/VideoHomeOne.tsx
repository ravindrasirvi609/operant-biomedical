"use client";
import { useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const VideoHomeOne = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const videoData = {
    title: "Advancing Medical Research",
    description:
      "Watch how we're transforming healthcare through innovative research and collaboration.",
    thumbnail: "/images/video/thumbnail.jpg",
    videoUrl: "https://www.youtube.com/embed/your-video-id",
  };

  return (
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5" />

      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
            <span className="text-primary-300 text-sm font-medium">
              Featured Video
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {videoData.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {videoData.description}
          </p>
        </div>

        <div
          ref={ref}
          className={`relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl ${
            inView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="aspect-w-16 aspect-h-9">
            <Image
              src={videoData.thumbnail}
              alt="Video Thumbnail"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button
                onClick={() => setIsVideoOpen(true)}
                className="w-20 h-20 rounded-full bg-primary-500 hover:bg-primary-600 transition-colors duration-300 flex items-center justify-center group"
              >
                <svg
                  className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="relative w-full max-w-4xl aspect-w-16 aspect-h-9">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-primary-300 transition-colors duration-300"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <iframe
              src={videoData.videoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoHomeOne;
