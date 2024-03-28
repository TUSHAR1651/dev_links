import express from "express";
import {
  addLink,
  deleteLink,
  getMyProfile,
  getUserByUsername,
  registerLinkClick,
  starLink,
  toggleLink,
  updateLink,
  updateProfile,
  addImage,
  updateUserTheme,
  addSocialLink,
  updateCustomTheme,
} from "../controllers/user.controller";
import { protect } from "../controllers/auth.controller";

const userRouter = express.Router();

userRouter.get("/me", protect, getMyProfile);
userRouter.patch("/me", protect, updateProfile);

userRouter.get("/:username", getUserByUsername);

userRouter.patch("/link/:id", protect, updateLink);

userRouter.post("/image", protect, addImage);
userRouter.post("/link", protect, addLink);
userRouter.delete("/link/:id", protect, deleteLink);
userRouter.post("/toggle-link", protect, toggleLink);
userRouter.post("/link/star-link", protect, starLink);

userRouter.post("/link/register-click/:id", registerLinkClick);

userRouter.post("/update-theme", protect, updateUserTheme);
userRouter.post("/update-custom-theme", protect, updateCustomTheme);

userRouter.post("/social-link", protect, addSocialLink);

export default userRouter;
