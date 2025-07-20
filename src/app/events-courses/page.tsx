import React from "react";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaUniversity,
  FaRegLightbulb,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBriefcase,
  FaUserFriends,
  FaGlobe,
  FaCheck,
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
  registrationLink: "https://74ipc-2025-website.vercel.app/registration",
};

const course = {
  title: "AI in Pharma Industry",
  duration: "6 Weeks (Online)",
  instructor: "Dr. Priya Sharma",
  description:
    "Explore the transformative impact of Artificial Intelligence in the pharmaceutical industry. This course covers AI-driven drug discovery, clinical trials, manufacturing, and regulatory compliance.",
  registrationLink: "#register-ai-course",
};

// Registration pricing data
const registrationPricing = [
  {
    category: "Students",
    icon: <FaGraduationCap className="text-blue-600" />,
    requirement: "Valid student ID required",
    pricing: {
      superSaver: { total: "₹4,720", base: "₹4,000", gst: "18% GST" },
      regular: { total: "₹5,310", base: "₹4,500", gst: "18% GST" },
      lateFee: { total: "₹5,900", base: "₹5,000", gst: "18% GST" },
      spot: { total: "N.A.", base: "", gst: "" },
    },
  },
  {
    category: "Teachers & Members",
    subcategory: "(APTI/IPA/IPGA/IHPA/AIDCOC)",
    icon: <FaChalkboardTeacher className="text-green-600" />,
    requirement: "Membership verification required",
    pricing: {
      superSaver: { total: "₹6,490", base: "₹5,500", gst: "18% GST" },
      regular: { total: "₹7,670", base: "₹6,500", gst: "18% GST" },
      lateFee: { total: "₹8,850", base: "₹7,500", gst: "18% GST" },
      spot: { total: "₹10,030", base: "₹8,500", gst: "18% GST" },
    },
  },
  {
    category: "Non Member",
    subcategory: "Industry professionals and academics",
    icon: <FaBriefcase className="text-purple-600" />,
    requirement: "",
    pricing: {
      superSaver: { total: "₹8,260", base: "₹7,000", gst: "18% GST" },
      regular: { total: "₹9,440", base: "₹8,000", gst: "18% GST" },
      lateFee: { total: "₹10,620", base: "₹9,000", gst: "18% GST" },
      spot: { total: "₹11,800", base: "₹10,000", gst: "18% GST" },
    },
  },
  {
    category: "Accompanying Person",
    subcategory: "Family members and guests",
    icon: <FaUserFriends className="text-orange-600" />,
    requirement: "",
    pricing: {
      superSaver: { total: "₹4,720", base: "₹4,000", gst: "18% GST" },
      regular: { total: "₹5,310", base: "₹4,500", gst: "18% GST" },
      lateFee: { total: "₹5,900", base: "₹5,000", gst: "18% GST" },
      spot: { total: "₹6,490", base: "₹5,500", gst: "18% GST" },
    },
  },
  {
    category: "Foreign Delegates",
    subcategory: "International participants",
    icon: <FaGlobe className="text-red-600" />,
    requirement: "",
    pricing: {
      superSaver: { total: "$150.00", base: "$150.00", gst: "18% GST" },
      regular: { total: "$200.00", base: "$200.00", gst: "18% GST" },
      lateFee: { total: "$250.00", base: "$250.00", gst: "18% GST" },
      spot: { total: "$300.00", base: "$300.00", gst: "18% GST" },
    },
  },
];

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

      {/* Registration Pricing Section */}
      <section className="w-full py-12 md:py-16 mb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Registration Pricing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose your registration category and pricing tier. Early bird
              discounts available!
            </p>
          </div>

          {/* Pricing Categories */}
          <div className="space-y-6">
            {registrationPricing.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                {/* Category Header */}
                <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/50 dark:to-blue-900/50 p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{category.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {category.category}
                      </h3>
                      {category.subcategory && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                          {category.subcategory}
                        </p>
                      )}
                      {category.requirement && (
                        <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold flex items-center gap-1 mt-1">
                          <FaCheck className="text-xs" />
                          {category.requirement}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Pricing Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Super Saver */}
                    <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-700 rounded-xl p-4 text-center relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          BEST VALUE
                        </span>
                      </div>
                      <h4 className="font-bold text-green-700 dark:text-green-300 mb-2 mt-2">
                        Super Saver
                      </h4>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {category.pricing.superSaver.total}
                      </div>
                      {category.pricing.superSaver.base && (
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          ({category.pricing.superSaver.base} +{" "}
                          {category.pricing.superSaver.gst})
                        </div>
                      )}
                    </div>

                    {/* Regular */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-xl p-4 text-center">
                      <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">
                        Regular
                      </h4>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {category.pricing.regular.total}
                      </div>
                      {category.pricing.regular.base && (
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          ({category.pricing.regular.base} +{" "}
                          {category.pricing.regular.gst})
                        </div>
                      )}
                    </div>

                    {/* Late Fee */}
                    <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-700 rounded-xl p-4 text-center">
                      <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">
                        Late Fee
                      </h4>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {category.pricing.lateFee.total}
                      </div>
                      {category.pricing.lateFee.base && (
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          ({category.pricing.lateFee.base} +{" "}
                          {category.pricing.lateFee.gst})
                        </div>
                      )}
                    </div>

                    {/* Spot */}
                    <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-700 rounded-xl p-4 text-center">
                      <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">
                        Spot
                      </h4>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {category.pricing.spot.total}
                      </div>
                      {category.pricing.spot.base && (
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          ({category.pricing.spot.base} +{" "}
                          {category.pricing.spot.gst})
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Select Button */}
                <div className="p-6 pt-0">
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                    Select {category.category} Category
                    <svg
                      className="w-5 h-5"
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
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Important Notes */}
          <div className="mt-12 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl p-6">
            <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Important Notes
            </h3>
            <ul className="space-y-2 text-yellow-700 dark:text-yellow-300">
              <li className="flex items-start gap-2">
                <FaCheck className="text-green-600 mt-1 flex-shrink-0" />
                <span>All prices include 18% GST as applicable</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-green-600 mt-1 flex-shrink-0" />
                <span>Super Saver rates are valid until [Early Bird Date]</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-green-600 mt-1 flex-shrink-0" />
                <span>
                  Students must provide valid student ID during registration
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-green-600 mt-1 flex-shrink-0" />
                <span>
                  Members must provide valid membership proof for discounted
                  rates
                </span>
              </li>
            </ul>
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
