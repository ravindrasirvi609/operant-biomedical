"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiPlay } from "react-icons/fi";

interface VideoHomeOneProps {
  setIsVideoOpen: (value: boolean) => void;
  isVideoOpen: boolean;
}

const VideoHomeOne = ({ setIsVideoOpen, isVideoOpen }: VideoHomeOneProps) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section
      className="relative py-20 overflow-hidden"
      aria-label="Video Section"
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
              Watch Our Story
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Discover Our Journey
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Watch how we're transforming healthcare through innovation and
            research excellence.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl group"
        >
          <div className="relative aspect-video">
            <Image
              src="/assets/img/video/video-thumbnail.jpg"
              alt="Video Thumbnail"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#328E6E]/60 to-transparent" />

            <button
              onClick={() => setIsVideoOpen(true)}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#328E6E] rounded-full flex items-center justify-center group-hover:bg-[#67AE6E] transition-all duration-300 hover:scale-110"
              aria-label="Play Video"
            >
              <FiPlay className="w-8 h-8 text-white transform translate-x-1 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoHomeOne;
