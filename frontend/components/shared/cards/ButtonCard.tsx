import React from "react";

const ButtonCard = (props: any) => {
  const { properties } = props;
  return (
    <div className={`w-[200px] h-[40px] ${properties.backgroundColor}`}></div>
  );
};

export default ButtonCard;
