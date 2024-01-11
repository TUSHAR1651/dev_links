import React from "react";

const DATA = [
  {
    title: "views",
    count: 100,
  },
  {
    title: "clicks",
    count: 100,
  },
  {
    title: "subscriber",
    count: 100,
  },
];

const LifetimeAnalytics = () => {
  return (
    <div className="background-white my-6 mx-2 rounded-3xl py-6 px-12">
      <h3 className="font-bold text-center text-xl mb-6">Lifetime Analytics</h3>

      <div className="flex justify-center items-center gap-20">
        {DATA.map((item) => {
          return (
            <div className="flex flex-col gap-2">
              <p>{item.title}</p>
              <p>{item.count}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LifetimeAnalytics;
