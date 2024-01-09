"use client";

import React from "react";
import { useUser } from "@/context/userContext";

const AppearanceCard = (props: any) => {
  const { properties } = props;
  const { userTheme, loading, updateTheme } = useUser();

  const onSelectHandler = (id: string) => {
    updateTheme(id);
  };

  const active = userTheme._id === properties._id;

  if (loading) return <div>Loading...</div>;

  return (
    <div
      className={`p-3 rounded-lg ${
        active ? "border-2 border-gray-500" : "border-2 border-white"
      }`}
    >
      <div
        className={` w-[140px] h-[200px] p-4 bg ${properties.background}`}
        onClick={() => {
          onSelectHandler(properties._id);
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
