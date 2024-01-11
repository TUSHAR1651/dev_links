import mongoose from "mongoose";

export interface IEvent extends mongoose.Document {
  type: "link";
  date: Date;
  link: mongoose.Schema.Types.ObjectId;
}

const eventSchema = new mongoose.Schema({
  type: { type: String, required: true },
  date: { type: Date, required: true },
  link: { type: mongoose.Schema.Types.ObjectId, required: true },
});

export const Event = mongoose.model<IEvent>("Event", eventSchema);
