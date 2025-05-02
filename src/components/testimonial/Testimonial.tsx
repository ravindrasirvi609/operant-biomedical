"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Research Director",
      organization: "Global Medical Institute",
      image: "/images/testimonials/testimonial-1.jpg",
      quote:
        "The research collaboration opportunities provided by Operant Biomedical have been instrumental in advancing our medical research initiatives. Their commitment to excellence is truly remarkable.",
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      role: "Clinical Researcher",
      organization: "Healthcare Innovation Center",
      image: "/images/testimonials/testimonial-2.jpg",
      quote:
        "Working with Operant Biomedical has opened new avenues for our clinical research. Their expertise and resources have significantly enhanced our research capabilities.",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Medical Director",
      organization: "Advanced Medical Solutions",
      image: "/images/testimonials/testimonial-3.jpg",
      quote:
        "The professional development programs offered by Operant Biomedical have been invaluable for our team. Their commitment to advancing medical research is inspiring.",
    },
  ];

  return (
    <div className="container">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-primary-500/20 rounded-full mb-4">
          <span className="text-primary-800 text-sm font-medium">
            Testimonials
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Partners Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hear from leading medical professionals and researchers about their
          experience working with us.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="glass-dark rounded-2xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="text-4xl text-primary-300 mb-4">"</div>
                    <p className="text-lg text-gray-700 mb-6">
                      {testimonial.quote}
                    </p>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <div className="text-primary-500 font-medium">
                        {testimonial.role}
                      </div>
                      <div className="text-gray-600">
                        {testimonial.organization}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #e5e7eb;
          opacity: 1;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #f0a8d0;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;
