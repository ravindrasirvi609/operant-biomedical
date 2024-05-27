import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: [
      "Pharmanecia",
      "PharmaNEST",
      "Biomedical Research Publications",
      "PharMAIR",
    ],
  },
  heading: { type: String },
  subHeading: { type: String },
  title: { type: String },
  client: { type: String },
  services: { type: String },
  date: { type: String },
  des: { type: String },
  images: { type: Array },
  challenges: { type: Array },
  solutions: { type: Array },
  video: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const PortfolioModel =
  mongoose.models.Portfolio || mongoose.model("Portfolio", portfolioSchema);

export default PortfolioModel;
