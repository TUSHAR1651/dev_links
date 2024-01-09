import mongoose from "mongoose";
import bycrptjs from "bcryptjs";
import crypto from "crypto";

export interface IUser extends mongoose.Document {
  name?: string;
  username?: string;
  email: string;
  password: string;
  passwordChangedAt?: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  active: boolean;
  image?: string;

  theme?: mongoose.Schema.Types.ObjectId;
  events?: [mongoose.Schema.Types.ObjectId];

  links?: [
    {
      url: string;
      title: string;
      icon: string;
      star: boolean;
      thumbnail?: string;
      active: boolean;
      priority: number;
    }
  ];

  socialLinks?: {
    facebook: string;
    instagram: string;
    linkedin: string;
    twitter: string;
  };

  correctPassword: (
    candidatePassword: string,
    userPassword: string
  ) => Promise<boolean>;

  changedPasswordAfter: (JWTTimestamp: number) => boolean;

  createPasswordResetToken: () => string;
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },

  username: {
    type: String,
    required: true,
    unique: true,
  },

  image: { type: String },
  active: { type: Boolean, default: true },
  password: { type: String, required: true },
  passwordChangedAt: { type: Date },
  passwordResetToken: { type: String },
  passwordResetExpires: { type: Date },

  theme: { type: mongoose.Schema.Types.ObjectId, ref: "Theme" },
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event", default: [] }],

  socialLinks: {
    facebook: { type: String, default: "" },
    instagram: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    twitter: { type: String, default: "" },
  },

  links: [
    {
      url: { type: String, default: "" },
      title: { type: String, default: "" },
      icon: { type: String },
      star: { type: Boolean, default: false },
      thumbnail: { type: String },
      active: { type: Boolean, default: false },
      priority: { type: Number, default: 1 },
    },
  ],
});

// This is giving an error == this is for delete api route
// userSchema.pre(/^find/, function (next: NextFunction) {
//   this.find({ active: { $ne: false } });
//   next();
// });

userSchema.methods.correctPassword = async function (
  candidatePassword: string,
  userPassword: string
) {
  console.log({ candidatePassword, userPassword });
  return await bycrptjs.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp: number) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      (this.passwordChangedAt.getTime() / 1000).toString(),
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

export const User = mongoose.model<IUser>("User", userSchema);
