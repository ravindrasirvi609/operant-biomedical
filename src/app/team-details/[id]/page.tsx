"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TeamDetailsArea from "@/components/details/TeamDetailsArea";

interface TeamDetailsProps {
  id: string;
}

const TeamDetails = ({ params }: any) => {
  const { id } = params;
  const [teamData, setTeamData] = useState<any>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/membership/memberDetails", {
          id,
        });
        console.log(response.data);

        setTeamData(response.data);
      } catch (error) {
        setError("Failed to fetch team details");
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!teamData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <TeamDetailsArea teamData={teamData} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
