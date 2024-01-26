import React, { useState } from "react";
import BackgroundCard from "../cards/BackgroundCard";
import { HexColorPicker } from "react-colorful";

const BG = [
  {
    title: "Flat Colour",
    backgroundColor: "bg-gray-700",
  },
];

const BackgroundContainer = () => {
  const [color, setColor] = useState("#000");
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h3 className="h3-semibold mb-4 pl-2">Backgrounds</h3>
      <div className="bg-white py-8 px-8 rounded-3xl">
        <div className="flex justify-between">
          {BG.map((bg) => {
            return <BackgroundCard properties={bg} />;
          })}
          <div className="w-[140px] h-[200px] bg-white border-dashed border-gray-700 border-[1px] rounded-lg flex items-center justify-center text-center paragraph-medium text-gray-500">
            UPLOAD IMAGE
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col mt-6">
          {/* <div>Select Color Toggle</div> */}

          {
            <button
              onClick={() => setOpen(!open)}
              className={`w-[60px] h-[60px] bg-[${color}]  border-2 border-gray-700  rounded-lg flex items-center justify-center text-center paragraph-medium text-gray-500`}
            >
              {/* SELECT COLOR */}
            </button>
          }
          {open && <HexColorPicker color={color} onChange={setColor} />}
        </div>
      </div>
    </div>
  );
};

export default BackgroundContainer;
