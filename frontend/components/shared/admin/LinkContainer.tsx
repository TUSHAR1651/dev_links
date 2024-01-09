"use client";

import React from "react";
import Link from "./Link";
import PrimaryButton from "./PrimaryButton";
import { useUser } from "@/context/userContext";

const LinkContainer = () => {
  const { addLink, userLinks } = useUser();

  const addLinkHandler = async () => {
    addLink();
  };

  return (
    <div className="">
      <div className="mb-4">
        <PrimaryButton clickHandler={addLinkHandler} />
      </div>

      <div className="flex flex-col gap-6">
        {userLinks?.map((link: any) => {
          return (
            <Link
              key={link._id}
              id={link._id}
              title={link.title}
              url={link.url}
              active={link.active}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LinkContainer;
