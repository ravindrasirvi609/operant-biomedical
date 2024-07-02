import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

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
      <div className="cs_height_219 cs_height_lg_120"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_text">
            <h2 className="cs_section_title anim_text_writting">
              Exclusive Premium Member Directory
            </h2>
          </div>
        </div>
      </div>

      <div className="cs_height_100 cs_height_lg_60"></div>
      <section>
        <div className="container">
          {chunkedData.map((chunk, chunkIndex) => (
            <div
              key={chunkIndex}
              className="cs_team_section anim_div_ShowDowns"
            >
              {chunk.map((item, i) => (
                <div key={item._id} className="cs_team_img">
                  <Link href={`/team-details/${item._id}`}>
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={200}
                      height={200}
                    />
                    <div className="cs_portfolio_overlay"></div>
                  </Link>

                  <div className="cs_team_text">
                    <Link href={`/team-details/${item._id}`}>
                      <h6 className="cs_team_text_title">{item.name}</h6>
                    </Link>
                    <p className="cs_team_subtitle">{item.subject}</p>
                    <p className="cs_team_subtitle">{item.membershipId}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MembershipList;
