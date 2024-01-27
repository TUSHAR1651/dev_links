import mongoose from "mongoose";

export interface ISocial extends mongoose.Document {
  url: string;
  title: string;
  icon?: string;
  active?: boolean;
}

const socialLinkSchema = new mongoose.Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  icon: { type: String },
  active: { type: Boolean, default: true },
});

export const SocialLink = mongoose.model<ISocial>("Link", socialLinkSchema);
