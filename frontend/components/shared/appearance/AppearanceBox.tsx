"use client";

import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import ThemeContainer from "./ThemeContainer";
import { useAppearanceStore } from "@/store/appearance.store";

const AppearanceBox = () => {
  return (
    <div className="w-[700px] h-[100vh]  m-auto">
      <div className="flex flex-col gap-16">
        <ProfileCard />
        <ThemeContainer />
      </div>
    </div>
  );
};

export default AppearanceBox;
