import React, { useState } from "react";
import ButtonCard from "../cards/ButtonCard";
import { HexColorPicker } from "react-colorful";

const BTNS = [
  {
    title: "Fill",
    variants: [
      {
        backgroundColor: "bg-gray-700 rounded-none",
      },
      // {
      //   backgroundColor: "bg-black rounded-lg",
      // },
      // {
      //   backgroundColor: "bg-black rounded-3xl",
      // },
    ],
  },
  // {
  //   title: "Outline",
  //   variants: [
  //     {
  //       backgroundColor: "bg-white border-2 border-black rounded-none",
  //     },
  //     {
  //       backgroundColor: "bg-white border-2 border-black rounded-lg",
  //     },
  //     {
  //       backgroundColor: "bg-white  border-2 border-black rounded-3xl",
  //     },
  //   ],
  // },
];

const ButtonContainer = () => {
  // Here we will maintain a color class outside since there are multiple variants it can effect
  const [color, setColor] = useState("#000");
  const [open, setOpen] = useState(false);

  const colorChangeHandler = (color: string) => {
    setColor(color);
  };

  const clickHander = () => {
    console.log("clicked");
    // with the default bg settings but with select button settings and defualt buttonColor
  };

  const onCloseColorPicker = () => {
    setColor(color);
    setOpen(false);
    console.log("I changed the color to", color);
  };

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
                      return (
                        <div onClick={clickHander}>
                          <ButtonCard properties={variant} color={color} />
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-6">
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
                        <HexColorPicker
                          color={color}
                          onChange={colorChangeHandler}
                        />
                        <div onClick={onCloseColorPicker}>DONE</div>
                      </div>
                    )}
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
