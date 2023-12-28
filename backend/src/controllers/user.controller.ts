import { Request, Response } from "express";
import { User } from "../database/User.model";

// we will use this to render the admin side of the user
export const getMyProfile = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;

    res.status(200).json({ message: "User found", user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// we will use this to render the whole profile page of the user
export const getUserByUsername = async (req: Request, res: Response) => {
  try {
    const username = req.params.username;

    const user = await User.find({ username });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User found", user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const addLink = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;
    console.log({ user });

    const { url, title, icon } = req.body;

    console.log({ url, title, icon });

    user.links?.push({ url, title, icon });

    await user.save();

    res.status(200).json({ message: "User found", user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateLink = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;

    const { url, title, icon } = req.body;

    // updating the link from the array

    await user.save();

    res.status(200).json({ message: "User found", user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteLink = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;

    const { url, title, icon } = req.body;

    await user.save();

    res.status(200).json({ message: "User found", user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
