import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  message: { type: String },
  subject: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const ContactModel =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default ContactModel;
