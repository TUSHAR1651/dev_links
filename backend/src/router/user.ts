import express from "express";
import {
  addLink,
  getMyProfile,
  getUserByUsername,
  updateLink,
} from "../controllers/user.controller";
import { protect } from "../controllers/auth.controller";

const userRouter = express.Router();

userRouter.get("/me", protect, getMyProfile);

// userRouter.get("/:id", getUserByUsername);

userRouter.post("/add-link", protect, addLink);

userRouter.patch("/update-link", protect, updateLink);

// userRouter.delete("/delete-link", protect, addLink);

// userRouter.patch("/update-profile-theme", protect, addLink);

export default userRouter;
