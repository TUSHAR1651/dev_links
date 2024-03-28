import { Request, Response } from "express";
import Theme from "../database/theme.model";

export const getAllThemes = async (req: Request, res: Response) => {
  try {
    const themes = await Theme.find({ custom: false });

    res.status(200).send(themes);
  } catch (error) {
    return { error };
  }
};

export const addTheme = async (req: Request, res: Response) => {
  try {
    const {
      name,
      backgroundColor,
      backgroundImage,
      textColor,
      buttonColor,
      buttonShape,
      buttonText,
      otherCss,
      custom,
    } = req.body;

    const theme = await Theme.create({
      name,
      backgroundColor,
      backgroundImage,
      textColor,
      buttonColor,
      buttonShape,
      buttonText,
      otherCss,
      custom,
    });

    res.status(201).json({ theme, message: "Theme created successfully" });
  } catch (error) {
    console.log(error);
    return { error };
  }
};
