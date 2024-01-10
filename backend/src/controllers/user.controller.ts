import { Request, Response } from "express";
import { User } from "../database/User.model";
import Theme from "../database/theme.model";

export const getMyProfile = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;
    // console.log({ user });

    res.status(200).json({ message: "User found", user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getUserByUsername = async (req: Request, res: Response) => {
  try {
    const username = req.params.username;

    const user = await User.find({ username }).populate({
      path: "theme",
      model: Theme,
    });

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

    const { id } = req.params;
    // console.log({ id });

    const { url, title } = req.body;

    user.links?.map((link: any) => {
      if (link._id == id) {
        link.title = title;
        link.url = url;
      }
    });

    await user.save();

    res.status(200).json({ message: "User found", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error });
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

export const toggleLink = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;

    const { id } = req.body;

    // console.log({ user });
    // console.log({ id });

    user?.links?.map((link: any) => {
      if (link._id == id) {
        // console.log(link._id == id);
        link.active = !link.active;
        // console.log("change made");
      }
    });

    await user.save();

    res.status(200).json({ message: "User found", user });
  } catch (error) {
    res.status(500).json({ message: "Something went very wrong" });
  }
};

export const updateUserTheme = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;

    const { id } = req.body;

    const theme = await Theme.findById(id);

    if (!theme) return res.status(404).json({ message: "Theme not found" });

    await User.findByIdAndUpdate(user._id, { theme: theme?._id });

    res.status(200).json({ message: "User found", theme });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;

    const { bio, username } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      {
        username,
      },
      { new: true, runValidators: true }
    );

    res.status(200).json({ message: "User found", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
