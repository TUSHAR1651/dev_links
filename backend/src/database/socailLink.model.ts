import mongoose from "mongoose";

export interface ISocial extends mongoose.Document {
  url: string;
  title: string;
  events?: [mongoose.Schema.Types.ObjectId];
}

const socialLinkSchema = new mongoose.Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event", default: [] }],
});

export const SocialLink = mongoose.model<ISocial>(
  "SocialLink",
  socialLinkSchema
);
