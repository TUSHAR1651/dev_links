import React from "react";
import MyComponent from "./chart";

const Referrers = () => {
  return (
    <div className="bg-white p-4">
      <h1 className="text-lg font-medium text-black">Top Referrers</h1>
      <MyComponent />
    </div>
  );
};

export default Referrers;
