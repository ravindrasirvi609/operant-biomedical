import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  email: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const emailModel =
  mongoose.models.Email || mongoose.model("Email", emailSchema);

export default emailModel;
