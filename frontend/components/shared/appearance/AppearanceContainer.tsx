import React from "react";
import AppearanceCard from "../cards/AppearanceCard";

const APPEARANCE = [{}, {}, {}];

const AppearanceContainer = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[140px] h-[200px] bg-white border-dashed border-gray-700 border-[1px] rounded-lg flex items-center justify-between text-center paragraph-medium text-gray-500">
        CREATE NEW THEME
      </div>

      {APPEARANCE.map((appearance) => {
        return <AppearanceCard />;
      })}
    </div>
  );
};

export default AppearanceContainer;
