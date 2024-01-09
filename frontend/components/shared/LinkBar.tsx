"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useAuth } from "@/context/authContext";

const LinkBar = () => {
  const [copied, setCopied] = React.useState(false);
  const { user } = useAuth();

  return (
    <div className="bg-indigo-100 py-6 px-8 rounded-3xl mb-12 flex justify-between items-center">
      <div className="flex gap-4 items-center justify-center">
        <p>Your Profile is active at the URL:</p>
        <span className="paragraph-semibold hover:underline hover:cursor-pointer">
          <Link href={`/${user?.username}`}>devlinks/{user?.username}</Link>
        </span>
      </div>

      <div className="flex gap-3 items-center justify-center">
        <p className="small-regular">Share your profile with your friends</p>
        <Button
          onClick={() => {
            setCopied(true);
            navigator.clipboard.writeText("https://example.com");
          }}
          className="bg-white rounded-full text-indigo-800 base-semibold"
        >
          Copy Link
          {/* {copied ? "Copied Link" : "Copy Link"} */}
        </Button>
      </div>
    </div>
  );
};

export default LinkBar;
