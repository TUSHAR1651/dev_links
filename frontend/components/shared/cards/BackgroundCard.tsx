"use client";
import React, { useState } from "react";

const BackgroundCard = (props: any) => {
  const [bgColor, setBgColor] = useState("");
  const { properties } = props;

  return (
    <>
      <div className="flex gap-2 flex-col">
        <div
          className={`w-[140px] h-[200px] ${properties.backgroundColor} rounded-lg`}
        ></div>
        <p className="paragraph-medium text-gray-700 text-center">
          {properties.title}
        </p>
      </div>
    </>
  );
};

export default BackgroundCard;
