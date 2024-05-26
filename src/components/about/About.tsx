import React from "react";
import agency_story_1 from "@/assets/img/portfolio/Pharmanecia3_E.png";
import agency_story_2 from "@/assets/img/portfolio/SAI_5165.jpg";
import agency_story_4 from "@/assets/img/portfolio/SAI_5321.jpg";
import agency_story_3 from "@/assets/img/portfolio/PVR_7715.jpg";
import Image from "next/image";

interface DataType {
  subtitle: string;
  title: string;
  des: string;
  des_2?: string;
}
const about_content: DataType = {
  subtitle: `About Operant Biomedical Research Federation`,
  title: `Discover how Operant Biomedical Research Federation is leading the way in collaborative innovation.`,
  des: `Operant Biomedical Research Federation is a leading organization in the field, uniting a diverse community of Academicians, Researchers, Scientists, Clinicians, and Industry Professionals. Together, we collaborate on biomedical research to push the boundaries of knowledge and technology in healthcare.`,
  des_2: `Join us in our journey to shape the future of biomedicine. Together, we can unlock new frontiers, transform healthcare, and make a meaningful impact on human health and well-being. Operant Biomedical Research Federation: Where collaboration drives innovation, and discovery beyond boundaries.`,
};
const { subtitle, title, des, des_2 } = about_content;

const About = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section>
        <div className="cs_primary_bg">
          <div className="container">
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="cs_section_heading_hr cs_style_1">
              <div className="cs_hr_design"></div>
              <div className="cs_section_heading cs_style_1 cs_color_1">
                <div className="cs_section_heading_text">
                  <h2 className="cs_section_title anim_heading_title">
                    {subtitle}
                  </h2>
                </div>
              </div>
              <div className="cs_hr_design"></div>
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="cs_section_heading cs_style_1 cs_color_1">
                    <div className="cs_section_heading_text">
                      <h3 className="cs_section_title_3 anim_div_ShowLeftSide">
                        {title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="anim_div_ShowRightSide">
                    <p className="cs_ternary_color">{des}</p>
                    <p className="cs_ternary_color">{des_2}</p>
                  </div>
                </div>
                <div className="m-3">
                  <div className="cs_section_heading cs_style_1 cs_color_1">
                    <div className="cs_section_heading_text">
                      <h4 className="cs_section_title_4 anim_div_ShowLeftSide mt-4 text-center">
                        Our Mission
                      </h4>
                    </div>
                  </div>
                  <div className="cs_ternary_color">
                    Our mission at Operant Biomedical Research Federation is to
                    foster a vibrant community of biomedical professionals
                    dedicated to scientific discovery, innovation, and
                    collaboration. Through interdisciplinary partnerships and
                    strategic initiatives, we aim to accelerate the pace of
                    biomedical research, translating scientific insights into
                    tangible solutions that address the most pressing health
                    challenges facing society. Together, we strive to drive
                    positive change, empower researchers, and improve patient
                    outcomes worldwide.
                  </div>
                </div>

                <div className="m-3">
                  <div className="cs_section_heading cs_style_1 cs_color_1">
                    <div className="cs_section_heading_text">
                      <h4 className="cs_section_title_4 anim_div_ShowLeftSide mt-4 text-center">
                        Vision:
                      </h4>
                    </div>
                  </div>
                  <div className="cs_ternary_color">
                    At Operant Biomedical Research Federation, we envision a
                    future where ground breaking biomedical research and
                    collaboration lead to transformative advances in healthcare,
                    improve patient outcomes and shaping the future of medicine.
                  </div>
                </div>
                <div className="m-3">
                  <div className="cs_section_heading cs_style_1 cs_color_1">
                    <div className="cs_section_heading_text">
                      <h4 className="cs_section_title_4 anim_div_ShowLeftSide mt-4 text-center">
                        Supporting Future Researchers:
                      </h4>
                    </div>
                  </div>
                  <div className="cs_ternary_color">
                    At Operant Biomedical Research Federation, we are committed
                    to supporting future biomedical researchers through
                    educational initiatives, mentorship programs, and funding
                    opportunities. By nurturing talent and fostering a culture
                    of innovation, we cultivate a vibrant ecosystem that propels
                    the field forward.
                  </div>
                </div>
                <div className="m-3">
                  <div className="cs_section_heading cs_style_1 cs_color_1">
                    <div className="cs_section_heading_text">
                      <h4 className="cs_section_title_4 anim_div_ShowLeftSide mt-4 text-center">
                        Objectives{" "}
                      </h4>
                    </div>
                  </div>
                  <div className="cs_ternary_color  mt-3">
                    <li className="m-1">
                      Create an inclusive environment that celebrates diversity
                      and promotes equitable participation in biomedical
                      research.
                    </li>
                    <li className="m-1">
                      Bridge the gap between basic science discoveries and
                      clinical applications through targeted translational
                      research initiatives.
                    </li>
                    <li className="m-1">
                      Provide resources and support to enhance the quality,
                      reproducibility, and impact of biomedical research.
                    </li>
                    <li className="m-1">
                      Facilitate cross-disciplinary partnerships to leverage
                      diverse expertise and perspectives in addressing complex
                      biomedical challenges.
                    </li>
                    <li className="m-1">
                      Offer mentorship, training, and educational programs to
                      cultivate the next generation of biomedical leaders.
                    </li>
                    <li className="m-1">
                      Uphold ethical standards and transparency in biomedical
                      research, considering societal and regulatory
                      implications.
                    </li>
                    <li className="m-1">
                      Foster international collaboration to address global
                      health issues and promote health equity.
                    </li>
                    <li className="m-1">
                      Utilize advanced data analytics and artificial
                      intelligence to extract meaningful insights from complex
                      biomedical datasets.
                    </li>
                    <li className="m-1">
                      Engage with the public and stakeholders to increase
                      awareness and understanding of biomedical research.
                    </li>
                    <li className="m-1">
                      Advocate for evidence-based policies and funding
                      initiatives to support biomedical innovation and
                      healthcare improvement.
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_height_385 cs_height_lg_120"></div>
          </div>
        </div>
        <div className="container">
          <div className="cs_agency agency_about_images_posation">
            <div className="cs_img_section_1">
              <Image src={agency_story_1} alt="image-here" className="w-100" />
            </div>
            <div className="cs_img_section_2">
              <Image src={agency_story_2} alt="image-here" className="w-100" />
            </div>
            <div className="cs_img_section_3">
              <div className="text-end">
                <Image src={agency_story_4} alt="image-here" />
                <Image
                  src={agency_story_3}
                  className="w-100"
                  alt="image-here"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
