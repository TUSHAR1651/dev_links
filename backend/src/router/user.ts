import express from "express";
import {
  addLink,
  getMyProfile,
  getUserByUsername,
} from "../controllers/user.controller";
import { protect } from "../controllers/auth.controller";

const userRouter = express.Router();

userRouter.get("/me", getMyProfile);

userRouter.get("/:id", getUserByUsername);

userRouter.post("/add-link", protect, addLink);

export default userRouter;
