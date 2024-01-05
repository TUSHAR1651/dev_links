"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Edit3 } from "lucide-react";

const LinkInput = (props: any) => {
  const [inputDisabled, setInputDisabled] = useState(false);

  const { value, type } = props;

  const inputClickHandler = () => {
    setInputDisabled(true);
  };

  return (
    <>
      <div className="flex gap-2" onClick={inputClickHandler}>
        <Input
          onBlur={() => {
            console.log("Input blurred");
            setInputDisabled(true);
          }}
          placeholder=""
          value={value}
          className={`${
            type == "title" ? "base-semibold" : null
          } disabled:cursor-pointer active:border-none border-none w-1/2 `}
          disabled={!inputDisabled}
        />
        <Edit3
          className={`${inputDisabled ? "text-gray-500" : " text-gray-700"}`}
        />
      </div>
    </>
  );
};

export default LinkInput;
