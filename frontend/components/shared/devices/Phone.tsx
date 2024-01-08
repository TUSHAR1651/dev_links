"use client";

import React from "react";

import { useAppearanceStore } from "@/store/appearance.store";
import { useUserStore } from "@/store/user.store";
import { useAuth } from "@/context/authContext";

const Phone = () => {
  const { user } = useAuth();
  const { appearance } = useUserStore();
  const { updateAppearance, themes } = useAppearanceStore();

  const activeLinks = user?.links.filter((link: any) => link.active);

  const activeTheme = themes.find((theme: any) => theme.id == appearance.id);

  const divClassname = `${
    activeTheme.background +
    " " +
    activeTheme.button +
    " " +
    activeTheme.textColor
  } h-[500px] w-[375px]`;

  return (
    <div>
      <div className={divClassname}>
        {user?.links.map((link: any) => {
          return (
            <div className="" key={link.id}>
              {link.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Phone;
