"use client";

import React, { useState } from "react";
import AppearanceCard from "../cards/AppearanceCard";
import { useAppearanceStore } from "@/store/appearance.store";

// const themes = [
//   {
//     name: "New York",
//     // background: "bg-gradient-to-r from-cyan-500 to-blue-500",
//     background: `w-[140px] h-[200px] p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg`,
//     backgroundImage: "",
//     buttons: "bg-white",
//     textColor: "text-white",
//     id: 1,
//   },
//   {
//     name: "New 1",
//     background:
//       "w-[140px] h-[200px] p-4 rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black",
//     backgroundImage: "",
//     buttons: "bg-gray-400",
//     textColor: "text-white",
//     id: 2,
//   },
//   {
//     name: "New 2",
//     background:
//       " w-[140px] h-[200px] p-4 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
//     backgroundImage: "",
//     buttons: "bg-gray-800",
//     textColor: "text-white",
//     id: 3,
//   },
//   {
//     name: "New 4",
//     background:
//       "w-[140px] h-[200px] p-4 rounded-lg bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900",
//     backgroundImage: "",
//     buttons: "bg-white",
//     textColor: "text-white",
//     id: 4,
//   },
//   {
//     name: "New 5",
//     background:
//       "w-[140px] h-[200px] p-4 rounded-lg bg-gradient-to-r from-rose-100 to-teal-100",
//     backgroundImage: "",
//     buttons: "bg-gray-400",
//     textColor: "text-white",
//     id: 5,
//   },
//   {
//     name: "New 6",
//     background:
//       "w-[140px] h-[200px] p-4 rounded-lg bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 ",
//     backgroundImage: "",
//     buttons: "bg-gray-800",
//     textColor: "text-white",
//     id: 6,
//   },
// ];

const AppearanceContainer = () => {
  const { themes } = useAppearanceStore();
  const [selected, setSelected] = useState(themes[0].id);

  const themeSelectHandler = (id: string) => {
    console.log(themes.find((theme: any) => theme.id === id));
  };

  return (
    <div className="flex gap-16 flex-wrap gap-y-12 ">
      <div className="w-[140px] h-[200px] bg-white border-dashed border-gray-700 border-[1px] rounded-lg flex items-center justify-between text-center paragraph-medium text-gray-500">
        CREATE NEW THEME
      </div>

      {themes.map((appearance: any) => {
        return (
          <AppearanceCard
            key={appearance.id}
            setSelected={setSelected}
            selected={selected}
            properties={appearance}
            onSelect={themeSelectHandler}
          />
        );
      })}
    </div>
  );
};

export default AppearanceContainer;
