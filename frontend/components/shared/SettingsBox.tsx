import React from "react";
import LinkBar from "./LinkBar";
import PrimaryButton from "./admin/PrimaryButton";
import LinkContainer from "./admin/LinkContainer";

const SettingsBox = () => {
  return (
    <div className="w-[800px] m-auto ">
      <LinkBar />
      <PrimaryButton />
      <LinkContainer />
    </div>
  );
};

export default SettingsBox;
