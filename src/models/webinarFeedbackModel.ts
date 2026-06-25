import mongoose from "mongoose";

const webinarFeedbackSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, index: true },
    fullName: { type: String, required: true },
    overallSatisfaction: { type: String, required: true },
    contentRelevance: { type: String, required: true },
    speakerEffectiveness: { type: String, required: true },
    technicalExperience: { type: String, required: true },
    keyTakeaway: { type: String, required: true },
    suggestions: { type: String },
    consentToContact: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const WebinarFeedback =
  mongoose.models.WebinarFeedback ||
  mongoose.model("WebinarFeedback", webinarFeedbackSchema);

export default WebinarFeedback;
