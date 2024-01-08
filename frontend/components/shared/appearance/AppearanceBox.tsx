"use client";

import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import ThemeContainer from "./ThemeContainer";
import { useAppearanceStore } from "@/store/appearance.store";
// import BackgroundContainer from "./BackgroundContainer";
// import ButtonContainer from "./ButtonContainer";
// import FontContainer from "./FontContainer";

const AppearanceBox = () => {
  const { appearance, updateAppearance } = useAppearanceStore();
  const [activeTab, setActiveTab] = useState("theme");

  return (
    <div className="w-[700px] m-auto">
      <div className="flex flex-col gap-16">
        <ProfileCard />
        <ThemeContainer />
        {/* <BackgroundContainer />
        <ButtonContainer />
        <FontContainer /> */}
      </div>
    </div>
  );
};

export default AppearanceBox;
