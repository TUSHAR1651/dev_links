import { Request, Response } from "express";
import { User } from "../database/User.model";

export const getMyProfile = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;

    res.status(200).json({ message: "User found", user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

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

    user.links?.push({ url: "example.com", title: "example-title", icon: "" });

    await user.save();

    res.status(200).json({ message: "User found", user: user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateLink = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;

    const { url, title, id } = req.body;

    user.links?.map((link: any) => {
      if (link._id == id) {
        link.title = title;
        link.url = url;
      }
    });

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
