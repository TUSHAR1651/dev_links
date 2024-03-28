import mongoose from "mongoose";

export interface ITheme extends mongoose.Document {
  name?: string;

  backgroundColor: string;
  textColor: string;

  buttonColor: string;
  buttonShape: string;
  buttonText: string;

  // otherCss: string;
  custom: boolean;
}

const themeSchema = new mongoose.Schema({
  name: { type: String, required: true, default: "Custom Theme" },

  backgroundColor: { type: String, required: true },
  textColor: { type: String, required: true },

  buttonColor: { type: String, required: true },
  buttonShape: { type: String, required: true },
  buttonText: { type: String, required: true },

  // otherCss: { type: String, required: true },
  custom: { type: Boolean, required: true },
});

const Theme = mongoose.model<ITheme>("Theme", themeSchema);

export default Theme;
