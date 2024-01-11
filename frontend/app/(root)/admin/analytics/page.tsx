"use client";
import LifetimeAnalytics from "@/components/graphs/LifetimeAnalytics";
import TopLinks from "@/components/graphs/TopLinks";
import MyComponent from "@/components/graphs/chart";
import React from "react";

const Page = () => {
  return (
    <div>
      <LifetimeAnalytics />

      <div className="w-[600px] h-[600px] m-auto ">
        <TopLinks />
        {/* <MyComponent /> */}
      </div>
    </div>
  );
};

export default Page;
