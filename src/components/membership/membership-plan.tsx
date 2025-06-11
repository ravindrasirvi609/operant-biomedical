"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import MembersForm from "./memberForm";
import Dialog from "@/components/ui/dialog";

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
  const [selectedPlan, setSelectedPlan] = useState<DataType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchMembershipList = async () => {
      try {
        const response = await axios.post("/api/membership/membershipList", {
          method: "POST",
        });
        setMembershipPlan(response.data.membershipPlans);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMembershipList();
  }, []);

  const handlePlanSelect = (plan: DataType) => {
    setSelectedPlan(plan);
    setIsDialogOpen(true);
  };

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
            <span className="text-primary-600 dark:text-primary-300 text-sm font-medium">
              Membership Plans
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Research Plan
          </h2>
          <p className="text-gray-600 dark:text-white/80 text-lg max-w-2xl mx-auto">
            Select the perfect membership plan that aligns with your research
            goals and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {membershipPlan.map((plan, index) => (
            <div
              key={plan._id}
              className={`glass-dark p-8 rounded-xl transform transition-all duration-500 hover:scale-105 ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.title}
                </h3>
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  ₹{plan.price.toLocaleString()}
                </div>
                <p className="text-gray-600 dark:text-white/80">
                  {plan.description}
                </p>
              </div>

              <button
                onClick={() => handlePlanSelect(plan)}
                className="w-full btn-primary group"
              >
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

      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Complete Your Membership"
      >
        {selectedPlan && <MembersForm pramsId={selectedPlan._id} />}
      </Dialog>

      <div className="h-24 md:h-16"></div>
    </>
  );
};

export default MembershipPlan;
