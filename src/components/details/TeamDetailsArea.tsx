import React from "react";
import avatar_img_1 from "@/assets/img/team_detalils.jpg";
import Image from "next/image";

interface DataType {
  des: string;
  info: {
    title: string;
    des: string;
  }[];
}

const TeamDetailsArea = (teamData: any) => {
  console.log("teamData hhihihihihhhiiih", teamData.teamData.member);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text anim_text_writting">
              <h2 className="cs_section_title">
                {teamData.teamData.member.title} {teamData.teamData.member.name}{" "}
                &nbsp;&bull;&nbsp; {teamData.teamData.member.designation}{" "}
                {teamData.teamData.member.department}
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_100 cs_height_lg_60"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            {teamData.teamData.member.imageUrl && (
              <Image
                src={teamData.teamData.member.imageUrl}
                alt="team_detalils"
                width={500}
                height={500}
              />
            )}
            <div className="cs_height_lg_30"></div>
          </div>
          <div className="col-md-7">
            <div className="cs_team_details">
              <div className="cs_team_details_text">
                <p>{teamData.teamData.member.bio}</p>
                <div className="cs_height_50 cs_height_lg_50"></div>

                {teamData.teamData.member.DateOfBirth && (
                  <div className="d-flex">
                    <p className="col-md-2 col-4 cs_medium cs_primary_color">
                      Date Of Birth
                    </p>
                    <p className="col-md-4 col-10">
                      {formatDate(teamData.teamData.member.DateOfBirth)}
                    </p>
                  </div>
                )}

                {teamData.teamData.member.address && (
                  <div className="d-flex">
                    <p className="col-md-2 col-4 cs_medium cs_primary_color">
                      Address
                    </p>
                    <p className="col-md-4 col-10">
                      {teamData.teamData.member.address},{" "}
                      {teamData.teamData.member.city},{" "}
                      {teamData.teamData.member.state},{" "}
                      {teamData.teamData.member.country},{" "}
                      {teamData.teamData.member.zip}
                    </p>
                  </div>
                )}
              </div>
              <div className="cs_height_50 cs_height_lg_50"></div>
              <div className="cs_btn cs_style_2">
                {teamData.teamData.member.website && (
                  <a
                    target="_blank"
                    href={teamData.teamData.member.website}
                    className="cs_center"
                  >
                    Website
                  </a>
                )}
                {teamData.teamData.member.linkdien && (
                  <a
                    target="_blank"
                    href={teamData.teamData.member.linkdien}
                    className="cs_center"
                  >
                    linkdien
                  </a>
                )}
                {teamData.teamData.member.twitter && (
                  <a
                    target="_blank"
                    href={teamData.teamData.member.twitter}
                    className="cs_center"
                  >
                    Twitter
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default TeamDetailsArea;
