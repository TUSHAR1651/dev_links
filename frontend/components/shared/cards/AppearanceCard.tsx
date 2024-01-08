"use client";

import { useUserStore } from "@/store/user.store";
import React from "react";

const AppearanceCard = (props: any) => {
  const { updateActiveTheme } = useUserStore();
  const { properties, onSelect, selected, setSelected } = props;

  const active = selected === properties.id;

  // console.log(properties.background);

  return (
    <div
      className={`p-3 rounded-lg ${
        active ? "border-2 border-gray-500" : "border-2 border-white"
      }`}
    >
      <div
        className={`${properties.background}`}
        onClick={() => {
          updateActiveTheme(properties.id);
          onSelect(properties.id);
          setSelected(properties.id);
        }}
      >
        <div className="flex flex-col gap-2 items-center mt-14">
          <div
            className={`w-[100px] h-[20px] rounded-md ${properties.buttons}`}
          ></div>
          <div
            className={`w-[100px] h-[20px] rounded-md ${properties.buttons}`}
          ></div>
          <div
            className={`w-[100px] h-[20px] rounded-md ${properties.buttons}`}
          ></div>
        </div>
      </div>
      <p className="text-gray-500 text-center mt-2">{properties.name}</p>
    </div>
  );
};

export default AppearanceCard;
