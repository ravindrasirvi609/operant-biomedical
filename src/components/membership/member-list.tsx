import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useInView } from "react-intersection-observer";

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
        console.log(response.data); // Handle response data as needed
      } catch (error) {
        console.error(error);
      }
    };

    fetchMembershipList(); // Call the async function
  }, []); // Empty dependency array to run only once on mount

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
            <span className="text-primary-300 text-sm font-medium">
              Our Team
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our Expert Researchers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team_data.map((member, index) => (
            <div
              key={member._id}
              className={`glass-dark p-6 rounded-xl transform transition-all duration-500 hover:scale-105 ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">
                {member.name}
              </h3>
              <div className="text-primary-300 text-center font-medium mb-4">
                {member.subject}
              </div>
              <p className="text-white/80 text-center">{member.membershipId}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-24 md:h-16"></div>
    </>
  );
};

export default MembershipList;
