import express from "express";
import { getAllThemes } from "../controllers/theme.controller";

const themeRouter = express.Router();

themeRouter.get("/", getAllThemes);

export default themeRouter;
