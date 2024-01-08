import mongoose from "mongoose";

export interface ITheme extends mongoose.Document {
  name: string;
  background: string;
  backgroundImage: string;
  buttons: string;
  textColor: string;
  otherCss: string;
  custom: boolean;
  id: number;
}

const themeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  background: { type: String, required: true },
  backgroundImage: { type: String, required: true },
  buttons: { type: String, required: true },
  textColor: { type: String, required: true },
  otherCss: { type: String, required: true },
  custom: { type: Boolean, required: true },
  id: { type: Number, required: true },
});

export const User = mongoose.model<ITheme>("Theme", themeSchema);
