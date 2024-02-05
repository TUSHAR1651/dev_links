import mongoose from "mongoose";
import bycrptjs from "bcryptjs";
import crypto from "crypto";

export interface IUser extends mongoose.Document {
  name?: string;
  username?: string;
  usernameThere?: boolean;
  email: string;
  password: string;
  passwordChangedAt?: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  active: boolean;
  image?: string;

  profileViews?: number;

  theme?: mongoose.Schema.Types.ObjectId;
  events?: [mongoose.Schema.Types.ObjectId];

  links?: [mongoose.Schema.Types.ObjectId];

  socialLinks?: [mongoose.Schema.Types.ObjectId];

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
    unique: true,
  },

  // currentlym this is only handled for the google login
  usernameThere: { type: Boolean, default: false },

  profileViews: { type: Number, default: 0 },

  image: { type: String },
  active: { type: Boolean, default: true },
  password: { type: String, required: false },
  passwordChangedAt: { type: Date },
  passwordResetToken: { type: String },
  passwordResetExpires: { type: Date },

  theme: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Theme",
    default: "659d33525b672f0d2449ae23",
  },
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event", default: [] }],

  socialLinks: [
    { type: mongoose.Schema.Types.ObjectId, ref: "SocialLink", default: [] },
  ],

  links: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Link",
      default: [],
    },
  ],
});

// This is for finding the active users => since I am using soft delete only
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
