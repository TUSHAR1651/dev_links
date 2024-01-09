import express from "express";
import {
  addLink,
  getMyProfile,
  getUserByUsername,
  toggleLink,
  updateLink,
  updateProfile,
  updateUserTheme,
} from "../controllers/user.controller";
import { protect } from "../controllers/auth.controller";

const userRouter = express.Router();

// These routes are for the user profile
userRouter.get("/me", protect, getMyProfile);
userRouter.patch("/me", protect, updateProfile);

userRouter.get("/:username", getUserByUsername); // public route

userRouter.patch("/link/:id", protect, updateLink);
userRouter.post("/link", protect, addLink);
// userRouter.delete("/link/:id", protect, deleteLink);
userRouter.post("/toggle-link", protect, toggleLink);

userRouter.post("/theme", protect, updateUserTheme);

// These routes are for the social links in the user model
// Here instead of the ID we will be using the name of the social media since they are unique
userRouter.post("/social-link", protect, addLink);
userRouter.patch("/social-link/:id", protect, addLink);
userRouter.delete("/social-link/:id", protect, addLink);

export default userRouter;
