import mongoose from "mongoose";

export interface ILink extends mongoose.Document {
  url: string;
  title: string;
  icon?: string;
  star: boolean;
  thumbnail?: string;
  active: boolean;
  clicks: [mongoose.Schema.Types.ObjectId];
}

const linkSchema = new mongoose.Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  icon: { type: String },
  star: { type: Boolean, default: false },
  thumbnail: { type: String },
  active: { type: Boolean, default: false },
  clicks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event", default: [] }],
});

export const Link = mongoose.model<ILink>("Link", linkSchema);
