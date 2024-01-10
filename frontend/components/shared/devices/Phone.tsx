"use client";

import React from "react";

import { useAuth } from "@/context/authContext";

const Phone = () => {
  const { userLinks, userTheme, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  // console.log(userTheme);

  return (
    <div
      className={`${userTheme?.background} py-4 px-8 h-[500px] w-[375px] rounded-lg`}
    >
      <div className="flex flex-col gap-6 justify-center items-center">
        {userLinks
          .filter((link: any) => link.active)
          .map((link: any) => {
            return (
              <div
                className={`${userTheme?.buttons} w-[200px] text-center py-4 rounded-full cursor-pointer`}
                key={link.id}
              >
                {link.title}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Phone;
