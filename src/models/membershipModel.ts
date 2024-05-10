import mongoose from "mongoose";
const { Schema } = mongoose;

const membershipSchema = new Schema(
  {
    title: {
      type: String,
      enum: ["MR", "MRS", "MS", "DR", "PROF", "REV"],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },

    email: String,
    department: String,
    designation: String,
    phone: String,
    DateOfBirth: Date,
    aadharNumber: String,
    bio: String,
    imageUrl: String,
    collegeName: String,
    address: String,
    city: String,
    state: String,
    country: String,
    postalCode: String,
    twitter: String,
    linkedin: String,
    website: String,
    membershipPlan: {
      type: Schema.Types.ObjectId,
      ref: "MembershipPlan",
    },
  },
  {
    timestamps: true,
  }
);

const Membership =
  mongoose.models.Membership || mongoose.model("Membership", membershipSchema);

export default Membership;
