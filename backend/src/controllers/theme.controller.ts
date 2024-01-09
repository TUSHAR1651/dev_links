import { Request, Response } from "express";
import Theme from "../database/theme.model";

export const getAllThemes = async (req: Request, res: Response) => {
  try {
    const themes = await Theme.find({});

    res.status(200).send(themes);
  } catch (error) {
    return { error };
  }
};
