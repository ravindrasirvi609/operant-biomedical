"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface DataType {
  _id: string;
  title: string;
  price: number;
  description: string;
}

const MembershipPlan = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [membershipPlan, setMembershipPlan] = useState<DataType[]>([]);
  useEffect(() => {
    const fetchMembershipList = async () => {
      try {
        const response = await axios.post("/api/membership/membershipList", {
          method: "POST",
        });
        setMembershipPlan(response.data.membershipPlans);
        console.log(response.data); // Handle response data as needed
      } catch (error) {
        console.error(error);
      }
    };

    fetchMembershipList(); // Call the async function
  }, []);

  const plansData = [
    {
      id: 1,
      title: "Basic",
      price: "5,000",
      description: "Access to basic research resources and community forums",
      features: [
        "Basic research tools access",
        "Community forum participation",
        "Monthly newsletter",
        "Basic support",
      ],
    },
    {
      id: 2,
      title: "Professional",
      price: "10,000",
      description: "Enhanced research capabilities and priority support",
      features: [
        "Advanced research tools",
        "Priority support",
        "Exclusive webinars",
        "Research collaboration opportunities",
      ],
    },
    {
      id: 3,
      title: "Enterprise",
      price: "25,000",
      description: "Full access to all resources and dedicated support",
      features: [
        "Full research suite access",
        "Dedicated support team",
        "Custom research solutions",
        "Priority collaboration opportunities",
      ],
    },
  ];

  return (
    <>
      <div className="h-24 md:h-16"></div>
      <div className="container">
        <div
          ref={ref}
          className={`text-center mb-12 ${
            inView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
            <span className="text-primary-300 text-sm font-medium">
              Membership Plans
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Research Plan
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Select the perfect membership plan that aligns with your research
            goals and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plansData.map((plan, index) => (
            <div
              key={plan.id}
              className={`glass-dark p-8 rounded-xl transform transition-all duration-500 hover:scale-105 ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.title}
                </h3>
                <div className="text-4xl font-bold text-primary-400 mb-2">
                  ₹{plan.price}
                </div>
                <p className="text-white/80">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-white/90">
                    <svg
                      className="w-5 h-5 text-primary-400 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full btn-primary group">
                Get Started
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
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="h-24 md:h-16"></div>
    </>
  );
};

export default MembershipPlan;
