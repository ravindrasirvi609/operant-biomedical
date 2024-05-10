import React, { useState } from "react";
import axios from "axios";

interface FormValues {
  title: string;
  name: string;
  email: string;
  department: string;
  designation: string;
  phone: string;
  DateOfBirth: Date;
  aadharNumber: string;
  bio: string;
  collegeName: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  twitter: string;
  linkedin: string;
  website: string;
  profilePicture: File | null;
}

const MembersForm: React.FC = () => {
  const initialValues: FormValues = {
    title: "",
    name: "",
    email: "",
    department: "",
    designation: "",
    phone: "",
    DateOfBirth: new Date(),
    aadharNumber: "",
    bio: "",
    collegeName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    twitter: "",
    linkedin: "",
    website: "",
    profilePicture: null,
  };

  const [formData, setFormData] = useState<FormValues>(initialValues);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "/api/membership/newMembership",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setLoading(false);
      setFormData(initialValues);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="cs_height_150 cs_height_lg_120"></div>
      <section>
        <div className="container">
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
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="cs_field_group col">
                    <select
                      className="cs_input_field"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                    >
                      <option value="">Select Title</option>
                      <option value="MR">Mr.</option>
                      <option value="MRS">Mrs.</option>
                      <option value="MS">Ms.</option>
                      <option value="DR">Dr.</option>
                      <option value="PROF">Prof.</option>
                      <option value="REV">Rev.</option>
                    </select>
                    <label htmlFor="title" className="cs_input_label">
                      Title
                    </label>
                  </div>
                  <div className="cs_field_group col">
                    <input
                      className="cs_input_field"
                      type="text"
                      id="name"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <label htmlFor="name" className="cs_input_label">
                      Name
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="cs_field_group col">
                    <input
                      className="cs_input_field"
                      type="email"
                      id="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="email" className="cs_input_label">
                      Email
                    </label>
                  </div>
                  <div className="cs_field_group col">
                    <input
                      className="cs_input_field"
                      type="text"
                      id="department"
                      placeholder="Department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                    />
                    <label htmlFor="department" className="cs_input_label">
                      Department
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="cs_field_group col">
                    <input
                      className="cs_input_field"
                      type="text"
                      id="designation"
                      placeholder="Designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                    />
                    <label htmlFor="designation" className="cs_input_label">
                      Designation
                    </label>
                  </div>
                  <div className="cs_field_group col">
                    <input
                      className="cs_input_field"
                      type="text"
                      id="phone"
                      placeholder="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <label htmlFor="phone" className="cs_input_label">
                      Phone
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="cs_field_group col">
                    <input
                      className="cs_input_field"
                      type="date"
                      id="DateOfBirth"
                      placeholder="Date Of Birth"
                      name="DateOfBirth"
                      value={formData.DateOfBirth.toString()}
                      onChange={handleChange}
                    />
                    <label htmlFor="DateOfBirth" className="cs_input_label">
                      Date Of Birth
                    </label>
                  </div>
                  <div className="cs_field_group col">
                    <input
                      className="cs_input_field"
                      type="text"
                      id="aadharNumber"
                      placeholder="Aadhar Number"
                      name="aadharNumber"
                      value={formData.aadharNumber}
                      onChange={handleChange}
                    />
                    <label htmlFor="aadharNumber" className="cs_input_label">
                      Aadhar Number
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="cs_field_group col">
                    <input
                      className="cs_input_field"
                      type="text"
                      id="bio"
                      placeholder="Bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                    />
                    <label htmlFor="bio" className="cs_input_label">
                      Bio
                    </label>
                  </div>
                  <div className="cs_field_group col">
                    <input
                      className="cs_input_field"
                      type="text"
                      id="collegeName"
                      placeholder="College Name"
                      name="collegeName"
                      value={formData.collegeName}
                      onChange={handleChange}
                    />
                    <label htmlFor="collegeName" className="cs_input_label">
                      College Name
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="cs_field_group col">
                    <input
                      className="cs_input_field"
                      type="text"
                      id="address"
                      placeholder="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                    <label htmlFor="address" className="cs_input_label">
                      Address
                    </label>
                  </div>
                  <div className="cs_field_group col">
                    <input
                      className="cs_input_field"
                      type="text"
                      id="city"
                      placeholder="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    <label htmlFor="city" className="cs_input_label">
                      City
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="cs_field_group col">
                    <input
                      className="cs_input_field"
                      type="text"
                      id="state"
                      placeholder="State"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    />
                    <label htmlFor="state" className="cs_input_label">
                      State
                    </label>
                  </div>
                  <div className="cs_field_group col">
                    <input
                      className="cs_input_field"
                      type="text"
                      id="country"
                      placeholder="Country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                    <label htmlFor="country" className="cs_input_label">
                      Country
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="cs_field_group col">
                    <input
                      className="cs_input_field"
                      type="text"
                      id="postalCode"
                      placeholder="Postal Code"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                    />
                    <label htmlFor="postalCode" className="cs_input_label">
                      Postal Code
                    </label>
                  </div>
                  <div className="cs_field_group col">
                    <input
                      className="cs_input_field"
                      type="text"
                      id="twitter"
                      placeholder="Twitter"
                      name="twitter"
                      value={formData.twitter}
                      onChange={handleChange}
                    />
                    <label htmlFor="twitter" className="cs_input_label">
                      Twitter
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="cs_field_group col">
                    <input
                      className="cs_input_field"
                      type="text"
                      id="linkedin"
                      placeholder="LinkedIn"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                    />
                    <label htmlFor="linkedin" className="cs_input_label">
                      LinkedIn
                    </label>
                  </div>
                  <div className="cs_field_group col">
                    <input
                      className="cs_input_field"
                      type="text"
                      id="website"
                      placeholder="Website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                    />
                    <label htmlFor="website" className="cs_input_label">
                      Website
                    </label>
                  </div>
                </div>
                <div className="cs_field_group">
                  <input
                    className="cs_input_field"
                    type="file"
                    id="profilePicture"
                    name="profilePicture"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        profilePicture: e.target.files
                          ? e.target.files[0]
                          : null,
                      })
                    }
                  />
                  <label htmlFor="profilePicture" className="cs_input_label">
                    Profile Picture
                  </label>
                </div>
                <div className="cs_height_60 cs_height_lg_60"></div>
                {loading && <div>Loading...</div>}

                <button
                  type="submit"
                  className="cs_btn cs_style_1 cs_type_btn"
                  disabled={loading}
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
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default MembersForm;
