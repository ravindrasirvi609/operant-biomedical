import React from "react";
import Image from "next/image";

const TeamDetailsArea = (teamData: any) => {
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
    return null; // or return a loading spinner, or some fallback UI
  }
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text anim_text_writting">
              <h2 className="cs_section_title">
                {member.title} {member.name} &nbsp;&bull;&nbsp;{" "}
              </h2>
              <div className="cs_height_50 cs_height_lg_50">
                {member.membershipId}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_100 cs_height_lg_60"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            {member.imageUrl && (
              <Image
                src={member.imageUrl}
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
                {member.designation && (
                  <div className="d-flex">
                    <p className="col-md-2 col-4 cs_medium cs_primary_color">
                      Designation
                    </p>
                    <p className="col-md-4 col-10">{member.designation}</p>
                  </div>
                )}
                {member.department && (
                  <div className="d-flex">
                    <p className="col-md-2 col-4 cs_medium cs_primary_color">
                      Department
                    </p>
                    <p className="col-md-4 col-10">{member.department}</p>
                  </div>
                )}
                {member.collegeName && (
                  <div className="d-flex">
                    <p className="col-md-2 col-4 cs_medium cs_primary_color">
                      Colleage
                    </p>
                    <p className="col-md-4 col-10">{member.collegeName}</p>
                  </div>
                )}

                {member.bio && (
                  <div className="d-flex">
                    <p className="col-md-2 col-4 cs_medium cs_primary_color">
                      Bio
                    </p>
                    <p className="col-md-4 col-10">{member.bio}</p>
                  </div>
                )}
                <div className="cs_height_50 cs_height_lg_50"></div>

                {member.DateOfBirth && (
                  <div className="d-flex">
                    <p className="col-md-2 col-4 cs_medium cs_primary_color">
                      Date Of Birth
                    </p>
                    <p className="col-md-4 col-10">
                      {formatDate(member.DateOfBirth)}
                    </p>
                  </div>
                )}

                {member.address && (
                  <div className="d-flex">
                    <p className="col-md-2 col-4 cs_medium cs_primary_color">
                      Address
                    </p>
                    <p className="col-md-4 col-10">
                      {member.address}, {member.city}, {member.state},{" "}
                      {member.country}, {member.postalCode}
                    </p>
                  </div>
                )}
              </div>
              <div className="cs_height_50 cs_height_lg_50"></div>
              <div className="cs_btn cs_style_2">
                {member.website && (
                  <a
                    target="_blank"
                    href={member.website}
                    className="cs_center"
                  >
                    Website
                  </a>
                )}
                {member.linkdien && (
                  <a
                    target="_blank"
                    href={member.linkdien}
                    className="cs_center"
                  >
                    linkdien
                  </a>
                )}
                {member.twitter && (
                  <a
                    target="_blank"
                    href={member.twitter}
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
