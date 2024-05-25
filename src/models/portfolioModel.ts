import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  title: { type: String },
  client: { type: String },
  services: { type: String },
  date: { type: String },
  des: { type: String },
  images: { type: Array },
  challenges: { type: Array },
  solutions: { type: Array },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const PortfolioModel =
  mongoose.models.Portfolio || mongoose.model("Portfolio", portfolioSchema);

export default PortfolioModel;
