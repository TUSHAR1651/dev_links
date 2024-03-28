"use client";

import React from "react";
import ProfileCard from "./ProfileCard";
import ThemeContainer from "./ThemeContainer";
import CustomContainer from "./CustomContainer";

const AppearanceBox = () => {
  // const { appearance, updateAppearance } = useAppearanceStore();
  // const [activeTab, setActiveTab] = useState("theme");

  return (
    <div className="w-[700px] h-[100vh]  m-auto">
      <div className="flex flex-col gap-16">
        <ProfileCard />
        <ThemeContainer />
        <div>
          <CustomContainer />
        </div>
      </div>
    </div>
  );
};

export default AppearanceBox;
