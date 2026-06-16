import mongoose from "mongoose";

const webinarRegistrationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    gender: {
      type: String,
      enum: ["Male", "Female", "Prefer not to say", "Other"],
      required: true,
    },
    email: { type: String, required: true, unique: true },
    mobileNumber: { type: String, required: true },
    country: { type: String, required: true },
    stateProvince: { type: String, required: true },
    city: { type: String, required: true },
    professionalCategory: { type: String, required: true },
    otherProfessionalCategory: { type: String },
    designation: { type: String, required: true },
    departmentSpecialization: { type: String, required: true },
    organizationName: { type: String, required: true },
    organizationType: { type: String, required: true },
    otherOrganizationType: { type: String },
    yearsExperience: { type: String, required: true },
    objectives: [{ type: String }],
    otherObjective: { type: String },
    futureWorkshopsInterest: {
      type: String,
      enum: ["Yes", "No", "Maybe"],
      required: true,
    },
    consentCommunications: { type: Boolean, required: true },
    informationAccurate: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const WebinarRegistration =
  mongoose.models.WebinarRegistration ||
  mongoose.model("WebinarRegistration", webinarRegistrationSchema);

export default WebinarRegistration;
