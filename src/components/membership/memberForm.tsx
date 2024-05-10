"use client";

import React from "react";

const MembersForm = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="cs_contact_ms">
            <div className="cs_contact">
              <div className="cs_contact_text">
                <p className="cs_contact_subtitle anim_text_upanddowns">
                  Membership Form
                </p>
                <h1 className="cs_contact_title anim_text_writting">
                  Become a Member
                </h1>
              </div>
              <div className="cs_height_80 cs_height_lg_20"></div>
              <div className="cs_from anim_div_ShowDowns">
                <form onClick={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="cs_field_group col">
                      <input
                        className="cs_input_field"
                        type="text"
                        id="test1"
                        placeholder="Name"
                        name="test"
                      />
                      <label htmlFor="test1" className="cs_input_label">
                        Name
                      </label>
                    </div>
                    <div className="cs_field_group col">
                      <input
                        className="cs_input_field"
                        type="text"
                        id="test2"
                        placeholder="Name"
                        name="test"
                      />
                      <label htmlFor="test2" className="cs_input_label">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="cs_height_10 cs_height_lg_20"></div>
                  <div className="row">
                    <div className="cs_field_group col">
                      <input
                        className="cs_input_field"
                        type="text"
                        id="test3"
                        placeholder="Name"
                        name="test"
                      />
                      <label htmlFor="test3" className="cs_input_label">
                        Phone
                      </label>
                    </div>
                    <div className="cs_field_group col">
                      <input
                        className="cs_input_field"
                        type="text"
                        id="test4"
                        placeholder="Name"
                        name="test"
                      />
                      <label htmlFor="test4" className="cs_input_label">
                        Subject
                      </label>
                    </div>
                  </div>
                  <div className="cs_height_100 cs_height_lg_60"></div>
                  <div className="cs_field_group">
                    <input
                      className="cs_input_field"
                      type="text"
                      id="test5"
                      placeholder="Message"
                      name="test"
                    />
                    <label htmlFor="test5" className="cs_input_label">
                      Message
                    </label>
                  </div>
                  <div className="cs_height_60 cs_height_lg_60"></div>
                  <button
                    type="submit"
                    className="cs_btn cs_style_1 cs_type_btn"
                  >
                    <span>Submit Now</span>
                    <svg
                      width="19"
                      height="13"
                      viewBox="0 0 19 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default MembersForm;
