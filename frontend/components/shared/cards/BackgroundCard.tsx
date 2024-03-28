"use client";

import { useAuth } from "@/context/authContext";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

const BackgroundCard = (props: any) => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("#000");

  const { properties } = props;

  const clickHander = () => {
    // API
    console.log("clicked");
  };

  const onCloseColorPicker = () => {
    // API

    setColor(color); // local state
    setOpen(false); // local state
  };

  const colorChangeHandler = (color: string) => {
    setColor(color);
  };

  return (
    <>
      <div>
        <div onClick={clickHander} className="flex gap-2 flex-col">
          <div
            className={`w-[140px] h-[200px] rounded-lg`}
            style={{ backgroundColor: color }}
          ></div>
          <p className="paragraph-medium text-gray-700 text-center">
            {properties.title}
          </p>
        </div>

        {
          <button
            onClick={() => setOpen(!open)}
            className={`bg-white rounded-lg flex items-center justify-center text-center paragraph-medium text-gray-500 font-bold`}
          >
            Select Color
          </button>
        }

        {open && (
          <div>
            <HexColorPicker color={color} onChange={colorChangeHandler} />
            <div onClick={onCloseColorPicker}>DONE</div>
          </div>
        )}
      </div>
    </>
  );
};

export default BackgroundCard;
