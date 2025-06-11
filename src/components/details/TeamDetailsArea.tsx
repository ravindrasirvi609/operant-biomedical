import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const TeamDetailsArea = (teamData: any) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const member = teamData?.teamData?.member;

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          ref={ref}
          className={`text-center mb-12 ${
            inView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full mb-4">
            <span className="text-primary-600 dark:text-primary-300 text-sm font-medium">
              Team Member
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {member.title} {member.name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-white/80">
            Membership ID: {member.membershipId}
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              {/* Image Section */}
              <div className="relative">
                {member.imageUrl && (
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Details Section */}
              <div className="space-y-8">
                {/* Professional Info */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
                    Professional Information
                  </h2>
                  <div className="grid grid-cols-1 gap-6">
                    {member.designation && (
                      <div className="flex items-start">
                        <span className="w-32 text-sm font-medium text-gray-500 dark:text-gray-400">
                          Designation
                        </span>
                        <span className="flex-1 text-gray-900 dark:text-white">
                          {member.designation}
                        </span>
                      </div>
                    )}
                    {member.department && (
                      <div className="flex items-start">
                        <span className="w-32 text-sm font-medium text-gray-500 dark:text-gray-400">
                          Department
                        </span>
                        <span className="flex-1 text-gray-900 dark:text-white">
                          {member.department}
                        </span>
                      </div>
                    )}
                    {member.collegeName && (
                      <div className="flex items-start">
                        <span className="w-32 text-sm font-medium text-gray-500 dark:text-gray-400">
                          College
                        </span>
                        <span className="flex-1 text-gray-900 dark:text-white">
                          {member.collegeName}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bio Section */}
                {member.bio && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
                      Biography
                    </h2>
                    <p className="text-gray-600 dark:text-white/80 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                )}

                {/* Personal Info */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 gap-6">
                    {member.DateOfBirth && (
                      <div className="flex items-start">
                        <span className="w-32 text-sm font-medium text-gray-500 dark:text-gray-400">
                          Date of Birth
                        </span>
                        <span className="flex-1 text-gray-900 dark:text-white">
                          {formatDate(member.DateOfBirth)}
                        </span>
                      </div>
                    )}
                    {member.address && (
                      <div className="flex items-start">
                        <span className="w-32 text-sm font-medium text-gray-500 dark:text-gray-400">
                          Address
                        </span>
                        <span className="flex-1 text-gray-900 dark:text-white">
                          {member.address}, {member.city}, {member.state},{" "}
                          {member.country}, {member.postalCode}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Social Links */}
                {(member.website || member.linkedin || member.twitter) && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
                      Connect
                    </h2>
                    <div className="flex flex-wrap gap-4">
                      {member.website && (
                        <a
                          href={member.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400 hover:bg-primary-500/20 transition-colors duration-200"
                        >
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                          </svg>
                          Website
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400 hover:bg-primary-500/20 transition-colors duration-200"
                        >
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                          </svg>
                          LinkedIn
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400 hover:bg-primary-500/20 transition-colors duration-200"
                        >
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                          </svg>
                          Twitter
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsArea;
