"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const LinkBar = ({ user }: any) => {
  console.log(user);
  return (
    <div className="bg-indigo-100 py-6 px-8 rounded-3xl mb-12 flex justify-between items-center">
      <div className="flex gap-4 items-center justify-center">
        Link bar will show here
        <p>
          {/* {user.usernameThere
            ? "Your Profile is active at the URL:"
            : "To activate your profile"} */}
        </p>
        <span className="paragraph-semibold hover:underline hover:cursor-pointer">
          {/* {user.usernameThere ? (
            <Link href={`/${user?.username}`}>devlinks/{user?.username}</Link>
          ) : (
            <Link href={`/admin/appearance`}>Update Username</Link>
          )} */}
        </span>
      </div>
      {/* 
      {user.usernameThere && (
        <div className="flex gap-3 items-center justify-center">
          <p className="small-regular">Share your profile with your friends</p>
          <Button
            onClick={() => {
              setCopied(true);
              navigator.clipboard.writeText(user.username);
            }}
            className="bg-white rounded-full text-indigo-800 base-semibold"
          >
            Copy Link
          </Button>
        </div>
      )} */}
    </div>
  );
};

export default LinkBar;
