import mongoose from "mongoose";
const { Schema } = mongoose;

const membershipPlanSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    maxAllowedBooks: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const MembershipPlan =
  mongoose.models.membershipPlan ||
  mongoose.model("membershipPlan", membershipPlanSchema);

export default MembershipPlan;
