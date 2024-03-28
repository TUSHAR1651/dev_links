import React from "react";

const ButtonCard = (props: any) => {
  const { color } = props;

  return (
    <div
      className={`w-[200px] h-[40px]`}
      style={{
        backgroundColor: color,
      }}
    ></div>
  );
};

export default ButtonCard;
