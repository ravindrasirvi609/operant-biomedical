import mongoose from "mongoose";
const { Schema } = mongoose;

const membershipSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: Date,
    },
    phone: String,
    bio: String,
    imageUrl: String,
    subject: String,
    collegeName: String,
    occupation: String,
    education: String,
    location: String,
    website: String,
    twitter: String,
    facebook: String,
    linkedin: String,
    instagram: String,
  },
  {
    timestamps: true,
  }
);

const Membership =
  mongoose.models.Membership || mongoose.model("Membership", membershipSchema);

export default Membership;
