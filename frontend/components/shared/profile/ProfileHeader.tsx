import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ProfileHeader = ({
  username,
  socialLinks,
  image,
}: {
  image: string;
  username: string;
  socialLinks: any;
}) => {
  console.log(socialLinks);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-12">
        <Button className="bg-white">Share</Button>
        <Button className="bg-white">Subscribe</Button>
      </div>

      <div className="flex justify-center mb-4">
        <Image
          alt="Profile header image"
          src={image}
          width={96}
          height={96}
          className="rounded-full"
        />
      </div>

      <div className="flex justify-center mb-8 text-white">
        <h2 className="text-lg font-semibold">@{username}</h2>
      </div>

      {/* Social link */}

      <div className="flex text-white justify-center mb-8"></div>
    </div>
  );
};

export default ProfileHeader;
