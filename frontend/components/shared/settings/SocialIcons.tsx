"use client";

import React from "react";
import SocialLinkModal from "./SocialLinkForm";
import { useAuth } from "@/context/authContext";
import Image from "next/image";

const SocialIcons = () => {
  const { user } = useAuth();

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
      <h2 className="base-semibold mb-4">Social Icons</h2>

      <div className="bg-white rounded-lg p-4">
        <div className="flex justify-between">
          <p className="text-slate-500 ">
            Add social links and track activity on them too.
          </p>
          <SocialLinkModal />
        </div>

        <div>
          <h3 className="mb-6 mt-8 font-medium">Your Active Links</h3>

          <div className="flex flex-col gap-8">
            {user?.socialLinks
              ?.filter((link: any) => link.url != "")
              .map((link: any) => {
                return (
                  <div key={link.title} className=" flex justify-between p-2">
                    <div className="flex gap-2">
                      <Image
                        width={24}
                        height={24}
                        alt=""
                        src={`/svg/${link.title}.svg`}
                      />
                      <div className="">
                        {capitalizeFirstLetter(link.title)}
                      </div>
                    </div>
                    <div className="text-slate-400">{link.url}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
