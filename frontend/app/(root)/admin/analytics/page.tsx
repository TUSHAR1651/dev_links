"use client";
import LifetimeAnalytics from "@/components/graphs/LifetimeAnalytics";
import Referrers from "@/components/graphs/Referrers";
import SocialLinks from "@/components/graphs/SocialLinks";
import TopLinks from "@/components/graphs/TopLinks";
import MyComponent from "@/components/graphs/chart";
import React from "react";

const Page = () => {
  return (
    <div>
      <LifetimeAnalytics />

      <div className="w-[600px] m-auto flex flex-col gap-20 mb-16">
        <TopLinks />
        <Referrers />
        <SocialLinks />
      </div>
    </div>
  );
};

export default Page;
