import React from "react";
import AppearanceContainer from "./AppearanceContainer";

const ThemeContainer = () => {
  return (
    <>
      <div>
        <h3 className="h3-semibold mb-4 pl-2">Themes</h3>
        <div className="bg-white py-8 px-8 rounded-3xl">
          <AppearanceContainer />
        </div>
      </div>
    </>
  );
};

export default ThemeContainer;
