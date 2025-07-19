import React from "react";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaUniversity,
  FaRegLightbulb,
} from "react-icons/fa";

const event = {
  title: "74th Indian Pharmaceutical Congress 2025",
  theme: "AI & TECHNOLOGY IN PHARMA: EDUCATE, INNOVATE, EMPOWER",
  host: "Association of Pharmaceutical Teachers of India",
  organizer: "Indian Pharmaceutical Congress Association",
  date: "Dec 19-21, 2025 (Friday-Sunday)",
  location: "BIEC Bengaluru",
  attendees: "Pharma professionals, educators, students, and industry leaders",
  description:
    "Join the 74th Indian Pharmaceutical Congress, the premier event for the pharma industry, focusing on the transformative role of AI and technology. Network, learn, and innovate with the best minds in pharma.",
  abstractLink: "#abstract-submission",
  registrationLink: "#register-ipc",
};

const course = {
  title: "AI in Pharma Industry",
  duration: "6 Weeks (Online)",
  instructor: "Dr. Priya Sharma",
  description:
    "Explore the transformative impact of Artificial Intelligence in the pharmaceutical industry. This course covers AI-driven drug discovery, clinical trials, manufacturing, and regulatory compliance.",
  registrationLink: "#register-ai-course",
};

const EventsCoursesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-0">
      {/* Hero Section for Event */}
      <section className="w-full bg-gradient-to-r from-primary-600 to-blue-500 dark:from-primary-800 dark:to-blue-900 text-white py-12 md:py-20 mb-12 shadow-lg">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
              {event.title}
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-2 flex items-center gap-2">
              <FaRegLightbulb className="inline-block text-yellow-300" /> Theme:{" "}
              <span className="font-bold">{event.theme}</span>
            </h2>
            <p className="mb-4 text-lg font-medium flex items-center gap-2">
              <FaUniversity className="inline-block text-white/80" /> Hosted by:{" "}
              <span className="font-semibold">{event.host}</span>
            </p>
            <p className="mb-4 text-lg font-medium flex items-center gap-2">
              <FaUsers className="inline-block text-white/80" /> Organized by:{" "}
              <span className="font-semibold">{event.organizer}</span>
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg text-base font-semibold">
                <FaCalendarAlt /> {event.date}
              </span>
              <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg text-base font-semibold">
                <FaMapMarkerAlt /> {event.location}
              </span>
            </div>
            <p className="mb-6 text-lg max-w-2xl">{event.description}</p>
            <div className="flex gap-4">
              <Link
                href={event.abstractLink}
                className="px-6 py-2 rounded-lg bg-white text-primary-700 font-bold shadow hover:bg-gray-100 transition-colors"
              >
                Abstract Submissions
              </Link>
              <Link
                href={event.registrationLink}
                className="px-6 py-2 rounded-lg bg-primary-700 text-white font-bold shadow hover:bg-primary-800 transition-colors"
              >
                Registration
              </Link>
            </div>
          </div>
          <div className="hidden md:block flex-1 text-center">
            {/* You can add an event-related illustration or logo here */}
            <img
              src="/assets/img/OBRF Logo.png"
              alt="IPC Event Logo"
              className="mx-auto w-64 h-64 object-contain rounded-2xl shadow-2xl bg-white/80 p-6"
            />
          </div>
        </div>
      </section>

      {/* Courses Section - Redesigned as Hero */}
      <section className="w-full bg-gradient-to-r from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-950 text-primary-900 dark:text-white py-12 md:py-20 mb-12 shadow-lg">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
              {course.title}
            </h2>
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg text-base font-semibold">
                <FaCalendarAlt className="text-primary-600 dark:text-primary-300" />{" "}
                {course.duration}
              </span>
              <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg text-base font-semibold">
                <FaUsers className="text-primary-600 dark:text-primary-300" />{" "}
                {course.instructor}
              </span>
            </div>
            <p className="mb-6 text-lg max-w-2xl">{course.description}</p>
            {/* Charges Section */}
            <div className="mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
                <span className="inline-block bg-primary-600 text-white rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v7m0 0h4m-4 0H8"
                    />
                  </svg>
                </span>
                Charges
              </h3>
              <ul className="list-disc list-inside text-base ml-2">
                <li>
                  <span className="font-semibold">Fee:</span> ₹4,999 for 6 weeks
                </li>
                <li>
                  <span className="font-semibold">Includes:</span> Certificate
                  of Completion, downloadable materials, access to all live and
                  recorded sessions
                </li>
                <li>
                  <span className="font-semibold">Refund Policy:</span> Full
                  refund within 7 days of course start
                </li>
              </ul>
            </div>
            {/* Teaching Plan Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
                <span className="inline-block bg-primary-600 text-white rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m-7-8h8a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2z"
                    />
                  </svg>
                </span>
                Teaching Plan
              </h3>
              <ol className="list-decimal list-inside text-base ml-2 space-y-1">
                <li>
                  <span className="font-semibold">Week 1:</span> Introduction to
                  AI in Pharma & Industry Overview
                </li>
                <li>
                  <span className="font-semibold">Week 2:</span> AI-driven Drug
                  Discovery & Development
                </li>
                <li>
                  <span className="font-semibold">Week 3:</span> Machine
                  Learning in Clinical Trials
                </li>
                <li>
                  <span className="font-semibold">Week 4:</span> AI in Pharma
                  Manufacturing & Supply Chain
                </li>
                <li>
                  <span className="font-semibold">Week 5:</span> Regulatory
                  Compliance, Ethics & Data Security
                </li>
                <li>
                  <span className="font-semibold">Week 6:</span> Capstone
                  Project & Future Trends in AI for Pharma
                </li>
              </ol>
            </div>
            <Link
              href={course.registrationLink}
              className="px-6 py-2 rounded-lg bg-primary-700 text-white font-bold shadow hover:bg-primary-800 transition-colors"
            >
              Register
            </Link>
          </div>
          <div className="hidden md:block flex-1 text-center relative">
            {/* Course image with badge overlay */}
            <div className="inline-block relative">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
                alt="AI in Pharma - Unsplash"
                className="mx-auto w-64 h-64 object-cover rounded-2xl shadow-2xl bg-white/80 p-6 border-4 border-primary-100 dark:border-primary-900"
              />
              <span className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                6 Weeks Online
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsCoursesPage;
