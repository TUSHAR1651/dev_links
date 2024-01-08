import mongoose from "mongoose";

export interface IEvent extends mongoose.Document {}

const eventSchema = new mongoose.Schema({});

export const Event = mongoose.model<IEvent>("Event", eventSchema);
