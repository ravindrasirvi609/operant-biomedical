import React, { use, useEffect, useState } from "react";
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
          <div className="cs_team_section anim_div_ShowDowns">
            {team_data.slice(0, 4).map((item, i) => (
              <div key={i} className="cs_team_img">
                <Link href={`/team-details/${item._id}`}>
                  <Image
                    src={item.imageUrl}
                    alt="teamsimg1"
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
          <div className="cs_height_20 cs_height_lg_20"></div>
          <div className="cs_team_section anim_div_ShowDowns">
            {team_data.slice(4, 8).map((item, i) => (
              <div key={i} className="cs_team_img">
                <Link href={`/team-details/${item._id}`}>
                  <Image
                    src={item.imageUrl}
                    alt="teamsimg5"
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MembershipList;
