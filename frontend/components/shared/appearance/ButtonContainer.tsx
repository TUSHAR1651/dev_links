import React from "react";
import ButtonCard from "../cards/ButtonCard";

const BTNS = [
  {
    title: "Fill",
    variants: [
      {
        backgroundColor: "bg-gray-700 rounded-none",
      },
      {
        backgroundColor: "bg-black rounded-lg",
      },
      {
        backgroundColor: "bg-black rounded-3xl",
      },
    ],
  },
  {
    title: "Outline",
    variants: [
      {
        backgroundColor: "bg-white border-2 border-black rounded-none",
      },
      {
        backgroundColor: "bg-white border-2 border-black rounded-lg",
      },
      {
        backgroundColor: "bg-white  border-2 border-black rounded-3xl",
      },
    ],
  },
];

const ButtonContainer = () => {
  return (
    <div>
      <h3 className="h3-semibold mb-4 pl-2">Buttons</h3>
      <div className="bg-white py-8 px-8 rounded-3xl">
        <div className="flex justify-between">
          <div className="flex flex-col gap-12">
            {BTNS.map((btn) => {
              return (
                <div className="">
                  <h3 className="h3-semibold mb-4">{btn.title}</h3>
                  <div className="flex gap-4">
                    {btn.variants.map((variant) => {
                      return <ButtonCard properties={variant} />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonContainer;
