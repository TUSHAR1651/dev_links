import React from "react";
import SettingSidebar from "./SettingSidebar";
import SocialIcons from "./SocialIcons";

const SettingContainer = () => {
  return (
    <div className="grid grid-cols-4">
      <SettingSidebar />
      <div className="col-span-3">
        <SocialIcons />
      </div>
    </div>
  );
};

export default SettingContainer;
