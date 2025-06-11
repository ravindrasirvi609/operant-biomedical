import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

interface Membership {
  imageUrl: string;
  name: string;
  subject: string;
  membershipId: string;
  _id: string;
  // Add more properties if needed
}

const chunkArray = (arr: Membership[], chunkSize: number): Membership[][] => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

const MembershipList = () => {
  const router = useRouter();
  const [team_data, setTeam_data] = useState<Membership[]>([]);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    const fetchMembershipList = async () => {
      try {
        const response = await axios.post("/api/membership/membershipList", {
          method: "POST",
        });
        setTeam_data(response.data.memberships);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMembershipList();
  }, []);

  const handleMemberClick = (memberId: string) => {
    router.push(`/team-details/${memberId}`);
  };

  const chunkedData = chunkArray(team_data, 4);

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
              Our Team
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Expert Researchers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team_data.map((member, index) => (
            <div
              key={member._id}
              onClick={() => handleMemberClick(member._id)}
              className={`glass-dark p-6 rounded-xl transform transition-all duration-300 hover:scale-105 cursor-pointer group relative overflow-hidden ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors duration-300" />

              {/* Member Image */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-full ring-2 ring-primary-500/20 group-hover:ring-primary-500/40 transition-all duration-300"
                />
              </div>

              {/* Member Info */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <div className="text-primary-600 dark:text-primary-300 text-center font-medium mb-4">
                  {member.subject}
                </div>
                <p className="text-gray-600 dark:text-white/80 text-center">
                  {member.membershipId}
                </p>
              </div>

              {/* View Profile Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-24 md:h-16"></div>
    </>
  );
};

export default MembershipList;
