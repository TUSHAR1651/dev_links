import { Request, Response } from "express";
import { User } from "../database/User.model";
import Theme from "../database/theme.model";
import { Link } from "../database/link.model";
import { Event } from "../database/event.model";
import { ISocial, SocialLink } from "../database/socailLink.model";
import { CurrentUser } from "./auth.controller";

// this is for the /me route
export const getMyProfile = async (req: Request, res: Response) => {
  try {
    let user = req.body.user;

    user = await User.findById(user._id).populate([
      {
        path: "theme",
        model: Theme,
      },
      {
        path: "links",
        model: Link,
      },
      {
        path: "socialLinks",
        model: SocialLink,
      },
    ]);

    res.status(200).json({ message: "User found", user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getUserByUsername = async (req: Request, res: Response) => {
  try {
    const username = req.params.username;

    const user = await User.findOneAndUpdate(
      { username },
      {
        $inc: { profileViews: 1 },
      }
    ).populate([
      {
        path: "theme",
        model: Theme,
      },
      {
        path: "links",
        model: Link,
      },
    ]);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User found", user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const addLink = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;

    const newLink = await Link.create({
      url: "example.com",
      title: "example-title",
      icon: "",
    });

    const updateUser = await User.findByIdAndUpdate(
      user._id,
      {
        $push: { links: newLink._id },
      },
      { new: true }
    ).populate([
      {
        path: "theme",
        model: Theme,
      },
      {
        path: "links",
        model: Link,
      },
    ]);

    res.status(200).json({ message: "User found", user: updateUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateLink = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;

    const { id } = req.params;

    const { url, title } = req.body;

    const link = await Link.findByIdAndUpdate(
      id,
      {
        url,
        title,
      },
      { new: true, runValidators: true }
    );

    if (!link) return res.status(404).json({ message: "Link not found" });

    const updatedUser = await User.findById(user._id).populate([
      {
        path: "theme",
        model: Theme,
      },
      {
        path: "links",
        model: Link,
      },
    ]);

    res.status(200).json({ message: "User found", user: updatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error });
  }
};

export const deleteLink = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;
    const { id } = req.params;

    const link = await Link.findByIdAndDelete(id);

    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }

    const updateUser = await User.findByIdAndUpdate(
      user._id,
      {
        $pull: { links: id },
      },
      { new: true }
    ).populate([
      {
        path: "theme",
        model: Theme,
      },
      {
        path: "links",
        model: Link,
      },
    ]);

    res
      .status(200)
      .json({ message: "Link deleted successfully", user: updateUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const toggleLink = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;

    const { id } = req.body;

    const link = await Link.findById(id);

    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }

    link.active = !link.active;

    await link.save();

    const updatedUser = await User.findById(user._id).populate([
      {
        path: "theme",
        model: Theme,
      },
      {
        path: "links",
        model: Link,
      },
    ]);

    res
      .status(200)
      .json({ message: "Link toggled successfully", user: updatedUser });
  } catch (error) {
    console.error(error);
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
        usernameThere: true,
      },
      { new: true, runValidators: true }
    );

    res.status(200).json({ message: "User found", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const registerLinkClick = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const event = await Event.create({
      type: "link",
      date: new Date(),
      link: id,
    });

    const link = await Link.findByIdAndUpdate(
      id,
      {
        $push: { clicks: event._id },
      },
      { new: true }
    );

    if (!link) return res.status(404).json({ message: "Link not found" });

    res.status(200).json({ message: "Link found", link });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const starLink = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;
    console.log({ user });

    const { id } = req.body;
    console.log({ id });
    const alreadyStared = user.links.find((link: any) => link.star === true);
    console.log({ alreadyStared });

    if (alreadyStared) {
      alreadyStared.star = false;
      await alreadyStared.save();

      if (alreadyStared._id.toString() === id) {
        return res
          .status(200)
          .json({ message: "Link toggled successfully", user: user });
      }
    }

    const link = await Link.findById(id);

    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }

    link.star = true;

    await link.save();

    const updatedUser = await User.findById(user._id).populate([
      {
        path: "theme",
        model: Theme,
      },
      {
        path: "links",
        model: Link,
      },
    ]);

    res
      .status(200)
      .json({ message: "Link toggled successfully", user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went very wrong" });
  }
};

export const addImage = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;

    const { image } = req.body;

    console.log({ image });

    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      {
        image,
      },
      { new: true, runValidators: true }
    );

    res.status(200).json({ message: "User found", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const addSocialLink = async (req: Request, res: Response) => {
  // What if the user removes the url shoudl we delete it or just an empty string be in the DB

  try {
    const user = req.body.user;

    const { data } = req.body;

    const dbUser = await User.findById(user._id).populate([
      {
        path: "socialLinks",
        model: SocialLink,
      },
    ]);

    const curLinks = dbUser?.socialLinks;

    for (let i = 0; i < data.length; i++) {
      const { url, title } = data[i];

      const isThere = curLinks?.find((link: any) => link.title === title);

      if (!isThere && url === "") continue;

      let id;
      let socialLink = undefined;

      if (isThere) {
        // @ts-ignore: Unreachable code error
        id = isThere._id;
        socialLink = await SocialLink.findByIdAndUpdate(id, {
          url,
          title,
        });
      } else {
        socialLink = await SocialLink.create({
          url,
          title,
        });
      }

      if (!(socialLink == undefined)) {
        await User.findByIdAndUpdate(
          user._id,
          {
            $addToSet: { socialLinks: socialLink._id },
          },
          { new: true }
        );
      }
    }

    return res.status(200).json({ message: "User found", user: dbUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
