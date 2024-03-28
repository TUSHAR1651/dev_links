import express from "express";
import { addTheme, getAllThemes } from "../controllers/theme.controller";

const themeRouter = express.Router();

themeRouter.get("/", getAllThemes);
themeRouter.post("/create", addTheme);

export default themeRouter;
